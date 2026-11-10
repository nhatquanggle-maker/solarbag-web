import React from 'react';
import { Link } from 'react-router-dom';
import { IMPACT_METRICS } from '../data/mockData';
import AnimatedCounter from '../components/AnimatedCounter';
import { Heart, Sun, BookOpen, ShieldCheck, ArrowRight, Users, Sparkles, CheckCircle2, MapPin, Award } from 'lucide-react';

export default function ImpactPage() {
  const sponsors = [
    { name: 'Cộng đồng Trekker Đà Nẵng & Hội leo núi', type: 'Nhóm đồng hành', count: '60 Bộ GuiNang Edu' },
    { name: 'Quỹ Năng Lượng Xanh Miền Trung', type: 'Đơn vị bảo trợ', count: '80 Bộ GuiNang Edu' },
    { name: 'Khoa Thương mại điện tử, Marketing và Công nghệ số – Trường ĐH Kinh tế – ĐH Đà Nẵng', type: 'Đơn vị bảo trợ học thuật', count: '40 Bộ GuiNang Edu' },
    { name: 'Công ty Cổ phần Công nghệ Xanh A&B', type: 'Doanh nghiệp CSR', count: '50 Bộ GuiNang Edu' },
    { name: '70+ Nhà hảo tâm & Trekker cá nhân', type: 'Cộng đồng đóng góp', count: '70 Bộ GuiNang Edu' },
  ];

  const scrollToDiemTruong = () => {
    const el = document.getElementById('diem-truong-section');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="space-y-24 pb-20 bg-[#faf8f2]">
      
      {/* 1. Impact Hero */}
      <section className="relative min-h-[75vh] flex items-center justify-center bg-[#041d15] text-[#f5f5e9] overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105"
          style={{ backgroundImage: `url('/assets/images/7cdd184be59dec8a062f677e6c3bf37ba8334d3d.png')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#041d15] via-[#041d15]/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase bg-black/40 px-3.5 py-1.5 rounded-full border border-[#efbc5c]/30">
            HÀNH TRÌNH ÁNH SÁNG · TỔNG QUAN CỘNG ĐỒNG
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase">
            Mỗi cách đồng hành <br />
            <span className="text-[#efbc5c] font-serif italic normal-case">đều mang một nguồn sáng</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#d2ded0] leading-relaxed">
            Mô hình kinh doanh tuần hoàn và tạo tác động xã hội bền vững: Mỗi chiếc balo GuiNang Trail phục vụ cộng đồng trekking sẽ trích kinh phí trợ giá trực tiếp để sản xuất và trao tặng bộ cặp đèn mặt trời GuiNang Edu đến với học sinh vùng cao.
          </p>
          <div className="pt-2 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/impact/join"
              className="px-6 py-3.5 bg-[#efbc5c] text-[#041d15] hover:bg-[#f6d288] font-headline font-bold text-base rounded-md transition-colors shadow-md"
            >
              Đồng hành tài trợ GuiNang Edu (880k) ↗
            </Link>
            <button
              onClick={scrollToDiemTruong}
              className="px-6 py-3.5 bg-white/10 border border-[#7c8663]/60 text-white hover:bg-white/20 font-headline font-bold text-base rounded-md transition-colors cursor-pointer"
            >
              Dự án điểm trường vùng cao ↓
            </button>
          </div>
        </div>
      </section>

      {/* 2. Impact Metrics Strip */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ded4] shadow-sm text-center space-y-1 hover:border-[#efbc5c] transition-all group">
            <span className="font-headline text-4xl sm:text-5xl font-bold text-[#041d15] block group-hover:scale-105 transition-transform">
              <AnimatedCounter value={IMPACT_METRICS.bagsDeployed} />
            </span>
            <p className="text-xs font-medium text-[#4a5548]">{IMPACT_METRICS.bagsUnit}</p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ded4] shadow-sm text-center space-y-1 hover:border-[#efbc5c] transition-all group">
            <span className="font-headline text-4xl sm:text-5xl font-bold text-[#041d15] block group-hover:scale-105 transition-transform">
              <AnimatedCounter value={IMPACT_METRICS.villagesReached} />
            </span>
            <p className="text-xs font-medium text-[#4a5548]">{IMPACT_METRICS.villagesUnit}</p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ded4] shadow-sm text-center space-y-1 hover:border-[#efbc5c] transition-all group">
            <span className="font-headline text-4xl sm:text-5xl font-bold text-[#efbc5c] block group-hover:scale-105 transition-transform">
              <AnimatedCounter value={IMPACT_METRICS.studyHoursLit} />
            </span>
            <p className="text-xs font-medium text-[#4a5548]">{IMPACT_METRICS.studyHoursUnit}</p>
          </div>

          <div className="bg-white p-6 sm:p-8 rounded-2xl border border-[#e2ded4] shadow-sm text-center space-y-1 hover:border-[#efbc5c] transition-all group">
            <span className="font-headline text-4xl sm:text-5xl font-bold text-emerald-700 block group-hover:scale-105 transition-transform">
              <AnimatedCounter value={IMPACT_METRICS.co2Offset} />
            </span>
            <p className="text-xs font-medium text-[#4a5548]">{IMPACT_METRICS.co2Unit}</p>
          </div>
        </div>
      </section>

      {/* 3. DỰ ÁN ĐIỂM TRƯỜNG VÙNG CAO: CÕNG TRỜI TRÊN BẢN (GỘP TRỰC TIẾP) */}
      <section id="diem-truong-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 scroll-mt-24">
        <div className="bg-white rounded-3xl border border-[#e2ded4] p-8 lg:p-12 shadow-sm space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase bg-[#041d15] px-3.5 py-1.5 rounded-full border border-[#efbc5c]/30">
                CHIẾN DỊCH THỰC ĐỊA 2026 · CÕNG TRỜI TRÊN BẢN
              </span>
              <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-[#041d15] leading-tight">
                Ánh sáng đến nơi — hành trình học tập đi tiếp
              </h2>
              <div className="prose text-xs sm:text-sm text-[#4a5548] space-y-4 leading-relaxed font-sans">
                <p>
                  Từ <strong>Xưởng Trạm Nắng</strong> tại trung tâm Đà Nẵng, đoàn nghiên cứu và tình nguyện GuiNang đã vượt hơn 160km đường đèo dốc hiểm trở về các xã biên giới <strong>Ch’Ơm, Ga Ry (huyện Tây Giang)</strong> và <strong>Trà Cang (huyện Nam Trà My)</strong>, tỉnh Quảng Nam.
                </p>
                <p>
                  Khảo sát thực địa ghi nhận <strong>hơn 65% học sinh</strong> tại các điểm trường lẻ phải học dưới ngọn đèn dầu hoặc nến leo lét do chưa có điện lưới quốc gia ổn định. Khói bồ hóng cay mắt và nguy cơ cháy nổ là nỗi lo thường trực mỗi đêm học bài.
                </p>
                <p>
                  Chiến dịch <em>"Cõng trời trên bản"</em> trao tận tay <strong>300 bộ GuiNang Edu</strong> cho các em nhỏ trường bán trú. Tấm solar 5V–3W đón nắng trên đường đi bộ 2 giờ tới trường; về nhà, đèn Solar Lamp 70g tháo rời tự động bật sáng nhờ mạch cảm biến MOSFET IRF4905, xua tan bóng tối bản cao suốt 6–8 tiếng liên tục.
                </p>
              </div>

              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  to="/impact/join"
                  className="px-5 py-2.5 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] font-headline font-bold text-xs rounded-xl shadow-sm transition-all"
                >
                  Tài trợ bộ GuiNang Edu cho trẻ em bản cao ↗
                </Link>
                <Link
                  to="/impact/transparency"
                  className="px-5 py-2.5 bg-[#f5f2e9] text-[#041d15] hover:bg-[#e8e4d8] font-headline font-bold text-xs rounded-xl border border-[#e2ded4] transition-all"
                >
                  Tra cứu mã phân bổ minh bạch NFC ↗
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="rounded-3xl overflow-hidden border border-[#e2ded4] shadow-xl bg-[#f4f0e6]">
                <img 
                  src="/assets/images/7cdd184be59dec8a062f677e6c3bf37ba8334d3d.png" 
                  alt="Trao tặng balo bản cao Tây Giang và Nam Trà My" 
                  className="w-full h-[420px] object-cover"
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

          {/* Tri ân các đơn vị bảo trợ & đồng hành */}
          <div className="pt-8 border-t border-[#e2ded4] space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-1">
              <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">
                BẢNG VÀNG ĐỒNG HÀNH CSR & CỘNG ĐỒNG
              </span>
              <h3 className="font-headline text-2xl font-bold text-[#041d15]">
                Những tấm lòng cùng gùi nguồn sáng bản cao
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sponsors.map((sp, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-[#fcfbf7] border border-[#e2ded4] space-y-1.5 shadow-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono text-[#7c8663] uppercase">{sp.type}</span>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-mono font-bold">
                      {sp.count}
                    </span>
                  </div>
                  <h4 className="font-headline font-bold text-xs text-[#041d15]">{sp.name}</h4>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Ba Cách Để Bạn Cùng Chúng Mình Gửi Nắng */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-4xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            HÌNH THỨC LAN TỎA
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-[#041d15] whitespace-normal sm:whitespace-nowrap">
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
                Sở hữu GuiNang Trail
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Với mỗi chiếc GuiNang Trail (1.500.000 VNĐ) đồng hành cùng bạn trên cung đường trekking, 100.000 VNĐ được trích trực tiếp vào Quỹ Ánh Sáng Bản Cao để trợ giá sản xuất balo học sinh vùng cao.
              </p>
            </div>
            <Link to="/products/guinang-trail" className="text-xs font-mono font-bold text-[#041d15] hover:text-[#efbc5c] flex items-center gap-1">
              Khám phá GuiNang Trail <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#c2562b] text-white flex items-center justify-center">
                <Heart className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">TÀI TRỢ TRỰC TIẾP</span>
              <h3 className="font-headline text-2xl font-bold text-[#041d15]">
                Tài trợ GuiNang Edu (880k)
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Tài trợ trực tiếp 880.000 VNĐ/bộ cặp kèm đèn học Solar Lamp 70g. Tên và thông điệp của bạn được lưu trong chip NFC trên quai cặp, tra cứu trực tuyến tình trạng bàn giao.
              </p>
            </div>
            <Link to="/impact/join" className="text-xs font-mono font-bold text-[#c2562b] hover:text-[#041d15] flex items-center gap-1">
              Tài trợ trực tiếp ngay <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#7c8663] text-white flex items-center justify-center">
                <Users className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">DOANH NGHIỆP CSR</span>
              <h3 className="font-headline text-2xl font-bold text-[#041d15]">
                Đối tác chiến lược ESG
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Đồng hành tài trợ trọn gói cho toàn bộ điểm trường (30 - 100 bộ GuiNang Edu), in logo đồng thương hiệu, nhận dữ liệu định vị GPS và báo cáo kiểm toán chỉ số ESG định kỳ.
              </p>
            </div>
            <Link to="/impact/transparency" className="text-xs font-mono font-bold text-[#041d15] hover:text-[#efbc5c] flex items-center gap-1">
              Xem cơ chế minh bạch <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. LỘ TRÌNH 3 NĂM TẠO TÁC ĐỘNG (2026 - 2028) */}
      <section className="bg-[#f5f2e9] py-20 border-y border-[#e2ded4]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              KẾ HOẠCH HÀNH ĐỘNG DỰ ÁN
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
              Lộ Trình Trao Nắng 3 Năm (2026 – 2028)
            </h2>
            <p className="text-xs sm:text-sm text-[#4a5548]">
              Mục tiêu phủ sáng 2.950+ học sinh tại các điểm trường chưa có lưới điện quốc gia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-2xl border border-[#e2ded4] space-y-3 shadow-sm">
              <span className="px-3 py-1 bg-[#041d15] text-[#efbc5c] font-mono text-xs font-bold rounded">
                NĂM 1 (2026): THẮP NẮNG
              </span>
              <h3 className="font-headline text-xl font-bold text-[#041d15]">300 Bộ Cặp Học Sinh</h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Thử nghiệm thực địa tại huyện Nam Trà My và Tây Giang (Quảng Nam). Khảo sát nhu cầu thực tế, tinh chỉnh thiết kế đèn Solar Lamp 70g và chuẩn hóa quy trình trao tặng.
              </p>
              <div className="pt-2 text-xs font-mono text-[#7c8663] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Nam Trà My & Tây Giang
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#e2ded4] space-y-3 shadow-sm">
              <span className="px-3 py-1 bg-[#c2562b] text-white font-mono text-xs font-bold rounded">
                NĂM 2 (2027): LAN NẮNG
              </span>
              <h3 className="font-headline text-xl font-bold text-[#041d15]">850 Bộ Cặp Học Sinh</h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Mở rộng mạng lưới tài trợ ra các huyện vùng cao miền Trung và Tây Nguyên (Quảng Ngãi, Kon Tum, Gia Lai) thông qua hợp tác với 10+ đối tác CSR doanh nghiệp.
              </p>
              <div className="pt-2 text-xs font-mono text-[#7c8663] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Miền Trung & Tây Nguyên
              </div>
            </div>

            <div className="p-6 bg-white rounded-2xl border border-[#e2ded4] space-y-3 shadow-sm">
              <span className="px-3 py-1 bg-[#7c8663] text-white font-mono text-xs font-bold rounded">
                NĂM 3 (2028): NỐI NẮNG
              </span>
              <h3 className="font-headline text-xl font-bold text-[#041d15]">1.800 Bộ Cặp Học Sinh</h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Mở rộng ra các tỉnh miền núi phía Bắc (Hà Giang, Sơn La, Điện Biên, Lào Cai). Hoàn thiện trạm dịch vụ lưu động và mạng lưới thu hồi tái chế pin cũ.
              </p>
              <div className="pt-2 text-xs font-mono text-[#7c8663] flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> Vùng cao Tây Bắc
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 6. NIỀM TIN ĐI CÙNG SỰ RÕ RÀNG */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
          CAM KẾT CỘNG ĐỒNG
        </span>
        <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
          Niềm tin đi cùng sự rõ ràng
        </h2>
        <p className="text-sm text-[#4a5548] max-w-xl mx-auto leading-relaxed">
          Chúng mình ứng dụng công nghệ NFC và số hóa từng phần tài trợ. Người ủng hộ luôn biết chính xác nguồn lực của mình đã chuyển thành ánh sáng tại điểm trường nào, tọa độ nào, không thất thoát và không mập mờ.
        </p>
        <div className="pt-2">
          <Link
            to="/impact/transparency"
            className="px-6 py-3.5 bg-[#041d15] text-[#efbc5c] rounded-xl font-headline font-bold text-sm inline-flex items-center gap-2 hover:bg-[#072b20] shadow"
          >
            Xem cổng dữ liệu minh bạch & Tra cứu đóng góp ↗
          </Link>
        </div>
      </section>

    </div>
  );
}
