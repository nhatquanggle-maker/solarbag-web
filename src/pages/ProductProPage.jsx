import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS, BRAND_INFO } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { 
  Check, 
  ShieldCheck, 
  Sun, 
  BatteryCharging, 
  Compass, 
  Smartphone, 
  Sparkles,
  ArrowRight,
  Layers,
  Factory
} from 'lucide-react';

export default function ProductProPage() {
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === 'guinang-trail' || p.id === 'solarbag-pro') || PRODUCTS[0];
  const [activeTab, setActiveTab] = useState(0);

  if (!product) return null;

  const galleryImages = [
    { title: 'Tổng thể GuiNang Trail', src: product.image },
    { title: 'Cụm đèn Solar Lamp tháo rời', src: '/assets/images/7979fa915a7086e80d0b025294ffb7f5ae203daa.png' },
    { title: 'Tấm quang điện 5V-3W', src: '/assets/images/fa344fb966908adf2a5e47150da8675b1bf7804b.png' },
    { title: 'Bối cảnh thực địa leo núi', src: '/assets/images/77412110c5deb516750882d297c1f3af65e01093.png' },
  ];

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Main Product Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Gallery Col */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative h-[420px] sm:h-[500px] bg-white rounded-3xl border border-[#e2ded4] overflow-hidden flex items-center justify-center p-8 shadow-sm">
              <span className="absolute top-4 left-4 px-3 py-1 bg-[#041d15] text-[#efbc5c] font-mono text-xs font-bold rounded-full">
                {product.status}
              </span>
              <img 
                src={galleryImages[activeTab].src} 
                alt={galleryImages[activeTab].title}
                className="max-h-full max-w-full object-contain transition-all duration-500" 
              />
            </div>

            {/* Thumbnail selectors */}
            <div className="flex gap-4 overflow-x-auto pb-1">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 min-w-[100px] p-2 bg-white rounded-xl border text-center transition-all ${
                    activeTab === idx
                      ? 'border-[#041d15] bg-[#f4f0e6] ring-2 ring-[#041d15]/10'
                      : 'border-[#e2ded4] hover:bg-[#fbf9f4]'
                  }`}
                >
                  <img src={img.src} alt={img.title} className="h-16 w-full object-contain mx-auto" />
                  <span className="text-[11px] font-mono text-[#4a5548] mt-1 block truncate">
                    {img.title}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Product Details & Actions Col */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
                FLAGSHIP ADVENTURE SERIES · 35L–40L
              </span>
              <h1 className="font-headline text-4xl sm:text-5xl font-bold text-[#041d15]">
                {product.name}
              </h1>
              <p className="font-serif italic text-[#c2562b] text-lg font-semibold">
                Nắng theo chân, sáng muôn miền.
              </p>
              <p className="text-sm text-[#4a5548] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-5 rounded-2xl bg-[#f5f2e9] border border-[#e2ded4] space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="font-headline text-3xl font-bold text-[#041d15]">
                  {product.priceFormatted}
                </span>
                <span className="text-xs font-mono font-semibold text-[#5e7a45]">
                  Giá niêm yết thương mại chính thức
                </span>
              </div>
              <p className="text-xs text-[#6c776b]">
                Trực tiếp lắp ráp và hoàn thiện tại Xưởng Trạm Nắng (Đà Nẵng). Tích hợp chip NFC Product Passport và bảo hành chính hãng 12 tháng.
              </p>
            </div>

            {/* Fast specs preview */}
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-[#7c8663] block">
                Thông số cốt lõi từ hồ sơ thiết kế
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#4a5548] p-4 rounded-xl bg-white border border-[#e2ded4] shadow-sm">
                <div>• Pin lưu trữ: <strong>5.000 mAh (37 Wh)</strong></div>
                <div>• Trọng lượng: <strong>1.570g (≤ 1.600g)</strong></div>
                <div>• Quang điện: <strong>2× Solar 5V–3W (6W)</strong></div>
                <div>• Đèn tháo rời: <strong>Solar Lamp 70g (LED 3W)</strong></div>
                <div>• Mạch sạc: <strong>TP4056 + MOSFET IRF4905</strong></div>
                <div>• Vải thân: <strong>Ripstop 420D–600D phủ TPU</strong></div>
                <div>• Đáy chịu lực: <strong>PET 900D viền xám than</strong></div>
                <div>• Khung trợ lực: <strong>PE/nhôm + Đai ngực & hông</strong></div>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => addToCart(product, 1)}
                className="w-full py-4 rounded-xl bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] font-headline font-bold text-base tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 cursor-pointer"
              >
                Đặt mua GuiNang Trail — 1.500.000đ
              </button>

              <div className="flex items-center justify-center gap-4 text-xs font-mono text-[#7c8663] pt-1">
                <span>✓ Kiểm định IQC/QC</span>
                <span>✓ Bảo hành 12 tháng</span>
                <span>✓ Trợ giá chéo cho Edu</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. ĐẶC ĐIỂM KỸ THUẬT & CẢI TIẾN THỰC ĐỊA */}
      <section className="bg-[#f5f2e9] py-20 border-y border-[#e2ded4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              CẢI TIẾN TỪ KHẢO SÁT & THỰC ĐỊA
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
              Khắc phục nhược điểm của balo solar hiện có
            </h2>
            <p className="text-sm text-[#4a5548]">
              Dựa trên phân tích 40 bản ghi khảo sát chuyên sâu về tình trạng sạc chập chờn khi có bóng râm và độ bền linh kiện.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {product.features.map((feat, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white border border-[#e2ded4] shadow-sm space-y-3 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-mono font-bold text-[#efbc5c] bg-[#041d15] px-2.5 py-1 rounded inline-block">
                    0{idx + 1}
                  </span>
                  <h3 className="font-headline text-lg font-bold text-[#041d15] pt-3">
                    {feat.title}
                  </h3>
                  <p className="text-xs text-[#4a5548] leading-relaxed pt-2">
                    {feat.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. BẢNG THÔNG SỐ VẬT TƯ & KỸ THUẬT CHI TIẾT (BOM) */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            CẤU TẠO CHI TIẾT THEO HỒ SƠ DỰ ÁN
          </span>
          <h2 className="font-headline text-3xl font-bold text-[#041d15]">
            Bảng thông số kỹ thuật GuiNang Trail
          </h2>
          <p className="text-sm text-[#4a5548]">
            Đạt chuẩn kiểm định vật liệu ISO 13934-1, ISO 811 và an toàn pin IEC 62133-2 / UN 38.3.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm">
          <div className="divide-y divide-[#e2ded4] text-xs sm:text-sm">
            {Object.entries(product.specs).map(([k, v], i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-3 p-4 hover:bg-[#fcfbf7] transition-colors">
                <span className="font-mono font-bold uppercase text-[#7c8663]">{k}</span>
                <span className="sm:col-span-2 font-medium text-[#1e261e]">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. SẢN XUẤT TẠI TRẠM NẮNG & BẢO HÀNH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            HẬU MÃI & TRÁCH NHIỆM VÒNG ĐỜI
          </span>
          <h2 className="font-headline text-3xl font-bold text-[#041d15]">
            Sản xuất có trách nhiệm. Bảo hành bền vững.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-4">
            <h3 className="font-headline text-xl font-bold text-[#041d15]">
              Xưởng Trạm Nắng Đà Nẵng
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Mặt bằng 180 m² tại Đà Nẵng với 8 phân khu khép kín: từ kiểm định IQC vật tư, lắp ráp Solar Lamp, kiểm tra mối hàn đến hậu mãi RMA chuyên trách.
            </p>
            <Link to="/about/story" className="text-xs font-mono font-bold text-[#041d15] hover:text-[#efbc5c] inline-block">
              Khám phá Xưởng Trạm Nắng ↗
            </Link>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-4">
            <h3 className="font-headline text-xl font-bold text-[#041d15]">
              Hộ chiếu số NFC định danh
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Mỗi sản phẩm có 1 chip NFC riêng. Chạm điện thoại để kích hoạt bảo hành điện tử 12 tháng, xem thông số xuất xưởng và nhật ký bảo trì số.
            </p>
            <Link to="/products/nfc-passport" className="text-xs font-mono font-bold text-[#041d15] hover:text-[#efbc5c] inline-block">
              Trải nghiệm Product Passport ↗
            </Link>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-4">
            <h3 className="font-headline text-xl font-bold text-[#041d15]">
              Cơ chế trợ giá chéo B2N
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Một phần lợi nhuận từ mỗi chiếc balo GuiNang Trail bạn sở hữu sẽ trực tiếp hỗ trợ chi phí vận chuyển và bảo trì cặp đèn cho các em học sinh bản cao.
            </p>
            <Link to="/impact" className="text-xs font-mono font-bold text-[#041d15] hover:text-[#efbc5c] inline-block">
              Xem Hành trình Ánh Sáng ↗
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
