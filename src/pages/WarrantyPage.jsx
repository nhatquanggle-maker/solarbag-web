import React, { useState } from 'react';
import { ShieldCheck, Wrench, RefreshCw, CheckCircle2, ArrowRight } from 'lucide-react';

export default function WarrantyPage() {
  const [serial, setSerial] = useState('SB-DEMO-PRO-0001');
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
      <section className="bg-[#041d15] text-[#f5f5e9] py-16 border-b border-[#124636] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            ĐỒNG HÀNH SAU MỖI CHUYẾN ĐI
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase">
            Một chiếc balo tốt <br />
            <span className="text-[#efbc5c] font-serif italic normal-case">xứng đáng được đi tiếp.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-xl mx-auto">
            Chính sách bảo hành minh bạch và cam kết sửa chữa trọn đời giúp kéo dài tuổi thọ sản phẩm, giảm thiểu rác thải điện tử ra môi trường.
          </p>
        </div>
      </section>

      {/* 2. Warranty Pillars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-3">
            <span className="font-mono text-xs font-bold text-[#efbc5c] bg-[#041d15] px-2.5 py-1 rounded">
              12 THÁNG
            </span>
            <h3 className="font-headline text-2xl font-bold text-[#041d15]">
              Tấm pin & Mạch sạc BMS
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Bảo hành 1 đổi 1 trong 30 ngày đầu tiên nếu phát sinh lỗi từ nhà sản xuất; bảo hành sửa chữa và thay thế miễn phí trong 12 tháng.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-3">
            <span className="font-mono text-xs font-bold text-[#efbc5c] bg-[#041d15] px-2.5 py-1 rounded">
              06 THÁNG
            </span>
            <h3 className="font-headline text-2xl font-bold text-[#041d15]">
              Đèn đa năng SolarLight
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Bảo hành bóng LED, chân tiếp xúc nam châm và pin tích hợp của đèn trong vòng 6 tháng kể từ ngày kích hoạt qua NFC.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-3">
            <span className="font-mono text-xs font-bold text-[#efbc5c] bg-[#041d15] px-2.5 py-1 rounded">
              TRỌN ĐỜI
            </span>
            <h3 className="font-headline text-2xl font-bold text-[#041d15]">
              Đường may & Khóa kéo
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Hỗ trợ bảo dưỡng, gia cố đường may chịu lực và thay thế đầu khóa zip trọn đời sản phẩm để bạn an tâm chinh phục mọi đỉnh núi.
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
              Điền thông tin sự cố, chuyên viên kỹ thuật SolarBag sẽ liên hệ để tiếp nhận balo.
            </p>
          </div>

          {submitted ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-headline text-2xl font-bold text-emerald-900">
                Đã Tiếp Nhận Y Cầu Bảo Hành!
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800">
                Mã tiếp nhận: <strong>#BH-2026-991</strong>. Kỹ thuật viên sẽ gọi lại cho bạn qua số điện thoại <strong>{phone}</strong> trong vòng 4 giờ làm việc.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-1">
                <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">
                  Mã Serial sản phẩm (SB-… hoặc xem trong hộ chiếu NFC) *
                </label>
                <input
                  type="text"
                  required
                  value={serial}
                  onChange={(e) => setSerial(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2ded4] text-xs font-mono outline-none focus:border-[#041d15]"
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
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
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
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
                  placeholder="Ví dụ: Tấm pin sạc chậm hơn bình thường, đèn LED bị lỏng ngàm xoay..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-xl font-headline font-bold text-sm tracking-wide shadow-md"
              >
                Gửi yêu cầu bảo hành ↗
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}

