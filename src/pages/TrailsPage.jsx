import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TRAILS } from '../data/mockData';
import { MapPin, Sun, Mountain, Compass, Search, ArrowRight, ShieldCheck } from 'lucide-react';

export default function TrailsPage() {
  const [filterRegion, setFilterRegion] = useState('ALL');
  const [search, setSearch] = useState('');

  const filtered = TRAILS.filter(t => {
    const matchSearch = t.title.toLowerCase().includes(search.toLowerCase()) || 
                        t.region.toLowerCase().includes(search.toLowerCase());
    return matchSearch;
  });

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Header */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-16 border-b border-[#124636]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            TÌM NHỊP BƯỚC CỦA BẠN
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase">
            Mỗi cung đường, <br />
            <span className="text-[#efbc5c] font-serif italic normal-case">một cách nhìn thế giới.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-xl mx-auto">
            Thư viện tuyến đường được biên soạn cho cộng đồng leo núi: tổng hợp tọa độ đón nắng, nguồn nước và các trạm hạ trại an toàn.
          </p>
        </div>
      </section>

      {/* 2. Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#e2ded4] shadow-sm flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="relative w-full sm:w-80">
            <Search className="w-4 h-4 text-[#7c8663] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Tìm theo tên đỉnh hoặc tỉnh thành..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#efbc5c]"
            />
          </div>

          <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto scrollbar-none">
            <span className="text-xs font-mono text-[#7c8663] mr-2">Vùng miền:</span>
            {['Tất cả', 'Tây Bắc', 'Đông Bắc', 'Miền Trung'].map((r) => (
              <button
                key={r}
                className="px-3.5 py-1.5 rounded-full text-xs font-headline font-semibold bg-[#f4f0e6] hover:bg-[#041d15] hover:text-[#efbc5c] transition-colors"
              >
                {r}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Trails Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((trail) => (
            <div 
              key={trail.id}
              className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="relative h-60 bg-[#f4f0e6] overflow-hidden">
                <img 
                  src={trail.coverImage} 
                  alt={trail.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
                <span className="absolute top-3 left-3 px-3 py-1 rounded bg-[#041d15] text-[#efbc5c] font-mono text-xs font-bold">
                  {trail.altitude}
                </span>
                <span className="absolute top-3 right-3 px-3 py-1 rounded bg-white/90 text-[#041d15] font-mono text-xs font-semibold backdrop-blur-sm">
                  {trail.difficulty}
                </span>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#7c8663] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" /> {trail.region}
                  </span>
                  <h3 className="font-headline text-2xl font-bold text-[#041d15] group-hover:text-[#efbc5c] transition-colors">
                    {trail.title}
                  </h3>
                  <p className="text-xs text-[#4a5548] leading-relaxed line-clamp-3">
                    {trail.description}
                  </p>
                </div>

                <div className="space-y-3 pt-3 border-t border-[#f0ede6]">
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono text-[#6c776b]">
                    <div>• Quãng đường: {trail.distance}</div>
                    <div>• Thời gian: {trail.duration}</div>
                  </div>

                  <Link
                    to={`/explore/trails/${trail.id}`}
                    className="w-full py-2.5 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-lg font-headline font-bold text-xs tracking-wide text-center block transition-colors shadow-sm"
                  >
                    Xem chi tiết hồ sơ & Tải GPX ↗
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Planner Banner */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f5f2e9] p-8 sm:p-12 rounded-3xl border border-[#e2ded4] text-center space-y-4">
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#041d15]">
            Đừng để năng lượng là điều bạn quên chuẩn bị.
          </h2>
          <p className="text-xs sm:text-sm text-[#4a5548] max-w-lg mx-auto">
            Tạo danh sách thiết bị điện tử và tính toán thời gian sạc trước khi lên đường với công cụ lập kế hoạch mẫu của GuiNang.
          </p>
          <div className="pt-2">
            <Link
              to="/explore/planner"
              className="px-6 py-3 bg-[#041d15] text-[#efbc5c] rounded-lg font-headline font-bold text-sm inline-flex items-center gap-2 hover:bg-[#072b20]"
            >
              Bắt đầu lập kế hoạch mẫu ↗
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

