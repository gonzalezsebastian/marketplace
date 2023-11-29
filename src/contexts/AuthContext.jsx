import { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [userType, setUserType] = useState(null);

  const login = (type) => {
    setUserType(type);
  };

  const logout = () => {
    setUserType(null);
  };

  const isAdmin = userType === 'admin';

  return (
    <AuthContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider, AuthContext };