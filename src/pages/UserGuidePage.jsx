import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export default function UserGuidePage() {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Header Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-20 border-b border-[#124636] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            HƯỚNG DẪN VẬN HÀNH THIẾT BỊ GUINANG
          </span>
          <h1 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase whitespace-normal sm:whitespace-nowrap">
            Làm quen với người bạn đồng hành
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-xl mx-auto leading-relaxed">
            Cẩm nang hướng dẫn sử dụng chi tiết: Cách tối ưu công suất đón nắng, tháo lắp module đèn Solar Lamp 70g tự động và bảo quản pin Li-ion 18650 an toàn.
          </p>
        </div>
      </section>

      {/* 2. Interactive Guides Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-4xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            QUY TRÌNH 4 BƯỚC VẬN HÀNH
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-[#041d15] whitespace-normal sm:whitespace-nowrap">
            Hướng Dẫn Sử Dụng Balo GuiNang
          </h2>
          <p className="text-xs sm:text-sm text-[#4a5548]">
            Các bước đơn giản để tối ưu hiệu suất đón nắng mặt trời, sử dụng đèn Solar Lamp tự động và kết nối số.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm space-y-4 p-6">
            <div className="relative h-44 rounded-xl overflow-hidden bg-[#f4f0e6]">
              <img 
                src="/assets/images/2282e2cdc06ace3c2a589fdd8c4c15d057854306.png" 
                alt="Hướng dẫn đón nắng"
                className="w-full h-full object-cover" 
              />
              <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#041d15] text-[#efbc5c] font-mono text-[10px] font-bold">
                BƯỚC 01
              </span>
            </div>
            <h3 className="font-headline text-lg font-bold text-[#041d15]">
              Đón nắng quang điện
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Đặt balo xuôi theo hướng chiếu mặt trời khi di chuyển. Khi dừng chân nghỉ ngơi, tháo module solar hoặc dựng balo nghiêng 45° so với phương ngang để đón lượng bức xạ tối đa.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm space-y-4 p-6">
            <div className="relative h-44 rounded-xl overflow-hidden bg-[#f4f0e6]">
              <img 
                src="/assets/images/7979fa915a7086e80d0b025294ffb7f5ae203daa.png" 
                alt="Hướng dẫn tháo đèn Solar Lamp"
                className="w-full h-full object-cover" 
              />
              <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#041d15] text-[#efbc5c] font-mono text-[10px] font-bold">
                BƯỚC 02
              </span>
            </div>
            <h3 className="font-headline text-lg font-bold text-[#041d15]">
              Sử dụng Solar Lamp 70g
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Mạch MOSFET IRF4905 tích hợp tự động bật đèn khi trời tối và ngắt khi trời sáng. Bạn có thể tháo rời đèn đặt trên bàn học hoặc gạt công tắc cơ 2 nấc để điều chỉnh độ sáng.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm space-y-4 p-6">
            <div className="relative h-44 rounded-xl overflow-hidden bg-[#f4f0e6]">
              <img 
                src="/assets/images/48cf0d5ef6a1b7b192aa539c6aeff170fce905b8.png" 
                alt="Quét NFC Product Passport"
                className="w-full h-full object-cover" 
              />
              <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#041d15] text-[#efbc5c] font-mono text-[10px] font-bold">
                BƯỚC 03
              </span>
            </div>
            <h3 className="font-headline text-lg font-bold text-[#041d15]">
              Quét thẻ NFC quai đeo
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Bật NFC trên smartphone và chạm nhẹ vào logo GuiNang thêu trên quai đeo. Hệ thống sẽ tự động kích hoạt bảo hành điện tử và hiển thị thông tin trợ giá học sinh vùng cao.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm space-y-4 p-6">
            <div className="relative h-44 rounded-xl overflow-hidden bg-[#f4f0e6]">
              <img 
                src="/assets/images/d1e1b9429ec08a2f5c2dee35479f5b242eb7f925.png" 
                alt="Cấp nguồn thiết bị USB-C"
                className="w-full h-full object-cover" 
              />
              <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#041d15] text-[#efbc5c] font-mono text-[10px] font-bold">
                BƯỚC 04
              </span>
            </div>
            <h3 className="font-headline text-lg font-bold text-[#041d15]">
              Cấp nguồn thiết bị USB-C
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Cổng USB-C chuẩn 5V-2A cho phép sạc dự phòng điện thoại, đèn pin đội đầu, GPS dẫn đường hoặc bộ đàm cứu hộ ngay trên đường đi trekking.
            </p>
          </div>

        </div>
      </section>

      {/* 3. Safety Warning Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-red-50 p-8 sm:p-12 rounded-3xl border border-red-200 space-y-4">
          <div className="flex items-center gap-2 text-red-800 font-mono text-xs font-bold uppercase">
            <ShieldAlert className="w-5 h-5 text-red-600" />
            <span>QUY TẮC AN TOÀN PIN & MẠCH NẠP TẠI XƯỞNG TRẠM NẮNG</span>
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-red-950">
            An toàn kỹ thuật luôn là ưu tiên số một
          </h2>
          <ul className="text-xs sm:text-sm text-red-900 space-y-2 list-disc pl-5 leading-relaxed font-sans">
            <li>Tuyệt đối không tự ý dùng vật sắc nhọn đâm chọc vào hộp chứa cell pin Li-ion 18650 hoặc tự chỉnh dây dẫn mạch sạc TP4056.</li>
            <li>Khi gặp mưa lớn ngập sâu, hãy tháo module pin đèn cất vào ngăn chống nước chuyên dụng bên trong balo.</li>
            <li>Nếu phát hiện hộp pin có hiện tượng phát nhiệt bất thường, phồng rộp hoặc có mùi khét, hãy ngắt kết nối và liên hệ hotline kỹ thuật <strong>{BRAND_INFO.hotline}</strong> để được đổi mới miễn phí theo quy định bảo hành.</li>
          </ul>
        </div>
      </section>

    </div>
  );
}
