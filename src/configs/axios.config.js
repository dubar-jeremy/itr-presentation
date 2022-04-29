import * as axios from 'axios';

export const API = axios.create({
  baseURL: 'https://api.instantwebtools.net/v1/',
  accept: 'application/json',
});

export const NEST_API = axios.create({
  baseURL: 'http://localhost:3002/',
  accept: 'application/json',
});
