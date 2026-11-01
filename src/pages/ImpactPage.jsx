import React from 'react';
import { Link } from 'react-router-dom';
import { IMPACT_METRICS } from '../data/mockData';
import { Heart, Sun, BookOpen, ShieldCheck, ArrowRight, Users, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ImpactPage() {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Impact Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-[#041d15] text-[#f5f5e9] overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105"
          style={{ backgroundImage: `url('/assets/images/7cdd184be59dec8a062f677e6c3bf37ba8334d3d.png')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#041d15] via-[#041d15]/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase bg-black/40 px-3.5 py-1.5 rounded-full border border-[#efbc5c]/30">
            HÀNH TRÌNH ÁNH SÁNG · IMPACT ECOSYSTEM
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase">
            Mỗi cách đồng hành <br />
            <span className="text-[#efbc5c] font-serif italic normal-case">đều mang một nguồn sáng</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#d2ded0] leading-relaxed">
            Một mô hình kinh doanh tuần hoàn và có trách nhiệm: Mỗi sản phẩm phục vụ người leo núi sẽ tạo nền tảng mang năng lượng sạch và ánh sáng học đường đến với trẻ em nghèo vùng cao.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/impact/join"
              className="px-6 py-3.5 bg-[#efbc5c] text-[#041d15] hover:bg-[#f6d288] font-headline font-bold text-base rounded-md transition-colors shadow-md"
            >
              Đồng hành cùng chúng tôi ↗
            </Link>
            <Link
              to="/impact/cong-troi-tren-ban"
              className="px-6 py-3.5 bg-white/10 border border-[#7c8663]/60 text-white hover:bg-white/20 font-headline font-bold text-base rounded-md transition-colors"
            >
              Dự án Cõng trời trên bản ↗
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Impact Metrics Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ded4] shadow-sm text-center space-y-1">
            <span className="font-headline text-4xl sm:text-5xl font-bold text-[#041d15] block">
              {IMPACT_METRICS.bagsDeployed}
            </span>
            <p className="text-xs font-medium text-[#4a5548]">{IMPACT_METRICS.bagsUnit}</p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ded4] shadow-sm text-center space-y-1">
            <span className="font-headline text-4xl sm:text-5xl font-bold text-[#041d15] block">
              {IMPACT_METRICS.villagesReached}
            </span>
            <p className="text-xs font-medium text-[#4a5548]">{IMPACT_METRICS.villagesUnit}</p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ded4] shadow-sm text-center space-y-1">
            <span className="font-headline text-4xl sm:text-5xl font-bold text-[#efbc5c] block">
              {IMPACT_METRICS.studyHoursLit}
            </span>
            <p className="text-xs font-medium text-[#4a5548]">{IMPACT_METRICS.studyHoursUnit}</p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ded4] shadow-sm text-center space-y-1">
            <span className="font-headline text-4xl sm:text-5xl font-bold text-emerald-700 block">
              {IMPACT_METRICS.co2Offset}
            </span>
            <p className="text-xs font-medium text-[#4a5548]">{IMPACT_METRICS.co2Unit}</p>
          </div>
        </div>
      </section>

      {/* 3. 3 Pillars of Partnership */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            HÌNH THỨC LAN TỎA
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
            Ba Cách Để Bạn Cùng Chúng Mình Gửi Nắng
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#041d15] text-[#efbc5c] flex items-center justify-center">
                <Sun className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">CÁ NHÂN KHÁM PHÁ</span>
              <h3 className="font-headline text-2xl font-bold text-[#041d15]">
                Sở hữu SolarBag Pro
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Với mỗi chiếc SolarBag Pro được đặt mua, bạn đã đóng góp trực tiếp vào kinh phí chế tạo và trao tặng 01 chiếc balo SolarBag Lite cho các em nhỏ vùng cao.
              </p>
            </div>
            <Link to="/products/solarbag-pro" className="text-xs font-mono font-bold text-[#041d15] hover:text-[#efbc5c]">
              Khám phá SolarBag Pro ↗
            </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#efbc5c] text-[#041d15] flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">TÀI TRỢ TRỰC TIẾP</span>
              <h3 className="font-headline text-2xl font-bold text-[#041d15]">
                Góp một chiếc SolarBag Lite
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Tài trợ trực tiếp với chi phí sản xuất 850.000đ/chiếc kèm chip NFC khắc tên người gửi tặng để học sinh vùng cao có đèn học an toàn suốt năm học mới.
              </p>
            </div>
            <Link to="/impact/join" className="text-xs font-mono font-bold text-[#041d15] hover:text-[#efbc5c]">
              Tài trợ trực tiếp ngay ↗
            </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#7c8663] text-white flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">DOANH NGHIỆP CSR</span>
              <h3 className="font-headline text-2xl font-bold text-[#041d15]">
                Đối tác phát triển bền vững
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Đồng hành tài trợ gói dự án cho cả điểm trường hoặc xã vùng sâu, nhận báo cáo kiểm toán minh bạch và số liệu giảm phát thải phục vụ tiêu chuẩn ESG.
              </p>
            </div>
            <Link to="/impact/transparency" className="text-xs font-mono font-bold text-[#041d15] hover:text-[#efbc5c]">
              Xem cơ chế minh bạch ↗
            </Link>
          </div>
        </div>
      </section>

      {/* 4. NIỀM TIN ĐI CÙNG SỰ RÕ RÀNG */}
      <section className="bg-[#f5f2e9] py-20 border-y border-[#e2ded4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            CAM KẾT CỘNG ĐỒNG
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
            Niềm tin đi cùng sự rõ ràng
          </h2>
          <p className="text-sm text-[#4a5548] max-w-xl mx-auto leading-relaxed">
            Chúng mình ứng dụng công nghệ NFC và mã hóa nguồn đóng góp để người ủng hộ luôn biết chính xác nguồn lực của mình đã biến thành ánh sáng tại điểm trường nào, không thất thoát và không mập mờ.
          </p>
          <div className="pt-2">
            <Link
              to="/impact/transparency"
              className="px-6 py-3 bg-[#041d15] text-[#efbc5c] rounded-md font-headline font-bold text-sm inline-flex items-center gap-2 hover:bg-[#072b20]"
            >
              Xem báo cáo minh bạch & Tra cứu đóng góp ↗
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

