import * as React from 'react'
import { render } from '@react-email/render'
import { TEMPLATES } from './registry'

// Server-only: reads RESEND_API_KEY. Never import from client components.
// Sends the registered React Email templates through Resend (https://resend.com).

const SITE_NAME = "NAMAR Global"
// Dominio verificado en Resend (registros DNS en Cloudflare).
const FROM_DOMAIN = "namar-global.com"
const RESEND_URL = "https://api.resend.com/emails"

export type SendTemplateEmailResult =
  | { sent: true }
  | { sent: false; reason: 'recipient_suppressed' }

export interface EmailAttachment {
  filename: string
  /** Contenido del archivo en base64 (sin el prefijo data:). */
  content: string
}

export interface SendTemplateEmailOptions {
  templateData?: Record<string, any>
  /** Evita envíos duplicados si se reintenta la misma petición. */
  idempotencyKey?: string
  replyTo?: string
  fromName?: string
  fromLocalPart?: string
  attachments?: EmailAttachment[] | undefined
}

export async function sendTemplateEmail(
  templateName: string,
  to: string,
  options: SendTemplateEmailOptions = {}
): Promise<SendTemplateEmailResult> {
  const apiKey = process.env['RESEND_API_KEY']
  if (!apiKey) {
    throw new Error('RESEND_API_KEY is not configured')
  }

  const template = TEMPLATES[templateName]
  if (!template) {
    throw new Error(
      `Template '${templateName}' not found. Available: ${Object.keys(TEMPLATES).join(', ')}`
    )
  }

  // La plantilla con destinatario fijo (aviso interno) tiene prioridad.
  const recipient = template.to || to
  if (!recipient) {
    throw new Error('Recipient is required (the template defines no fixed recipient)')
  }

  const templateData = options.templateData ?? {}
  const element = React.createElement(template.component, templateData)
  const html = await render(element)
  const text = await render(element, { plainText: true })
  const subject =
    typeof template.subject === 'function'
      ? template.subject(templateData)
      : template.subject

  const headers: Record<string, string> = {
    Authorization: `Bearer ${apiKey}`,
    'Content-Type': 'application/json',
  }
  if (options.idempotencyKey) headers['Idempotency-Key'] = options.idempotencyKey

  const response = await fetch(RESEND_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      from: `${options.fromName || SITE_NAME} <${options.fromLocalPart || 'web'}@${FROM_DOMAIN}>`,
      to: [recipient],
      subject,
      html,
      text,
      ...(options.replyTo ? { reply_to: options.replyTo } : {}),
      ...(options.attachments && options.attachments.length > 0
        ? { attachments: options.attachments }
        : {}),
    }),
  })

  if (!response.ok) {
    const detail = await response.text().catch(() => '')
    throw new Error(`Resend ${response.status}: ${detail.slice(0, 300)}`)
  }
  return { sent: true }
}
