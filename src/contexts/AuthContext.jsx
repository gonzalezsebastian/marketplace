import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const loginAsAdmin = () => {
    setIsAdmin(true);
  };

  const logout = () => {
    setIsAdmin(false);
  };

  return (
    <AuthContext.Provider value={{ isAdmin, loginAsAdmin, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };