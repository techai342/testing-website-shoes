import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const loggedIn = localStorage.getItem('adminLoggedIn');
    const adminEmail = localStorage.getItem('adminEmail');
    
    if (loggedIn === 'true' && adminEmail) {
      setUser({ email: adminEmail });
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Temporary simple login
    if (email === 'freefireofficialuser@gmail.com' && password === 'admin123') {
      localStorage.setItem('adminLoggedIn', 'true');
      localStorage.setItem('adminEmail', email);
      setUser({ email });
      return { user: { email } };
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = async () => {
    localStorage.removeItem('adminLoggedIn');
    localStorage.removeItem('adminEmail');
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
