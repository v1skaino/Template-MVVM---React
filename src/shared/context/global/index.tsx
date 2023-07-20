import { debug } from '@/shared/utils/debug';
import { createContext, useContext, useMemo, useState } from 'react';
import { GlobalProviderType, GlobalStateType } from './types';

export const GlobalStateCtx = createContext<GlobalStateType>({} as GlobalStateType);
const GlobalProvider = ({ children }: GlobalProviderType) => {
  const [token, setToken] = useState('');

  const globalProviderValues: GlobalStateType = useMemo(
    () => ({
      state: {
        token,
      },
      handlers: {
        setToken,
      },
    }),
    [token, setToken],
  );

  debug.globalState(globalProviderValues?.state);

  return <GlobalStateCtx.Provider value={globalProviderValues}>{children}</GlobalStateCtx.Provider>;
};

function useGlobal(): GlobalStateType {
  return useContext(GlobalStateCtx);
}

export { GlobalProvider, useGlobal };
