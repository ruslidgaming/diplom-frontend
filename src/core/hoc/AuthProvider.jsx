import { createContext, useState, useContext } from 'react';
import { logoutAdmin } from './logout';

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
    localStorage.setItem('access_token', newUser.access_token);
    localStorage.setItem('refresh_token', newUser.refresh_token);
    setUser(newUser.user);
  };

  const signout = () => {
    logoutAdmin()
      .then(() => {
        const userInfo = JSON.parse(localStorage.getItem('user'));
        const userCopy = JSON.parse(JSON.stringify(userInfo));
        localStorage.removeItem('user');
        if (userInfo.role == "student") {
          window.location.href = `/student/${userInfo.admin_id}/login`;
        } else {
          window.location.href = '/';
        }
      })
  };

  return (
    <AuthContext.Provider value={{ user, signin, signout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);