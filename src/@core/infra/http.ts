import axios from "axios";

export const http = axios.create({
  baseURL: "https://swapi.py4e.com/api/"
})