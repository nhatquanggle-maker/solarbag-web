import React, { useState } from 'react';
import { Smartphone, ShieldCheck, BatteryCharging, History, Heart, CheckCircle2, QrCode, Sun, Cpu, MapPin } from 'lucide-react';
import { BRAND_INFO } from '../data/mockData';

export default function NfcPassportPage() {
  const [activated, setActivated] = useState(false);

  return (
    <div className="space-y-16 pb-20">
      
      {/* Header */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-16 border-b border-[#124636] text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            HỘ CHIẾU SỐ NFC DIGITAL PRODUCT PASSPORT
          </span>
          <h1 className="font-headline text-4xl sm:text-5xl font-bold text-white tracking-tight uppercase">
            Một chạm. Cả hành trình.
          </h1>
          <p className="text-sm text-[#d2ded0] leading-relaxed">
            Chạm điện thoại có NFC (13.56 MHz) vào biểu tượng mặt trời thêu trên quai đeo để mở chứng thực xuất xứ Xưởng Trạm Nắng, kích hoạt bảo hành 12 tháng và theo dõi mã tài trợ bản cao.
          </p>
        </div>
      </section>

      {/* Simulated Mobile NFC Screen */}
      <section className="max-w-[360px] mx-auto px-4">
        {/* Smartphone Shell with Realistic Proportions */}
        <div className="bg-[#1a201c] rounded-[48px] p-3 shadow-2xl border-4 border-[#2b352e] relative">
          
          {/* Inner Screen */}
          <div className="bg-[#faf8f2] rounded-[38px] overflow-hidden border border-[#d8d3c5] flex flex-col max-h-[620px]">
            
            {/* Dynamic Island / Notch */}
            <div className="pt-3 pb-2 bg-[#faf8f2] flex justify-center shrink-0">
              <div className="w-24 h-4 bg-[#1a201c] rounded-full flex items-center justify-end pr-2">
                <div className="w-2 h-2 rounded-full bg-[#35433a]" />
              </div>
            </div>

            {/* Scrollable Screen Content */}
            <div className="p-4 space-y-3.5 overflow-y-auto text-[#041d15] text-xs">
              
              {/* App Header */}
              <div className="flex items-center justify-between border-b border-[#e2ded4] pb-2.5">
                <div className="flex items-center gap-2">
                  <img src="/assets/brand/brand_logo.png" alt="GuiNang Logo" className="w-7 h-7 object-contain" />
                  <div>
                    <span className="font-headline font-bold text-xs text-[#041d15] block leading-none">
                      GuiNang Passport
                    </span>
                    <span className="text-[9px] text-[#7c8663] font-mono">NFC · ISO 14443A</span>
                  </div>
                </div>
                <span className="text-[9px] font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold">
                  CONNECTED
                </span>
              </div>

              {/* Product card info */}
              <div className="bg-white p-3.5 rounded-2xl border border-[#e2ded4] space-y-2.5 text-center shadow-sm">
                <img 
                  src="/assets/images/f07df218a363e35785a95f4364dfb00b0a8ab664.png" 
                  alt="GuiNang Trail"
                  className="w-24 h-24 object-contain mx-auto" 
                />
                <div>
                  <div className="inline-block px-2 py-0.5 rounded-full text-[9px] font-mono font-bold bg-[#efbc5c]/25 text-[#041d15] mb-1">
                    OUTDOOR TREKKING SERIES
                  </div>
                  <h2 className="font-headline text-base font-bold text-[#041d15] leading-tight">GuiNang Trail 40L</h2>
                  <p className="font-mono text-[10px] text-[#7c8663]">Serial: GN-TRAIL-2026-0089</p>
                </div>

                {/* Quick Specs */}
                <div className="grid grid-cols-2 gap-1.5 text-[10px] font-mono text-[#4a5548] p-2 bg-[#f8f6f0] rounded-xl border border-[#e2ded4] text-left">
                  <div>• 2x 5V-3W (6W Solar)</div>
                  <div>• Pin 18650 37 Wh</div>
                  <div>• TP4056 + IRF4905</div>
                  <div>• Đèn LED COB 3W</div>
                </div>

                {/* Battery state */}
                <div className="p-2.5 bg-[#f8f6f0] rounded-xl border border-[#e2ded4] flex items-center justify-between text-[11px]">
                  <span className="font-mono text-[#6c776b] flex items-center gap-1">
                    <BatteryCharging className="w-3.5 h-3.5 text-emerald-600" /> Điện áp cell pin
                  </span>
                  <span className="font-mono font-bold text-[#041d15]">4.08V (88% Sạc)</span>
                </div>

                {/* Warranty Status */}
                <div className="p-2.5 bg-[#f8f6f0] rounded-xl border border-[#e2ded4] text-left space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="text-[#6c776b]">Bảo hành điện tử</span>
                    <span className={`font-mono font-bold ${activated ? 'text-emerald-700' : 'text-amber-600'}`}>
                      {activated ? 'Đã kích hoạt · 365 ngày' : 'Chưa kích hoạt'}
                    </span>
                  </div>
                  {!activated ? (
                    <button
                      onClick={() => setActivated(true)}
                      className="w-full py-2 bg-[#041d15] text-[#efbc5c] rounded-lg text-[11px] font-headline font-bold hover:bg-[#072b20] transition-colors"
                    >
                      Kích hoạt bảo hành 12 tháng →
                    </button>
                  ) : (
                    <p className="text-[10px] text-emerald-700 flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3 h-3" /> Xác thực chính hãng tại Xưởng Trạm Nắng Đà Nẵng!
                    </p>
                  )}
                </div>
              </div>

              {/* Social Impact Connection */}
              <div className="p-3 bg-white rounded-2xl border border-[#e2ded4] space-y-1.5 text-[11px] shadow-sm">
                <div className="flex items-center gap-1.5 font-headline font-bold text-[#041d15] text-xs">
                  <Heart className="w-3.5 h-3.5 text-[#c2562b] fill-[#c2562b]" />
                  <span>Nguồn sáng trợ giá tương ứng</span>
                </div>
                <p className="text-[#4a5548] leading-relaxed text-[10px]">
                  Balo trích <strong>100.000 VNĐ</strong> trợ giá sản xuất bộ GuiNang Edu cho học sinh tại <strong>PTDTBT Tiểu học Trà Cang, Nam Trà My, Quảng Nam</strong>.
                </p>
                <p className="font-mono text-[9px] text-[#7c8663]">Mã dự án: GN-EDU-2026-NTM</p>
              </div>

              {/* Service Log */}
              <div className="p-2.5 bg-white rounded-xl border border-[#e2ded4] text-left text-[10px] text-[#6c776b] space-y-0.5">
                <p className="font-bold text-[#041d15]">Nhật ký Xưởng Trạm Nắng:</p>
                <p>• 15/10/2026: Kiểm định 8 bước IQC/QC xuất xưởng (Đạt)</p>
                <p>• Hotline hỗ trợ: {BRAND_INFO.hotline}</p>
              </div>

            </div>

            {/* Bottom Home Indicator Bar */}
            <div className="py-2 bg-[#faf8f2] flex justify-center shrink-0 border-t border-[#e2ded4]/50">
              <div className="w-28 h-1 bg-[#1a201c]/60 rounded-full" />
            </div>

          </div>

        </div>

        <div className="pt-3 text-center">
          <span className="text-[11px] text-[#7c8663] font-mono">
            Mô phỏng quét chip NFC 13.56 MHz trên điện thoại thông minh
          </span>
        </div>
      </section>

    </div>
  );
}
