import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/mockData';
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
  RotateCw,
  Layers
} from 'lucide-react';

export default function ProductProPage() {
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === 'solarbag-pro');
  const [selectedBattery, setSelectedBattery] = useState('10.000 mAh');
  const [activeTab, setActiveTab] = useState(0);

  if (!product) return null;

  const galleryImages = [
    { title: 'Tổng thể balo', src: product.image },
    { title: 'Tấm quang điện CIGS', src: '/assets/images/fa344fb966908adf2a5e47150da8675b1bf7804b.png' },
    { title: 'Bối cảnh thực địa', src: '/assets/images/77412110c5deb516750882d297c1f3af65e01093.png' },
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
            <div className="flex gap-4">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveTab(idx)}
                  className={`flex-1 p-2 bg-white rounded-xl border text-center transition-all ${
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
                FLAGSHIP ADVENTURE SERIES
              </span>
              <h1 className="font-headline text-4xl sm:text-5xl font-bold text-[#041d15]">
                {product.name}
              </h1>
              <p className="font-serif italic text-[#efbc5c] text-lg">
                Năng lượng cho những bước chân tự do.
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
                <span className="text-xs font-mono font-semibold text-[#7c8663]">
                  Giá mục tiêu · Early-Bird (-20%)
                </span>
              </div>
              <p className="text-xs text-[#6c776b]">
                Dự kiến giao hàng đợt 1 kèm Hộ chiếu số NFC và bảo hành 12 tháng.
              </p>
            </div>

            {/* Options */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase text-[#7c8663] block">
                  Tùy chọn dung lượng pin BMS
                </label>
                <div className="grid grid-cols-2 gap-3">
                  {['5.000 mAh', '10.000 mAh'].map((cap) => (
                    <button
                      key={cap}
                      onClick={() => setSelectedBattery(cap)}
                      className={`p-3 rounded-lg border text-sm font-headline font-bold text-center transition-all ${
                        selectedBattery === cap
                          ? 'bg-[#041d15] text-[#efbc5c] border-[#041d15]'
                          : 'bg-white text-[#1e261e] border-[#e2ded4] hover:bg-[#f4f0e6]'
                      }`}
                    >
                      {cap} {cap === '10.000 mAh' && '★ Khuyên dùng'}
                    </button>
                  ))}
                </div>
              </div>

              {/* Fast specs preview */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#4a5548] p-3 rounded-xl bg-white border border-[#e2ded4]">
                <div>• Quang điện: CIGS 15W</div>
                <div>• Chống nước: IPX6</div>
                <div>• Dung tích: 35 Lít</div>
                <div>• Quai đeo: Trợ lực EVA</div>
              </div>
            </div>

            {/* Buttons */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => addToCart(product, 1)}
                className="w-full py-4 rounded-xl bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] font-headline font-bold text-base tracking-wide transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                Đặt trước với giá Early-Bird 1.650.000đ
              </button>

              <div className="flex items-center justify-center gap-4 text-xs font-mono text-[#7c8663] pt-1">
                <span>✓ 1 đổi 1 trong 30 ngày</span>
                <span>✓ Bảo hành 12 tháng</span>
                <span>✓ Miễn phí vận chuyển</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. ĐIỆN Ở TRONG BALO. TỰ DO Ở PHÍA TRƯỚC. */}
      <section className="bg-[#f5f2e9] py-20 border-y border-[#e2ded4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              ĐƯỢC NGHĨ TỪ CUNG ĐƯỜNG
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
              Điện ở trong balo. Tự do ở phía trước.
            </h2>
            <p className="text-sm text-[#4a5548]">
              Mỗi chi tiết cấu tạo của SolarBag Pro đều được tinh chỉnh dựa trên phản hồi của cộng đồng trekking thực địa.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.features.map((feat, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-[#e2ded4] shadow-sm space-y-3">
                <span className="text-xs font-mono font-bold text-[#efbc5c] bg-[#041d15] px-2.5 py-1 rounded">
                  0{idx + 1}
                </span>
                <h3 className="font-headline text-xl font-bold text-[#041d15] pt-2">
                  {feat.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#4a5548] leading-relaxed">
                  {feat.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 3. HIỂU RÕ THỨ BẠN MANG THEO — BOM & SPEC TABLE */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            CẤU TẠO & THÔNG SỐ BOM
          </span>
          <h2 className="font-headline text-3xl font-bold text-[#041d15]">
            Hiểu rõ thứ bạn mang theo.
          </h2>
          <p className="text-sm text-[#4a5548]">
            Thông số kỹ thuật nguyên mẫu SolarBag Pro chuẩn bị kiểm định.
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

      {/* 4. SỬA ĐƯỢC. KẾT NỐI ĐƯỢC. ĐI TIẾP ĐƯỢC. */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            ĐỒNG HÀNH SAU MỖI CHUYẾN ĐI
          </span>
          <h2 className="font-headline text-3xl font-bold text-[#041d15]">
            Sửa được. Kết nối được. Đi tiếp được.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-4">
            <h3 className="font-headline text-xl font-bold text-[#041d15]">
              Bảo hành & sửa chữa
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              12 tháng cho tấm pin CIGS và vi mạch sạc BMS; 6 tháng đèn LED. Hỗ trợ thay thế khóa kéo, đệm quai trọn vòng đời sản phẩm.
            </p>
            <Link to="/support/warranty" className="text-xs font-mono font-bold text-[#041d15] hover:text-[#efbc5c] inline-block">
              Xem chính sách bảo hành ↗
            </Link>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-4">
            <h3 className="font-headline text-xl font-bold text-[#041d15]">
              Một chạm NFC
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Kích hoạt bảo hành điện tử, tra cứu xuất xưởng và kết nối với chiếc balo học sinh tương ứng qua chip NFC nhúng ở quai đeo.
            </p>
            <Link to="/products/nfc-passport" className="text-xs font-mono font-bold text-[#041d15] hover:text-[#efbc5c] inline-block">
              Mở hộ chiếu mẫu ↗
            </Link>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-4">
            <h3 className="font-headline text-xl font-bold text-[#041d15]">
              Module đồng hành
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Dễ dàng mở rộng với đèn cắm trại đa năng tháo rời và tấm pin sơ cua 15W hỗ trợ sạc nhanh chuẩn bị lên kệ.
            </p>
            <Link to="/products/technology" className="text-xs font-mono font-bold text-[#041d15] hover:text-[#efbc5c] inline-block">
              Khám phá phụ kiện ↗
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

