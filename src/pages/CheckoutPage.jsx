import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingBag, CheckCircle2, ArrowRight, ShieldCheck, Truck, Tag } from 'lucide-react';

export default function CheckoutPage() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    address: '',
    city: 'Đà Nẵng',
    district: '',
    note: '',
    paymentMethod: 'cod',
  });

  const [promoCode, setPromoCode] = useState('SOLAR20');
  const [discountApplied, setDiscountApplied] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const discountAmount = discountApplied ? Math.round(cartTotal * 0.2) : 0;
  const finalTotal = Math.max(0, cartTotal - discountAmount);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center space-y-6">
        <div className="w-20 h-20 bg-emerald-100 text-emerald-800 rounded-full flex items-center justify-center mx-auto shadow-md">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <div className="space-y-2">
          <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">
            MÃ ĐƠN HÀNG: GN-2026-DEMO
          </span>
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
            Đăng Ký Đặt Hàng Trải Nghiệm Thành Công!
          </h1>
          <p className="text-sm text-[#4a5548] max-w-md mx-auto">
            Cảm ơn bạn <strong>{formData.fullName || 'bạn'}</strong> đã đồng hành cùng GuiNang. Chúng mình đã gửi thư xác nhận đặt hàng đến email <strong>{formData.email}</strong>.
          </p>
        </div>

        <div className="p-6 bg-[#f5f2e9] rounded-2xl border border-[#e2ded4] text-xs text-left space-y-2 max-w-md mx-auto">
          <p><strong>Người nhận:</strong> {formData.fullName} ({formData.phone})</p>
          <p><strong>Địa chỉ:</strong> {formData.address}, {formData.city}</p>
          <p><strong>Tổng giá trị ưu đãi:</strong> {finalTotal.toLocaleString('vi-VN')}đ (Thanh toán khi nhận hàng)</p>
          <p className="text-[#7c8663] italic pt-2 border-t border-[#e2ded4]">
            * Hệ thống thử nghiệm đề án Cuộc thi Sinh viên Kinh doanh số 2026 — Công ty TNHH GuiNang.
          </p>
        </div>

        <div className="pt-4">
          <button
            onClick={() => {
              clearCart();
              navigate('/products');
            }}
            className="px-8 py-3 bg-[#041d15] text-[#efbc5c] rounded-lg font-headline font-bold text-sm hover:bg-[#072b20]"
          >
            Tiếp tục khám phá sản phẩm ↗
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16 pb-24">
      
      {/* 1. Header Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-14 border-b border-[#124636]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            HÀNH TRANG CỦA BẠN
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
            Một bước gần hơn với hành trình mới.
          </h1>
          <p className="text-xs sm:text-sm text-[#d2ded0]">
            GuiNang — Nắng theo chân, sáng muôn miền. Tiếp nhận đăng ký trải nghiệm sản phẩm nguyên mẫu đợt 1 năm 2026.
          </p>
        </div>
      </section>

      {/* 2. Main Checkout Form & Summary */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {cartItems.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-2xl border border-[#e2ded4] p-8 space-y-4">
            <ShoppingBag className="w-12 h-12 text-[#7c8663] mx-auto" />
            <h2 className="font-headline text-2xl font-bold text-[#041d15]">
              Giỏ hành trang chưa có món đồ nào
            </h2>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#041d15] text-[#efbc5c] rounded-md font-headline font-bold text-sm"
            >
              Xem danh mục sản phẩm
            </Link>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Form Left Col */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Receiver Details */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-6">
                <h2 className="font-headline text-2xl font-bold text-[#041d15]">
                  01 / Người nhận & giao hàng
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ví dụ: Nguyễn Văn A"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="09xx xxx xxx"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">
                    Email xác nhận *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="email@cuaban.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">
                    Địa chỉ nhận hàng (Số nhà, đường, phường/xã) *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    placeholder="Số 71 Ngũ Hành Sơn, Phường Mỹ An"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">
                      Tỉnh / Thành phố
                    </label>
                    <select
                      value={formData.city}
                      onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#041d15] bg-white"
                    >
                      <option value="Đà Nẵng">Đà Nẵng</option>
                      <option value="Hà Nội">Hà Nội</option>
                      <option value="TP. Hồ Chí Minh">TP. Hồ Chí Minh</option>
                      <option value="Quảng Nam">Quảng Nam</option>
                      <option value="Thừa Thiên Huế">Thừa Thiên Huế</option>
                      <option value="Khác">Tỉnh thành khác</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">
                      Ghi chú thêm
                    </label>
                    <input
                      type="text"
                      value={formData.note}
                      onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                      placeholder="Giao giờ hành chính..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                    />
                  </div>
                </div>
              </div>

              {/* Step 2: Payment Method */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4">
                <h2 className="font-headline text-2xl font-bold text-[#041d15]">
                  02 / Phương thức thanh toán
                </h2>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 p-4 rounded-xl border border-[#041d15] bg-[#fcfbf7] cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                      className="accent-[#041d15]"
                    />
                    <div>
                      <span className="font-semibold text-xs text-[#041d15] block">
                        Thanh toán khi nhận hàng (COD)
                      </span>
                      <span className="text-[11px] text-[#6c776b]">
                        Kiểm tra balo trước khi thanh toán cho đơn vị vận chuyển.
                      </span>
                    </div>
                  </label>

                  <label className="flex items-center gap-3 p-4 rounded-xl border border-[#e2ded4] hover:bg-[#fcfbf7] cursor-pointer">
                    <input
                      type="radio"
                      name="payment"
                      checked={formData.paymentMethod === 'bank'}
                      onChange={() => setFormData({ ...formData, paymentMethod: 'bank' })}
                      className="accent-[#041d15]"
                    />
                    <div>
                      <span className="font-semibold text-xs text-[#041d15] block">
                        Chuyển khoản ngân hàng qua QR Code
                      </span>
                      <span className="text-[11px] text-[#6c776b]">
                        Nhận hướng dẫn quét mã VietQR tự động.
                      </span>
                    </div>
                  </label>
                </div>
              </div>

            </div>

            {/* Right Summary Col */}
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-6 sticky top-36">
                <h3 className="font-headline text-xl font-bold text-[#041d15]">
                  Tóm tắt đơn hàng ({cartItems.reduce((a, c) => a + c.quantity, 0)} sản phẩm)
                </h3>

                <div className="divide-y divide-[#e2ded4] max-h-60 overflow-y-auto pr-1 space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="pt-3 flex gap-3 items-center">
                      <img src={item.image} alt={item.name} className="w-12 h-12 object-cover rounded bg-[#f4f0e6]" />
                      <div className="flex-1 text-xs">
                        <p className="font-semibold text-[#041d15]">{item.name}</p>
                        <p className="text-[#7c8663]">Số lượng: {item.quantity}</p>
                      </div>
                      <span className="font-mono font-semibold text-xs text-[#041d15]">
                        {(item.price * item.quantity).toLocaleString('vi-VN')}đ
                      </span>
                    </div>
                  ))}
                </div>

                {/* Promo Code Input */}
                <div className="pt-2 border-t border-[#e2ded4] space-y-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                      placeholder="Mã giảm giá"
                      className="flex-1 px-3 py-2 rounded-lg border border-[#e2ded4] text-xs font-mono uppercase outline-none"
                    />
                    <button
                      type="button"
                      onClick={() => setDiscountApplied(promoCode === 'SOLAR20')}
                      className="px-4 py-2 bg-[#041d15] text-[#efbc5c] text-xs font-mono font-bold rounded-lg hover:bg-[#072b20]"
                    >
                      Áp dụng
                    </button>
                  </div>
                  {discountApplied && (
                    <p className="text-[11px] text-emerald-700 flex items-center gap-1 font-mono">
                      ✓ Đã áp dụng mã SOLAR20: Giảm 20% Early-Bird!
                    </p>
                  )}
                </div>

                {/* Price Breakdown */}
                <div className="space-y-2 text-xs border-t border-[#e2ded4] pt-4">
                  <div className="flex justify-between text-[#6c776b]">
                    <span>Tạm tính</span>
                    <span className="font-mono">{cartTotal.toLocaleString('vi-VN')}đ</span>
                  </div>
                  {discountApplied && (
                    <div className="flex justify-between text-emerald-700 font-semibold">
                      <span>Ưu đãi Early-Bird (20%)</span>
                      <span className="font-mono">-{discountAmount.toLocaleString('vi-VN')}đ</span>
                    </div>
                  )}
                  <div className="flex justify-between text-[#6c776b]">
                    <span>Phí giao hàng</span>
                    <span className="text-emerald-700 font-medium">Miễn phí toàn quốc</span>
                  </div>
                  <div className="flex justify-between text-base font-bold text-[#041d15] pt-3 border-t border-[#e2ded4]">
                    <span>Tổng thanh toán</span>
                    <span className="font-mono text-xl text-[#041d15]">
                      {finalTotal.toLocaleString('vi-VN')}đ
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-xl font-headline font-bold text-base tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                >
                  Xác nhận đặt trước hành trang
                  <ArrowRight className="w-4 h-4" />
                </button>

                <p className="text-[11px] text-[#a0ac9d] text-center">
                  Bản xem trước · Không trừ tiền thực tế · Đội ngũ SolarBag sẽ liên hệ xác nhận.
                </p>
              </div>
            </div>

          </form>
        )}
      </section>

    </div>
  );
}

