import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

const DEMO_CUSTOMER = {
  id: 'usr_cust_001',
  name: 'Người dùng SolarBag',
  email: 'khachhang@solarbag.vn',
  phone: '0905 888 999',
  role: 'customer', // 'customer' | 'admin'
  tier: 'Thành viên SolarBag',
  stats: {
    journeys: 3,
    badges: 5,
    treesPlanted: 12,
    solarHours: 48
  },
  registeredBackpacks: [
    {
      id: 'SB-PRO-8829',
      name: 'SolarBag Pro (Trekking Edition)',
      nfcUid: '04:8F:A2:7B:19:6C:80',
      batteryHealth: '98%',
      solarEfficiency: '96%',
      warrantyUntil: '15/10/2027',
      status: 'Hoạt động tốt'
    }
  ],
  savedTrails: [
    {
      id: 'lao-than',
      title: 'Đỉnh Lảo Thẩn — Y Tý',
      altitude: '2.860m',
      duration: '2 ngày 1 đêm',
      status: 'Đã hoàn thành'
    },
    {
      id: 'ta-xua',
      title: 'Sống lưng khủng long — Tà Xùa',
      altitude: '2.875m',
      duration: '2 ngày 1 đêm',
      status: 'Kế hoạch sắp tới'
    }
  ]
};

const DEMO_ADMIN = {
  id: 'usr_admin_001',
  name: 'Quản trị viên SolarBag',
  email: 'admin@solarbag.vn',
  phone: '1900 6868',
  role: 'admin',
  tier: 'Quản trị viên Hệ thống (Super Admin)',
  stats: {
    journeys: 12,
    badges: 10,
    totalManagedOrders: 154,
    solarHours: 320
  }
};

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(() => {
    try {
      const saved = localStorage.getItem('solarbag_auth_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'register'
  const [authError, setAuthError] = useState(null);

  useEffect(() => {
    try {
      if (currentUser) {
        localStorage.setItem('solarbag_auth_user', JSON.stringify(currentUser));
      } else {
        localStorage.removeItem('solarbag_auth_user');
      }
    } catch (e) {
      console.error(e);
    }
  }, [currentUser]);

  const openLogin = () => {
    setAuthMode('login');
    setAuthError(null);
    setIsAuthModalOpen(true);
  };

  const openRegister = () => {
    setAuthMode('register');
    setAuthError(null);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    setIsAuthModalOpen(false);
    setAuthError(null);
  };

  const login = (email, password, forcedRole) => {
    setAuthError(null);
    const cleanEmail = email.trim().toLowerCase();

    // Check admin credentials
    if (forcedRole === 'admin' || cleanEmail.includes('admin')) {
      setCurrentUser(DEMO_ADMIN);
      closeAuthModal();
      return { success: true, user: DEMO_ADMIN };
    }

    // Default to customer
    const user = {
      ...DEMO_CUSTOMER,
      email: cleanEmail || DEMO_CUSTOMER.email,
      name: cleanEmail ? cleanEmail.split('@')[0] : DEMO_CUSTOMER.name
    };
    setCurrentUser(user);
    closeAuthModal();
    return { success: true, user };
  };

  const loginAsCustomer = () => {
    setCurrentUser(DEMO_CUSTOMER);
    closeAuthModal();
  };

  const loginAsAdmin = () => {
    setCurrentUser(DEMO_ADMIN);
    closeAuthModal();
  };

  const register = (data) => {
    const newUser = {
      ...DEMO_CUSTOMER,
      id: 'usr_' + Date.now(),
      name: data.name || 'Người dùng SolarBag',
      email: data.email,
      phone: data.phone || '0905 000 000',
      role: 'customer',
      tier: 'Thành viên mới SolarBag'
    };
    setCurrentUser(newUser);
    closeAuthModal();
    return { success: true, user: newUser };
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const updateProfile = (updates) => {
    setCurrentUser(prev => prev ? { ...prev, ...updates } : null);
  };

  const isAdmin = currentUser?.role === 'admin';
  const isCustomer = currentUser?.role === 'customer';
  const isLoggedIn = !!currentUser;

  return (
    <AuthContext.Provider value={{
      currentUser,
      isLoggedIn,
      isAdmin,
      isCustomer,
      isAuthModalOpen,
      authMode,
      authError,
      openLogin,
      openRegister,
      closeAuthModal,
      login,
      loginAsCustomer,
      loginAsAdmin,
      register,
      logout,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

