import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { AuthProvider } from './context/AuthContext';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';

// Section 1: Trang chủ
import HomePage from './pages/HomePage';

// Section 2: Về doanh nghiệp
import StoryPage from './pages/StoryPage';
import TeamPage from './pages/TeamPage';
import JournalPage from './pages/JournalPage';

// Section 3: Sản phẩm
import ProductsPage from './pages/ProductsPage';
import ProductProPage from './pages/ProductProPage';
import ProductLitePage from './pages/ProductLitePage';
import TechnologyPage from './pages/TechnologyPage';
import NfcPassportPage from './pages/NfcPassportPage';
import CheckoutPage from './pages/CheckoutPage';

// Section 4: Hành trình khám phá
import ExplorePage from './pages/ExplorePage';
import TrailsPage from './pages/TrailsPage';
import TrailDetailLaoThanPage from './pages/TrailDetailLaoThanPage';
import PlannerPage from './pages/PlannerPage';
import AppPage from './pages/AppPage';

// Section 5: Hành trình ánh sáng
import ImpactPage from './pages/ImpactPage';
import JoinImpactPage from './pages/JoinImpactPage';
import TransparencyPage from './pages/TransparencyPage';
import CongTroiPage from './pages/CongTroiPage';

// Section 6: Trung tâm hỗ trợ
import FaqPage from './pages/FaqPage';
import UserGuidePage from './pages/UserGuidePage';
import WarrantyPage from './pages/WarrantyPage';
import ShippingReturnsPage from './pages/ShippingReturnsPage';
import ContactPage from './pages/ContactPage';

// SQLite Admin Dashboard
import AdminDashboard from './pages/AdminDashboard';

// My SolarBag Account Management
import AccountPage from './pages/AccountPage';

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Layout />}>
              {/* Section 1: Trang chủ */}
              <Route index element={<HomePage />} />

            {/* Section 2: Về doanh nghiệp */}
            <Route path="about">
              <Route index element={<Navigate to="story" replace />} />
              <Route path="story" element={<StoryPage />} />
              <Route path="team" element={<TeamPage />} />
              <Route path="journal" element={<JournalPage />} />
            </Route>

            {/* Section 3: Sản phẩm */}
            <Route path="products">
              <Route index element={<ProductsPage />} />
              <Route path="solarbag-pro" element={<ProductProPage />} />
              <Route path="solarbag-lite" element={<ProductLitePage />} />
              <Route path="guinang-trail" element={<ProductProPage />} />
              <Route path="guinang-edu" element={<ProductLitePage />} />
              <Route path="technology" element={<TechnologyPage />} />
              <Route path="nfc-passport" element={<NfcPassportPage />} />
            </Route>
            <Route path="checkout" element={<CheckoutPage />} />

            {/* Section 4: Hành trình khám phá */}
            <Route path="explore">
              <Route index element={<ExplorePage />} />
              <Route path="trails" element={<TrailsPage />} />
              <Route path="trails/lao-than" element={<TrailDetailLaoThanPage />} />
              <Route path="trails/:trailId" element={<TrailDetailLaoThanPage />} />
              <Route path="planner" element={<PlannerPage />} />
              <Route path="app" element={<AppPage />} />
            </Route>

            {/* Section 5: Hành trình ánh sáng */}
            <Route path="impact">
              <Route index element={<ImpactPage />} />
              <Route path="join" element={<JoinImpactPage />} />
              <Route path="transparency" element={<TransparencyPage />} />
              <Route path="cong-troi-tren-ban" element={<CongTroiPage />} />
            </Route>

            {/* Section 6: Trung tâm hỗ trợ */}
            <Route path="support">
              <Route index element={<FaqPage />} />
              <Route path="faq" element={<FaqPage />} />
              <Route path="user-guide" element={<UserGuidePage />} />
              <Route path="warranty" element={<WarrantyPage />} />
              <Route path="shipping-returns" element={<ShippingReturnsPage />} />
              <Route path="contact" element={<ContactPage />} />
            </Route>

            {/* SQLite Database Admin View */}
            <Route path="admin" element={<AdminDashboard />} />

            {/* My SolarBag Account Management */}
            <Route path="account" element={<AccountPage />} />

            {/* Catch-all fallback */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  </AuthProvider>
  );
}

