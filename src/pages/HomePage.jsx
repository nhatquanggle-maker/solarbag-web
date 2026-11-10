import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { PRODUCTS, JOURNALS, BRAND_INFO } from '../data/mockData';
import { 
  ArrowUpRight, 
  ArrowDown, 
  Sun, 
  BatteryCharging, 
  ShieldCheck, 
  Compass, 
  CheckCircle2, 
  Sparkles,
  ChevronRight,
  Layers,
  MapPin,
  HeartHandshake
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

  const trailProduct = PRODUCTS.find(p => p.id === 'guinang-trail') || PRODUCTS[0];
  const eduProduct = PRODUCTS.find(p => p.id === 'guinang-edu') || PRODUCTS[1];

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. HERO SECTION: Nắng Theo Chân, Sáng Muôn Miền */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#041d15] text-[#f5f5e9]">
        {/* Background Image with Cinematic Overlays */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-45 scale-105 transform hover:scale-100 transition-transform duration-1000"
          style={{ backgroundImage: `url('/assets/images/6de495ed65dbb40e4b88642bad776e96c19a1cd7.png')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#041d15] via-[#041d15]/50 to-transparent" />
        <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#041d15]/85 via-transparent to-[#041d15]/85" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center space-y-8">
          
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#efbc5c]/20 border border-[#efbc5c]/40 text-[#efbc5c] text-xs font-mono tracking-widest uppercase">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CUỘC THI SINH VIÊN KINH DOANH SỐ 2026 · ĐH KINH TẾ ĐÀ NẴNG</span>
          </div>

          {/* Heading */}
          <div className="space-y-4">
            <h1 className="font-headline text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#fcfbf7] leading-[1.1]">
              NẮNG THEO CHÂN, <br />
              <span className="text-[#efbc5c] italic">SÁNG MUÔN MIỀN</span>
            </h1>
            <p className="font-serif text-xl sm:text-2xl text-[#efbc5c]/90 italic font-medium">
              GuiNang — Hệ sinh thái balo năng lượng mặt trời & giải pháp công nghệ số
            </p>
            <p className="font-handwriting text-2xl sm:text-3xl text-[#F2B632] tracking-wider -rotate-1 drop-shadow">
              ~ Mang nắng vào gùi, kết nối muôn phương ~
            </p>
          </div>

          {/* Description */}
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#d2ded0] leading-relaxed">
            Kết nối hai hành trình giá trị: <strong className="text-white">Hành trình Khám Phá</strong> phục vụ cộng đồng outdoor bằng balo trợ lực <span className="text-[#efbc5c] font-semibold">GuiNang Trail</span>, và <strong className="text-white">Hành trình Ánh Sáng</strong> đưa cặp học sinh tích hợp đèn <span className="text-[#efbc5c] font-semibold">GuiNang Edu</span> đến các điểm trường vùng cao.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/products"
              className="w-full sm:w-auto px-8 py-4 bg-[#efbc5c] text-[#041d15] hover:bg-[#f6d288] rounded-md font-headline font-bold text-lg tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
            >
              Xem danh mục sản phẩm
              <ArrowUpRight className="w-5 h-5" />
            </Link>

            <a
              href="#about-section"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-[#7c8663]/60 text-[#f5f5e9] hover:bg-white/10 rounded-md font-headline font-semibold text-lg tracking-wide transition-all flex items-center justify-center gap-2"
            >
              Tìm hiểu dự án GuiNang
              <ArrowDown className="w-5 h-5" />
            </a>
          </div>

          {/* Key Specs Highlights Pill */}
          <div className="pt-10 grid grid-cols-2 md:grid-cols-4 gap-4 text-left max-w-4xl mx-auto">
            <div className="p-4 rounded-lg bg-black/40 border border-[#7c8663]/30 backdrop-blur-sm">
              <Sun className="w-5 h-5 text-[#efbc5c] mb-1" />
              <p className="font-mono text-xs text-[#a0ac9d]">Tấm Solar 5V - 3W</p>
              <p className="font-headline text-sm font-bold text-[#f5f5e9]">Tháo rời & Sạc nhanh</p>
            </div>
            <div className="p-4 rounded-lg bg-black/40 border border-[#7c8663]/30 backdrop-blur-sm">
              <BatteryCharging className="w-5 h-5 text-[#efbc5c] mb-1" />
              <p className="font-mono text-xs text-[#a0ac9d]">Pin Li-ion 18650</p>
              <p className="font-headline text-sm font-bold text-[#f5f5e9]">5.000 mAh (37 Wh)</p>
            </div>
            <div className="p-4 rounded-lg bg-black/40 border border-[#7c8663]/30 backdrop-blur-sm">
              <ShieldCheck className="w-5 h-5 text-[#efbc5c] mb-1" />
              <p className="font-mono text-xs text-[#a0ac9d]">Mạch TP4056 + MOSFET</p>
              <p className="font-headline text-sm font-bold text-[#f5f5e9]">Tự động ngắt & Bật đèn</p>
            </div>
            <div className="p-4 rounded-lg bg-black/40 border border-[#7c8663]/30 backdrop-blur-sm">
              <Compass className="w-5 h-5 text-[#efbc5c] mb-1" />
              <p className="font-mono text-xs text-[#a0ac9d]">Product Passport NFC</p>
              <p className="font-headline text-sm font-bold text-[#f5f5e9]">Minh bạch tài trợ B2N</p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. GUINANG LÀ AI? — Từ một ý tưởng Việt */}
      <section id="about-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#e2ded4] bg-[#f4f0e6] group">
              <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-[#041d15]/90 border border-[#efbc5c]/60 text-[#efbc5c] text-xs font-headline font-bold shadow-lg backdrop-blur-md flex items-center gap-2">
                <span>📸</span>
                <span>5 THÀNH VIÊN SÁNG LẬP GUINANG</span>
              </div>
              <img 
                src="/assets/team/IMG_1982_web.jpg" 
                alt="Đội ngũ sáng lập GuiNang (Gùi Nắng)" 
                className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="p-6 bg-[#041d15] text-white space-y-1">
                <p className="text-xs font-mono text-[#efbc5c] uppercase tracking-wider">Đội ngũ sáng lập GuiNang</p>
                <p className="font-serif text-xl font-semibold italic">“Nắng theo chân, sáng muôn miền”</p>
                <p className="text-xs text-white/80">Khóa 50K22.1, Khoa Thương mại điện tử, Marketing và Công nghệ số · Trường Đại học Kinh tế – Đại học Đà Nẵng</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
                VỀ DỰ ÁN GUINANG
              </span>
              <h2 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-[#041d15] leading-tight">
                Gùi Nắng trên vai — <br />
                <span className="text-[#7c8663] font-serif italic font-normal">Sáng bừng muôn dặm đường</span>
              </h2>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#041d15] text-[#efbc5c] font-headline font-bold flex items-center justify-center shrink-0">
                  01
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-xl font-bold text-[#041d15]">
                    Đội ngũ sinh viên K50, Khoa Thương mại điện tử, Marketing và Công nghệ số
                  </h3>
                  <p className="text-sm text-[#4a5548] leading-relaxed">
                    Dự án khởi xướng bởi 5 bạn trẻ sinh viên lớp 50K22.1, Khoa Thương mại điện tử, Marketing và Công nghệ số – Trường Đại học Kinh tế, ĐH Đà Nẵng cùng mạng lưới kỹ sư Đại học Bách khoa ĐHĐN và các cố vấn doanh nghiệp.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#041d15] text-[#efbc5c] font-headline font-bold flex items-center justify-center shrink-0">
                  02
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-xl font-bold text-[#041d15]">
                    Ý nghĩa tên thương hiệu: "Gùi Nắng" & "Gửi Nắng"
                  </h3>
                  <p className="text-sm text-[#4a5548] leading-relaxed">
                    Mang hai tầng ý nghĩa bổ trợ: <strong>“Gùi Nắng”</strong> đồng hành trên hành trình khám phá thiên nhiên (dòng Trail), và <strong>“Gửi Nắng”</strong> lan tỏa ánh sáng năng lượng mặt trời đến trẻ em vùng cao (dòng Edu), cùng thống nhất trong slogan <em>“Nắng theo chân, sáng muôn miền”</em>.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#041d15] text-[#efbc5c] font-headline font-bold flex items-center justify-center shrink-0">
                  03
                </div>
                <div className="space-y-1">
                  <h3 className="font-headline text-xl font-bold text-[#041d15]">
                    Cơ chế trợ giá chéo bền vững
                  </h3>
                  <p className="text-sm text-[#4a5548] leading-relaxed">
                    Doanh nghiệp đặt mục tiêu 80% doanh thu từ dòng Trail thương mại và 20% từ dòng Edu. Một phần lợi nhuận từ Trail được trích lập để trợ giá vận chuyển và bảo hành lâu dài cho các bộ Edu vùng cao.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link
                to="/about/story"
                className="inline-flex items-center gap-2 font-headline font-bold text-base text-[#041d15] hover:text-[#efbc5c] transition-colors group"
              >
                <span>Đọc toàn bộ câu chuyện và giá trị cốt lõi</span>
                <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 3. CHỌN BẠN ĐỒNG HÀNH — HỆ SẢN PHẨM GUINANG */}
      <section className="bg-[#f5f2e9] py-20 border-y border-[#e2ded4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-4xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              HỆ THỐNG SẢN PHẨM CHÍNH THỨC
            </span>
            <h2 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-[#041d15] whitespace-normal sm:whitespace-nowrap">
              Chọn người bạn đồng hành của bạn
            </h2>
            <p className="text-sm sm:text-base text-[#4a5548]">
              Cụm đèn Solar Lamp dùng chung kết hợp cùng hai thiết kế balo chuyên biệt: Chinh phục cung đường núi hoặc Thắp sáng lớp học vùng cao.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            
            {/* Card 1: GuiNang Trail */}
            <div className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#041d15] text-[#efbc5c]">
                    OUTDOOR TREKKING
                  </span>
                  <span className="text-xs text-[#7c8663] font-mono">
                    1.570g · 35L–40L
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#041d15]">
                    {trailProduct.name}
                  </h3>
                  <p className="text-sm text-[#4a5548] leading-relaxed line-clamp-3">
                    {trailProduct.description}
                  </p>
                </div>

                <div className="relative h-56 bg-[#fcfbf7] rounded-xl overflow-hidden flex items-center justify-center p-4 border border-[#e2ded4]/60">
                  <img 
                    src={trailProduct.image} 
                    alt={trailProduct.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline text-2xl font-bold text-[#041d15]">
                      {trailProduct.priceFormatted}
                    </span>
                    <span className="text-xs text-[#7c8663] font-mono">
                      {trailProduct.priceNote}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[#6c776b]">
                    {trailProduct.shortSpecs}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0 flex flex-col gap-2">
                <Link
                  to={trailProduct.link}
                  className="w-full py-3 px-4 text-center rounded-md border border-[#041d15] text-[#041d15] hover:bg-[#041d15] hover:text-[#efbc5c] font-headline font-bold text-sm tracking-wide transition-colors"
                >
                  Chi tiết kỹ thuật ↗
                </Link>
                <button
                  onClick={() => addToCart(trailProduct, 1)}
                  className="w-full py-3 px-4 rounded-md bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] font-headline font-bold text-sm tracking-wide transition-colors shadow-md"
                >
                  Thêm vào hành trang
                </button>
              </div>
            </div>

            {/* Card 2: GuiNang Edu */}
            <div className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group">
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#7c8663] text-white">
                    HỌC ĐƯỜNG / B2N
                  </span>
                  <span className="text-xs text-[#7c8663] font-mono">
                    925g · 20L
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#041d15]">
                    {eduProduct.name}
                  </h3>
                  <p className="text-sm text-[#4a5548] leading-relaxed line-clamp-3">
                    {eduProduct.description}
                  </p>
                </div>

                <div className="relative h-56 bg-[#fcfbf7] rounded-xl overflow-hidden flex items-center justify-center p-4 border border-[#e2ded4]/60">
                  <img 
                    src={eduProduct.image} 
                    alt={eduProduct.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                <div className="space-y-2 pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline text-2xl font-bold text-[#041d15]">
                      {eduProduct.priceFormatted}
                    </span>
                    <span className="text-xs text-[#7c8663] font-mono">
                      {eduProduct.priceNote}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[#6c776b]">
                    {eduProduct.shortSpecs}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0 flex flex-col gap-2">
                <Link
                  to={eduProduct.link}
                  className="w-full py-3 px-4 text-center rounded-md border border-[#7c8663] text-[#7c8663] hover:bg-[#7c8663] hover:text-white font-headline font-bold text-sm tracking-wide transition-colors"
                >
                  Tìm hiểu gói tài trợ ↗
                </Link>
                <button
                  onClick={() => addToCart(eduProduct, 1)}
                  className="w-full py-3 px-4 rounded-md bg-[#7c8663] text-white hover:bg-[#687352] font-headline font-bold text-sm tracking-wide transition-colors shadow-md"
                >
                  Đồng hành tài trợ B2N
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 4. HỆ SINH THÁI — HAI HÀNH TRÌNH GIÁ TRỊ */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            HAI HÀNH TRÌNH GIÁ TRỊ SONG HÀNH
          </span>
          <h2 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-[#041d15] whitespace-normal sm:whitespace-nowrap">
            Một nguồn năng lượng. Hai hành trình.
          </h2>
          <p className="text-sm sm:text-base text-[#4a5548]">
            Ánh sáng đồng hành trên mỗi chuyến trekking và tiếp tục lan tỏa thành tri thức nơi các điểm trường vùng cao.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Journey 1: Hành trình khám phá */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#e2ded4] group min-h-[440px] flex flex-col justify-end p-8 text-white">
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url('/assets/images/77412110c5deb516750882d297c1f3af65e01093.png')` }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#041d15] via-[#041d15]/65 to-transparent" />
            
            <div className="relative z-10 space-y-3">
              <span className="text-xs font-mono text-[#efbc5c] tracking-widest uppercase">
                HÀNH TRÌNH KHÁM PHÁ (B2C)
              </span>
              <h3 className="font-headline text-3xl font-bold text-white">
                GuiNang Trail & Cộng đồng Outdoor
              </h3>
              <p className="text-sm text-[#e2ded4] max-w-md">
                Phục vụ cộng đồng yêu thích trekking, hiking, camping bằng giải pháp năng lượng di động bền bỉ, thư viện tuyến đường GPS và ứng dụng GuiNang App.
              </p>
              <div className="pt-2">
                <Link
                  to="/explore"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#efbc5c] text-[#041d15] font-headline font-bold text-sm tracking-wide hover:bg-[#f6d288] transition-colors"
                >
                  Khám phá các cung đường đón nắng ↗
                </Link>
              </div>
            </div>
          </div>

          {/* Journey 2: Hành trình ánh sáng */}
          <div className="relative rounded-2xl overflow-hidden shadow-lg border border-[#e2ded4] group min-h-[440px] flex flex-col justify-end p-8 text-white">
            <div 
              className="absolute inset-0 z-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
              style={{ backgroundImage: `url('/assets/images/7cdd184be59dec8a062f677e6c3bf37ba8334d3d.png')` }}
            />
            <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#041d15] via-[#041d15]/65 to-transparent" />
            
            <div className="relative z-10 space-y-3">
              <span className="text-xs font-mono text-[#efbc5c] tracking-widest uppercase">
                HÀNH TRÌNH ÁNH SÁNG (B2B / B2N)
              </span>
              <h3 className="font-headline text-3xl font-bold text-white">
                GuiNang Edu & Trẻ Em Vùng Cao
              </h3>
              <p className="text-sm text-[#e2ded4] max-w-md">
                Kết nối nhà hảo tâm và doanh nghiệp CSR trao tặng hơn 2.950 bộ cặp đèn học cho học sinh miền núi Nam Trà My, Tây Giang, Hà Giang... với hệ thống NFC minh bạch tài trợ.
              </p>
              <div className="pt-2">
                <Link
                  to="/impact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-white text-[#041d15] font-headline font-bold text-sm tracking-wide hover:bg-[#efbc5c] transition-colors"
                >
                  Khám phá chương trình tài trợ Edu ↗
                </Link>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 5. NHẬT KÝ NGOÀI TRỜI & THỰC ĐỊA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              NHẬT KÝ THỰC ĐỊA & TRẠM NẮNG
            </span>
            <h2 className="font-headline text-3xl sm:text-5xl font-bold text-[#041d15]">
              Cùng bước ra ngoài. Cùng kiểm chứng.
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

      {/* 7. NEWSLETTER CTA: Hẹn nhau dưới nắng */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#041d15] text-[#f5f5e9] rounded-3xl p-8 sm:p-14 border border-[#124636] relative overflow-hidden text-center space-y-6">
          <div className="relative z-10 max-w-xl mx-auto space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
              CHIẾN DỊCH "GỌI NẮNG VÀO GÙI"
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-white">
              Đăng ký tham gia thử nghiệm & Nhận ưu đãi đợt 1
            </h2>
            <p className="text-sm text-[#c6cfc2]">
              Cùng hoàn thiện sản phẩm GuiNang. Đăng ký thông tin trải nghiệm mẫu V2, thử nghiệm thực địa hoặc kết nối gói tài trợ doanh nghiệp CSR.
            </p>

            {subscribed ? (
              <div className="p-4 bg-[#0a3225] border border-[#efbc5c]/40 rounded-lg text-sm text-[#efbc5c] flex items-center justify-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-[#efbc5c]" />
                <span>Cảm ơn bạn! Đội ngũ GuiNang đã ghi nhận thông tin đăng ký của bạn.</span>
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
              Hotline hỗ trợ: (+84) 905.409.257 • Email: contact@guinang.vn • Xưởng Trạm Nắng, TP. Đà Nẵng
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
