import { UserReducer, useUserReducer } from 'data/reduces/user.reduce';
import React, { createContext, PropsWithChildren, useContext } from 'react';

const UserContext = createContext({} as UserReducer);

const UserProvider = ({ children }: PropsWithChildren) => {
  const provider = useUserReducer();
  return (
    <UserContext.Provider value={provider}>{children}</UserContext.Provider>
  );
};

const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within an UserProvider');
  }

  return context;
};

export { useUser, UserProvider };
