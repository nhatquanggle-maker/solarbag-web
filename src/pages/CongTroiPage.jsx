import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Heart, MapPin, Users, Award, ArrowRight, ShieldCheck } from 'lucide-react';

export default function CongTroiPage() {
  const sponsors = [
    { name: 'Cộng đồng Trekker Đà Nẵng & Hội leo núi', type: 'Nhóm đồng hành', count: '60 Bộ GuiNang Edu' },
    { name: 'Quỹ Năng Lượng Xanh Miền Trung', type: 'Đơn vị bảo trợ', count: '80 Bộ GuiNang Edu' },
    { name: 'Khoa Thương mại điện tử, Marketing và Công nghệ số – Trường ĐH Kinh tế – ĐH Đà Nẵng', type: 'Đơn vị bảo trợ học thuật', count: '40 Bộ GuiNang Edu' },
    { name: 'Công ty Cổ phần Công nghệ Xanh A&B', type: 'Doanh nghiệp CSR', count: '50 Bộ GuiNang Edu' },
    { name: '70+ Nhà hảo tâm & Trekker cá nhân', type: 'Cộng đồng đóng góp', count: '70 Bộ GuiNang Edu' },
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Header Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-[#041d15] text-[#f5f5e9] overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-45 scale-105"
          style={{ backgroundImage: `url('/assets/images/7cdd184be59dec8a062f677e6c3bf37ba8334d3d.png')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#041d15] via-[#041d15]/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase bg-black/40 px-3.5 py-1.5 rounded-full border border-[#efbc5c]/30">
            CHIẾN DỊCH THỰC ĐỊA 2026 · HÀNH TRÌNH ÁNH SÁNG
          </span>
          <h1 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
            Cõng trời trên bản — <span className="text-[#efbc5c] font-serif italic normal-case whitespace-normal sm:whitespace-nowrap">Tây Giang & Nam Trà My 2026</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#d2ded0] leading-relaxed">
            300 bộ cặp năng lượng mặt trời GuiNang Edu. 300 nguồn sáng thắp lên những ước mơ con chữ giữa trập trùng sương mây biên cương xứ Quảng.
          </p>
        </div>
      </section>

      {/* 2. Ánh sáng đến nơi, hành trình học tập đi tiếp */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              NHẬT KÝ KHẢO SÁT & TRAO TẶNG THỰC ĐỊA
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-[#041d15] leading-tight">
              Ánh sáng đến nơi — hành trình học tập đi tiếp
            </h2>
            <div className="prose text-xs sm:text-sm text-[#4a5548] space-y-4 leading-relaxed font-sans">
              <p>
                Từ Xưởng Trạm Nắng tại trung tâm Đà Nẵng, đoàn nghiên cứu và tình nguyện GuiNang vượt hơn 160km đường đèo dốc hiểm trở về các xã biên giới Ch’Ơm, Ga Ry (Tây Giang) và Trà Cang (Nam Trà My), tỉnh Quảng Nam.
              </p>
              <p>
                Khảo sát thực địa ghi nhận hơn 65% học sinh tại các điểm trường lẻ phải học dưới ngọn đèn dầu hoặc nến leo lét trong điều kiện không có điện lưới quốc gia. Khói bồ hóng cay mắt và nguy cơ cháy nổ là nỗi lo thường trực mỗi đêm học bài.
              </p>
              <p>
                Đợt 1 chiến dịch "Cõng trời trên bản" trao tận tay 300 bộ GuiNang Edu cho các em nhỏ trường bán trú. Tấm solar 5V–3W đón nắng trên đường đi bộ 2 giờ tới trường; về nhà, đèn Solar Lamp 70g tháo rời tự động bật sáng nhờ mạch cảm biến MOSFET IRF4905, xua tan bóng tối bản cao suốt 6–8 tiếng liên tục.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="rounded-3xl overflow-hidden border border-[#e2ded4] shadow-xl bg-[#f4f0e6]">
              <img 
                src="/assets/images/7cdd184be59dec8a062f677e6c3bf37ba8334d3d.png" 
                alt="Trao tặng balo bản cao" 
                className="w-full h-[460px] object-cover"
              />
            </div>
            {/* Handwritten Note Sticky */}
            <div className="absolute -bottom-6 -left-4 sm:left-6 bg-[#E3DCC8] border border-[#C2562B]/30 p-4 rounded-xl shadow-lg -rotate-2 max-w-xs">
              <p className="font-handwriting text-lg text-[#1F3D2B] leading-snug">
                "Ánh điện chưa tới nhưng con chữ không được tối. Cảm ơn GuiNang!"
              </p>
              <p className="font-serif italic text-xs text-[#C2562B] font-semibold mt-1">
                — Lời thầy cô giáo tại điểm trường Ch'Ơm, Tây Giang
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Sponsor Wall */}
      <section className="bg-[#f5f2e9] py-20 border-y border-[#e2ded4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              BẢNG VÀNG ĐỒNG HÀNH CSR & CỘNG ĐỒNG
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
              Cùng gùi một nguồn sáng
            </h2>
            <p className="text-sm text-[#4a5548]">
              Tri ân các đơn vị bảo trợ, câu lạc bộ, doanh nghiệp và cá nhân đã tiếp sức cho chiến dịch Tây Giang & Nam Trà My 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {sponsors.map((s, idx) => (
              <div key={idx} className="p-6 bg-white rounded-2xl border border-[#e2ded4] shadow-sm space-y-2 text-center">
                <span className="text-[11px] font-mono text-[#efbc5c] bg-[#041d15] px-2.5 py-0.5 rounded font-bold">
                  {s.type}
                </span>
                <h3 className="font-headline text-lg font-bold text-[#041d15] pt-1">
                  {s.name}
                </h3>
                <p className="text-xs font-mono font-semibold text-[#c2562b]">
                  {s.count}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/impact/join"
              className="px-8 py-3.5 bg-[#c2562b] text-white hover:bg-[#a6451e] rounded-xl font-headline font-bold text-sm inline-flex items-center gap-2 shadow-md transition-all"
            >
              Cùng tham gia đợt trao tặng tiếp theo (880.000đ/bộ) <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
