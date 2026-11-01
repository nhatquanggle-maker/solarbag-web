import React from 'react';
import { Link } from 'react-router-dom';
import { Sun, Lightbulb, Smartphone, ShieldAlert, ArrowRight, Play } from 'lucide-react';

export default function UserGuidePage() {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Header Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-16 border-b border-[#124636] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            NHỮNG THAO TÁC NHỎ, HÀNH TRÌNH DÀI
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase">
            Làm quen với người bạn đồng hành.
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-xl mx-auto">
            Cẩm nang hướng dẫn sử dụng chi tiết: Cách tối ưu công suất sạc quang điện, tháo rời đèn LED và bảo quản pin bền bỉ.
          </p>
        </div>
      </section>

      {/* 2. Interactive Guides Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm space-y-4 p-6">
            <div className="relative h-48 rounded-xl overflow-hidden bg-[#f4f0e6]">
              <img 
                src="/assets/images/2282e2cdc06ace3c2a589fdd8c4c15d057854306.png" 
                alt="Hướng dẫn sạc nắng"
                className="w-full h-full object-cover" 
              />
              <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#041d15] text-[#efbc5c] font-mono text-[10px] font-bold">
                BƯỚC 01
              </span>
            </div>
            <h3 className="font-headline text-xl font-bold text-[#041d15]">
              Đón nắng tối ưu
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Đặt balo xuôi theo hướng chiếu của mặt trời. Khi nghỉ trưa, nghiêng bề mặt quang điện CIGS 45° so với phương thẳng đứng để đạt hiệu suất chuyển đổi cao nhất.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm space-y-4 p-6">
            <div className="relative h-48 rounded-xl overflow-hidden bg-[#f4f0e6]">
              <img 
                src="/assets/images/7979fa915a7086e80d0b025294ffb7f5ae203daa.png" 
                alt="Hướng dẫn tháo đèn"
                className="w-full h-full object-cover" 
              />
              <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#041d15] text-[#efbc5c] font-mono text-[10px] font-bold">
                BƯỚC 02
              </span>
            </div>
            <h3 className="font-headline text-xl font-bold text-[#041d15]">
              Tháo lắp module đèn
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Xoay nhẹ 30° theo chiều kim đồng hồ để nhả ngàm nam châm từ tính. Đèn có thể dùng độc lập, gắn kẹp mũ hoặc đặt đứng trên mặt bàn học.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm space-y-4 p-6">
            <div className="relative h-48 rounded-xl overflow-hidden bg-[#f4f0e6]">
              <img 
                src="/assets/images/48cf0d5ef6a1b7b192aa539c6aeff170fce905b8.png" 
                alt="Quét NFC"
                className="w-full h-full object-cover" 
              />
              <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#041d15] text-[#efbc5c] font-mono text-[10px] font-bold">
                BƯỚC 03
              </span>
            </div>
            <h3 className="font-headline text-xl font-bold text-[#041d15]">
              Quét thẻ NFC quai đeo
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Bật tính năng NFC trên smartphone và áp nhẹ mặt sau điện thoại vào biểu tượng mặt trời dập nổi trên quai đeo phải để mở thẻ điện tử.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Safety Warning Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 p-8 sm:p-12 rounded-3xl border border-red-200 space-y-4">
          <div className="flex items-center gap-2 text-red-800 font-mono text-xs font-bold uppercase">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            <span>GHI NHỚ AN TOÀN TRƯỚC KHI THAO TÁC</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-red-950">
            An toàn luôn là bước đầu tiên
          </h2>
          <ul className="text-xs sm:text-sm text-red-900 space-y-2 list-disc pl-5 leading-relaxed font-sans">
            <li>Tuyệt đối không tự ý dùng dao nhọn cạy mở buồng pin Li-ion hoặc can thiệp vi mạch BMS.</li>
            <li>Ngừng sử dụng và liên hệ trung tâm bảo hành ngay khi phát hiện hộp pin có hiện tượng phồng, biến dạng hoặc phát nhiệt bất thường.</li>
            <li>Lau khô các đầu cắm USB/Type-C trước khi cắm sạc sau khi di chuyển dưới trời mưa bão.</li>
          </ul>
          <div className="pt-2">
            <Link
              to="/support/warranty"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-red-900 text-white rounded-lg text-xs font-headline font-bold hover:bg-red-950 transition-colors"
            >
              Xem chính sách bảo hành & sửa chữa ↗
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}

