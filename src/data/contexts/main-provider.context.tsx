import { PropsWithChildren } from 'react';
import { ApiRouteProvider } from './api-route.context';
import { UserProvider } from './user.context';

export const MainProvider: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <ApiRouteProvider>
        <UserProvider>{children}</UserProvider>
      </ApiRouteProvider>
    </>
  );
};
