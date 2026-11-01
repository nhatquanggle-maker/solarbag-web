import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Ticket } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Hỗ trợ kỹ thuật & Pin sạc',
    message: '',
  });

  const [ticketCode, setTicketCode] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomTicket = 'SB-TICKET-' + Math.floor(1000 + Math.random() * 9000);
    setTicketCode(randomTicket);
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Header Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-16 border-b border-[#124636] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            CHÚNG MÌNH Ở ĐÂY ĐỂ LẮNG NGHE
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase">
            Bắt đầu một cuộc trò chuyện <br />
            <span className="text-[#efbc5c] font-serif italic normal-case">thực sự có ích.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-xl mx-auto">
            Cần hỗ trợ kỹ thuật, đóng góp phản hồi về nguyên mẫu hoặc mong muốn kết nối hợp tác CSR? Hãy để lại lời nhắn cho đội ngũ SolarBag.
          </p>
        </div>
      </section>

      {/* 2. Contact Info & Ticket Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Left */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">
                THÔNG TIN KẾT NỐI
              </span>
              <h2 className="font-headline text-3xl font-bold text-[#041d15]">
                Gửi lời nhắn cho SolarBag
              </h2>
              <p className="text-xs sm:text-sm text-[#4a5548] leading-relaxed">
                Dự án Khởi nghiệp Đổi mới Sáng tạo & Kinh doanh số 2026. Chúng mình luôn trân trọng mọi góp ý từ cộng đồng khám phá thiên nhiên và các nhà hoạt động xã hội.
              </p>
            </div>

            <div className="space-y-6 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#e2ded4]">
                <MapPin className="w-5 h-5 text-[#efbc5c] shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <span className="font-bold text-[#041d15] block">Không gian nghiên cứu & chế tạo</span>
                  <p className="text-[#4a5548]">71 Ngũ Hành Sơn, Quận Ngũ Hành Sơn, TP. Đà Nẵng (ĐH Kinh tế – ĐH Đà Nẵng)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#e2ded4]">
                <Phone className="w-5 h-5 text-[#efbc5c] shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <span className="font-bold text-[#041d15] block">Hotline & Zalo hỗ trợ kỹ thuật</span>
                  <p className="text-[#4a5548]">1900 6868 · 0905 123 456 (8:00 - 18:00 hàng ngày)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#e2ded4]">
                <Mail className="w-5 h-5 text-[#efbc5c] shrink-0 mt-0.5" />
                <div className="text-xs space-y-0.5">
                  <span className="font-bold text-[#041d15] block">Thư điện tử chính thức</span>
                  <p className="text-[#4a5548]">contact@solarbag.vn · csr@solarbag.vn</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Right */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#e2ded4] shadow-md space-y-6">
              
              {ticketCode ? (
                <div className="p-8 bg-emerald-50 border border-emerald-200 rounded-2xl text-center space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto">
                    <Ticket className="w-7 h-7" />
                  </div>
                  <div className="space-y-1">
                    <span className="text-xs font-mono font-bold text-emerald-800 uppercase">
                      MÃ TICKET TIẾP NHẬN
                    </span>
                    <h3 className="font-mono text-3xl font-bold text-emerald-950">
                      {ticketCode}
                    </h3>
                  </div>
                  <p className="text-xs text-emerald-800 max-w-sm mx-auto leading-relaxed">
                    Cảm ơn <strong>{formData.name}</strong>! Chúng mình đã ghi nhận yêu cầu của bạn. Đội ngũ phụ trách sẽ liên hệ lại qua email <strong>{formData.email}</strong> trong thời gian sớm nhất.
                  </p>
                  <button
                    onClick={() => {
                      setTicketCode(null);
                      setFormData({ name: '', email: '', phone: '', topic: 'Hỗ trợ kỹ thuật & Pin sạc', message: '' });
                    }}
                    className="px-6 py-2.5 bg-[#041d15] text-[#efbc5c] text-xs font-headline font-bold rounded-lg"
                  >
                    Gửi tin nhắn khác
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-headline text-2xl font-bold text-[#041d15]">
                    Gửi ticket yêu cầu
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">Họ tên của bạn *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nguyễn Văn A"
                        className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">Số điện thoại *</label>
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
                    <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">Email nhận phản hồi *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">Chủ đề liên hệ</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#041d15] bg-white font-medium"
                    >
                      <option value="Hỗ trợ kỹ thuật & Pin sạc">Hỗ trợ kỹ thuật & Pin sạc CIGS</option>
                      <option value="Hợp tác CSR Doanh nghiệp">Hợp tác CSR Doanh nghiệp & Tài trợ</option>
                      <option value="Đăng ký trải nghiệm Early-Bird">Đăng ký trải nghiệm Early-Bird</option>
                      <option value="Báo chí & Truyền thông">Báo chí & Truyền thông dự án</option>
                      <option value="Khác">Chủ đề khác</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">Nội dung tin nhắn *</label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Nhập chi tiết nội dung bạn muốn trao đổi cùng nhóm phát triển..."
                      className="w-full px-3.5 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-xl font-headline font-bold text-sm tracking-wide shadow-md flex items-center justify-center gap-2"
                  >
                    <span>Gửi Ticket Hỗ Trợ</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

