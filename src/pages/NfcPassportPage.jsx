import React, { useState } from 'react';
import { Smartphone, ShieldCheck, BatteryCharging, History, Heart, CheckCircle2, QrCode } from 'lucide-react';

export default function NfcPassportPage() {
  const [activated, setActivated] = useState(false);

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-16 border-b border-[#124636] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            HỘ CHIẾU SỐ NFC DIGITAL PASSPORT
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white tracking-tight uppercase">
            Một chạm. Cả hành trình.
          </h1>
          <p className="text-sm text-[#d2ded0]">
            Chỉ cần chạm điện thoại có NFC vào biểu tượng mặt trời ở quai balo để mở chứng thực xuất xứ, bảo hành và kết nối bản cao.
          </p>
        </div>
      </section>

      {/* Simulated Mobile NFC Screen */}
      <section className="max-w-md mx-auto px-4">
        <div className="bg-white rounded-[40px] border-[8px] border-[#041d15] shadow-2xl overflow-hidden p-6 space-y-6 relative">
          
          {/* Top phone notch indicator */}
          <div className="w-32 h-4 bg-[#041d15] rounded-full mx-auto" />

          {/* App Header */}
          <div className="flex items-center justify-between border-b border-[#e2ded4] pb-3">
            <div className="flex items-center gap-2">
              <img src="/assets/svg/sun-logo.svg" alt="SolarBag" className="w-6 h-6" />
              <span className="font-headline font-bold text-base text-[#041d15]">
                SolarBag Digital Passport
              </span>
            </div>
            <span className="text-[10px] font-mono bg-[#efbc5c]/20 text-[#041d15] px-2 py-0.5 rounded font-bold">
              NFC ACTIVE
            </span>
          </div>

          {/* Product card info */}
          <div className="bg-[#fcfbf7] p-5 rounded-2xl border border-[#e2ded4] space-y-4 text-center">
            <img 
              src="/assets/images/f07df218a363e35785a95f4364dfb00b0a8ab664.png" 
              alt="SolarBag Pro"
              className="w-36 h-36 object-contain mx-auto" 
            />
            <div>
              <h2 className="font-headline text-xl font-bold text-[#041d15]">SolarBag Pro</h2>
              <p className="font-mono text-xs text-[#7c8663]">Serial: SB-DEMO-PRO-0001</p>
            </div>

            {/* Battery state */}
            <div className="p-3 bg-white rounded-xl border border-[#e2ded4] flex items-center justify-between text-xs">
              <span className="font-mono text-[#6c776b] flex items-center gap-1.5">
                <BatteryCharging className="w-4 h-4 text-emerald-600" /> Mức sạc ước tính
              </span>
              <span className="font-mono font-bold text-[#041d15] text-sm">76% (Đang sạc)</span>
            </div>

            {/* Warranty Status */}
            <div className="p-3 bg-white rounded-xl border border-[#e2ded4] text-left space-y-2">
              <div className="flex items-center justify-between text-xs">
                <span className="text-[#6c776b]">Trạng thái bảo hành</span>
                <span className={`font-mono font-bold ${activated ? 'text-emerald-700' : 'text-amber-600'}`}>
                  {activated ? 'Đã kích hoạt · Còn 365 ngày' : 'Chưa kích hoạt'}
                </span>
              </div>
              {!activated ? (
                <button
                  onClick={() => setActivated(true)}
                  className="w-full py-2 bg-[#041d15] text-[#efbc5c] rounded-lg text-xs font-headline font-bold hover:bg-[#072b20] transition-colors"
                >
                  Kích hoạt bảo hành điện tử ngay →
                </button>
              ) : (
                <p className="text-[11px] text-emerald-700 flex items-center gap-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Bản quyền số đã được đăng ký thành công!
                </p>
              )}
            </div>
          </div>

          {/* Social Impact Connection */}
          <div className="p-4 bg-[#f4f0e6] rounded-2xl border border-[#e2ded4] space-y-2 text-xs">
            <div className="flex items-center gap-1.5 font-headline font-bold text-[#041d15] text-sm">
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>Nguồn sáng sẻ chia tương ứng</span>
            </div>
            <p className="text-[#4a5548] leading-relaxed">
              Chiếc balo của bạn đã đóng góp trực tiếp 01 chiếc SolarBag Lite cho học sinh tại <strong>Điểm trường Lăng, Tây Giang, Quảng Nam</strong>.
            </p>
            <p className="font-mono text-[11px] text-[#7c8663]">Mã dự án: CT-TG-2026-088</p>
          </div>

          {/* Service Log */}
          <div className="text-left text-xs text-[#6c776b] space-y-1">
            <p className="font-bold text-[#041d15]">Nhật ký bảo dưỡng:</p>
            <p>• 15/10/2026: Kiểm định xuất xưởng tại FabLab Đà Nẵng (Đạt)</p>
            <p>• 0 lần yêu cầu sửa chữa thay thế linh kiện</p>
          </div>

          <div className="pt-2 text-center">
            <span className="text-[10px] text-[#a0ac9d] font-mono">
              Bản demo giao diện điện thoại mô phỏng trải nghiệm NFC
            </span>
          </div>

        </div>
      </section>

    </div>
  );
}

