import axios from 'axios';
const VERCEL_URL =
  process.env.VERCEL_URL ||
  process.env.NEXT_PUBLIC_VERCEL_URL ||
  'star-wars-planets-wiki.vercel.app';
const NODE_ENV = process.env.NODE_ENV;

const isServer = typeof window === 'undefined';

let baseURL = '/api/swapi/';

if (isServer) {
  let domain = '';

  if (NODE_ENV === 'development') {
    domain = 'http://localhost:3000';
  } else if (VERCEL_URL) {
    domain = `https://${VERCEL_URL}`;
  }

  if (domain) {
    baseURL = `${domain}/api/swapi/`;
  }
}

const http = axios.create({
  baseURL,
});

// =================================================================
// 🚀 INTERCEPTOR DE REQUISIÇÃO PARA DEBUG
// =================================================================

http.interceptors.request.use(
  (config) => {
    const finalUrl = config.url;

    console.log('AXIOS REQUEST DEBUG:', {
      'Base URL Configurada': config.baseURL,
      'URL Final Requisitada': finalUrl,
      Method: config.method?.toUpperCase(),
      'Headers de Autenticação': config.headers.Authorization || 'Nenhum',
    });

    return config;
  },
  (error) => {
    console.error('AXIOS INTERCEPTOR ERROR (Pré-Envio):', error);
    return Promise.reject(error);
  },
);

export { http };
