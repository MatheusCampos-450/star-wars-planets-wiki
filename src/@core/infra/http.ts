import axios from 'axios';

const VERCEL_URL = process.env.VERCEL_URL;
const NODE_ENV = process.env.NODE_ENV;

const isServer = typeof window === 'undefined';

let baseURL: string;

if (isServer) {
  if (NODE_ENV === 'development') {
    baseURL = 'http://localhost:3000/api/swapi';
  } else if (VERCEL_URL) {
    baseURL = `https://${VERCEL_URL}/api/swapi`;
  } else {
    baseURL = '/api/swapi';
  }
} else {
  baseURL = '/api/swapi';
}

export const http = axios.create({
  baseURL,
});
