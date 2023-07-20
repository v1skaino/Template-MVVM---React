import { Dispatch, SetStateAction } from 'react';

type GlobalStateType = {
  state: {
    token: string;
  };
  handlers: {
    setToken: Dispatch<SetStateAction<string>>;
  };
};

type GlobalProviderType = {
  children: JSX.Element | JSX.Element[];
};

export type { GlobalProviderType, GlobalStateType };
