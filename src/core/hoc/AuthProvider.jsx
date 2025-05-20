import { createContext, useState, useContext } from 'react';

const AuthContext = createContext({
  user: { role: 'main' },
  signin: () => {},
  signout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user') || JSON.stringify({ role: 'main' }))
  );

  const signin = (newUser) => {
    setUser(newUser);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const signout = () => {
    setUser({ role: 'main' });
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);