import { login } from '@/shared/repositories/auth.repository';
import { FormEvent, useState } from 'react';
import { UseLoginTypes } from './types';

const useLogin = (): UseLoginTypes => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (ev: FormEvent) => {
    try {
      ev.preventDefault();
      setLoading(true);
      const { data } = await login({ email, password });
      console.log(data);
    } catch (error) {
      console.log(error);
      alert('Something went wrong!');
    } finally {
      setLoading(false);
    }
  };

  return {
    state: { email, password, loading },
    handlers: { setEmail, setPassword, submit },
  };
};

export { useLogin };
