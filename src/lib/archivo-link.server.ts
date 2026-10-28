// Signed download links served from our own domain (Storage domain may be blocked in China).
const enc = new TextEncoder();

async function hmac(data: string): Promise<string> {
  const secret = process.env['SUPABASE_SERVICE_ROLE_KEY'] ?? "";
  const key = await crypto.subtle.importKey("raw", enc.encode(secret), { name: "HMAC", hash: "SHA-256" }, false, ["sign"]);
  const sig = await crypto.subtle.sign("HMAC", key, enc.encode(data));
  return btoa(String.fromCharCode(...new Uint8Array(sig))).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export async function crearEnlaceArchivo(path: string, dias = 30): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + dias * 86400;
  const sig = await hmac(`${path}|${exp}`);
  const q = new URLSearchParams({ p: path, e: String(exp), s: sig });
  return `https://www.namar-global.com/api/public/archivo?${q}`;
}

export async function verificarEnlace(path: string, exp: string, sig: string): Promise<boolean> {
  if (!path || !/^\d+$/.test(exp) || Number(exp) < Date.now() / 1000) return false;
  return (await hmac(`${path}|${exp}`)) === sig;
}

// Token que solo recibe quien acaba de enviar el diagnóstico (válido 2 h).
export async function crearTokenAdjuntos(codigo: string): Promise<string> {
  const exp = Math.floor(Date.now() / 1000) + 2 * 3600;
  return `${exp}.${await hmac(`adjuntos|${codigo}|${exp}`)}`;
}

export async function verificarTokenAdjuntos(codigo: string, token: string): Promise<boolean> {
  const [exp, sig] = token.split(".");
  if (!exp || !sig || !/^\d+$/.test(exp) || Number(exp) < Date.now() / 1000) return false;
  return (await hmac(`adjuntos|${codigo}|${exp}`)) === sig;
}
