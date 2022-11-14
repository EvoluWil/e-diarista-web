import React, { createContext, PropsWithChildren } from 'react';
import {
  ApiRouteReducer,
  useApiRouteReducer
} from 'data/reduces/api-route.reduce';

const ApiRouteContext = createContext({} as ApiRouteReducer);

export const ApiRouteProvider = ({ children }: PropsWithChildren) => {
  const provider = useApiRouteReducer();
  return (
    <ApiRouteContext.Provider value={provider}>
      {children}
    </ApiRouteContext.Provider>
  );
};
