import React from 'react'
import { Body, Container, Head, Heading, Html, Preview, Section, Text, Row, Column } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  tipo?: 'diagnostico' | 'contacto'
  nombre?: string
  producto?: string
  filas?: { campo: string; valor: string }[]
  fecha?: string
  pagina?: string
}

const AvisoInterno = ({ tipo = 'contacto', nombre = '', filas = [], fecha, pagina }: Props) => (
  <Html lang="es" dir="ltr">
    <Head />
    <Preview>{tipo === 'diagnostico' ? 'Nuevo diagnóstico' : 'Nuevo contacto'} de {nombre}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>{tipo === 'diagnostico' ? 'Nuevo diagnóstico web' : 'Nuevo contacto web'}</Heading>
        <Text style={meta}>
          {fecha ? `Enviado: ${fecha}` : ''}
          {pagina ? ` · Página: ${pagina}` : ''}
        </Text>
        <Section style={table}>
          {filas.map((f, i) => (
            <Row key={i} style={i % 2 ? rowAlt : row}>
              <Column style={campo}>{f.campo}</Column>
              <Column style={valor}>{f.valor}</Column>
            </Row>
          ))}
        </Section>
        <Text style={meta}>Pulsa «Responder» para escribir directamente al cliente.</Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: AvisoInterno,
  subject: (d: Record<string, any>) =>
    d['tipo'] === 'diagnostico'
      ? `Nuevo diagnóstico web: ${d['nombre'] ?? ''} – ${d['producto'] ?? ''}`
      : `Nuevo contacto web: ${d['nombre'] ?? ''}`,
  displayName: 'Aviso interno de formulario',
  to: 'info@namar-global.com',
  previewData: {
    tipo: 'contacto',
    nombre: 'Laura Pérez',
    filas: [
      { campo: 'Nombre', valor: 'Laura Pérez' },
      { campo: 'Email', valor: 'laura@example.com' },
      { campo: 'Mensaje', valor: 'Quiero importar mochilas.' },
    ],
    fecha: '27/10/2026, 12:30',
    pagina: 'https://www.namar-global.com/',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '640px' }
const h1 = { color: '#0B1D2A', fontSize: '22px', margin: '0 0 8px' }
const meta = { color: '#607786', fontSize: '13px' }
const table = { border: '1px solid #e5e0d3', borderRadius: '8px' }
const row = { backgroundColor: '#ffffff' }
const rowAlt = { backgroundColor: '#F5F2EA' }
const campo = { width: '35%', padding: '8px 12px', fontSize: '13px', fontWeight: 700, color: '#0B1D2A', verticalAlign: 'top' as const }
const valor = { padding: '8px 12px', fontSize: '13px', color: '#0B1D2A', whiteSpace: 'pre-wrap' as const }
