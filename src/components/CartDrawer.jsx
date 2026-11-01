import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight } from 'lucide-react';

export default function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();
  const navigate = useNavigate();

  if (!isCartOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#fcfbf7] border-l border-[#e2ded4] shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 border-b border-[#e2ded4] flex items-center justify-between bg-[#041d15] text-[#f5f5e9]">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#efbc5c]" />
              <h2 className="font-headline text-xl font-bold tracking-tight">
                Giỏ hành trang
              </h2>
              <span className="text-xs bg-[#efbc5c]/20 text-[#efbc5c] px-2 py-0.5 rounded-full font-mono">
                {cartItems.reduce((a, c) => a + c.quantity, 0)} món
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="p-1.5 text-[#a0ac9d] hover:text-[#f5f5e9] rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cartItems.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-[#f4f0e6] flex items-center justify-center text-[#7c8663]">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <div className="space-y-1">
                  <p className="font-medium text-[#1e261e]">Giỏ hành trang đang trống</p>
                  <p className="text-xs text-[#6c776b]">Hãy chọn một người bạn đồng hành cho chuyến đi tiếp theo.</p>
                </div>
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/products');
                  }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#041d15] text-[#efbc5c] rounded-md text-sm font-medium hover:bg-[#072b20] transition-colors"
                >
                  Khám phá sản phẩm
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.id}
                  className="flex gap-4 p-3 bg-white rounded-lg border border-[#e2ded4] shadow-sm relative group"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md bg-[#f4f0e6] border border-[#e2ded4]/60"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start">
                        <h4 className="font-headline font-semibold text-sm text-[#1e261e] truncate pr-4">
                          {item.name}
                        </h4>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#a0ac9d] hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      {item.category && (
                        <p className="text-[11px] text-[#7c8663] font-mono uppercase tracking-wider">
                          {item.category}
                        </p>
                      )}
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-[#e2ded4] rounded bg-[#fcfbf7]">
                        <button
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 text-[#6c776b] hover:text-[#1e261e] hover:bg-[#e2ded4]/40 transition-colors"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-2.5 text-xs font-mono font-medium text-[#1e261e]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 text-[#6c776b] hover:text-[#1e261e] hover:bg-[#e2ded4]/40 transition-colors"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <span className="font-mono font-semibold text-sm text-[#041d15]">
                        {(item.price * item.quantity).toLocaleString('vi-VN')}đ
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Summary */}
          {cartItems.length > 0 && (
            <div className="p-6 border-t border-[#e2ded4] bg-white space-y-4">
              <div className="space-y-1.5 text-sm">
                <div className="flex justify-between text-[#6c776b]">
                  <span>Tạm tính</span>
                  <span className="font-mono">{cartTotal.toLocaleString('vi-VN')}đ</span>
                </div>
                <div className="flex justify-between text-[#6c776b]">
                  <span>Vận chuyển toàn quốc</span>
                  <span className="text-emerald-700 font-medium">Miễn phí</span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#1e261e] pt-2 border-t border-[#e2ded4]">
                  <span>Tổng cộng</span>
                  <span className="font-mono text-lg text-[#041d15]">
                    {cartTotal.toLocaleString('vi-VN')}đ
                  </span>
                </div>
              </div>

              <div className="space-y-2 pt-1">
                <button
                  onClick={() => {
                    setIsCartOpen(false);
                    navigate('/checkout');
                  }}
                  className="w-full py-3 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-md font-headline font-semibold text-base tracking-wide flex items-center justify-center gap-2 transition-all shadow-md hover:shadow-lg"
                >
                  Tiến hành thanh toán
                  <ArrowRight className="w-4 h-4" />
                </button>
                <p className="text-[11px] text-center text-[#a0ac9d]">
                  Bản xem trước nguyên mẫu · Không phát sinh trừ tiền thực tế.
                </p>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}

