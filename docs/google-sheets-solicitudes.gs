/**
 * NAMAR Global · Registro de solicitudes web en Google Sheets
 *
 * Instalación (una sola vez):
 * 1. Crea una hoja de Google llamada «Solicitudes web NAMAR».
 * 2. Menú Extensiones → Apps Script. Borra lo que haya y pega este código.
 * 3. Cambia SECRETO por una frase larga inventada (la misma irá en Cloudflare como SHEETS_WEBHOOK_SECRET).
 * 4. Implementar → Nueva implementación → Tipo «Aplicación web».
 *    Ejecutar como: Yo · Quién tiene acceso: Cualquier usuario.
 * 5. Copia la URL que termina en /exec: va en Cloudflare como SHEETS_WEBHOOK_URL.
 */
const SECRETO = 'CAMBIA-ESTA-FRASE';

const COLUMNAS = [
  'fecha', 'tipo', 'codigo', 'nombre', 'email', 'whatsapp', 'pais', 'ciudad', 'empresa',
  'producto', 'categoria', 'cantidad', 'etapa', 'presupuesto', 'cuando', 'puntuacion',
  'clasificacion', 'alerta', 'paquete', 'archivos', 'mensaje', 'pagina', 'estado', 'notas',
];

function doPost(e) {
  const datos = JSON.parse(e.postData.contents || '{}');
  if (datos.secreto !== SECRETO) {
    return ContentService.createTextOutput('no autorizado');
  }
  const hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (hoja.getLastRow() === 0) hoja.appendRow(COLUMNAS);
  const fila = datos.fila || {};
  fila.estado = fila.estado || 'Nuevo';
  hoja.appendRow(COLUMNAS.map((c) => (fila[c] === undefined ? '' : fila[c])));
  return ContentService.createTextOutput('ok');
}
