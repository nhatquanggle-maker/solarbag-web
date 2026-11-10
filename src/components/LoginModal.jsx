import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { X, Lock, Mail, User, Phone, ShieldCheck, ArrowRight, UserCheck } from 'lucide-react';

export default function LoginModal() {
  const {
    isAuthModalOpen,
    closeAuthModal,
    authMode,
    openLogin,
    openRegister,
    login,
    register,
    loginAsCustomer,
    loginAsAdmin
  } = useAuth();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: '',
    role: 'customer'
  });

  const [errorMsg, setErrorMsg] = useState('');

  if (!isAuthModalOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (authMode === 'login') {
      if (!formData.email) {
        setErrorMsg('Vui lòng nhập email đăng nhập');
        return;
      }
      login(formData.email, formData.password, formData.role);
    } else {
      if (!formData.name || !formData.email) {
        setErrorMsg('Vui lòng điền đầy đủ họ tên và email');
        return;
      }
      register(formData);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-[#fcfbf7] rounded-3xl border border-[#5E7A45]/30 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Banner */}
        <div className="bg-[#1F3D2B] text-[#FFFFFF] px-6 py-6 border-b border-[#5E7A45]/40 relative">
          <button
            onClick={closeAuthModal}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-[#E3DCC8] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-3 mb-3">
            <img src="/assets/brand/brand_logo.png" alt="Gùi Nắng - GuiNang" className="w-10 h-10 object-contain drop-shadow-sm" />
            <span className="font-headline text-lg tracking-wider text-[#F2B632]">GUINANG ACCOUNT</span>
          </div>
          <h3 className="font-headline text-2xl font-bold tracking-tight text-white">
            {authMode === 'login' ? 'Chào mừng bạn quay lại' : 'Tạo tài khoản thành viên'}
          </h3>
          <p className="font-serif italic text-xs text-[#E3DCC8]/80 mt-1">
            Mỗi tài khoản, một kết nối bền vững cùng nguồn sáng bản cao.
          </p>

          {/* Tab Switcher */}
          <div className="flex bg-[#162C1F] p-1 rounded-xl mt-4 border border-[#5E7A45]/40">
            <button
              onClick={openLogin}
              className={`flex-1 py-1.5 text-xs font-headline font-bold rounded-lg transition-all ${
                authMode === 'login'
                  ? 'bg-[#F2B632] text-[#1F3D2B] shadow-sm'
                  : 'text-[#E3DCC8]/70 hover:text-white'
              }`}
            >
              Đăng nhập
            </button>
            <button
              onClick={openRegister}
              className={`flex-1 py-1.5 text-xs font-headline font-bold rounded-lg transition-all ${
                authMode === 'register'
                  ? 'bg-[#F2B632] text-[#1F3D2B] shadow-sm'
                  : 'text-[#E3DCC8]/70 hover:text-white'
              }`}
            >
              Đăng ký mới
            </button>
          </div>
        </div>

        {/* Quick Demo Login Bar for Testing */}
        <div className="bg-[#E3DCC8]/40 border-b border-[#5E7A45]/20 px-6 py-3">
          <p className="text-[11px] font-mono font-bold text-[#1F3D2B] uppercase mb-1.5 flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#5E7A45]" />
            Thử nghiệm nhanh phân quyền:
          </p>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={loginAsCustomer}
              className="px-3 py-1.5 bg-white hover:bg-[#F2B632]/20 border border-[#5E7A45]/30 rounded-lg text-xs font-headline font-bold text-[#1F3D2B] flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <UserCheck className="w-3.5 h-3.5 text-[#5E7A45]" />
              Khách hàng
            </button>
            <button
              type="button"
              onClick={loginAsAdmin}
              className="px-3 py-1.5 bg-[#1F3D2B] hover:bg-[#284F38] border border-[#F2B632]/40 rounded-lg text-xs font-headline font-bold text-[#F2B632] flex items-center justify-center gap-1.5 transition-colors shadow-sm"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#F2B632]" />
              Quản trị (Admin)
            </button>
          </div>
        </div>

        {/* Main Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {errorMsg && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-xl">
              {errorMsg}
            </div>
          )}

          {authMode === 'register' && (
            <div>
              <label className="block text-xs font-headline font-bold text-[#1F3D2B] mb-1">
                Họ và tên
              </label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  required
                  placeholder="Nguyễn Văn A"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#5E7A45]/30 rounded-xl focus:outline-none focus:border-[#F2B632] transition-colors"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-headline font-bold text-[#1F3D2B] mb-1">
              Địa chỉ Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="email"
                required
                placeholder="name@example.com (hoặc admin@solarbag.vn)"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#5E7A45]/30 rounded-xl focus:outline-none focus:border-[#F2B632] transition-colors"
              />
            </div>
          </div>

          {authMode === 'register' && (
            <div>
              <label className="block text-xs font-headline font-bold text-[#1F3D2B] mb-1">
                Số điện thoại
              </label>
              <div className="relative">
                <Phone className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
                <input
                  type="tel"
                  placeholder="0905 123 456"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#5E7A45]/30 rounded-xl focus:outline-none focus:border-[#F2B632] transition-colors"
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-headline font-bold text-[#1F3D2B] mb-1">
              Mật khẩu
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
              <input
                type="password"
                required
                placeholder="••••••••"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                className="w-full pl-9 pr-3 py-2 text-sm bg-white border border-[#5E7A45]/30 rounded-xl focus:outline-none focus:border-[#F2B632] transition-colors"
              />
            </div>
          </div>

          {/* Role selector on Login */}
          {authMode === 'login' && (
            <div className="pt-1">
              <label className="block text-xs font-headline font-bold text-[#1F3D2B] mb-1.5">
                Quyền hạn đăng nhập:
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs transition-all ${
                  formData.role === 'customer' 
                    ? 'border-[#1F3D2B] bg-[#1F3D2B]/5 font-bold text-[#1F3D2B]' 
                    : 'border-gray-200 text-gray-600'
                }`}>
                  <input
                    type="radio"
                    name="role"
                    value="customer"
                    checked={formData.role === 'customer'}
                    onChange={() => setFormData({ ...formData, role: 'customer' })}
                    className="accent-[#1F3D2B]"
                  />
                  <span>Khách hàng</span>
                </label>

                <label className={`flex items-center gap-2 p-2.5 rounded-xl border cursor-pointer text-xs transition-all ${
                  formData.role === 'admin' 
                    ? 'border-[#C2562B] bg-[#C2562B]/10 font-bold text-[#C2562B]' 
                    : 'border-gray-200 text-gray-600'
                }`}>
                  <input
                    type="radio"
                    name="role"
                    value="admin"
                    checked={formData.role === 'admin'}
                    onChange={() => setFormData({ ...formData, role: 'admin' })}
                    className="accent-[#C2562B]"
                  />
                  <span>Quản trị viên</span>
                </label>
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full mt-2 py-3 bg-[#1F3D2B] hover:bg-[#284F38] text-white rounded-xl font-headline font-bold text-sm tracking-wide transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
          >
            <span>{authMode === 'login' ? 'Đăng nhập vào hệ thống' : 'Hoàn tất đăng ký'}</span>
            <ArrowRight className="w-4 h-4 text-[#F2B632]" />
          </button>
        </form>

        {/* Footer info */}
        <div className="px-6 py-4 bg-[#f4f1ea] border-t border-[#5E7A45]/20 text-center text-xs text-[#232622]/70">
          {authMode === 'login' ? (
            <p>
              Chưa có tài khoản?{' '}
              <button onClick={openRegister} className="text-[#C2562B] font-bold hover:underline">
                Đăng ký ngay
              </button>
            </p>
          ) : (
            <p>
              Đã có tài khoản?{' '}
              <button onClick={openLogin} className="text-[#1F3D2B] font-bold hover:underline">
                Đăng nhập
              </button>
            </p>
          )}
        </div>

      </div>
    </div>
  );
}

