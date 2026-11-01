import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { 
  Search, ShoppingBag, User, ChevronDown, Menu, X, 
  LogOut, Shield, Package, Settings, LogIn, Sparkles
} from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import SearchModal from './SearchModal';

export default function Navbar() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { cartCount, setIsCartOpen } = useCart();
  const { currentUser, isLoggedIn, isAdmin, openLogin, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const navItems = [
    { label: 'Trang chủ', path: '/' },
    {
      label: 'Về doanh nghiệp',
      path: '/about/story',
      dropdown: [
        { label: 'Câu chuyện thương hiệu', path: '/about/story', desc: 'Từ tiếng gọi núi rừng đến nguồn sáng bản cao' },
        { label: 'Đội ngũ & đối tác', path: '/about/team', desc: 'Biệt đội ánh sáng — Những người trẻ vì cộng đồng' },
        { label: 'Tin tức & nhật ký phát triển', path: '/about/journal', desc: 'Ghi lại từng bước, giữ lại từng tia nắng' },
      ]
    },
    {
      label: 'Sản phẩm',
      path: '/products',
      dropdown: [
        { label: 'Danh mục sản phẩm', path: '/products', desc: 'Hai dòng balo, những module phụ kiện linh hoạt' },
        { label: 'Công nghệ & hướng dẫn', path: '/products/technology', desc: 'Quang điện CIGS dẻo và mạch sạc bảo vệ BMS' },
        { label: 'Hộ chiếu số NFC', path: '/products/nfc-passport', desc: 'Một chạm xác thực nguồn gốc và bảo hành điện tử' },
      ]
    },
    {
      label: 'Hành trình khám phá',
      path: '/explore',
      dropdown: [
        { label: 'Tổng quan khám phá', path: '/explore', desc: 'Hệ sinh thái ngoài trời bền bỉ và tự do' },
        { label: 'Thư viện tuyến đường', path: '/explore/trails', desc: 'Hồ sơ các cung đường trekking đón nắng đẹp nhất' },
        { label: 'Cung đường Lảo Thẩn', path: '/explore/trails/lao-than', desc: 'Hành trình 2.860m đi giữa những tầng mây Y Tý' },
        { label: 'Lập kế hoạch & checklist', path: '/explore/planner', desc: 'Tính nhu cầu sạc và tạo checklist mang theo' },
        { label: 'SolarBag App', path: '/explore/app', desc: 'Ứng dụng theo dõi năng lượng và bản đồ ngoại tuyến' },
      ]
    },
    {
      label: 'Hành trình ánh sáng',
      path: '/impact',
      dropdown: [
        { label: 'Tổng quan cộng đồng', path: '/impact', desc: 'Mỗi hành trình khám phá là một nguồn sáng sẻ chia' },
        { label: 'Đồng hành cùng chúng tôi', path: '/impact/join', desc: 'Góp balo, tài trợ CSR hoặc tham gia thực địa' },
        { label: 'Minh bạch & báo cáo', path: '/impact/transparency', desc: 'Theo dõi đóng góp và tiến độ trao tặng rõ ràng' },
        { label: 'Cõng trời trên bản', path: '/impact/cong-troi-tren-ban', desc: 'Chiến dịch đưa 250 balo ánh sáng đến Tây Giang' },
      ]
    },
    {
      label: 'Trung tâm hỗ trợ',
      path: '/support/faq',
      dropdown: [
        { label: 'Trung tâm trợ giúp / FAQ', path: '/support/faq', desc: 'Câu hỏi thường gặp về sản phẩm và pin sạc' },
        { label: 'Hướng dẫn sử dụng', path: '/support/user-guide', desc: 'Thao tác sạc, bảo quản balo và sử dụng đèn' },
        { label: 'Bảo hành & sửa chữa', path: '/support/warranty', desc: 'Chính sách bảo hành và form gửi sửa chữa' },
        { label: 'Đổi trả & vận chuyển', path: '/support/shipping-returns', desc: 'Quy trình đổi trả 30 ngày và tra cứu đơn' },
        { label: 'Liên hệ & gửi ticket', path: '/support/contact', desc: 'Kết nối trực tiếp cùng đội ngũ SolarBag' },
      ]
    }
  ];

  const isActive = (item) => {
    if (item.path === '/' && location.pathname === '/') return true;
    if (item.path !== '/' && location.pathname.startsWith(item.path)) return true;
    if (item.dropdown && item.dropdown.some(d => location.pathname === d.path)) return true;
    return false;
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-[#fbf9f4]/95 backdrop-blur-md border-b border-[#e5e0d3] transition-all">
        <div className="w-full max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20 sm:h-24 gap-2">
            
            {/* Brand Logo & Tagline (Shrink-0 to protect width) */}
            <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group shrink-0">
              <div className="relative flex items-center justify-center">
                <img 
                  src="/assets/svg/sun-logo.svg" 
                  alt="SolarBag Logo" 
                  className="w-9 h-9 sm:w-10 sm:h-10 transition-transform duration-500 group-hover:rotate-45"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-[#1F3D2B] leading-none">
                  SolarBag
                </span>
                <span className="font-serif italic text-[10px] sm:text-[11px] text-[#5E7A45] font-medium tracking-wide mt-1 whitespace-nowrap">
                  Mỗi hành trình, một nguồn sáng
                </span>
              </div>
            </Link>

            {/* Desktop Navigation (STRICTLY ONE LINE with whitespace-nowrap) */}
            <nav className="hidden lg:flex items-center gap-0.5 xl:gap-1.5 whitespace-nowrap flex-nowrap shrink-0">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  className="relative group shrink-0"
                  onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center gap-1 px-2.5 xl:px-3 py-2 text-[13.5px] xl:text-[14.5px] font-headline tracking-wide rounded-lg whitespace-nowrap transition-all ${
                      isActive(item)
                        ? 'text-[#1F3D2B] font-bold bg-[#E3DCC8]/50 border-b-2 border-[#F2B632]'
                        : 'text-[#232622]/85 hover:text-[#1F3D2B] hover:bg-[#E3DCC8]/30'
                    }`}
                  >
                    <span className="whitespace-nowrap">{item.label}</span>
                    {item.dropdown && (
                      <ChevronDown className="w-3.5 h-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200 shrink-0" />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {item.dropdown && (
                    <div
                      className={`absolute top-full left-0 w-72 bg-white border border-[#e2ded4] rounded-2xl shadow-xl p-2 transition-all duration-200 origin-top z-50 ${
                        activeDropdown === item.label
                          ? 'opacity-100 scale-100 pointer-events-auto visible'
                          : 'opacity-0 scale-95 pointer-events-none invisible'
                      }`}
                    >
                      <div className="space-y-1">
                        {item.dropdown.map((sub) => (
                          <Link
                            key={sub.path}
                            to={sub.path}
                            onClick={() => setActiveDropdown(null)}
                            className={`block p-2.5 rounded-xl transition-all ${
                              location.pathname === sub.path
                                ? 'bg-[#f4f0e6] text-[#1F3D2B]'
                                : 'hover:bg-[#fbf9f4] text-[#2d372e]'
                            }`}
                          >
                            <span className="font-headline font-semibold text-sm block">
                              {sub.label}
                            </span>
                            {sub.desc && (
                              <span className="text-[11px] text-[#5E7A45] line-clamp-1 mt-0.5 block">
                                {sub.desc}
                              </span>
                            )}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Utility Actions (Search, User Auth, Cart) */}
            <div className="flex items-center gap-1.5 sm:gap-2.5 shrink-0">
              
              {/* Search Trigger */}
              <button
                onClick={() => setIsSearchOpen(true)}
                aria-label="Tìm kiếm"
                className="p-2 sm:p-2.5 rounded-full text-[#333f34] hover:text-[#1F3D2B] hover:bg-[#E3DCC8]/40 transition-colors"
              >
                <Search className="w-5 h-5 stroke-[1.8]" />
              </button>

              {/* User Account / Login Button */}
              <div 
                className="relative"
                onMouseEnter={() => isLoggedIn && setUserMenuOpen(true)}
                onMouseLeave={() => setUserMenuOpen(false)}
              >
                {isLoggedIn ? (
                  <button
                    onClick={() => navigate('/account')}
                    aria-label="Tài khoản"
                    className="flex items-center gap-2 py-1.5 px-2.5 rounded-full bg-[#1F3D2B]/10 hover:bg-[#1F3D2B]/20 border border-[#5E7A45]/30 transition-all text-[#1F3D2B]"
                  >
                    <div className="w-7 h-7 rounded-full bg-[#1F3D2B] text-white flex items-center justify-center font-headline font-bold text-xs">
                      {isAdmin ? 'AD' : (currentUser?.name?.charAt(0) || 'U')}
                    </div>
                    <span className="hidden xl:inline text-xs font-headline font-bold max-w-[100px] truncate">
                      {currentUser?.name}
                    </span>
                    {isAdmin && (
                      <span className="hidden sm:inline px-1.5 py-0.2 rounded bg-[#C2562B] text-white font-mono text-[9px] font-bold">
                        ADMIN
                      </span>
                    )}
                  </button>
                ) : (
                  <button
                    onClick={openLogin}
                    title="Đăng nhập / Đăng ký"
                    className="flex items-center gap-1.5 px-3 py-1.5 sm:py-2 rounded-full bg-[#1F3D2B] hover:bg-[#284F38] text-white text-xs font-headline font-bold transition-all shadow-sm"
                  >
                    <LogIn className="w-3.5 h-3.5 text-[#F2B632]" />
                    <span>Đăng nhập</span>
                  </button>
                )}

                {/* User Dropdown Menu if Logged In */}
                {isLoggedIn && userMenuOpen && (
                  <div className="absolute right-0 top-full mt-1 w-64 bg-white border border-[#e2ded4] rounded-2xl shadow-xl p-3 z-50 animate-fadeIn">
                    <div className="p-2 border-b border-gray-100 mb-2">
                      <p className="font-headline font-bold text-sm text-[#1F3D2B] truncate">
                        {currentUser?.name}
                      </p>
                      <p className="text-[11px] text-[#5E7A45] font-medium truncate">
                        {currentUser?.email}
                      </p>
                      <span className="inline-block mt-1 px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-[#E3DCC8] text-[#1F3D2B]">
                        {currentUser?.tier}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <Link
                        to="/account"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-headline font-semibold text-gray-700 hover:bg-[#f5f2e9] hover:text-[#1F3D2B] rounded-xl transition-colors"
                      >
                        <User className="w-4 h-4 text-[#5E7A45]" />
                        <span>Hồ sơ của tôi (My SolarBag)</span>
                      </Link>

                      <Link
                        to="/account?tab=orders"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-headline font-semibold text-gray-700 hover:bg-[#f5f2e9] hover:text-[#1F3D2B] rounded-xl transition-colors"
                      >
                        <Package className="w-4 h-4 text-[#5E7A45]" />
                        <span>Đơn hàng của tôi</span>
                      </Link>

                      <Link
                        to="/products/nfc-passport"
                        onClick={() => setUserMenuOpen(false)}
                        className="flex items-center gap-2.5 px-3 py-2 text-xs font-headline font-semibold text-gray-700 hover:bg-[#f5f2e9] hover:text-[#1F3D2B] rounded-xl transition-colors"
                      >
                        <Shield className="w-4 h-4 text-[#5E7A45]" />
                        <span>Bảo hành & Hộ chiếu NFC</span>
                      </Link>

                      {isAdmin && (
                        <Link
                          to="/admin"
                          onClick={() => setUserMenuOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 text-xs font-headline font-bold text-[#C2562B] bg-[#C2562B]/10 hover:bg-[#C2562B] hover:text-white rounded-xl transition-colors"
                        >
                          <Sparkles className="w-4 h-4" />
                          <span>Quản trị viên SQLite (solarbag.db)</span>
                        </Link>
                      )}

                      <button
                        onClick={() => {
                          setUserMenuOpen(false);
                          logout();
                        }}
                        className="w-full flex items-center gap-2.5 px-3 py-2 text-xs font-headline font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-colors pt-2 border-t border-gray-100"
                      >
                        <LogOut className="w-4 h-4" />
                        <span>Đăng xuất</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>

              {/* Cart Drawer Trigger */}
              <button
                onClick={() => setIsCartOpen(true)}
                aria-label="Giỏ hành trang"
                className="relative p-2 sm:p-2.5 rounded-full text-[#333f34] hover:text-[#1F3D2B] hover:bg-[#E3DCC8]/40 transition-colors"
              >
                <ShoppingBag className="w-5 h-5 stroke-[1.8]" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-5 h-5 bg-[#F2B632] text-[#1F3D2B] font-mono text-[11px] font-bold rounded-full flex items-center justify-center shadow-sm animate-pulse">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* Mobile menu toggle */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-md text-[#1F3D2B] hover:bg-[#E3DCC8]/40"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>

            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-b border-[#e2ded4] px-4 pt-2 pb-6 space-y-4 max-h-[85vh] overflow-y-auto">
            {/* Mobile Auth Bar */}
            <div className="p-3 bg-[#f5f2e9] rounded-2xl flex items-center justify-between">
              {isLoggedIn ? (
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#1F3D2B] text-white flex items-center justify-center font-headline font-bold text-xs">
                    {isAdmin ? 'AD' : (currentUser?.name?.charAt(0) || 'U')}
                  </div>
                  <div>
                    <p className="font-headline font-bold text-xs text-[#1F3D2B]">{currentUser?.name}</p>
                    <p className="text-[10px] text-[#5E7A45]">{currentUser?.tier}</p>
                  </div>
                </div>
              ) : (
                <span className="text-xs font-serif italic text-gray-600">Đăng nhập để theo dõi đơn và hành trình</span>
              )}

              {isLoggedIn ? (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    logout();
                  }}
                  className="text-xs font-headline font-bold text-red-600 hover:underline"
                >
                  Đăng xuất
                </button>
              ) : (
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    openLogin();
                  }}
                  className="px-3 py-1.5 bg-[#1F3D2B] text-white text-xs font-headline font-bold rounded-xl"
                >
                  Đăng nhập
                </button>
              )}
            </div>

            {/* Account Quick Links in Mobile */}
            {isLoggedIn && (
              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  to="/account"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs font-headline font-bold text-center text-[#1F3D2B]"
                >
                  👤 Hồ sơ của tôi
                </Link>
                <Link
                  to="/account?tab=orders"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 text-xs font-headline font-bold text-center text-[#1F3D2B]"
                >
                  📦 Đơn hàng
                </Link>
              </div>
            )}

            {navItems.map((item) => (
              <div key={item.label} className="border-b border-[#f0ede6] pb-2">
                <Link
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-headline text-base font-bold text-[#1F3D2B] block py-1.5"
                >
                  {item.label}
                </Link>
                {item.dropdown && (
                  <div className="pl-3 space-y-1.5 pt-1">
                    {item.dropdown.map((sub) => (
                      <Link
                        key={sub.path}
                        to={sub.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs text-[#4a5548] hover:text-[#1F3D2B] block py-1 font-medium"
                      >
                        • {sub.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      {/* Global Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </>
  );
}
