import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Cpu, ShieldCheck, Sun, Layers, Radio
} from 'lucide-react';

export default function TechnologyPage() {

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Tech Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-20 border-b border-[#124636]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#efbc5c]/20 text-[#efbc5c] rounded-full text-xs font-mono font-bold tracking-widest uppercase border border-[#efbc5c]/30">
            <Cpu className="w-3.5 h-3.5" /> BẢN QUYỀN KỸ THUẬT GUINANG
          </div>
          <h1 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Kiến trúc phần cứng — <span className="text-[#efbc5c] font-serif italic normal-case whitespace-normal sm:whitespace-nowrap">Tối ưu cho sinh tồn & học tập</span>
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-2xl mx-auto leading-relaxed">
            Hệ thống quang điện tháo rời tích hợp mạch nạp an toàn TP4056, cơ chế tự động cảm biến đêm/ngày qua P-MOSFET IRF4905 và quy chuẩn kiểm định nghiêm ngặt tại Xưởng Trạm Nắng.
          </p>
        </div>
      </section>

      {/* 2. Cấu trúc phân tầng 4 lớp vật lý */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-4xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            KIẾN TRÚC PHẦN CỨNG BỀN VỮNG
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-[#041d15] whitespace-normal sm:whitespace-nowrap">
            4 Tầng Cấu Trúc Bảo Vệ & Thu Năng Lượng
          </h2>
          <p className="text-xs sm:text-sm text-[#4a5548]">
            Sự kết hợp giữa cơ khí dệt may chuyên dụng ngoài trời và vi điện tử tích hợp an toàn cao.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 01 */}
          <div className="bg-white rounded-2xl border border-[#e2ded4] shadow-sm p-6 hover:shadow-md hover:border-[#124636]/30 transition-all group flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold text-[#041d15] bg-[#f5f2e9] border border-[#e2ded4] px-2.5 py-1 rounded-md">
                  01 / VỎ NGOÀI & ĐÁY
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#041d15]/5 text-[#041d15] flex items-center justify-center group-hover:bg-[#041d15] group-hover:text-[#efbc5c] transition-colors">
                  <ShieldCheck className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-headline text-lg font-bold text-[#041d15] group-hover:text-[#124636] transition-colors">
                Ripstop 420D - 900D
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Vải Ripstop 420D–600D phủ TPU chống thấm nước sương mù và mưa rào IPX6. Đáy balo gia cường vải 900D chống mài mòn khi đặt trên đá nhọn và bùn đất.
              </p>
            </div>
          </div>

          {/* Card 02 */}
          <div className="bg-white rounded-2xl border border-[#e2ded4] shadow-sm p-6 hover:shadow-md hover:border-[#124636]/30 transition-all group flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold text-[#041d15] bg-[#f5f2e9] border border-[#e2ded4] px-2.5 py-1 rounded-md">
                  02 / QUANG ĐIỆN THÁO RỜI
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#041d15]/5 text-[#041d15] flex items-center justify-center group-hover:bg-[#041d15] group-hover:text-[#efbc5c] transition-colors">
                  <Sun className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-headline text-lg font-bold text-[#041d15] group-hover:text-[#124636] transition-colors">
                Module Solar 5V - 3W
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Tế bào quang điện hiệu suất cao bọc nhựa ETFE chống trầy. Bản Trail trang bị 2 tấm (tổng 6W), bản Edu trang bị 1 tấm (3W). Tháo rời linh hoạt để phơi nắng riêng.
              </p>
            </div>
          </div>

          {/* Card 03 */}
          <div className="bg-white rounded-2xl border border-[#e2ded4] shadow-sm p-6 hover:shadow-md hover:border-[#124636]/30 transition-all group flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold text-[#041d15] bg-[#f5f2e9] border border-[#e2ded4] px-2.5 py-1 rounded-md">
                  03 / ĐIỀU KHIỂN & BẢO VỆ
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#041d15]/5 text-[#041d15] flex items-center justify-center group-hover:bg-[#041d15] group-hover:text-[#efbc5c] transition-colors">
                  <Cpu className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-headline text-lg font-bold text-[#041d15] group-hover:text-[#124636] transition-colors">
                TP4056 + IRF4905
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                IC sạc TP4056 nạp dòng chuẩn 1A có ngắt tự động ở 4.2V. P-MOSFET công suất IRF4905 đóng vai trò cảm biến quang học, tự bật đèn khi trời tối và ngắt khi có nắng.
              </p>
            </div>
          </div>

          {/* Card 04 */}
          <div className="bg-white rounded-2xl border border-[#e2ded4] shadow-sm p-6 hover:shadow-md hover:border-[#124636]/30 transition-all group flex flex-col justify-between space-y-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-bold text-[#041d15] bg-[#f5f2e9] border border-[#e2ded4] px-2.5 py-1 rounded-md">
                  04 / CÔNG THÁI HỌC
                </span>
                <div className="w-9 h-9 rounded-xl bg-[#041d15]/5 text-[#041d15] flex items-center justify-center group-hover:bg-[#041d15] group-hover:text-[#efbc5c] transition-colors">
                  <Layers className="w-5 h-5" />
                </div>
              </div>
              <h3 className="font-headline text-lg font-bold text-[#041d15] group-hover:text-[#124636] transition-colors">
                Đệm EVA & Khung PE
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Tấm đỡ lưng PE kết hợp thanh nẹp nhôm 6061 siêu nhẹ cùng lớp đệm 3D EVA thoáng khí, giảm 30% áp lực cột sống cho học sinh và trekker trên cung đường dài.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Product Passport NFC Technology */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-[#041d15] text-[#f5f2e9] space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3 max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#efbc5c]/20 text-[#efbc5c] rounded-full text-xs font-mono font-bold uppercase">
                <Radio className="w-3.5 h-3.5" /> NFC PRODUCT PASSPORT
              </div>
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-white">
                Hộ chiếu số cho từng chiếc balo
              </h3>
              <p className="text-xs sm:text-sm text-[#d2ded0] leading-relaxed">
                Tích hợp chip NFC tần số 13.56 MHz đạt chuẩn ISO 14443A. Người dùng chỉ cần chạm điện thoại để kích hoạt bảo hành điện tử 12 tháng, tra cứu lịch sử sửa chữa tại Xưởng Trạm Nắng và xem mã hành trình tài trợ CSR.
              </p>
            </div>
            <Link
              to="/nfc-passport"
              className="px-6 py-3.5 bg-[#efbc5c] text-[#041d15] hover:bg-[#f2b632] font-headline font-bold text-sm rounded-xl transition-all shadow shrink-0 text-center"
            >
              Trải nghiệm quét chip NFC →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
