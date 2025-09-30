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

export { http };
