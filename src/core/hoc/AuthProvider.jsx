import { createContext, useState, useContext } from 'react';

const AuthContext = createContext({
  user: { role: 'main' },
  signin: () => { },
  signout: () => { },
});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('user') || JSON.stringify({ role: 'guest' }))
  );

  const signin = (newUser) => {
    localStorage.setItem('user', JSON.stringify(newUser.user));
    localStorage.setItem('access_token', JSON.stringify(newUser.access_token));
    localStorage.setItem('refresh_token ', JSON.stringify(newUser.refresh_token));
    setUser(newUser.user);
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