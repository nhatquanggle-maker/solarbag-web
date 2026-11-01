import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Breadcrumbs from './Breadcrumbs';
import SubNav from './SubNav';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import LoginModal from './LoginModal';
import { useCart } from '../context/CartContext';
import { CheckCircle2 } from 'lucide-react';

export default function Layout() {
  const { toastMessage } = useCart();

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f4] text-[#1e261e]">
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#041d15] text-[#f5f5e9] border border-[#efbc5c]/40 px-4 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-[#efbc5c]" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Main Top Navigation */}
      <Navbar />

      {/* Sub-navigation & Breadcrumbs */}
      <Breadcrumbs />
      <SubNav />

      {/* Main Dynamic View */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Sliding Cart Drawer */}
      <CartDrawer />

      {/* Global Authentication Modal */}
      <LoginModal />

      {/* Fixed Universal Footer */}
      <Footer />
    </div>
  );
}

