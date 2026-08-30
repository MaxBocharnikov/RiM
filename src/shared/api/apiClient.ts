import axios from 'axios';
import type { AxiosInstance } from 'axios';

import { API_BASE_URL } from './config';

export const apiClient: AxiosInstance = axios.create({
  baseURL: API_BASE_URL
});
