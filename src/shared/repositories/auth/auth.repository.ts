import { client } from '../client';
import { LoginDTO } from './auth.dto';

const login = async ({ email, password }: LoginDTO) => {
  return client.post('/sign-in', { email, password });
};

export { login };
