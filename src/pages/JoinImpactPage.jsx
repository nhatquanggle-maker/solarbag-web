import React, { useState } from 'react';
import { Heart, Users, Briefcase, CheckCircle2, ArrowRight } from 'lucide-react';

export default function JoinImpactPage() {
  const [donateQty, setDonateQty] = useState(1);
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [message, setMessage] = useState('');
  const [donated, setDonated] = useState(false);

  const pricePerBag = 850000;
  const totalDonate = donateQty * pricePerBag;

  const handleDonate = (e) => {
    e.preventDefault();
    setDonated(true);
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Header Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-16 border-b border-[#124636] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            HỢP TÁC & LAN TỎA
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase">
            Chọn cách đồng hành <br />
            <span className="text-[#efbc5c] font-serif italic normal-case">của riêng bạn.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-xl mx-auto">
            Dù là cá nhân hay tổ chức, mọi sự chung tay đều góp phần mang một nguồn sáng an toàn đến với những bàn học non cao.
          </p>
        </div>
      </section>

      {/* 2. Form Góp một chiếc Balo */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#e2ded4] shadow-md space-y-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold text-[#efbc5c] bg-[#041d15] px-2.5 py-1 rounded">
              HÌNH THỨC 01
            </span>
            <h2 className="font-headline text-3xl font-bold text-[#041d15]">
              Góp một chiếc balo. Gửi một nguồn sáng.
            </h2>
            <p className="text-xs sm:text-sm text-[#4a5548]">
              Tài trợ trực tiếp chi phí sản xuất <strong>850.000đ/chiếc</strong> SolarBag Lite kèm đèn học. Thông điệp của bạn sẽ được lưu giữ trong thẻ NFC trên quai balo.
            </p>
          </div>

          {donated ? (
            <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-3">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-headline text-2xl font-bold text-emerald-900">
                Ghi Nhận Tài Trợ Thành Công!
              </h3>
              <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                Cảm ơn <strong>{donorName}</strong> đã ủng hộ <strong>{donateQty} chiếc SolarBag Lite</strong> ({totalDonate.toLocaleString('vi-VN')}đ). Chúng mình đã gửi thư xác nhận & mã đóng góp tới email <strong>{donorEmail}</strong>.
              </p>
            </div>
          ) : (
            <form onSubmit={handleDonate} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold text-[#7c8663] uppercase block">
                  Chọn số lượng balo Lite muốn bảo trợ:
                </label>
                <div className="flex gap-3">
                  {[1, 2, 5, 10].map((q) => (
                    <button
                      key={q}
                      type="button"
                      onClick={() => setDonateQty(q)}
                      className={`flex-1 py-3 rounded-xl border text-sm font-headline font-bold transition-all ${
                        donateQty === q
                          ? 'bg-[#041d15] text-[#efbc5c] border-[#041d15]'
                          : 'bg-[#fcfbf7] border-[#e2ded4] text-[#1e261e] hover:bg-[#f4f0e6]'
                      }`}
                    >
                      {q} Chiếc
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">Họ tên của bạn *</label>
                  <input
                    type="text"
                    required
                    value={donorName}
                    onChange={(e) => setDonorName(e.target.value)}
                    placeholder="Nguyễn Văn A"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">Email nhận báo cáo *</label>
                  <input
                    type="email"
                    required
                    value={donorEmail}
                    onChange={(e) => setDonorEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">
                  Lời nhắn gửi đến em nhỏ nhận balo (Khắc vào thẻ NFC)
                </label>
                <textarea
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Chúc em luôn vững bước và chăm ngoan học giỏi trên con đường tìm kiếm tri thức..."
                  className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                />
              </div>

              <div className="p-4 bg-[#f5f2e9] rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-xs text-[#6c776b]">Kinh phí dự kiến:</span>
                  <p className="font-headline text-2xl font-bold text-[#041d15]">
                    {totalDonate.toLocaleString('vi-VN')} VNĐ
                  </p>
                </div>
                <button
                  type="submit"
                  className="px-6 py-3 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-xl font-headline font-bold text-sm tracking-wide shadow-md"
                >
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
          
          <div className="bg-[#f5f2e9] p-8 sm:p-10 rounded-3xl border border-[#e2ded4] space-y-4">
            <span className="text-xs font-mono font-bold text-[#041d15] bg-[#efbc5c] px-2.5 py-1 rounded">
              HÌNH THỨC 02
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#041d15]">
              Tham gia đoàn thực địa tình nguyện
            </h3>
            <p className="text-xs sm:text-sm text-[#4a5548] leading-relaxed">
              Bạn có thể lực tốt và yêu thích trekking? Hãy đăng ký cùng đoàn tình nguyện SolarBag trực tiếp gùi balo, lắp ráp đèn học và hướng dẫn sử dụng cho các em nhỏ tại các bản xa.
            </p>
            <div className="pt-2">
              <a
                href="mailto:contact@solarbag.vn?subject=Dang%20ky%20tinh%20nguyen%20vien%20SolarBag"
                className="px-5 py-2.5 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-lg text-xs font-headline font-bold inline-block"
              >
                Đăng ký tình nguyện viên ↗
              </a>
            </div>
          </div>

          <div className="bg-[#041d15] text-[#f5f5e9] p-8 sm:p-10 rounded-3xl border border-[#124636] space-y-4">
            <span className="text-xs font-mono font-bold text-[#041d15] bg-[#efbc5c] px-2.5 py-1 rounded">
              HÌNH THỨC 03
            </span>
            <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white">
              Gói tài trợ CSR Doanh nghiệp
            </h3>
            <p className="text-xs sm:text-sm text-[#d2ded0] leading-relaxed">
              Dành cho các doanh nghiệp cam kết phát triển bền vững (ESG): Tài trợ gói điểm trường (20 - 100 balo), in logo thương hiệu trên quai đeo và nhận báo cáo kiểm toán minh bạch.
            </p>
            <div className="pt-2">
              <a
                href="mailto:csr@solarbag.vn?subject=Hop%20tac%20CSR%20Doanh%20nghiep"
                className="px-5 py-2.5 bg-[#efbc5c] text-[#041d15] hover:bg-[#f6d288] rounded-lg text-xs font-headline font-bold inline-block"
              >
                Liên hệ hợp tác CSR ↗
              </a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

