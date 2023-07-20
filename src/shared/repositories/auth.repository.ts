import { UserModel } from '../models/user.model';
import { executeGet } from './client';

type LoginDTO = {
  email: string;
  password: string;
};

const login = async ({ email, password }: LoginDTO) => {
  return executeGet<UserModel>('/sessions', { email, password });
};

export { login };
