import { Dispatch, FormEvent, SetStateAction } from 'react';

type LoginModel = {
  state: {
    email: string;
    password: string;
    loading: boolean;
  };
  handlers: {
    setPassword: Dispatch<SetStateAction<string>>;
    setEmail: Dispatch<SetStateAction<string>>;
    submit: (ev: FormEvent) => Promise<void>;
  };
};

export type { LoginModel };
