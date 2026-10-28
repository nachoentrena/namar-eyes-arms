import React from 'react'
import { Body, Container, Head, Heading, Html, Img, Link, Preview, Section, Text, Row, Column } from '@react-email/components'
import type { TemplateEntry } from './registry'

interface Props {
  tipo?: 'diagnostico' | 'contacto'
  nombre?: string
  producto?: string
  grupos?: { titulo: string; filas: { campo: string; valor: string }[] }[]
  archivos?: { nombre: string; url: string }[]
  fecha?: string
  pagina?: string
}

const AvisoInterno = ({ tipo = 'contacto', nombre = '', grupos = [], archivos = [], fecha, pagina }: Props) => (
  <Html lang="es" dir="ltr">
    <Head>
      <meta name="color-scheme" content="light" />
      <meta name="supported-color-schemes" content="light" />
    </Head>
    <Preview>{tipo === 'diagnostico' ? 'Nuevo diagnóstico' : 'Nuevo contacto'} de {nombre}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Section style={header} {...({ bgcolor: '#F5F2EA' } as any)}>
          <Img src="https://www.namar-global.com/brand/logotipo-azul.png" alt="NAMAR Global" width="180" style={{ margin: '0 auto', display: 'block' }} />
        </Section>
        <Section style={card}>
          <Heading style={h1}>{tipo === 'diagnostico' ? 'Nuevo diagnóstico web' : 'Nuevo contacto web'}</Heading>
          <Text style={meta}>
            {fecha ? `Enviado: ${fecha}` : ''}
            {pagina ? ` · Página: ${pagina}` : ''}
          </Text>
          {grupos.map((g, gi) => (
            <Section key={gi} style={{ marginTop: '18px' }}>
              <Text style={h2}>{g.titulo}</Text>
              <Section style={table}>
                {g.filas.map((f, i) => {
                  const urgente = f.campo === 'Alerta' && f.valor === 'URGENTE'
                  return (
                    <Row key={i} style={i % 2 ? rowAlt : row}>
                      <Column style={campo}>{f.campo}</Column>
                      <Column style={urgente ? valorUrgente : valor}>{f.valor}</Column>
                    </Row>
                  )
                })}
              </Section>
            </Section>
          ))}
          {archivos.length > 0 && (
            <Section style={{ marginTop: '18px' }}>
              <Text style={h2}>Archivos adjuntos</Text>
              {archivos.map((a, i) => (
                <Text key={i} style={fileRow}>
                  {a.nombre} · <Link href={a.url} style={link}>Descargar</Link>
                </Text>
              ))}
              <Text style={meta}>Los enlaces de descarga caducan en 30 días.</Text>
            </Section>
          )}
          <Text style={meta}>Pulsa «Responder» para escribir directamente al cliente.</Text>
        </Section>
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
    tipo: 'diagnostico',
    nombre: 'Laura Pérez',
    producto: 'Mochilas',
    grupos: [
      { titulo: 'Datos de contacto', filas: [{ campo: 'Nombre', valor: 'Laura Pérez' }, { campo: 'Email', valor: 'laura@example.com' }] },
      { titulo: 'Resultado del diagnóstico', filas: [{ campo: 'Puntuación', valor: '72' }, { campo: 'Alerta', valor: 'URGENTE' }] },
    ],
    archivos: [{ nombre: 'foto-producto.jpg', url: 'https://www.namar-global.com/' }],
    fecha: '28/10/2026, 17:26 (hora de China)',
    pagina: 'https://www.namar-global.com/diagnostico',
  },
} satisfies TemplateEntry

const main = { backgroundColor: '#ffffff', fontFamily: 'Arial, sans-serif' }
const container = { padding: '24px', maxWidth: '640px' }
const header = { backgroundColor: '#F5F2EA', borderRadius: '16px', padding: '22px 16px', textAlign: 'center' as const, marginBottom: '16px' }
const card = { backgroundColor: '#FFFFFF', color: '#0B1D2A', padding: '4px 0' }
const h1 = { color: '#0B1D2A', fontSize: '22px', margin: '0 0 8px' }
const h2 = { color: '#0B1D2A', fontSize: '15px', fontWeight: 700, margin: '0 0 8px', borderBottom: '2px solid #C3A15B', paddingBottom: '4px' }
const meta = { color: '#607786', fontSize: '13px' }
const table = { border: '1px solid #e5e0d3', borderRadius: '8px' }
const row = { backgroundColor: '#ffffff' }
const rowAlt = { backgroundColor: '#F5F2EA' }
const campo = { width: '38%', padding: '8px 12px', fontSize: '13px', fontWeight: 700, color: '#0B1D2A', verticalAlign: 'top' as const }
const valor = { padding: '8px 12px', fontSize: '13px', color: '#0B1D2A', whiteSpace: 'pre-wrap' as const }
const valorUrgente = { ...valor, color: '#9A5242', fontWeight: 700 }
const fileRow = { color: '#0B1D2A', fontSize: '13px', margin: '0 0 6px' }
const link = { color: '#0B1D2A', textDecoration: 'underline', textDecorationColor: '#C3A15B' }
