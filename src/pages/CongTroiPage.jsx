import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Heart, MapPin, Users, Award, ArrowRight } from 'lucide-react';

export default function CongTroiPage() {
  const sponsors = [
    { name: 'Cộng đồng Trekker Đà Nẵng', type: 'Nhóm đồng hành', count: '50 Balo' },
    { name: 'Quỹ Năng Lượng Xanh Miền Trung', type: 'Đơn vị bảo trợ', count: '60 Balo' },
    { name: 'CLB Sinh Viên Kinh Tế Số DUE', type: 'Ban tổ chức', count: '40 Balo' },
    { name: 'Công ty Cổ phần Công nghệ Xanh A&B', type: 'Doanh nghiệp CSR', count: '50 Balo' },
    { name: '50+ Nhà hảo tâm & Trekker cá nhân', type: 'Cộng đồng đóng góp', count: '50 Balo' },
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
            CHIẾN DỊCH CỘNG ĐỒNG 2026
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase">
            Cõng trời trên bản — <br />
            <span className="text-[#efbc5c] font-serif italic normal-case">Tây Giang 2026</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#d2ded0]">
            250 chiếc balo năng lượng mặt trời. 250 nguồn sáng thắp lên những ước mơ con chữ giữa trập trùng sương mây biên cương.
          </p>
        </div>
      </section>

      {/* 2. Ánh sáng đến nơi, hành trình học tập đi tiếp */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              NHẬT KÝ THỰC ĐỊA
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15] leading-tight">
              Ánh sáng đến nơi, <br />hành trình học tập đi tiếp.
            </h2>
            <div className="prose text-xs sm:text-sm text-[#4a5548] space-y-4 leading-relaxed font-sans">
              <p>
                Từ trung tâm thành phố Đà Nẵng, đoàn tình nguyện SolarBag cùng các porter bản địa vượt hơn 150km đường đèo dốc hiểm trở hướng về huyện vùng cao Tây Giang, tỉnh Quảng Nam.
              </p>
              <p>
                Tại các xã biên giới Axan, Ch'Ơm, nhiều thôn bản vẫn chưa có lưới điện quốc gia. Mỗi buổi chiều tà, bóng tối phủ kín những mái nhà sàn, cũng là lúc việc học của các em học sinh gặp muôn vàn khó khăn.
              </p>
              <p>
                Chiến dịch "Cõng trời trên bản" đã trực tiếp trao tận tay 250 chiếc balo SolarBag Lite cho các em nhỏ trường tiểu học bán trú. Chiếc balo với tấm sạc dẻo CIGS thu nhận ánh nắng ban ngày và tháo rời thành chiếc đèn bàn ấm áp ban đêm, mang lại sự an tâm cho các thầy cô và gia đình.
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
                "Ánh điện chưa tới nhưng con chữ không được tối. Cảm ơn SolarBag!"
              </p>
              <p className="font-serif italic text-xs text-[#C2562B] font-semibold mt-1">
                — Lời thầy giáo tại điểm trường Axan, Tây Giang
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
              SPONSOR WALL
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
              Cùng gùi một nguồn sáng
            </h2>
            <p className="text-sm text-[#4a5548]">
              Tri ân các đơn vị bảo trợ, câu lạc bộ và cá nhân đã tiếp sức cho chiến dịch Tây Giang 2026.
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
                <p className="text-xs font-mono font-semibold text-emerald-800">
                  {s.count}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/impact/join"
              className="px-8 py-3.5 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-xl font-headline font-bold text-sm inline-flex items-center gap-2"
            >
              Cùng tham gia đợt trao tặng tiếp theo ↗
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}

