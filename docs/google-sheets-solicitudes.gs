/**
 * NAMAR Global · Registro de solicitudes web en Google Sheets
 * (copia del script publicado en la hoja «Solicitudes web NAMAR»).
 *
 * Publicado como «Aplicación web» (Ejecutar como: yo · Acceso: cualquier usuario).
 * Su URL /exec va en Cloudflare como SHEETS_WEBHOOK_URL. Solo añade filas; no devuelve datos.
 */
const COLUMNAS = ['fecha', 'tipo', 'codigo', 'nombre', 'email', 'whatsapp', 'pais', 'ciudad', 'empresa', 'producto', 'categoria', 'cantidad', 'etapa', 'presupuesto',
  'cuando', 'puntuacion', 'clasificacion', 'alerta', 'paquete', 'archivos', 'mensaje', 'pagina', 'estado', 'notas'];

function doPost(e) {
  const datos = JSON.parse(e.postData.contents || '{}');
  const hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (hoja.getLastRow() === 0) hoja.appendRow(COLUMNAS);
  const fila = datos.fila || {};
  fila.estado = fila.estado || 'Nuevo';
  hoja.appendRow(COLUMNAS.map(function (c) { return fila[c] === undefined ? '' : fila[c]; }));
  return ContentService.createTextOutput('ok');
}

function prepararCabecera() {
  const hoja = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (hoja.getLastRow() === 0) hoja.appendRow(COLUMNAS);
  hoja.setFrozenRows(1);
}
