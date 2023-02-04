import axios from 'axios';
import qs from 'query-string';
import { REACT_APP_API_URL } from '@env';

export const baseApi = axios.create({
  baseURL: REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
  // paramsSerializer: (params) => qs.stringify(params)
});