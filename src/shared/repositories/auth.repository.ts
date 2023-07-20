import { client } from './client';

type LoginDTO = {
  email: string;
  password: string;
};

const login = async ({ email, password }: LoginDTO) => {
  return client.post('/sign-in', { email, password });
};

export { login };
