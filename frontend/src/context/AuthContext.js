import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email, password) => {
    // Mock login - in production this would call an API
    const mockUser = {
      id: '1',
      name: 'Demo User',
      email: email,
      phone: '0300-1234567',
      role: 'user',
      membershipPlan: null,
      membershipExpiry: null
    };
    localStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
    return { success: true, user: mockUser };
  };

  const register = async (name, email, phone, password) => {
    // Mock registration
    const mockUser = {
      id: Date.now().toString(),
      name,
      email,
      phone,
      role: 'user',
      membershipPlan: null,
      membershipExpiry: null
    };
    localStorage.setItem('user', JSON.stringify(mockUser));
    setUser(mockUser);
    return { success: true, user: mockUser };
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser(null);
  };

  const updateMembership = async (plan) => {
    if (user) {
      const updatedUser = {
        ...user,
        membershipPlan: plan,
        membershipExpiry: new Date(Date.now() + 30*24*60*60*1000).toISOString()
      };
      localStorage.setItem('user', JSON.stringify(updatedUser));
      setUser(updatedUser);
      return { success: true, user: updatedUser };
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, register, logout, updateMembership }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
