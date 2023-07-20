import { BASE_API_PATH } from '@/shared/settings/index';
import axios from 'axios';

const client = axios.create({
  baseURL: BASE_API_PATH,
});

export { client };
