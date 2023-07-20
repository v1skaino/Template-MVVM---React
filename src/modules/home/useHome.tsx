import { useGlobal } from '@/shared/context/global';
import { FormEvent, useState } from 'react';
import { UseHomeTypes } from './types';

const useHome = (): UseHomeTypes => {
  const [email, setEmail] = useState('');
  const { handlers } = useGlobal();

  const submit = (ev: FormEvent) => {
    ev.preventDefault();
    handlers?.setToken('newToken');
  };

  return {
    state: { email },
    handlers: { setEmail, submit },
  };
};

export { useHome };
