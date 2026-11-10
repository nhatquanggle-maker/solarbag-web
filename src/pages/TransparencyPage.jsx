import React, { useState } from 'react';
import { Search, ShieldCheck, PieChart, FileText, CheckCircle2, ArrowRight, Radio } from 'lucide-react';

export default function TransparencyPage() {
  const [searchCode, setSearchCode] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleLookup = (e) => {
    e.preventDefault();
    if (searchCode.trim()) {
      setSearchResult({
        code: searchCode.toUpperCase(),
        donor: 'Nhà hảo tâm bảo trợ ánh sáng',
        recipientSchool: 'Điểm trường Lăng, Trường Phổ thông DTBT Tiểu học Ch’Ơm, Huyện Tây Giang, Tỉnh Quảng Nam',
        quantity: '01 Bộ GuiNang Edu (Cặp siêu nhẹ 925g + Đèn Solar Lamp 70g)',
        dateHandover: '15/10/2026',
        gpsCoord: '15.9124° N, 107.4589° E (Độ cao: 1.150m)',
        status: 'Đã bàn giao thực tế · Đèn & Pin hoạt động tốt',
        techAudit: 'Xác thực NFC #GN-NFC-TAYGIANG-2026 · Kiểm định Xưởng Trạm Nắng'
      });
    }
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Header Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-20 border-b border-[#124636] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#efbc5c]/20 text-[#efbc5c] rounded-full text-xs font-mono font-bold tracking-widest uppercase border border-[#efbc5c]/30">
            <Radio className="w-3.5 h-3.5" /> MINH BẠCH BẰNG CÔNG NGHỆ SỐ
          </div>
          <h1 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
            Theo dõi đóng góp — <span className="text-[#efbc5c] font-serif italic normal-case whitespace-normal sm:whitespace-nowrap">Hiểu trọn hành trình</span>
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-xl mx-auto leading-relaxed">
            Mọi khoản tài trợ bộ GuiNang Edu đều được gắn mã định danh NFC số hóa, công khai cơ cấu phân bổ chi phí và tra cứu kết quả bàn giao thực tế.
          </p>
        </div>
      </section>

      {/* 2. Lookup Code Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-10 rounded-3xl border border-[#e2ded4] shadow-sm space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="font-headline text-2xl font-bold text-[#041d15]">
              Tra cứu mã đóng góp / Serial bảo trợ NFC
            </h2>
            <p className="text-xs text-[#6c776b]">
              Nhập mã bạn nhận được qua thư xác nhận hoặc thử mã demo: <strong>GN-DONOR-2026-001</strong>
            </p>
          </div>

          <form onSubmit={handleLookup} className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              required
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              placeholder="Nhập mã ví dụ: GN-DONOR-2026-001..."
              className="flex-1 px-4 py-3 rounded-xl border border-[#e2ded4] text-xs font-mono uppercase outline-none focus:border-[#041d15]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-xl font-headline font-bold text-xs shrink-0 transition-colors"
            >
              Tra Cứu NFC ↗
            </button>
          </form>

          {searchResult && (
            <div className="p-6 bg-[#fcfbf7] rounded-2xl border border-[#e2ded4] space-y-3 text-xs animate-fadeIn">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#e2ded4] pb-3">
                <span className="font-mono font-bold text-[#041d15]">Mã hồ sơ: {searchResult.code}</span>
                <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px] flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> {searchResult.status}
                </span>
              </div>
              <div className="space-y-2 text-[#4a5548]">
                <p><strong>Người đồng hành:</strong> {searchResult.donor}</p>
                <p><strong>Điểm trường thụ hưởng:</strong> {searchResult.recipientSchool}</p>
                <p><strong>Tọa độ thực địa:</strong> {searchResult.gpsCoord}</p>
                <p><strong>Gói sản phẩm:</strong> {searchResult.quantity}</p>
                <p><strong>Thời gian bàn giao:</strong> {searchResult.dateHandover}</p>
                <p><strong>Chứng thực kỹ thuật:</strong> {searchResult.techAudit}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. Financial Allocation */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            CƠ CẤU SỬ DỤNG KINH PHÍ TÀI TRỢ GUINANG EDU (880.000 VNĐ)
          </span>
          <h2 className="font-headline text-3xl font-bold text-[#041d15]">
            Rõ ràng từng phần, tập trung cho độ bền sản phẩm
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-[#e2ded4] space-y-2 shadow-sm">
            <span className="font-mono text-3xl font-bold text-[#041d15]">70%</span>
            <h3 className="font-headline font-bold text-base text-[#041d15]">
              Sản xuất Phần cứng & May vỏ
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Trực tiếp mua sắm tế bào quang điện 5V-3W, pin Li-ion 18650 chống cháy nổ, mạch điều khiển TP4056 + MOSFET IRF4905, đèn LED COB 3W và may vỏ cặp PET 420D/600D.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#e2ded4] space-y-2 shadow-sm">
            <span className="font-mono text-3xl font-bold text-[#041d15]">18%</span>
            <h3 className="font-headline font-bold text-base text-[#041d15]">
              Vận chuyển & Bàn giao Thực địa
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Chi phí hậu cần, vận chuyển vượt đèo dốc sạt lở vào tận các nóc bản xa tại Nam Trà My, Tây Giang và tổ chức ngày hội bàn giao, hướng dẫn kỹ thuật cho học sinh.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#e2ded4] space-y-2 shadow-sm">
            <span className="font-mono text-3xl font-bold text-[#041d15]">12%</span>
            <h3 className="font-headline font-bold text-base text-[#041d15]">
              Bảo hành Xưởng Trạm Nắng & Quỹ Pin
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Duy trì linh kiện dự phòng sẵn sàng đổi mới miễn phí cho học sinh trong 12 tháng, thu hồi và xử lý tái chế pin hết hạn đúng chuẩn an toàn môi trường.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}
