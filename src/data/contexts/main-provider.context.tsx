import { PropsWithChildren } from 'react';
import { ApiRouteProvider } from './api-route.context';

export const MainProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ApiRouteProvider>{children}</ApiRouteProvider>
    </>
  );
};
