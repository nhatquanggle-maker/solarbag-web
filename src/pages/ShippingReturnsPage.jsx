import React, { useState } from 'react';
import { Truck, RotateCcw, PackageCheck, Search, CheckCircle2 } from 'lucide-react';

export default function ShippingReturnsPage() {
  const [orderCode, setOrderCode] = useState('GN-DEMO-ORDER');
  const [orderStatus, setOrderStatus] = useState(null);

  const handleTrack = (e) => {
    e.preventDefault();
    if (orderCode.trim()) {
      setOrderStatus({
        code: orderCode.toUpperCase(),
        carrier: 'Giao Hàng Tiết Kiệm (GHTK) / Viettel Post',
        status: 'Đang xuất kho từ Xưởng Trạm Nắng Đà Nẵng',
        eta: 'Dự kiến giao ngày mai (Trước 17:00)',
        items: '01 × GuiNang Trail 40L (Kèm chip NFC Product Passport)'
      });
    }
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Header Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-16 border-b border-[#124636] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            AN TÂM TRÊN TỪNG CHẶNG
          </span>
          <h1 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
            Giao nhận minh bạch — <span className="text-[#efbc5c] font-serif italic normal-case whitespace-normal sm:whitespace-nowrap">Hỗ trợ trọn hành trình</span>
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-xl mx-auto">
            Chính sách giao hàng toàn quốc và quy trình đổi mới 30 ngày bảo vệ tối đa trải nghiệm người dùng.
          </p>
        </div>
      </section>

      {/* 2. Order Tracking Box */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e2ded4] shadow-sm space-y-6">
          <div className="space-y-1 text-center">
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">
              THEO DÕI VẬN CHUYỂN
            </span>
            <h2 className="font-headline text-2xl font-bold text-[#041d15]">
              Biết hành trang đang ở chặng nào
            </h2>
          </div>

          <form onSubmit={handleTrack} className="flex gap-2">
            <input
              type="text"
              required
              value={orderCode}
              onChange={(e) => setOrderCode(e.target.value)}
              placeholder="Nhập mã đơn hàng ví dụ SB-DEMO-ORDER..."
              className="flex-1 px-4 py-3 rounded-xl border border-[#e2ded4] text-xs font-mono uppercase outline-none focus:border-[#041d15]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-xl font-headline font-bold text-xs shrink-0"
            >
              Tra Cứu Đơn ↗
            </button>
          </form>

          {orderStatus && (
            <div className="p-6 bg-[#fcfbf7] rounded-2xl border border-[#e2ded4] space-y-2.5 text-xs">
              <div className="flex items-center justify-between border-b border-[#e2ded4] pb-2">
                <span className="font-mono font-bold text-[#041d15]">Mã đơn: {orderStatus.code}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800 font-bold text-[11px]">
                  {orderStatus.status}
                </span>
              </div>
              <div className="space-y-1 text-[#4a5548]">
                <p><strong>Đơn vị vận chuyển:</strong> {orderStatus.carrier}</p>
                <p><strong>Dự kiến nhận hàng:</strong> {orderStatus.eta}</p>
                <p><strong>Sản phẩm:</strong> {orderStatus.items}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. 3-step Return Process */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            QUY TRÌNH 3 BƯỚC ĐỔI MỚI
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
            Một quy trình, từng bước rõ ràng
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-3">
            <span className="w-8 h-8 rounded-full bg-[#041d15] text-[#efbc5c] font-mono text-xs font-bold flex items-center justify-center">
              01
            </span>
            <h3 className="font-headline text-xl font-bold text-[#041d15]">Gửi yêu cầu đổi trả</h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Liên hệ tổng đài 1900 6868 hoặc gửi ticket trực tuyến kèm video ngắn mô tả lỗi kỹ thuật trong 30 ngày kể từ ngày nhận balo.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-3">
            <span className="w-8 h-8 rounded-full bg-[#041d15] text-[#efbc5c] font-mono text-xs font-bold flex items-center justify-center">
              02
            </span>
            <h3 className="font-headline text-xl font-bold text-[#041d15]">Shipper thu hồi tận nhà</h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Bạn không cần mang ra bưu cục; nhân viên giao nhận sẽ đến tận địa chỉ của bạn để tiếp nhận kiện hàng hoàn toàn miễn phí.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-3">
            <span className="w-8 h-8 rounded-full bg-[#041d15] text-[#efbc5c] font-mono text-xs font-bold flex items-center justify-center">
              03
            </span>
            <h3 className="font-headline text-xl font-bold text-[#041d15]">Bàn giao balo mới</h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Ngay khi trung tâm nhận được sản phẩm cũ, chiếc balo mới nguyên seal sẽ được kích hoạt thẻ NFC và gửi hỏa tốc đến bạn.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

