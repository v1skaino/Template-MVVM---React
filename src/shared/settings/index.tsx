import { Environment } from './types';

const BASE_API_PATH = import.meta.env.VITE_BASE_API_URL;
const environment: Environment = 'dev';

export { BASE_API_PATH, environment };
