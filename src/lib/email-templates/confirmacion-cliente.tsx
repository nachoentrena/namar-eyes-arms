import React from 'react'
import { Body, Container, Head, Hr, Html, Img, Link, Preview, Section, Text } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  nombre?: string
}

const cap = (n?: string) => (n && n.trim() ? n.trim().charAt(0).toLocaleUpperCase('es-ES') + n.trim().slice(1) : '')

const ConfirmacionCliente = ({ nombre }: Props) => (
  <Html lang="es" dir="ltr">
    <Head>
      <meta name="color-scheme" content="light" />
      <meta name="supported-color-schemes" content="light" />
    </Head>
    <Preview>Hemos recibido tu solicitud – NAMAR Global</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header} {...({ bgcolor: '#F5F2EA' } as any)}>
          <Img src="https://www.namar-global.com/brand/logotipo-azul.png" alt="NAMAR Global" width="180" style={{ margin: '0 auto', display: 'block' }} />
        </Section>
        <Section style={card}>
          <Text style={text}>Hola{cap(nombre) ? `, ${cap(nombre)}` : ''}:</Text>
          <Text style={text}>Hemos recibido tu solicitud. La revisaremos y te responderemos personalmente lo antes posible.</Text>
          <Text style={text}>Si quieres añadir fotos, fichas técnicas o enlaces del producto, responde a este email.</Text>
          <Text style={text}>
            Un saludo,
            <br />
            <strong>Nacho y Ana María – NAMAR Global</strong>
            <br />
            <Link href="https://www.namar-global.com" style={link}>www.namar-global.com</Link>
          </Text>
        </Section>
        <Hr style={hr} />
        <Text style={footer}>
          <Link href="https://www.namar-global.com/politica-privacidad" style={footerLink}>Política de privacidad</Link>
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ConfirmacionCliente,
  subject: 'Hemos recibido tu solicitud – NAMAR Global',
  displayName: 'Confirmación al cliente',
  previewData: { nombre: 'Laura' },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '560px' }
const header = { backgroundColor: '#F5F2EA', borderRadius: '16px', padding: '22px 16px', textAlign: 'center' as const, marginBottom: '16px' }
const card = { backgroundColor: '#FFFFFF', color: '#0B1D2A', borderRadius: '16px', padding: '24px 28px', border: '1px solid #e5e0d3', borderTop: '3px solid #C3A15B' }
const text = { color: '#0B1D2A', fontSize: '15px', lineHeight: '24px', margin: '0 0 14px' }
const link = { color: '#0B1D2A', textDecoration: 'underline', textDecorationColor: '#C3A15B' }
const hr = { borderColor: '#e5e0d3', margin: '24px 0 12px' }
const footer = { textAlign: 'center' as const, fontSize: '12px', color: '#607786' }
const footerLink = { color: '#607786', textDecoration: 'underline' }
