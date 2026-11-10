import React, { useState } from 'react';
import { ShieldCheck, Wrench, RefreshCw, CheckCircle2, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export default function WarrantyPage() {
  const [serial, setSerial] = useState('GN-TRAIL-2026-0089');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [issue, setIssue] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Header Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-20 border-b border-[#124636] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#efbc5c]/20 text-[#efbc5c] rounded-full text-xs font-mono font-bold tracking-widest uppercase border border-[#efbc5c]/30">
            <ShieldCheck className="w-3.5 h-3.5" /> BẢO DƯỠNG & SỬA CHỮA TẠI XƯỞNG TRẠM NẮNG
          </div>
          <h1 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
            Balo GuiNang — <span className="text-[#efbc5c] font-serif italic normal-case whitespace-normal sm:whitespace-nowrap">Bền bỉ trên mọi dặm đường</span>
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-xl mx-auto leading-relaxed">
            Chính sách bảo hành minh bạch 12 tháng và hỗ trợ sửa chữa trọn đời tại Xưởng Trạm Nắng Đà Nẵng giúp kéo dài tuổi thọ sản phẩm, triệt tiêu rác thải điện tử ra môi trường tự nhiên.
          </p>
        </div>
      </section>

      {/* 2. Warranty Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-3xl border border-[#e2ded4] shadow-sm space-y-4">
            <span className="font-mono text-xs font-bold text-[#efbc5c] bg-[#041d15] px-3 py-1 rounded">
              12 THÁNG
            </span>
            <h3 className="font-headline text-2xl font-bold text-[#041d15]">
              Tấm Solar & Vi Mạch TP4056
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Bảo hành 1 đổi 1 trong 30 ngày đầu tiên nếu phát sinh lỗi từ nhà sản xuất; bảo hành sửa chữa, hiệu chỉnh điện áp và thay thế linh kiện miễn phí trong 12 tháng tại Xưởng Trạm Nắng.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#e2ded4] shadow-sm space-y-4">
            <span className="font-mono text-xs font-bold text-[#efbc5c] bg-[#041d15] px-3 py-1 rounded">
              06 THÁNG
            </span>
            <h3 className="font-headline text-2xl font-bold text-[#041d15]">
              Đèn Solar Lamp 70g
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Bảo hành chip LED COB 3W, cảm biến tự động MOSFET IRF4905, công tắc cơ và cổng nạp sạc USB-C trong vòng 6 tháng kể từ ngày quét kích hoạt qua NFC.
            </p>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-[#e2ded4] shadow-sm space-y-4">
            <span className="font-mono text-xs font-bold text-[#efbc5c] bg-[#041d15] px-3 py-1 rounded">
              TRỌN ĐỜI
            </span>
            <h3 className="font-headline text-2xl font-bold text-[#041d15]">
              Đường May & Khung Trợ Lực
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Hỗ trợ bảo dưỡng, gia cố đường may vải Ripstop chịu tải trọng và thay thế đầu khóa zip trọn đời sản phẩm để bạn an tâm chinh phục mọi cung đường rừng núi.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Warranty Claim Form */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#e2ded4] shadow-md space-y-6">
          <div className="space-y-2 text-center">
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">
              TIẾP NHẬN BẢO HÀNH TRỰC TUYẾN
            </span>
            <h2 className="font-headline text-3xl font-bold text-[#041d15]">
              Cho chúng mình biết điều cần chăm sóc
            </h2>
            <p className="text-xs text-[#6c776b]">
              Điền thông tin sự cố, chuyên viên kỹ thuật Xưởng Trạm Nắng sẽ liên hệ hướng dẫn gửi balo về xưởng.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-headline text-2xl font-bold text-emerald-900">
                Đã Tiếp Nhận Yêu Cầu Bảo Hành!
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800">
                Mã tiếp nhận: <strong>#GN-RMA-2026-881</strong>. Kỹ thuật viên Xưởng Trạm Nắng sẽ gọi lại cho bạn qua số điện thoại <strong>{phone}</strong> trong vòng 4 giờ làm việc.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">
                  Mã Serial sản phẩm (GN-… hoặc quét trong Product Passport NFC) *
                </label>
                <input
                  type="text"
                  required
                  value={serial}
                  onChange={(e) => setSerial(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-[#e2ded4] text-xs font-mono outline-none focus:border-[#041d15]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">Họ tên chủ sở hữu *</label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 rounded-xl border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">Số điện thoại liên hệ *</label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="09xx xxx xxx"
                    className="w-full px-4 py-3 rounded-xl border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">
                  Mô tả tình trạng cần hỗ trợ hoặc sửa chữa *
                </label>
                <textarea
                  rows="3"
                  required
                  value={issue}
                  onChange={(e) => setIssue(e.target.value)}
                  placeholder="Ví dụ: Tấm pin sạc chậm hơn bình thường, đèn LED không tự sáng khi trời tối, bung chỉ đường may đáy..."
                  className="w-full px-4 py-3 rounded-xl border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-xl font-headline font-bold text-sm tracking-wide shadow-md transition-colors"
              >
                Gửi yêu cầu bảo hành tới Xưởng Trạm Nắng ↗
              </button>
            </form>
          )}

          <div className="pt-4 border-t border-[#e2ded4] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-[#6c776b]">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-[#7c8663]" />
              <span>Hotline kỹ thuật: <strong>{BRAND_INFO.hotline}</strong></span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#7c8663]" />
              <span>Địa điểm: <strong>{BRAND_INFO.address}</strong></span>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
