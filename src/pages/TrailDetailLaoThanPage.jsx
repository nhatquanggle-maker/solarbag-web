import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { TRAILS, PRODUCTS } from '../data/mockData';
import { MapPin, Sun, Mountain, Compass, Heart, Download, Smartphone, ShieldAlert, ArrowRight, Check } from 'lucide-react';

export default function TrailDetailLaoThanPage() {
  const trail = TRAILS.find(t => t.id === 'lao-than') || TRAILS[0];
  const proProduct = PRODUCTS.find(p => p.id === 'solarbag-pro');
  const [saved, setSaved] = useState(false);
  const [downloaded, setDownloaded] = useState(false);

  const handleDownloadGPX = () => {
    setDownloaded(true);
    setTimeout(() => setDownloaded(false), 3000);
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Header Hero */}
      <section className="relative min-h-[70vh] flex items-center justify-center bg-[#041d15] text-[#f5f5e9] overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-40 scale-105"
          style={{ backgroundImage: `url('/assets/images/6de495ed65dbb40e4b88642bad776e96c19a1cd7.png')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#041d15] via-[#041d15]/50 to-transparent" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase bg-black/40 px-3.5 py-1.5 rounded-full border border-[#efbc5c]/30">
            HỒ SƠ TUYẾN LEO NÚI · BẢN MINH HỌA
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase">
            Lảo Thẩn — <span className="text-[#efbc5c] font-serif italic normal-case">Đi giữa những tầng mây</span>
          </h1>
          <p className="max-w-xl mx-auto text-sm sm:text-base text-[#d2ded0]">
            Nóc nhà Y Tý với độ cao 2.860m. Cung đường đồi cỏ đón nắng trọn vẹn, thử thách khả năng tích lũy năng lượng của SolarBag Pro.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <button
              onClick={() => setSaved(!saved)}
              className="px-5 py-2.5 bg-white/10 hover:bg-white/20 border border-[#7c8663]/40 rounded-lg text-xs font-headline font-bold flex items-center gap-2 transition-colors"
            >
              <Heart className={`w-4 h-4 ${saved ? 'text-red-500 fill-red-500' : 'text-[#efbc5c]'}`} />
              {saved ? 'Đã lưu tuyến' : 'Lưu tuyến'}
            </button>

            <button
              onClick={handleDownloadGPX}
              className="px-5 py-2.5 bg-[#efbc5c] text-[#041d15] hover:bg-[#f6d288] rounded-lg text-xs font-headline font-bold flex items-center gap-2 transition-colors shadow-md"
            >
              <Download className="w-4 h-4" />
              {downloaded ? 'Đã tải file GPX' : 'Tải file GPX'}
            </button>

            <Link
              to="/explore/app"
              className="px-5 py-2.5 bg-[#041d15] text-[#f5f5e9] border border-[#7c8663]/40 hover:bg-[#0a3225] rounded-lg text-xs font-headline font-bold flex items-center gap-2 transition-colors"
            >
              <Smartphone className="w-4 h-4 text-[#efbc5c]" />
              Mở trong App Outdoor
            </Link>
          </div>
        </div>
      </section>

      {/* 2. BẢN ĐỒ & NĂNG LƯỢNG — Nhìn toàn hành trình */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            BẢN ĐỒ & NĂNG LƯỢNG
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
            Nhìn toàn hành trình trước khi bắt đầu
          </h2>
          <p className="text-sm text-[#4a5548]">
            Đo lường độ cao, điểm đón nắng và nguồn nước suối trên cung leo 16km.
          </p>
        </div>

        {/* Trail Profile Graphic */}
        <div className="bg-white p-8 rounded-3xl border border-[#e2ded4] shadow-sm space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="p-4 rounded-xl bg-[#fcfbf7] border border-[#e2ded4]">
              <span className="text-xs font-mono text-[#7c8663]">Độ cao đỉnh</span>
              <p className="font-headline text-2xl font-bold text-[#041d15]">2.860 m</p>
            </div>
            <div className="p-4 rounded-xl bg-[#fcfbf7] border border-[#e2ded4]">
              <span className="text-xs font-mono text-[#7c8663]">Tổng quãng đường</span>
              <p className="font-headline text-2xl font-bold text-[#041d15]">16 km</p>
            </div>
            <div className="p-4 rounded-xl bg-[#fcfbf7] border border-[#e2ded4]">
              <span className="text-xs font-mono text-[#7c8663]">Độ đón nắng</span>
              <p className="font-headline text-2xl font-bold text-[#efbc5c]">85% thoáng</p>
            </div>
            <div className="p-4 rounded-xl bg-[#fcfbf7] border border-[#e2ded4]">
              <span className="text-xs font-mono text-[#7c8663]">Thời gian leo</span>
              <p className="font-headline text-2xl font-bold text-[#041d15]">2 Ngày 1 Đêm</p>
            </div>
          </div>

          {/* Key Waypoints Timeline */}
          <div className="space-y-4">
            <h3 className="font-headline text-lg font-bold text-[#041d15]">
              Các mốc tọa độ chính:
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-[#f5f2e9] border border-[#e2ded4] space-y-2">
                <span className="text-xs font-mono font-bold text-[#041d15] bg-[#efbc5c] px-2 py-0.5 rounded">
                  Chặng 1 · 1.800m
                </span>
                <h4 className="font-headline text-base font-bold text-[#041d15]">Chân núi Phìn Hồ</h4>
                <p className="text-xs text-[#4a5548]">
                  Điểm xuất phát, gửi xe và bổ sung nước suối cuối cùng. Bắt đầu bật sạc CIGS.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f5f2e9] border border-[#e2ded4] space-y-2">
                <span className="text-xs font-mono font-bold text-[#f5f5e9] bg-[#041d15] px-2 py-0.5 rounded">
                  Chặng 2 · 2.560m
                </span>
                <h4 className="font-headline text-base font-bold text-[#041d15]">Lán nghỉ A Hờ</h4>
                <p className="text-xs text-[#4a5548]">
                  Bãi cỏ bằng phẳng hạ trại, đón hoàng hôn mây đỏ. Tháo đèn SolarBag làm nguồn sáng đêm.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#f5f2e9] border border-[#e2ded4] space-y-2">
                <span className="text-xs font-mono font-bold text-white bg-emerald-800 px-2 py-0.5 rounded">
                  Chặng 3 · 2.860m
                </span>
                <h4 className="font-headline text-base font-bold text-[#041d15]">Đỉnh chóp Lảo Thẩn</h4>
                <p className="text-xs text-[#4a5548]">
                  Biển mây Y Tý bồng bềnh lúc bình minh. Nắng sớm chiếu rọi giúp sạc đầy pin điện thoại và flycam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. MÂY ĐẸP KHÔNG THAY THẾ KẾ HOẠCH AN TOÀN */}
      <section className="bg-[#f5f2e9] py-20 border-y border-[#e2ded4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              CHUẨN BỊ CÓ TRÁCH NHIỆM
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
              Mây đẹp không thay thế một kế hoạch an toàn
            </h2>
            <p className="text-sm text-[#4a5548]">
              Leo núi luôn tiềm ẩn rủi ro thời tiết thay đổi đột ngột. Hãy đảm bảo bạn chuẩn bị đầy đủ thiết bị sinh tồn.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-4">
              <span className="font-mono text-xs font-bold text-[#efbc5c] bg-[#041d15] px-2.5 py-1 rounded">
                TRƯỚC KHI ĐI
              </span>
              <h3 className="font-headline text-2xl font-bold text-[#041d15]">
                Mùa săn mây & Thời tiết
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Mùa đẹp nhất từ tháng 9 đến tháng 4 năm sau. Cần theo dõi dự báo thời tiết sát ngày đi ít nhất 3 ngày; liên hệ với porter địa phương người Mông để đảm bảo đường mòn không bị sạt lở.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-4">
              <span className="font-mono text-xs font-bold text-[#efbc5c] bg-[#041d15] px-2.5 py-1 rounded">
                TRÊN ĐƯỜNG LEO
              </span>
              <h3 className="font-headline text-2xl font-bold text-[#041d15]">
                An toàn & Giữ liên lạc
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Nhiệt độ ban đêm tại lán nghỉ có thể hạ xuống dưới 5°C kèm gió mạnh. Balo cần chống nước chuẩn IPX6 để bảo vệ thiết bị điện tử khỏi hơi ẩm sương mù đậm đặc.
              </p>
              <div className="pt-2 border-t border-[#e2ded4]/60">
                <p className="font-handwriting text-base text-[#C2562B]">
                  * Mẹo nhỏ: Bật sạc năng lượng khi đi qua đoạn sống lưng gió lộng để pin đạt 100% trước khi tới lán!
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Hành trang gợi ý */}
      {proProduct && (
        <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-8 sm:p-12 rounded-3xl border border-[#e2ded4] shadow-md flex flex-col md:flex-row items-center gap-8">
            <img 
              src={proProduct.image} 
              alt={proProduct.name}
              className="w-48 h-48 object-contain" 
            />
            <div className="space-y-4 flex-1">
              <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">HÀNH TRANG GỢI Ý CHO CUNG LẢO THẨN</span>
              <h3 className="font-headline text-3xl font-bold text-[#041d15]">
                {proProduct.name}
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Dung lượng pin 10.000 mAh đủ sạc 2-3 lần điện thoại và máy ảnh định vị GPS trong 48 giờ ở vùng không có điện lưới.
              </p>
              <div className="pt-2">
                <Link
                  to="/products/solarbag-pro"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-lg font-headline font-bold text-sm transition-colors"
                >
                  Xem SolarBag Pro ↗
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}

