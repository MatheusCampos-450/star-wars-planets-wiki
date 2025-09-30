import axios from 'axios';

const isServer = typeof window === 'undefined';

let baseURL = '/api/swapi/';

if (isServer) {
  baseURL = 'https://swapi.dev/api/';
} else {
  baseURL = '/api/swapi/';
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
