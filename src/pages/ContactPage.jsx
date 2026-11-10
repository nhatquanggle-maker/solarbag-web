import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Ticket, Building2, Award } from 'lucide-react';
import { BRAND_INFO, TEAM_MEMBERS } from '../data/mockData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    topic: 'Tư vấn mua GuiNang Trail',
    message: '',
  });

  const [ticketCode, setTicketCode] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const randomTicket = 'GN-TICKET-' + Math.floor(1000 + Math.random() * 9000);
    setTicketCode(randomTicket);
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Header Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-20 border-b border-[#124636] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#efbc5c]/20 text-[#efbc5c] rounded-full text-xs font-mono font-bold tracking-widest uppercase border border-[#efbc5c]/30">
            <Mail className="w-3.5 h-3.5" /> LIÊN HỆ ĐỘI NGŨ GUINANG
          </div>
          <h1 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Bắt đầu cuộc trò chuyện — <span className="text-[#efbc5c] font-serif italic normal-case whitespace-normal sm:whitespace-nowrap">thực sự có ích</span>
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-xl mx-auto leading-relaxed">
            Bạn cần tư vấn sản phẩm, kết nối hợp tác CSR Doanh nghiệp, bảo dưỡng kỹ thuật tại Xưởng Trạm Nắng hoặc đồng hành cùng dự án Cuộc thi Sinh viên Kinh doanh số 2026? Hãy để lại lời nhắn cho chúng mình.
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
                THÔNG TIN KẾT NỐI CHÍNH THỨC
              </span>
              <h2 className="font-headline text-3xl font-bold text-[#041d15]">
                {BRAND_INFO.companyName}
              </h2>
              <p className="text-xs sm:text-sm text-[#4a5548] leading-relaxed">
                Đề án Khởi nghiệp Sáng tạo & Kinh doanh Số 2026. Sinh viên Khóa 50K22.1, Khoa Thương mại điện tử, Marketing và Công nghệ số, Trường Đại học Kinh tế – Đại học Đà Nẵng.
              </p>
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#e2ded4] shadow-sm">
                <MapPin className="w-5 h-5 text-[#c2562b] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <span className="font-bold text-[#041d15] block">Xưởng R&D & Trạm Bảo Dưỡng</span>
                  <p className="text-[#4a5548]">{BRAND_INFO.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#e2ded4] shadow-sm">
                <Building2 className="w-5 h-5 text-[#7c8663] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <span className="font-bold text-[#041d15] block">Cơ sở Đào tạo & Bảo trợ Học thuật</span>
                  <p className="text-[#4a5548]">{BRAND_INFO.institution}</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#e2ded4] shadow-sm">
                <Phone className="w-5 h-5 text-[#efbc5c] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <span className="font-bold text-[#041d15] block">Hotline Điều Hành & Hỗ Trợ Kỹ Thuật</span>
                  <p className="text-[#4a5548] font-mono font-bold text-sm text-[#041d15]">{BRAND_INFO.hotline}</p>
                  <p className="text-[11px] text-[#7c8663]">Đại diện dự án: {TEAM_MEMBERS[0].name} (Founder & CEO)</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border border-[#e2ded4] shadow-sm">
                <Mail className="w-5 h-5 text-[#efbc5c] shrink-0 mt-0.5" />
                <div className="text-xs space-y-1">
                  <span className="font-bold text-[#041d15] block">Hòm Thư Điện Tử</span>
                  <p className="text-[#4a5548]">{BRAND_INFO.email} · {TEAM_MEMBERS[0].email}</p>
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
                      MÃ TICKET TIẾP NHẬN YÊU CẦU
                    </span>
                    <h3 className="font-mono text-3xl font-bold text-emerald-950">
                      {ticketCode}
                    </h3>
                  </div>
                  <p className="text-xs text-emerald-800 max-w-sm mx-auto leading-relaxed">
                    Cảm ơn <strong>{formData.name}</strong>! Đội ngũ GuiNang đã tiếp nhận tin nhắn của bạn và sẽ phản hồi qua email <strong>{formData.email}</strong> trong vòng 4-8 giờ làm việc.
                  </p>
                  <button
                    onClick={() => {
                      setTicketCode(null);
                      setFormData({ name: '', email: '', phone: '', topic: 'Tư vấn mua GuiNang Trail', message: '' });
                    }}
                    className="px-6 py-2.5 bg-[#041d15] text-[#efbc5c] text-xs font-headline font-bold rounded-lg"
                  >
                    Gửi yêu cầu khác ↗
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="font-headline text-2xl font-bold text-[#041d15]">
                    Gửi tin nhắn hoặc yêu cầu hợp tác
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
                        className="w-full px-4 py-3 rounded-xl border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
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
                        className="w-full px-4 py-3 rounded-xl border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                      />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="email@example.com"
                      className="w-full px-4 py-3 rounded-xl border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">Chủ đề liên hệ *</label>
                    <select
                      value={formData.topic}
                      onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-[#e2ded4] text-xs outline-none focus:border-[#041d15] bg-white"
                    >
                      <option>Tư vấn đặt mua Balo GuiNang Trail (1.500.000 VNĐ)</option>
                      <option>Tài trợ gói Balo GuiNang Edu (880.000 VNĐ/bộ)</option>
                      <option>Hợp tác CSR Doanh nghiệp / Tổ chức Xã hội</option>
                      <option>Bảo hành & Sửa chữa tại Xưởng Trạm Nắng</option>
                      <option>Đăng ký tình nguyện viên đoàn thực địa</option>
                      <option>Khác</option>
                    </select>
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">Nội dung tin nhắn *</label>
                    <textarea
                      rows="4"
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Chi tiết câu hỏi hoặc đề xuất hợp tác của bạn..."
                      className="w-full px-4 py-3 rounded-xl border border-[#e2ded4] text-xs outline-none focus:border-[#041d15]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-xl font-headline font-bold text-sm tracking-wide shadow-md transition-colors"
                  >
                    Gửi yêu cầu tới Ban Quản Trị GuiNang ↗
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
