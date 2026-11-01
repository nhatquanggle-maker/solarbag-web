import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { 
  User, Package, Shield, Navigation, Heart, Settings, LogOut,
  Edit3, Camera, Star, Activity, Download, ExternalLink, CheckCircle,
  Clock, ArrowRight, BatteryCharging, Wifi, AlertCircle, Sparkles
} from 'lucide-react';
import { apiService } from '../services/api';

export default function AccountPage() {
  const { currentUser, isLoggedIn, isAdmin, logout, openLogin, updateProfile } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();

  // Active side tab: 'profile' | 'orders' | 'products' | 'trails' | 'impact' | 'settings'
  const initialTab = searchParams.get('tab') || 'profile';
  const [activeTab, setActiveTab] = useState(initialTab);

  // Sub-tabs inside Profile: 'diary' | 'photos' | 'reviews' | 'activity'
  const [profileSubTab, setProfileSubTab] = useState('diary');

  // Orders from SQLite API
  const [orders, setOrders] = useState([]);
  const [loadingOrders, setLoadingOrders] = useState(false);

  // Profile Edit State
  const [editForm, setEditForm] = useState({
    name: currentUser?.name || '',
    phone: currentUser?.phone || '',
    email: currentUser?.email || ''
  });
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    if (currentUser) {
      setEditForm({
        name: currentUser.name || '',
        phone: currentUser.phone || '',
        email: currentUser.email || ''
      });
    }
  }, [currentUser]);

  useEffect(() => {
    const tabParam = searchParams.get('tab');
    if (tabParam) {
      setActiveTab(tabParam);
    }
  }, [searchParams]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setSearchParams({ tab: tabId });
  };

  // Load orders when orders tab opened
  useEffect(() => {
    if (activeTab === 'orders') {
      setLoadingOrders(true);
      apiService.getOrders()
        .then(res => {
          if (res && res.data) {
            setOrders(res.data);
          }
        })
        .catch(() => {
          // Fallback demo orders
          setOrders([
            {
              order_code: 'SB-88912',
              items: JSON.stringify([{ name: 'SolarBag Pro (Trekking Edition)', quantity: 1, price: 1650000 }]),
              total_amount: 1650000,
              customer_name: currentUser?.name || 'Khách hàng',
              payment_method: 'cod',
              status: 'Đang vận chuyển',
              created_at: new Date().toISOString()
            }
          ]);
        })
        .finally(() => setLoadingOrders(false));
    }
  }, [activeTab, currentUser]);

  const handleSaveProfile = (e) => {
    e.preventDefault();
    updateProfile(editForm);
    setSaveSuccess(true);
    setTimeout(() => setSaveSuccess(false), 3000);
  };

  // If not logged in, prompt user to log in
  if (!isLoggedIn) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-[#fbf9f4]">
        <div className="max-w-md w-full bg-white p-8 rounded-3xl border border-[#5E7A45]/30 shadow-xl text-center space-y-6">
          <div className="w-16 h-16 rounded-full bg-[#1F3D2B]/10 border border-[#5E7A45]/30 flex items-center justify-center mx-auto text-[#1F3D2B]">
            <User className="w-8 h-8" />
          </div>
          <div>
            <h2 className="font-headline text-2xl font-bold text-[#1F3D2B]">
              Tài khoản My SolarBag
            </h2>
            <p className="font-serif italic text-sm text-[#4a5548] mt-2">
              Vui lòng đăng nhập để xem thông tin bảo hành balo, hành trình đã lưu và lịch sử đơn hàng.
            </p>
          </div>
          <button
            onClick={openLogin}
            className="w-full py-3.5 bg-[#1F3D2B] hover:bg-[#284F38] text-white rounded-xl font-headline font-bold text-sm tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
          >
            <span>Đăng nhập ngay</span>
            <ArrowRight className="w-4 h-4 text-[#F2B632]" />
          </button>
        </div>
      </div>
    );
  }

  const user = currentUser;

  return (
    <div className="min-h-screen bg-[#fbf9f4] py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Top Header Bar matching design */}
        <div className="flex items-center justify-between border-b border-[#5E7A45]/20 pb-4">
          <div className="flex items-center gap-3">
            <img src="/assets/svg/sun-logo.svg" alt="SolarBag" className="w-7 h-7" />
            <span className="font-headline text-2xl font-bold text-[#1F3D2B] tracking-tight">SolarBag</span>
            {isAdmin && (
              <span className="px-2.5 py-0.5 rounded-full bg-[#C2562B] text-white font-mono text-[10px] font-bold uppercase tracking-wider">
                ADMIN
              </span>
            )}
          </div>
          <span className="font-headline font-bold text-xs sm:text-sm tracking-widest text-[#5E7A45] uppercase">
            MY SOLARBAG
          </span>
        </div>

        {/* Main Grid: Left Profile Sidebar + Right Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* =========================================================================
              LEFT COLUMN: Profile Card & Sidebar Menu (matches image 1)
             ========================================================================= */}
          <div className="lg:col-span-4 bg-white rounded-3xl border border-[#e2ded4] shadow-sm p-6 sm:p-7 space-y-6">
            
            {/* Top Gear Icon & Avatar Row */}
            <div className="relative">
              <button 
                onClick={() => handleTabChange('settings')}
                title="Cài đặt tài khoản"
                className="absolute top-0 right-0 p-1.5 rounded-full hover:bg-gray-100 text-gray-500 hover:text-[#1F3D2B] transition-colors"
              >
                <Settings className="w-5 h-5" />
              </button>

              <div className="w-20 h-20 rounded-full bg-[#eef5ee] border-2 border-[#5E7A45]/20 flex items-center justify-center text-[#1F3D2B] shadow-inner">
                <User className="w-9 h-9 stroke-[1.75]" />
              </div>
            </div>

            {/* User Name & Tier */}
            <div className="space-y-1">
              <h2 className="font-headline text-2xl font-bold text-[#1F3D2B]">
                {user.name}
              </h2>
              <p className="text-xs text-[#5E7A45] font-semibold">
                {user.tier}
              </p>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#f0ede6] text-left">
              <div>
                <p className="font-headline text-2xl font-bold text-[#1F3D2B]">
                  {user.stats?.journeys || '—'}
                </p>
                <p className="text-xs text-[#4a5548] font-medium">Hành trình</p>
              </div>
              <div>
                <p className="font-headline text-2xl font-bold text-[#1F3D2B]">
                  {user.stats?.badges || '—'}
                </p>
                <p className="text-xs text-[#4a5548] font-medium">Huy hiệu</p>
              </div>
            </div>

            {/* Sidebar Navigation Menu */}
            <nav className="space-y-2 pt-2">
              {/* 1. Hồ sơ của tôi */}
              <button
                onClick={() => handleTabChange('profile')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-headline font-bold transition-all ${
                  activeTab === 'profile'
                    ? 'bg-[#1F3D2B] text-white shadow-md'
                    : 'text-[#232622]/80 hover:bg-[#f5f2e9] hover:text-[#1F3D2B]'
                }`}
              >
                <User className="w-4 h-4" />
                <span>Hồ sơ của tôi</span>
              </button>

              {/* 2. Đơn hàng */}
              <button
                onClick={() => handleTabChange('orders')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-headline font-bold transition-all ${
                  activeTab === 'orders'
                    ? 'bg-[#1F3D2B] text-white shadow-md'
                    : 'text-[#232622]/80 hover:bg-[#f5f2e9] hover:text-[#1F3D2B]'
                }`}
              >
                <Package className="w-4 h-4" />
                <span>Đơn hàng</span>
              </button>

              {/* 3. Sản phẩm của tôi */}
              <button
                onClick={() => handleTabChange('products')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-headline font-bold transition-all ${
                  activeTab === 'products'
                    ? 'bg-[#1F3D2B] text-white shadow-md'
                    : 'text-[#232622]/80 hover:bg-[#f5f2e9] hover:text-[#1F3D2B]'
                }`}
              >
                <Shield className="w-4 h-4" />
                <span>Sản phẩm của tôi</span>
              </button>

              {/* 4. Hành trình của tôi */}
              <button
                onClick={() => handleTabChange('trails')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-headline font-bold transition-all ${
                  activeTab === 'trails'
                    ? 'bg-[#1F3D2B] text-white shadow-md'
                    : 'text-[#232622]/80 hover:bg-[#f5f2e9] hover:text-[#1F3D2B]'
                }`}
              >
                <Navigation className="w-4 h-4" />
                <span>Hành trình của tôi</span>
              </button>

              {/* 5. Hoạt động đồng hành */}
              <button
                onClick={() => handleTabChange('impact')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-headline font-bold transition-all ${
                  activeTab === 'impact'
                    ? 'bg-[#1F3D2B] text-white shadow-md'
                    : 'text-[#232622]/80 hover:bg-[#f5f2e9] hover:text-[#1F3D2B]'
                }`}
              >
                <Heart className="w-4 h-4" />
                <span>Hoạt động đồng hành</span>
              </button>

              {/* 6. Cài đặt */}
              <button
                onClick={() => handleTabChange('settings')}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-headline font-bold transition-all ${
                  activeTab === 'settings'
                    ? 'bg-[#1F3D2B] text-white shadow-md'
                    : 'text-[#232622]/80 hover:bg-[#f5f2e9] hover:text-[#1F3D2B]'
                }`}
              >
                <Settings className="w-4 h-4" />
                <span>Cài đặt</span>
              </button>

              {/* 7. Admin Link if admin */}
              {isAdmin && (
                <Link
                  to="/admin"
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-headline font-bold bg-[#C2562B]/10 text-[#C2562B] hover:bg-[#C2562B] hover:text-white transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Trang quản trị SQLite</span>
                </Link>
              )}

              {/* 8. Đăng xuất */}
              <button
                onClick={logout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl text-xs sm:text-sm font-headline font-semibold text-red-600 hover:bg-red-50 transition-all pt-3 border-t border-gray-100"
              >
                <LogOut className="w-4 h-4" />
                <span>Đăng xuất</span>
              </button>
            </nav>

          </div>

          {/* =========================================================================
              RIGHT COLUMN: Tab Content (matches image 1 layout)
             ========================================================================= */}
          <div className="lg:col-span-8 bg-white rounded-3xl border border-[#e2ded4] shadow-sm p-6 sm:p-8 min-h-[520px]">
            
            {/* 1. TAB: HỒ SƠ CỦA TÔI (matches image 1) */}
            {activeTab === 'profile' && (
              <div className="space-y-6">
                
                {/* Top Tabs: Nhật ký, Ảnh, Đánh giá, Hoạt động */}
                <div className="flex flex-wrap items-center gap-2 border-b border-[#f0ede6] pb-4">
                  {[
                    { id: 'diary', label: 'Nhật ký' },
                    { id: 'photos', label: 'Ảnh' },
                    { id: 'reviews', label: 'Đánh giá' },
                    { id: 'activity', label: 'Hoạt động' }
                  ].map(tab => (
                    <button
                      key={tab.id}
                      onClick={() => setProfileSubTab(tab.id)}
                      className={`px-5 py-2 rounded-full text-xs font-headline font-bold transition-all ${
                        profileSubTab === tab.id
                          ? 'bg-[#1F3D2B] text-white shadow-sm'
                          : 'text-gray-600 hover:text-[#1F3D2B] hover:bg-gray-100'
                      }`}
                    >
                      {tab.label}
                    </button>
                  ))}
                </div>

                {/* Sub-label: Đã hoàn thành */}
                <div>
                  <h4 className="text-sm font-headline font-bold text-[#1F3D2B]">
                    Đã hoàn thành
                  </h4>
                  <div className="h-px bg-gray-200 mt-2" />
                </div>

                {/* Sub Tab: Diary (matches image 1 empty state) */}
                {profileSubTab === 'diary' && (
                  <div className="py-16 text-center space-y-4 max-w-md mx-auto">
                    <div className="w-16 h-16 rounded-2xl bg-[#f5f2e9] border border-[#5E7A45]/30 flex items-center justify-center mx-auto text-[#5E7A45]">
                      <Edit3 className="w-8 h-8 stroke-[1.5]" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-headline text-xl sm:text-2xl font-bold text-[#1F3D2B]">
                        Chưa có bài viết nào
                      </h3>
                      <p className="text-xs sm:text-sm text-[#4a5548] leading-relaxed">
                        Những trải nghiệm được đồng bộ và chọn chia sẻ từ SolarBag App sẽ xuất hiện tại đây.
                      </p>
                    </div>

                    <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
                      <Link
                        to="/explore/app"
                        className="w-full sm:w-auto px-5 py-2.5 bg-[#1F3D2B] text-white hover:bg-[#284F38] rounded-xl text-xs font-headline font-bold transition-all shadow-sm"
                      >
                        Kết nối SolarBag App
                      </Link>
                      <Link
                        to="/explore/trails"
                        className="w-full sm:w-auto px-5 py-2.5 bg-[#f5f2e9] text-[#1F3D2B] hover:bg-[#ece6d8] rounded-xl text-xs font-headline font-bold transition-all"
                      >
                        Khám phá cung đường
                      </Link>
                    </div>
                  </div>
                )}

                {/* Sub Tab: Photos */}
                {profileSubTab === 'photos' && (
                  <div className="py-16 text-center space-y-3">
                    <Camera className="w-12 h-12 text-gray-300 mx-auto" />
                    <p className="font-headline font-bold text-gray-600">Chưa có hình ảnh nào được tải lên</p>
                    <p className="text-xs text-gray-400">Hình ảnh check-in tại các trạm sạc năng lượng sẽ lưu tại đây.</p>
                  </div>
                )}

                {/* Sub Tab: Reviews */}
                {profileSubTab === 'reviews' && (
                  <div className="py-16 text-center space-y-3">
                    <Star className="w-12 h-12 text-gray-300 mx-auto" />
                    <p className="font-headline font-bold text-gray-600">Bạn chưa viết đánh giá nào</p>
                    <p className="text-xs text-gray-400">Đánh giá sản phẩm sau khi sử dụng để nhận huy hiệu cộng đồng.</p>
                  </div>
                )}

                {/* Sub Tab: Activity */}
                {profileSubTab === 'activity' && (
                  <div className="py-16 text-center space-y-3">
                    <Activity className="w-12 h-12 text-gray-300 mx-auto" />
                    <p className="font-headline font-bold text-gray-600">Chưa có lịch sử hoạt động mới</p>
                    <p className="text-xs text-gray-400">Các hoạt động theo dõi năng lượng sẽ được ghi lại tự động.</p>
                  </div>
                )}

              </div>
            )}

            {/* 2. TAB: ĐƠN HÀNG */}
            {activeTab === 'orders' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-[#1F3D2B]">
                    Lịch sử đơn hàng & Đặt trước
                  </h3>
                  <p className="text-xs text-[#4a5548] mt-1">
                    Dữ liệu được lưu trữ và đồng bộ an toàn từ hệ thống cơ sở dữ liệu SQLite (solarbag.db).
                  </p>
                </div>

                {loadingOrders ? (
                  <div className="py-12 text-center text-sm text-gray-500">
                    Đang tải dữ liệu từ SQLite...
                  </div>
                ) : orders.length === 0 ? (
                  <div className="py-16 text-center space-y-3 bg-[#fbf9f4] rounded-2xl border border-dashed border-gray-300 p-8">
                    <Package className="w-12 h-12 text-gray-300 mx-auto" />
                    <p className="font-headline font-bold text-gray-600">Chưa có đơn hàng nào</p>
                    <p className="text-xs text-gray-400">Các đơn đăng ký trải nghiệm Early-Bird sẽ được cập nhật tại đây.</p>
                    <Link
                      to="/products"
                      className="inline-block mt-3 px-5 py-2.5 bg-[#1F3D2B] text-white rounded-xl text-xs font-headline font-bold shadow-sm"
                    >
                      Khám phá sản phẩm
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {orders.map((ord, idx) => {
                      let items = [];
                      try {
                        items = typeof ord.items === 'string' ? JSON.parse(ord.items) : ord.items;
                      } catch {
                        items = [];
                      }

                      return (
                        <div key={idx} className="p-5 rounded-2xl border border-[#e2ded4] bg-[#fcfbf7] space-y-3 hover:border-[#5E7A45] transition-colors">
                          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 pb-3">
                            <div>
                              <span className="font-mono text-xs font-bold text-[#1F3D2B]">
                                Mã đơn: #{ord.order_code}
                              </span>
                              <p className="text-[11px] text-gray-400">
                                Ngày đặt: {new Date(ord.created_at).toLocaleDateString('vi-VN')}
                              </p>
                            </div>
                            <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-[#F2B632]/20 text-[#C2562B] border border-[#F2B632]/40">
                              {ord.status || 'Đã ghi nhận SQLite'}
                            </span>
                          </div>

                          <div className="space-y-2">
                            {items.map((it, i) => (
                              <div key={i} className="flex justify-between text-xs text-[#232622]">
                                <span>{it.quantity}x {it.name}</span>
                                <span className="font-mono font-bold">{(it.price * it.quantity).toLocaleString()}đ</span>
                              </div>
                            ))}
                          </div>

                          <div className="flex justify-between items-center pt-3 border-t border-gray-100 text-sm">
                            <span className="text-xs text-gray-500">Tổng thanh toán:</span>
                            <span className="font-headline font-bold text-[#1F3D2B] text-base">
                              {Number(ord.total_amount).toLocaleString()}đ
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {/* 3. TAB: SẢN PHẨM CỦA TÔI (NFC Passport) */}
            {activeTab === 'products' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-[#1F3D2B]">
                    Hộ chiếu số NFC & Balo của tôi
                  </h3>
                  <p className="text-xs text-[#4a5548] mt-1">
                    Thiết bị được kích hoạt bảo hành điện tử và theo dõi sức khỏe pin qua vi mạch NFC.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-gradient-to-br from-[#1F3D2B] to-[#162C1F] text-white shadow-lg space-y-5">
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <span className="px-2.5 py-0.5 rounded-full bg-[#F2B632] text-[#1F3D2B] font-mono text-[10px] font-bold uppercase">
                        CHÍNH HÃNG XÁC THỰC
                      </span>
                      <h4 className="font-headline text-xl font-bold text-white">
                        SolarBag Pro · Trekking 35L
                      </h4>
                      <p className="text-xs text-[#E3DCC8] font-mono">
                        NFC UID: 04:8F:A2:7B:19:6C:80
                      </p>
                    </div>
                    <Wifi className="w-8 h-8 text-[#F2B632] animate-pulse" />
                  </div>

                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10 text-center">
                    <div className="p-3 rounded-xl bg-white/10">
                      <p className="text-[11px] text-[#E3DCC8]">Sức khỏe pin</p>
                      <p className="font-headline text-lg font-bold text-[#F2B632]">98%</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/10">
                      <p className="text-[11px] text-[#E3DCC8]">Hiệu suất CIGS</p>
                      <p className="font-headline text-lg font-bold text-white">96%</p>
                    </div>
                    <div className="p-3 rounded-xl bg-white/10">
                      <p className="text-[11px] text-[#E3DCC8]">Bảo hành đến</p>
                      <p className="font-headline text-xs font-bold text-white pt-1">15/10/2027</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2 text-xs">
                    <span className="text-[#E3DCC8] flex items-center gap-1.5">
                      <CheckCircle className="w-4 h-4 text-[#F2B632]" />
                      Bảo hành 24 tháng chính hãng
                    </span>
                    <Link
                      to="/products/nfc-passport"
                      className="text-[#F2B632] hover:underline flex items-center gap-1 font-headline font-bold"
                    >
                      Chi tiết NFC <ExternalLink className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* 4. TAB: HÀNH TRÌNH CỦA TÔI */}
            {activeTab === 'trails' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-[#1F3D2B]">
                    Hành trình & Cung đường đã lưu
                  </h3>
                  <p className="text-xs text-[#4a5548] mt-1">
                    Các tuyến trekking bạn quan tâm hoặc đã đồng bộ từ ứng dụng SolarBag.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="p-5 rounded-2xl border border-[#e2ded4] bg-[#fcfbf7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-[#5E7A45]/20 text-[#1F3D2B] font-mono text-[10px] font-bold">
                          ĐÃ HOÀN THÀNH
                        </span>
                        <h4 className="font-headline text-lg font-bold text-[#1F3D2B]">
                          Đỉnh Lảo Thẩn — Y Tý, Lào Cai
                        </h4>
                      </div>
                      <p className="text-xs text-gray-500">
                        Độ cao: 2.860m • Thời gian: 2 ngày 1 đêm • Điện mặt trời tích luỹ: 4.800 mAh
                      </p>
                    </div>

                    <div className="flex items-center gap-2">
                      <Link
                        to="/explore/trails/lao-than"
                        className="px-4 py-2 bg-[#1F3D2B] text-white hover:bg-[#284F38] rounded-xl text-xs font-headline font-bold shadow-sm"
                      >
                        Xem hành trình
                      </Link>
                    </div>
                  </div>

                  <div className="p-5 rounded-2xl border border-[#e2ded4] bg-[#fcfbf7] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-800 font-mono text-[10px] font-bold">
                          DỰ KIẾN
                        </span>
                        <h4 className="font-headline text-lg font-bold text-[#1F3D2B]">
                          Sống lưng khủng long — Tà Xùa, Sơn La
                        </h4>
                      </div>
                      <p className="text-xs text-gray-500">
                        Độ cao: 2.875m • Thời gian: 2 ngày 1 đêm • Dự kiến sạc flycam & điện thoại
                      </p>
                    </div>

                    <Link
                      to="/explore/planner"
                      className="px-4 py-2 bg-[#f5f2e9] text-[#1F3D2B] hover:bg-[#ece6d8] rounded-xl text-xs font-headline font-bold"
                    >
                      Lên kế hoạch
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* 5. TAB: HOẠT ĐỘNG ĐỒNG HÀNH (CSR) */}
            {activeTab === 'impact' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-[#1F3D2B]">
                    Hành trình ánh sáng của bạn
                  </h3>
                  <p className="text-xs text-[#4a5548] mt-1">
                    Ghi nhận những đóng góp và sẻ chia nguồn sáng tri thức đến học sinh nghèo vùng cao.
                  </p>
                </div>

                <div className="p-6 rounded-3xl bg-[#E3DCC8]/40 border border-[#5E7A45]/30 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-[#1F3D2B] text-[#F2B632] flex items-center justify-center">
                      <Heart className="w-6 h-6 fill-current" />
                    </div>
                    <div>
                      <h4 className="font-headline text-lg font-bold text-[#1F3D2B]">
                        Chiến dịch "Cõng trời trên bản" — Tây Giang 2026
                      </h4>
                      <p className="text-xs text-[#5E7A45] font-semibold">
                        Góp 01 Balo SolarBag Lite trao tặng điểm trường Axan
                      </p>
                    </div>
                  </div>

                  <p className="text-xs text-[#4a5548] leading-relaxed">
                    Chiếc balo mang mã số <strong>#LITE-XAN-082</strong> đã được trao trực tiếp đến em Alăng Thị Mai (lớp 3). Đèn học tháo rời đang giúp em học bài mỗi tối giữa bản làng chưa có điện lưới.
                  </p>

                  <div className="pt-2 flex justify-between items-center text-xs border-t border-[#5E7A45]/20">
                    <span className="text-[#7c8663] font-mono">Mã chứng nhận: CSR-2026-TG82</span>
                    <Link
                      to="/impact/transparency"
                      className="text-[#C2562B] font-headline font-bold hover:underline"
                    >
                      Xem bản đồ minh bạch &rarr;
                    </Link>
                  </div>
                </div>
              </div>
            )}

            {/* 6. TAB: CÀI ĐẶT TÀI KHOẢN */}
            {activeTab === 'settings' && (
              <div className="space-y-6">
                <div>
                  <h3 className="font-headline text-2xl font-bold text-[#1F3D2B]">
                    Cài đặt tài khoản & Bảo mật
                  </h3>
                  <p className="text-xs text-[#4a5548] mt-1">
                    Quản lý thông tin liên hệ và cài đặt thông báo của bạn.
                  </p>
                </div>

                {saveSuccess && (
                  <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-2xl flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600" />
                    <span>Đã cập nhật thông tin tài khoản thành công!</span>
                  </div>
                )}

                <form onSubmit={handleSaveProfile} className="space-y-4 max-w-lg">
                  <div>
                    <label className="block text-xs font-headline font-bold text-[#1F3D2B] mb-1">
                      Họ và tên
                    </label>
                    <input
                      type="text"
                      value={editForm.name}
                      onChange={(e) => setEditForm({ ...editForm, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-[#5E7A45]/30 rounded-xl focus:outline-none focus:border-[#F2B632]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-headline font-bold text-[#1F3D2B] mb-1">
                      Địa chỉ Email
                    </label>
                    <input
                      type="email"
                      value={editForm.email}
                      onChange={(e) => setEditForm({ ...editForm, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-[#5E7A45]/30 rounded-xl focus:outline-none focus:border-[#F2B632]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-headline font-bold text-[#1F3D2B] mb-1">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      value={editForm.phone}
                      onChange={(e) => setEditForm({ ...editForm, phone: e.target.value })}
                      className="w-full px-4 py-2.5 text-sm bg-white border border-[#5E7A45]/30 rounded-xl focus:outline-none focus:border-[#F2B632]"
                    />
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-[#1F3D2B] hover:bg-[#284F38] text-white rounded-xl font-headline font-bold text-xs tracking-wide shadow-md transition-all"
                    >
                      Lưu thay đổi
                    </button>
                  </div>
                </form>

                {/* Role Switcher for Convenience */}
                <div className="pt-6 border-t border-gray-100 max-w-lg">
                  <h4 className="font-headline text-sm font-bold text-[#1F3D2B] mb-2">
                    Quyền hạn hiện tại: <span className="text-[#C2562B]">{user.role === 'admin' ? 'Quản trị viên (Admin)' : 'Khách hàng (Customer)'}</span>
                  </h4>
                  <p className="text-xs text-gray-500 mb-3">
                    Bạn có thể nhanh chóng đổi quyền hạn để kiểm tra các giao diện và tính năng khác nhau:
                  </p>
                  <button
                    onClick={() => updateProfile({ role: user.role === 'admin' ? 'customer' : 'admin' })}
                    className="px-4 py-2 border border-[#5E7A45] rounded-xl text-xs font-headline font-bold text-[#1F3D2B] hover:bg-[#f5f2e9] transition-all"
                  >
                    Chuyển sang quyền {user.role === 'admin' ? 'Khách hàng' : 'Quản trị viên (Admin)'}
                  </button>
                </div>

              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}

