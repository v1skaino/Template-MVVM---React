import { Dispatch, FormEvent, SetStateAction } from 'react';

type UseHomeTypes = {
  state: {
    email: string;
  };
  handlers: {
    setEmail: Dispatch<SetStateAction<string>>;
    submit: (ev: FormEvent) => void;
  };
};

export type { UseHomeTypes };
