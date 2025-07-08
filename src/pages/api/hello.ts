import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  return new Response(
    JSON.stringify({
      message: '¡Hola desde el SSR API de Node.js! 🚀',
      node: process.version,
      pid: process.pid,
      time: new Date().toISOString(),
    }),
    {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    }
  );
};
