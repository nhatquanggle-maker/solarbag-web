import React, { useState } from 'react';
import { Heart, Users, Briefcase, CheckCircle2, ArrowRight, ShieldCheck, Phone, Mail } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export default function JoinImpactPage() {
  const [donateQty, setDonateQty] = useState(1);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [message, setMessage] = useState('');
  const [donated, setDonated] = useState(false);

  // Price per Edu bag: 880.000 VNĐ (subsidized from Trail & Fund)
  const pricePerBag = 880000;
  const totalDonate = donateQty * pricePerBag;

  const handleDonate = (e) => {
    e.preventDefault();
    setDonated(true);
  };

  return (
    <div className="space-y-24 pb-20">

      {/* 1. Header Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-20 border-b border-[#124636] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#efbc5c]/20 text-[#efbc5c] rounded-full text-xs font-mono font-bold tracking-widest uppercase border border-[#efbc5c]/30">
            <Heart className="w-3.5 h-3.5" /> HỢP TÁC & LAN TỎA ÁNH SÁNG
          </div>
          <h1 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
            Chọn cách đồng hành — <span className="text-[#efbc5c] font-serif italic normal-case whitespace-normal sm:whitespace-nowrap">của riêng bạn</span>
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-xl mx-auto leading-relaxed">
            Dù là cá nhân hay tổ chức, mọi sự chung tay đều góp phần mang một nguồn sáng an toàn và chiếc cặp bền chắc đến với những bàn học non cao.
          </p>
        </div>
      </section>

      {/* 2. Form Góp một chiếc Balo GuiNang Edu */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e2ded4] shadow-md space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-[#efbc5c] bg-[#041d15] px-2.5 py-1 rounded">
              HÌNH THỨC 01 · TÀI TRỢ TRỰC TIẾP
            </span>
            <h2 className="font-headline text-3xl font-bold text-[#041d15]">
              Góp một bộ GuiNang Edu. Gửi một nguồn sáng.
            </h2>
            <p className="text-xs sm:text-sm text-[#4a5548] leading-relaxed">
              Tài trợ trực tiếp với mức giá trợ giá <strong>880.000 VNĐ / bộ</strong> (đã được hỗ trợ 100.000đ từ doanh số bán GuiNang Trail). Bao gồm: 01 cặp học sinh siêu nhẹ 925g kháng nước, 01 tấm solar 5V–3W tháo rời, 01 đèn Solar Lamp 70g LED 3W tự động và chip NFC lưu hồ sơ tài trợ.
            </p>
          </div>

          {donated ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
              <CheckCircle2 className="w-14 h-14 text-emerald-600 mx-auto" />
              <h3 className="font-headline text-2xl font-bold text-emerald-900">
                Ghi Nhận Đăng Ký Tài Trợ Thành Công!
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto leading-relaxed">
                Chân thành cảm ơn <strong>{donorName}</strong> đã đồng hành bảo trợ <strong>{donateQty} bộ GuiNang Edu</strong> (Tổng: {totalDonate.toLocaleString('vi-VN')} VNĐ). Chúng mình đã gửi thư xác nhận kèm thông tin chuyển khoản và mã định danh NFC vào email <strong>{donorEmail}</strong>.
              </p>
              <div className="p-4 bg-white/80 rounded-xl border border-emerald-300 max-w-md mx-auto text-xs text-left text-emerald-900 space-y-1">
                <p><strong>Mã dự án:</strong> GN-EDU-2026-NAMTRAMY</p>
                <p><strong>Điểm trường dự kiến trao:</strong> Trường Phổ thông DTBT Tiểu học Trà Cang, Nam Trà My, Quảng Nam</p>
                <p><strong>Thời gian thực địa:</strong> Đợt 1 / Tháng 09/2026</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleDonate} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-[#7c8663] uppercase block">
                  Chọn số lượng bộ GuiNang Edu muốn bảo trợ:
                </label>
                <div className="flex gap-3">
                  {[1, 2, 5, 10].map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setDonateQty(q)}
                      className={`flex-1 py-3.5 rounded-xl border text-sm font-headline font-bold transition-all ${donateQty === q
                          ? 'bg-[#041d15] text-[#efbc5c] border-[#041d15] shadow'
                          : 'bg-[#fcfbf7] border-[#e2ded4] text-[#1e261e] hover:bg-[#f4f0e6]'
                        }`}
                    >
                      {q} Bộ
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">Họ và tên của bạn *</label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-4 py-3 rounded-xl border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">Email nhận báo cáo thực địa *</label>
                  <input
                    type="email"
                    required
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 rounded-xl border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">
                  Lời nhắn gửi đến em nhỏ nhận balo (Ghi vào thẻ NFC điện tử)
                </label>
                <textarea
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Chúc em luôn vững bước và chăm ngoan học giỏi trên con đường tìm kiếm tri thức..."
                  className="w-full px-4 py-3 rounded-xl border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                />
              </div>

              <div className="p-5 bg-[#f5f2e9] rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4 border border-[#e2ded4]">
                <div>
                  <span className="text-xs text-[#6c776b]">Kinh phí tài trợ ({donateQty} bộ x 880.000đ):</span>
                  <p className="font-headline text-3xl font-bold text-[#041d15]">
                    {totalDonate.toLocaleString('vi-VN')} VNĐ
                  </p>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-[#c2562b] text-white hover:bg-[#a6451e] rounded-xl font-headline font-bold text-sm tracking-wide shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Heart className="w-4 h-4" />
                  Xác nhận tài trợ ↗
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* 3. 2 Other ways: Volunteer & CSR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-[#f5f2e9] p-8 sm:p-10 rounded-3xl border border-[#e2ded4] space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#041d15] bg-[#efbc5c] px-2.5 py-1 rounded">
                HÌNH THỨC 02
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#041d15]">
                Tham gia đoàn thực địa tình nguyện
              </h3>
              <p className="text-xs sm:text-sm text-[#4a5548] leading-relaxed">
                Bạn có thể lực tốt và yêu thích trekking vùng cao? Hãy gia nhập đội ngũ tình nguyện viên GuiNang trực tiếp gùi balo, lắp ráp module đèn mặt trời và tổ chức ngày hội "Thắp Nắng Lên Bản" cùng học sinh Nam Trà My, Tây Giang.
              </p>
            </div>
            <div className="pt-2">
              <a
                href={`mailto:${BRAND_INFO.email}?subject=Dang%20ky%20tinh%20nguyen%20vien%20GuiNang`}
                className="px-6 py-3 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-xl text-xs font-headline font-bold inline-flex items-center gap-2 shadow"
              >
                <Users className="w-4 h-4" /> Đăng ký tình nguyện viên ↗
              </a>
            </div>
          </div>

          <div className="bg-[#041d15] text-[#f5f5e9] p-8 sm:p-10 rounded-3xl border border-[#124636] space-y-4 shadow-sm flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#041d15] bg-[#efbc5c] px-2.5 py-1 rounded">
                HÌNH THỨC 03
              </span>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white">
                Gói tài trợ CSR Doanh nghiệp
              </h3>
              <p className="text-xs sm:text-sm text-[#d2ded0] leading-relaxed">
                Dành cho doanh nghiệp cam kết phát triển bền vững (ESG): Tài trợ trọn gói điểm trường (30 – 100 balo GuiNang Edu), in logo đồng hành trên quai đeo, nhận dữ liệu quét NFC minh bạch và báo cáo tác động xã hội định kỳ.
              </p>
            </div>
            <div className="pt-2 flex items-center gap-4">
              <a
                href={`mailto:${BRAND_INFO.email}?subject=Hop%20tac%20CSR%20Doanh%20nghiep%20GuiNang`}
                className="px-6 py-3 bg-[#efbc5c] text-[#041d15] hover:bg-[#f6d288] rounded-xl text-xs font-headline font-bold inline-flex items-center gap-2 shadow"
              >
                <Briefcase className="w-4 h-4" /> Liên hệ hợp tác CSR ↗
              </a>
              <span className="text-xs font-mono text-[#d2ded0]">
                Hotline: {BRAND_INFO.hotline}
              </span>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
