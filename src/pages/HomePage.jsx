import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PRODUCTS, JOURNALS } from '../data/mockData';
import { 
  ArrowUpRight, 
  ArrowDown, 
  Sun, 
  BatteryCharging, 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  Sparkles,
  MapPin,
  ChevronRight
} from 'lucide-react';

export default function HomePage() {
  const { addToCart } = useCart();
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
      setNewsletterEmail('');
    }
  };

  const proProduct = PRODUCTS.find(p => p.id === 'solarbag-pro');
  const liteProduct = PRODUCTS.find(p => p.id === 'solarbag-lite');

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION: Mở đầu — Một nguồn sáng */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden bg-[#041d15] text-[#f5f5e9]">
        {/* Background Image with Cinematic Overlays */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-45 scale-105 transform hover:scale-100 transition-transform duration-1000"
          style={{ backgroundImage: `url('/assets/images/6de495ed65dbb40e4b88642bad776e96c19a1cd7.png')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#041d15] via-[#041d15]/50 to-transparent" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#041d15]/80 via-transparent to-[#041d15]/80" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#efbc5c]/20 border border-[#efbc5c]/40 text-[#efbc5c] text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ý TƯỞNG KINH DOANH SỐ CAPSTONE 2026</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#fcfbf7] leading-[1.1]">
              MỖI HÀNH TRÌNH, <br />
              <span className="text-[#efbc5c] italic">MỘT NGUỒN SÁNG</span>
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-[#efbc5c]/90 italic font-medium">
              Two Journeys, One Light.
            </p>
            <p className="font-handwriting text-2xl sm:text-3xl text-[#F2B632] tracking-wider -rotate-1 drop-shadow">
              ~ Cõng trời trên bản, gom nắng tặng em ~
            </p>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#d2ded0] leading-relaxed">
            Năng lượng sạch cho người leo núi, ánh sáng tri thức cho học sinh vùng cao. 
            Ý tưởng balo quang điện CIGS linh hoạt, mạch sạc bảo vệ BMS và hộ chiếu số NFC — kết nối cộng đồng khám phá với tương lai bền vững.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-4 bg-[#efbc5c] text-[#041d15] hover:bg-[#f6d288] rounded-md font-headline font-bold text-lg tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Khám phá dự án
              <ArrowUpRight className="w-5 h-5" />
            </Link>

            <a
              href="#about-section"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#7c8663]/60 text-[#f5f5e9] hover:bg-white/10 rounded-md font-headline font-semibold text-lg tracking-wide transition-all flex items-center justify-center gap-2"
            >
              Tìm hiểu hệ sinh thái
              <ArrowDown className="w-5 h-5" />
            </a>
          </div>

          {/* Key Specs Highlights Pill */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
            <div className="p-4 rounded-lg bg-black/40 border border-[#7c8663]/30 backdrop-blur-sm">
              <Sun className="w-5 h-5 text-[#efbc5c] mb-1" />
              <p className="font-mono text-xs text-[#a0ac9d]">Quang điện CIGS</p>
              <p className="font-headline text-sm font-bold text-[#f5f5e9]">Uốn dẻo & Nhẹ</p>
            </div>
            <div className="p-4 rounded-lg bg-black/40 border border-[#7c8663]/30 backdrop-blur-sm">
              <BatteryCharging className="w-5 h-5 text-[#efbc5c] mb-1" />
              <p className="font-mono text-xs text-[#a0ac9d]">Dung lượng pin</p>
              <p className="font-headline text-sm font-bold text-[#f5f5e9]">5.000 – 10.000 mAh</p>
            </div>
            <div className="p-4 rounded-lg bg-black/40 border border-[#7c8663]/30 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 text-[#efbc5c] mb-1" />
              <p className="font-mono text-xs text-[#a0ac9d]">Chuẩn an toàn</p>
              <p className="font-headline text-sm font-bold text-[#f5f5e9]">BMS Đa Tầng · IPX6</p>
            </div>
            <div className="p-4 rounded-lg bg-black/40 border border-[#7c8663]/30 backdrop-blur-sm">
              <Compass className="w-5 h-5 text-[#efbc5c] mb-1" />
              <p className="font-mono text-xs text-[#a0ac9d]">Hộ chiếu số NFC</p>
              <p className="font-headline text-sm font-bold text-[#f5f5e9]">Một chạm xác thực</p>
            </div>
          </div>

        </div>
      </section>


      {/* 2. SOLARBAG LÀ AI? — Từ một ý tưởng Việt */}
      <section id="about-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#e2ded4] bg-[#f4f0e6]">
              <img 
                src="/assets/images/1595b43f57ec520a9a1f68274689730c87a2b65c.png" 
                alt="Nhóm bạn trẻ thực địa" 
                className="w-full h-[520px] object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                <p className="text-xs font-mono text-[#efbc5c] uppercase tracking-wider">Mục tiêu nguyên mẫu</p>
                <p className="font-serif text-2xl font-semibold italic">“Sạc đầy trong 4 giờ nắng”</p>
                <p className="text-xs text-white/80">Thử nghiệm thực địa tại bán đảo Sơn Trà & cung đèo Hải Vân, Đà Nẵng</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
                SOLARBAG LÀ AI?
              </span>
              <h2 className="font-headline text-3xl sm:text-5xl font-bold text-[#041d15] leading-tight">
                Từ một ý tưởng Việt. <br />Đến những hành trình có ích.
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#041d15] text-[#efbc5c] font-headline font-bold flex items-center justify-center shrink-0">
                  01
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-xl font-bold text-[#041d15]">
                    Người trẻ Đà Nẵng
                  </h3>
                  <p className="text-sm text-[#4a5548] leading-relaxed">
                    Sinh viên và kỹ sư trẻ kết nối giữa Đại học Kinh tế và Đại học Bách Khoa – ĐH Đà Nẵng, cùng khát khao biến công nghệ thành giải pháp vị nhân sinh.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#041d15] text-[#efbc5c] font-headline font-bold flex items-center justify-center shrink-0">
                  02
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-xl font-bold text-[#041d15]">
                    Gói nắng vào hành trang
                  </h3>
                  <p className="text-sm text-[#4a5548] leading-relaxed">
                    Tận dụng ưu thế vượt trội của tế bào quang điện màng dẻo CIGS chịu được uốn cong, kết hợp vi mạch điều phối thông minh ngắt quá nhiệt và dòng ngược.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#041d15] text-[#efbc5c] font-headline font-bold flex items-center justify-center shrink-0">
                  03
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-xl font-bold text-[#041d15]">
                    Sẻ chia trên từng bước chân
                  </h3>
                  <p className="text-sm text-[#4a5548] leading-relaxed">
                    Một sản phẩm phục vụ người leo núi; một phần giá trị chuyển thành ánh sáng học đường cho các điểm trường miền núi cao chưa có điện lưới.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about/story"
                className="inline-flex items-center gap-2 font-headline font-bold text-base text-[#041d15] hover:text-[#efbc5c] transition-colors group"
              >
                <span>Đọc toàn bộ câu chuyện thương hiệu</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </section>


      {/* 3. CHỌN BẠN ĐỒNG HÀNH — HAI THIẾT KẾ · MỘT TINH THẦN */}
      <section className="bg-[#f5f2e9] py-20 border-y border-[#e2ded4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              HAI THIẾT KẾ · MỘT TINH THẦN
            </span>
            <h2 className="font-headline text-3xl sm:text-5xl font-bold text-[#041d15]">
              Chọn bạn đồng hành của bạn.
            </h2>
            <p className="text-sm sm:text-base text-[#4a5548]">
              Phát triển theo hai định hướng chuyên biệt: Chinh phục thiên nhiên hoang dã hoặc Đồng hành cùng học sinh bản làng.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Card 1: SolarBag Pro */}
            {proProduct && (
              <div className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#041d15] text-[#efbc5c]">
                      {proProduct.category}
                    </span>
                    <span className="text-xs text-[#7c8663] font-mono">
                      {proProduct.status}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
                      {proProduct.name}
                    </h3>
                    <p className="text-sm text-[#4a5548] leading-relaxed">
                      {proProduct.description}
                    </p>
                  </div>

                  <div className="relative h-64 sm:h-72 bg-[#fcfbf7] rounded-xl overflow-hidden flex items-center justify-center p-4 border border-[#e2ded4]/60">
                    <img 
                      src={proProduct.image} 
                      alt={proProduct.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline text-2xl font-bold text-[#041d15]">
                        {proProduct.priceFormatted}
                      </span>
                      <span className="text-xs text-[#7c8663] font-mono">
                        {proProduct.priceNote}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-[#6c776b]">
                      {proProduct.shortSpecs}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0 flex flex-col sm:flex-row gap-3">
                  <Link
                    to={proProduct.link}
                    className="flex-1 py-3 px-4 text-center rounded-md border border-[#041d15] text-[#041d15] hover:bg-[#041d15] hover:text-[#efbc5c] font-headline font-bold text-sm tracking-wide transition-colors"
                  >
                    Xem chi tiết ↗
                  </Link>
                  <button
                    onClick={() => addToCart(proProduct, 1)}
                    className="flex-1 py-3 px-4 rounded-md bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] font-headline font-bold text-sm tracking-wide transition-colors shadow-md"
                  >
                    Thêm vào hành trang
                  </button>
                </div>
              </div>
            )}

            {/* Card 2: SolarBag Lite */}
            {liteProduct && (
              <div className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
                <div className="p-8 space-y-6">
                  <div className="flex justify-between items-start">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#7c8663] text-white">
                      {liteProduct.category}
                    </span>
                    <span className="text-xs text-[#7c8663] font-mono">
                      {liteProduct.status}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
                      {liteProduct.name}
                    </h3>
                    <p className="text-sm text-[#4a5548] leading-relaxed">
                      {liteProduct.description}
                    </p>
                  </div>

                  <div className="relative h-64 sm:h-72 bg-[#fcfbf7] rounded-xl overflow-hidden flex items-center justify-center p-4 border border-[#e2ded4]/60">
                    <img 
                      src={liteProduct.image} 
                      alt={liteProduct.name}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>

                  <div className="space-y-2 pt-2">
                    <div className="flex items-baseline gap-2">
                      <span className="font-headline text-2xl font-bold text-[#041d15]">
                        {liteProduct.priceFormatted}
                      </span>
                      <span className="text-xs text-[#7c8663] font-mono">
                        {liteProduct.priceNote}
                      </span>
                    </div>
                    <p className="text-xs font-mono text-[#6c776b]">
                      {liteProduct.shortSpecs}
                    </p>
                  </div>
                </div>

                <div className="p-8 pt-0 flex flex-col sm:flex-row gap-3">
                  <Link
                    to={liteProduct.link}
                    className="flex-1 py-3 px-4 text-center rounded-md border border-[#041d15] text-[#041d15] hover:bg-[#041d15] hover:text-[#efbc5c] font-headline font-bold text-sm tracking-wide transition-colors"
                  >
                    Xem chi tiết ↗
                  </Link>
                  <button
                    onClick={() => addToCart(liteProduct, 1)}
                    className="flex-1 py-3 px-4 rounded-md bg-[#7c8663] text-white hover:bg-[#687352] font-headline font-bold text-sm tracking-wide transition-colors shadow-md"
                  >
                    Đồng hành tài trợ
                  </button>
                </div>
              </div>
            )}

          </div>

        </div>
      </section>


      {/* 4. HỆ SINH THÁI — Một nguồn năng lượng. Hai hành trình. */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            HỆ SINH THÁI SOLARBAG
          </span>
          <h2 className="font-headline text-3xl sm:text-5xl font-bold text-[#041d15]">
            Một nguồn năng lượng. Hai hành trình.
          </h2>
          <p className="text-sm sm:text-base text-[#4a5548]">
            Ánh sáng không chỉ đồng hành trên mỗi chuyến đi, mà còn tiếp tục lan tỏa đến những nẻo đường học chữ xa xôi.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Journey 1: Hành trình khám phá */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#e2ded4] group min-h-[420px] flex flex-col justify-end p-8 text-white">
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url('/assets/images/77412110c5deb516750882d297c1f3af65e01093.png')` }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#041d15] via-[#041d15]/60 to-transparent" />
            
            <div className="relative z-10 space-y-3">
              <span className="text-xs font-mono text-[#efbc5c] tracking-widest uppercase">
                TWO JOURNEYS, ONE LIGHT
              </span>
              <h3 className="font-headline text-3xl font-bold text-white">
                Hành trình khám phá
              </h3>
              <p className="text-sm text-[#e2ded4] max-w-md">
                Đồng hành cùng cộng đồng trekking bằng giải pháp năng lượng di động bền bỉ, thư viện tuyến đường GPS và công cụ checklist chuyên sâu.
              </p>
              <div className="pt-2">
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#efbc5c] text-[#041d15] font-headline font-bold text-sm tracking-wide hover:bg-[#f6d288] transition-colors"
                >
                  Tham gia cộng đồng Trekker ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Journey 2: Hành trình ánh sáng */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#e2ded4] group min-h-[420px] flex flex-col justify-end p-8 text-white">
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url('/assets/images/7cdd184be59dec8a062f677e6c3bf37ba8334d3d.png')` }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#041d15] via-[#041d15]/60 to-transparent" />
            
            <div className="relative z-10 space-y-3">
              <span className="text-xs font-mono text-[#efbc5c] tracking-widest uppercase">
                COMMUNITY IMPACT
              </span>
              <h3 className="font-headline text-3xl font-bold text-white">
                Hành trình ánh sáng
              </h3>
              <p className="text-sm text-[#e2ded4] max-w-md">
                Chiến dịch "Cõng trời trên bản" mang 250 chiếc balo SolarBag Lite đến tay các em nhỏ tại các điểm trường non cao Tây Giang và Nam Trà My.
              </p>
              <div className="pt-2">
                <Link
                  to="/impact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#041d15] font-headline font-bold text-sm tracking-wide hover:bg-[#efbc5c] transition-colors"
                >
                  Khám phá tác động cộng đồng ↗
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>


      {/* 5. NHẬT KÝ NGOÀI TRỜI — Cùng bước ra ngoài. Cùng hoàn thiện. */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              NHẬT KÝ NGOÀI TRỜI
            </span>
            <h2 className="font-headline text-3xl sm:text-5xl font-bold text-[#041d15]">
              Cùng bước ra ngoài. Cùng hoàn thiện.
            </h2>
          </div>
          <Link
            to="/about/journal"
            className="inline-flex items-center gap-1 font-headline font-bold text-sm text-[#041d15] hover:text-[#efbc5c] transition-colors"
          >
            Xem tất cả nhật ký ↗
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {JOURNALS.map((j) => (
            <div 
              key={j.id}
              className="bg-white rounded-xl border border-[#e2ded4] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              <div className="relative h-48 overflow-hidden bg-[#f4f0e6]">
                <img 
                  src={j.image} 
                  alt={j.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#041d15]/80 text-[#efbc5c] text-[11px] font-mono font-medium backdrop-blur-sm">
                  {j.category}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <span className="text-xs font-mono text-[#a0ac9d]">{j.date} · {j.readTime}</span>
                  <h3 className="font-headline text-lg font-bold text-[#041d15] group-hover:text-[#efbc5c] transition-colors line-clamp-2">
                    {j.title}
                  </h3>
                  <p className="text-xs text-[#6c776b] line-clamp-3 leading-relaxed">
                    {j.excerpt}
                  </p>
                </div>
                <Link
                  to="/about/journal"
                  className="text-xs font-headline font-bold text-[#041d15] group-hover:text-[#efbc5c] flex items-center gap-1 transition-colors"
                >
                  Đọc tiếp ↗
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* 6. NEWSLETTER CTA: Hẹn nhau dưới nắng */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#041d15] text-[#f5f5e9] rounded-3xl p-8 sm:p-14 border border-[#124636] relative overflow-hidden text-center space-y-6">
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
              HẸN NHAU DƯỚI NẮNG
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white">
              Đăng ký nhận thông tin mở bán đợt 1 & Nhận ưu đãi 20%
            </h2>
            <p className="text-sm text-[#c6cfc2]">
              Cùng hoàn thiện SolarBag. Đăng ký nhận thông tin thử nghiệm, không phải đặt mua hay cam kết thanh toán.
            </p>

            {subscribed ? (
              <div className="p-4 bg-[#0a3225] border border-[#efbc5c]/40 rounded-lg text-sm text-[#efbc5c] flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#efbc5c]" />
                <span>Cảm ơn bạn! Chúng mình đã ghi nhận thông tin trải nghiệm của bạn.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 pt-2">
                <input
                  type="email"
                  required
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  placeholder="Nhập email hoặc số điện thoại..."
                  className="flex-1 px-4 py-3.5 rounded-md bg-[#0a3225] border border-[#7c8663]/40 text-sm text-white placeholder-[#a0ac9d] outline-none focus:border-[#efbc5c]"
                />
                <button
                  type="submit"
                  className="px-6 py-3.5 bg-[#efbc5c] text-[#041d15] hover:bg-[#f6d288] rounded-md font-headline font-bold text-base transition-colors shrink-0"
                >
                  Đăng Ký Trải Nghiệm ↗
                </button>
              </form>
            )}

            <p className="text-[11px] text-[#a0ac9d]">
              Thông tin bảo mật tuyệt đối, chỉ dùng để liên hệ về dự án SolarBag.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

