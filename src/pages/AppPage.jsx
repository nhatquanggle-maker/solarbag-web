import React, { useState } from 'react';
import { Smartphone, Zap, Map, Battery, Share2, QrCode, CheckCircle2, ArrowRight } from 'lucide-react';

export default function AppPage() {
  const [email, setEmail] = useState('');
  const [invited, setInvited] = useState(false);

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-20 border-b border-[#124636] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase bg-black/40 px-3.5 py-1.5 rounded-full border border-[#efbc5c]/30">
            HỆ ĐIỀU HÀNH CHO HÀNH TRÌNH KHÁM PHÁ
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase">
            Hiểu nguồn điện. <br />
            <span className="text-[#efbc5c] font-serif italic normal-case">Hiểu cả hành trình.</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#d2ded0] leading-relaxed">
            Ứng dụng di động SolarBag App kết nối không dây Bluetooth Low Energy (BLE) với vi mạch balo, mang dữ liệu sạc và bản đồ vệ tinh ngoại tuyến đến ngay trong tầm tay.
          </p>
        </div>
      </section>

      {/* 2. 4 Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            BỐN CÁCH ĐỂ ĐỒNG HÀNH
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
            Những Tính Năng Được Thiết Kế Cho Người Leo Núi
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#041d15] text-[#efbc5c] flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">01 / NĂNG LƯỢNG</span>
            <h3 className="font-headline text-xl font-bold text-[#041d15]">
              Công suất & Mức pin
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Hiển thị tức thời dòng điện sạc (Watts), cường độ tia UV ngoài trời và ước tính thời gian cần thiết để sạc đầy thiết bị kết nối.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#041d15] text-[#efbc5c] flex items-center justify-center">
              <Map className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">02 / CUNG ĐƯỜNG</span>
            <h3 className="font-headline text-xl font-bold text-[#041d15]">
              Bản đồ GPS ngoại tuyến
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Tải trước file bản đồ GPX của các đỉnh núi Lảo Thẩn, Tà Xùa, Fansipan... hoạt động trơn tru ngay cả khi mất hoàn toàn sóng di động 4G.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#041d15] text-[#efbc5c] flex items-center justify-center">
              <Battery className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">03 / BẢO DƯỠNG</span>
            <h3 className="font-headline text-xl font-bold text-[#041d15]">
              Sức khỏe pin & NFC
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Theo dõi số chu kỳ sạc-xả của pin Li-ion, cảnh báo khi nhiệt độ buồng pin vượt ngưỡng an toàn và một chạm kích hoạt bảo hành.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#041d15] text-[#efbc5c] flex items-center justify-center">
              <Share2 className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">04 / KẾT NỐI</span>
            <h3 className="font-headline text-xl font-bold text-[#041d15]">
              Nhật ký cộng đồng
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Ghi lại quãng đường, độ cao đạt được và tổng lượng điện xanh thu nạp được trên mỗi chuyến đi để chia sẻ cùng các trekker khác.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Beta Test Signup */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#e2ded4] shadow-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-8 space-y-4">
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">HẸN BẠN KHI SẴN SÀNG</span>
            <h2 className="font-headline text-3xl font-bold text-[#041d15]">
              Nhận lời mời thử nghiệm SolarBag App Beta
            </h2>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Đăng ký email để nhận bản cài đặt thử nghiệm TestFlight (iOS) hoặc APK (Android) trước ngày ra mắt chính thức.
            </p>

            {invited ? (
              <div className="p-3.5 bg-emerald-50 border border-emerald-200 rounded-xl text-xs text-emerald-800 font-medium flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                Cảm ơn bạn! Chúng mình sẽ gửi link thử nghiệm app ngay khi đợt Beta mở.
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); if (email) setInvited(true); }} className="flex gap-2 pt-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Nhập email của bạn..."
                  className="flex-1 px-4 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                />
                <button
                  type="submit"
                  className="px-5 py-2.5 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-lg font-headline font-bold text-xs"
                >
                  Nhận lời mời ↗
                </button>
              </form>
            )}
          </div>

          <div className="md:col-span-4 text-center p-6 bg-[#fcfbf7] rounded-2xl border border-[#e2ded4] space-y-2">
            <div className="w-24 h-24 bg-white border border-[#e2ded4] rounded-xl flex items-center justify-center mx-auto shadow-sm">
              <QrCode className="w-16 h-16 text-[#041d15]" />
            </div>
            <p className="text-[11px] font-mono text-[#7c8663]">
              QR Code tải app dự kiến trên App Store & Google Play
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}

