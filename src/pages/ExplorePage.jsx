import React from 'react';
import { Link } from 'react-router-dom';
import { TRAILS } from '../data/mockData';
import { Compass, MapPin, Sun, Mountain, ArrowRight, ShieldCheck, Smartphone } from 'lucide-react';

export default function ExplorePage() {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Outdoor Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-[#041d15] text-[#f5f5e9] overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-45 scale-105 transform hover:scale-100 transition-transform duration-1000"
          style={{ backgroundImage: `url('/assets/images/6de495ed65dbb40e4b88642bad776e96c19a1cd7.png')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#041d15] via-[#041d15]/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase bg-black/40 px-3.5 py-1.5 rounded-full border border-[#efbc5c]/30">
            ĐI ĐỂ KHÁM PHÁ · SÁNG ĐỂ SẺ CHIA
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight uppercase">
            Đi xa hơn với <br />
            <span className="text-[#efbc5c] font-serif italic normal-case">nguồn năng lượng vô tận</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#d2ded0] leading-relaxed">
            Tìm cung đường, chuẩn bị hành trang và kết nối cùng SolarBag. Những chuyến đi trekking được tiếp sức trọn vẹn bởi ánh nắng mặt trời.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/explore/trails"
              className="px-6 py-3.5 bg-[#efbc5c] text-[#041d15] hover:bg-[#f6d288] font-headline font-bold text-base rounded-md transition-colors shadow-md"
            >
              Thư viện tuyến đường ↗
            </Link>
            <Link
              to="/explore/planner"
              className="px-6 py-3.5 bg-white/10 border border-[#7c8663]/60 text-white hover:bg-white/20 font-headline font-bold text-base rounded-md transition-colors"
            >
              Lập kế hoạch & Checklist ↗
            </Link>
          </div>
        </div>
      </section>

      {/* 2. CẢ HÀNH TRÌNH, TRONG MỘT HỆ SINH THÁI */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            CHUẨN BỊ CHO BƯỚC CHÂN TIẾP THEO
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
            Cả hành trình, trong một hệ sinh thái
          </h2>
          <p className="text-sm text-[#4a5548]">
            Không chỉ là một chiếc balo, SolarBag mang đến giải pháp trọn vẹn từ lúc lên kế hoạch đến khi chạm đỉnh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Link to="/explore/trails" className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4 hover:border-[#efbc5c] transition-all group block">
            <div className="w-12 h-12 rounded-xl bg-[#041d15] text-[#efbc5c] flex items-center justify-center">
              <Compass className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">01 / TÌM CUNG ĐƯỜNG</span>
            <h3 className="font-headline text-2xl font-bold text-[#041d15] group-hover:text-[#efbc5c] transition-colors">
              Thư viện tuyến đường
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Thông tin chi tiết về độ cao, điểm đón nắng tối ưu, nguồn nước suối và vị trí hạ trại an toàn trên các cung núi Việt Nam.
            </p>
          </Link>

          <Link to="/explore/planner" className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4 hover:border-[#efbc5c] transition-all group block">
            <div className="w-12 h-12 rounded-xl bg-[#efbc5c] text-[#041d15] flex items-center justify-center">
              <Sun className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">02 / NĂNG LƯỢNG & CHECKLIST</span>
            <h3 className="font-headline text-2xl font-bold text-[#041d15] group-hover:text-[#efbc5c] transition-colors">
              Lập kế hoạch thiết bị
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Công cụ tính toán nhu cầu điện năng: Nhập số lượng điện thoại, GPS, máy ảnh để gợi ý phiên bản pin và checklist mang theo.
            </p>
          </Link>

          <Link to="/explore/app" className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4 hover:border-[#efbc5c] transition-all group block">
            <div className="w-12 h-12 rounded-xl bg-[#7c8663] text-white flex items-center justify-center">
              <Smartphone className="w-6 h-6" />
            </div>
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">03 / ĐỒNG HÀNH NGOẠI TUYẾN</span>
            <h3 className="font-headline text-2xl font-bold text-[#041d15] group-hover:text-[#efbc5c] transition-colors">
              SolarBag Outdoor App
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Theo dõi công suất sạc watt theo thời gian thực và định vị bản đồ vệ tinh không cần sóng điện thoại.
            </p>
          </Link>
        </div>
      </section>

      {/* 3. BẠN CHỌN ĐI ĐÂU TIẾP THEO? */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              GỢI Ý ĐỂ BẮT ĐẦU
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
              Bạn chọn đi đâu tiếp theo?
            </h2>
          </div>
          <Link to="/explore/trails" className="text-xs font-headline font-bold text-[#041d15] hover:text-[#efbc5c]">
            Xem tất cả 12 cung đường ↗
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TRAILS.map((trail) => (
            <Link
              key={trail.id}
              to={`/explore/trails/${trail.id}`}
              className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="relative h-60 bg-[#f4f0e6] overflow-hidden">
                <img 
                  src={trail.coverImage} 
                  alt={trail.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#041d15]/80 text-[#efbc5c] font-mono text-[11px] font-bold backdrop-blur-sm">
                  {trail.altitude}
                </span>
              </div>

              <div className="p-6 space-y-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono text-[#7c8663]">{trail.region}</span>
                  <h3 className="font-headline text-xl font-bold text-[#041d15] group-hover:text-[#efbc5c] transition-colors">
                    {trail.title}
                  </h3>
                  <p className="text-xs text-[#4a5548] line-clamp-2 leading-relaxed">
                    {trail.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#f0ede6] flex items-center justify-between text-xs font-mono text-[#6c776b]">
                  <span>{trail.duration}</span>
                  <span className="text-[#041d15] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Xem tuyến ↗
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}

