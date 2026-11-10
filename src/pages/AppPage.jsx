import React, { useState } from 'react';
import { Smartphone, Zap, Map, Battery, Share2, QrCode, CheckCircle2, ArrowRight, ShieldCheck, Crown, Radio, Sparkles } from 'lucide-react';

export default function AppPage() {
  const [email, setEmail] = useState('');
  const [invited, setInvited] = useState(false);

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-20 border-b border-[#124636] relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#efbc5c]/20 text-[#efbc5c] rounded-full text-xs font-mono font-bold tracking-widest uppercase border border-[#efbc5c]/30">
            <Smartphone className="w-3.5 h-3.5" /> HỆ SINH THÁI SỐ GUINANG
          </div>
          <h1 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
            Hiểu nguồn điện — <span className="text-[#efbc5c] font-serif italic normal-case whitespace-normal sm:whitespace-nowrap">Làm chủ cả hành trình</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#d2ded0] leading-relaxed">
            Ứng dụng di động <strong>SolarBag App</strong> kết nối trực tiếp với chip NFC và module balo, mang dữ liệu sạc mặt trời thời gian thực, bản đồ ngoại tuyến và kết nối bảo hành về trong lòng bàn tay.
          </p>
        </div>
      </section>

      {/* 2. 4 Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-4xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            CÔNG NGHỆ PHỤC VỤ TRẢI NGHIỆM
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-[#041d15] whitespace-normal sm:whitespace-nowrap">
            4 Trụ Cột Tính Năng Trên SolarBag App
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#041d15] text-[#efbc5c] flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">01 / NĂNG LƯỢNG</span>
            <h3 className="font-headline text-xl font-bold text-[#041d15]">
              Đo đạc Wh thời gian thực
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Hiển thị tức thời dòng điện sạc (Watts), sản lượng điện sạch tích lũy (Wh), cường độ quang năng ngoài trời và thời gian ước tính đầy pin 18650.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#041d15] text-[#efbc5c] flex items-center justify-center">
              <Map className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">02 / ĐỊA HÌNH OFFLINE</span>
            <h3 className="font-headline text-xl font-bold text-[#041d15]">
              Bản đồ GPS ngoại tuyến
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Tải trước file bản đồ Topo độ phân giải cao của hơn 50 đỉnh núi Việt Nam (Lảo Thẩn, Tà Xùa, Bạch Mộc...), hoạt động chính xác ngay cả khi mất sóng 4G.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#041d15] text-[#efbc5c] flex items-center justify-center">
              <Radio className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">03 / PRODUCT PASSPORT</span>
            <h3 className="font-headline text-xl font-bold text-[#041d15]">
              Hộ chiếu số & Bảo hành
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Chạm NFC kích hoạt bảo hành điện tử 12 tháng tại Xưởng Trạm Nắng, ghi nhận số chu kỳ sạc pin và kiểm tra mã đóng góp Quỹ Ánh Sáng Bản Cao.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-xl bg-[#041d15] text-[#efbc5c] flex items-center justify-center">
              <Share2 className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">04 / KHẨN CẤP & CỘNG ĐỒNG</span>
            <h3 className="font-headline text-xl font-bold text-[#041d15]">
              Báo hiệu cứu hộ SOS
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Kích hoạt chế độ chớp đèn LED SOS và tự động gửi tọa độ GPS cuối cùng tới số liên hệ khẩn cấp qua giao thức SMS khi phát hiện đi lạc hoặc chấn thương.
            </p>
          </div>
        </div>
      </section>

      {/* 3. 3 Tiers of Accounts: Free, Owner, VIP */}
      <section className="bg-[#f5f2e9] py-20 border-y border-[#e2ded4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              MÔ HÌNH HỘI VIÊN DỊCH VỤ SỐ
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
              Các Gói Tài Khoản Trên Ứng Dụng GuiNang
            </h2>
            <p className="text-xs sm:text-sm text-[#4a5548]">
              Được thiết kế linh hoạt từ người yêu thiên nhiên đến vận động viên trekking chuyên nghiệp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free */}
            <div className="p-8 bg-white rounded-3xl border border-[#e2ded4] shadow-sm space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <span className="px-3 py-1 bg-[#f5f2e9] text-[#4a5548] font-mono text-xs font-bold rounded-full">
                  MIỄN PHÍ
                </span>
                <h3 className="font-headline text-2xl font-bold text-[#041d15]">Người Dùng Tự Do</h3>
                <div className="font-headline text-3xl font-bold text-[#041d15]">
                  0 VNĐ
                </div>
                <ul className="space-y-2 text-xs text-[#4a5548]">
                  <li>✓ Cẩm nang kỹ năng trekking & sinh tồn an toàn</li>
                  <li>✓ Bản đồ trực tuyến các cung đường leo núi phổ biến</li>
                  <li>✓ Tham gia diễn đàn chia sẻ nhật ký cộng đồng</li>
                </ul>
              </div>
              <button className="w-full py-3 bg-[#f5f2e9] text-[#041d15] font-headline font-bold text-xs rounded-xl hover:bg-[#e2ded4]">
                Tải ứng dụng miễn phí
              </button>
            </div>

            {/* SolarBag Owner */}
            <div className="p-8 bg-white rounded-3xl border-2 border-[#7c8663] shadow-md space-y-6 flex flex-col justify-between relative">
              <span className="absolute -top-3 left-8 px-3 py-0.5 bg-[#7c8663] text-white text-[10px] font-mono font-bold uppercase rounded-full">
                DÀNH CHO CHỦ SỞ HỮU BALO
              </span>
              <div className="space-y-4">
                <span className="px-3 py-1 bg-[#7c8663]/10 text-[#7c8663] font-mono text-xs font-bold rounded-full">
                  KÍCH HOẠT QUA NFC
                </span>
                <h3 className="font-headline text-2xl font-bold text-[#041d15]">GuiNang Owner</h3>
                <div className="font-headline text-3xl font-bold text-[#041d15]">
                  Trọn đời <span className="text-xs font-normal text-[#6c776b]">khi mua Trail / Edu</span>
                </div>
                <ul className="space-y-2 text-xs text-[#4a5548]">
                  <li>✓ Quét 1 chạm NFC mở hồ sơ Product Passport</li>
                  <li>✓ Bảo hành điện tử 12 tháng tại Xưởng Trạm Nắng</li>
                  <li>✓ Theo dõi thông số pin, điện áp solar và chu kỳ sạc</li>
                  <li>✓ Chứng nhận bảo trợ Quỹ Ánh Sáng Bản Cao</li>
                </ul>
              </div>
              <button className="w-full py-3 bg-[#041d15] text-[#efbc5c] font-headline font-bold text-xs rounded-xl hover:bg-[#072b20]">
                Quét thẻ NFC trên quai cặp
              </button>
            </div>

            {/* VIP Tier */}
            <div className="p-8 bg-[#041d15] text-[#f5f5e9] rounded-3xl border border-[#efbc5c]/40 shadow-xl space-y-6 flex flex-col justify-between relative">
              <span className="absolute -top-3 left-8 px-3 py-0.5 bg-[#efbc5c] text-[#041d15] text-[10px] font-mono font-bold uppercase rounded-full">
                DỊCH VỤ SỐ CAO CẤP
              </span>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-[#efbc5c]" />
                  <span className="px-3 py-1 bg-[#efbc5c]/20 text-[#efbc5c] font-mono text-xs font-bold rounded-full">
                    GÓI HỘI VIÊN VIP
                  </span>
                </div>
                <h3 className="font-headline text-2xl font-bold text-white">VIP Trekker Club</h3>
                <div className="font-headline text-3xl font-bold text-[#efbc5c]">
                  99.000 VNĐ <span className="text-xs font-normal text-[#d2ded0]">/ năm</span>
                </div>
                <ul className="space-y-2 text-xs text-[#d2ded0]">
                  <li>★ Tải không giới hạn 50+ bản đồ Topo 3D ngoại tuyến</li>
                  <li>★ Tính năng gửi tín hiệu khẩn cấp SOS và tọa độ GPS</li>
                  <li>★ Giảm 10% khi bảo dưỡng, thay phụ kiện tại Trạm Nắng</li>
                  <li>★ Ưu tiên tham gia các chuyến trekking thực địa bản cao</li>
                </ul>
              </div>
              <button className="w-full py-3 bg-[#efbc5c] text-[#041d15] font-headline font-bold text-xs rounded-xl hover:bg-[#f6d288] shadow">
                Đăng ký VIP 99.000đ/năm ↗
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Sơ đồ cấu trúc ứng dụng */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            KIẾN TRÚC PHẦN MỀM ỨNG DỤNG
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-[#041d15] whitespace-normal sm:whitespace-nowrap">
            Sơ Đồ Phân Hệ Chức Năng SolarBag App
          </h2>
        </div>

        <div className="bg-white p-6 rounded-3xl border border-[#e2ded4] shadow-sm">
          <img 
            src="/assets/project/app_structure.png" 
            alt="Sơ đồ cấu trúc ứng dụng SolarBag App"
            className="w-full max-h-[420px] object-contain mx-auto"
          />
        </div>
      </section>

      {/* 5. Beta Test Signup */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-14 border border-[#e2ded4] shadow-md grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-8 space-y-4">
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">HẸN BẠN KHI SẴN SÀNG</span>
            <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#041d15]">
              Nhận lời mời thử nghiệm SolarBag App Beta
            </h2>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Đăng ký email để nhận bản cài đặt thử nghiệm TestFlight (iOS) hoặc APK (Android) trước ngày ra mắt chính thức cùng phiên bản GuiNang Trail 2026.
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
                  className="flex-1 px-4 py-3 rounded-xl border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-xl font-headline font-bold text-xs transition-colors shrink-0"
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
              QR Code tải app trên iOS App Store & Android Google Play
            </p>
          </div>

        </div>
      </section>

    </div>
  );
}
