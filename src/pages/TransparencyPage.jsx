import React, { useState } from 'react';
import { Search, ShieldCheck, PieChart, FileText, CheckCircle2, Lock, ArrowRight } from 'lucide-react';

export default function TransparencyPage() {
  const [searchCode, setSearchCode] = useState('');
  const [searchResult, setSearchResult] = useState(null);

  const handleLookup = (e) => {
    e.preventDefault();
    if (searchCode.trim()) {
      setSearchResult({
        code: searchCode.toUpperCase(),
        donor: 'Nhà hảo tâm ẩn danh',
        recipientSchool: 'Điểm trường Lăng, Xã Ch’Ơm, Tây Giang, Quảng Nam',
        quantity: '01 Chiếc SolarBag Lite',
        dateHandover: '15/10/2026',
        status: 'Đã bàn giao · Đèn đang hoạt động tốt',
        techAudit: 'Đạt kiểm định an toàn pin số #VK-2026-882'
      });
    }
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Header Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-16 border-b border-[#124636] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            MINH BẠCH & TRÁCH NHIỆM
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase">
            Theo dõi một đóng góp. <br />
            <span className="text-[#efbc5c] font-serif italic normal-case">Hiểu trọn một hành trình.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-xl mx-auto">
            Mọi khoản đóng góp đều được công khai cơ cấu phân bổ và liên kết trực tiếp với mã định danh balo thực tế.
          </p>
        </div>
      </section>

      {/* 2. Lookup Code Section */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#e2ded4] shadow-sm space-y-6">
          <div className="space-y-2 text-center">
            <h2 className="font-headline text-2xl font-bold text-[#041d15]">
              Tra cứu mã đóng góp / Serial bảo trợ
            </h2>
            <p className="text-xs text-[#6c776b]">
              Nhập mã bạn nhận được qua email hoặc thử mã mẫu: <strong>SB-DEMO-DONOR-001</strong>
            </p>
          </div>

          <form onSubmit={handleLookup} className="flex gap-2">
            <input
              type="text"
              required
              value={searchCode}
              onChange={(e) => setSearchCode(e.target.value)}
              placeholder="Nhập mã ví dụ: SB-DEMO-DONOR-001..."
              className="flex-1 px-4 py-3 rounded-xl border border-[#e2ded4] text-xs font-mono uppercase outline-none focus:border-[#041d15]"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-xl font-headline font-bold text-xs shrink-0"
            >
              Tra Cứu ↗
            </button>
          </form>

          {searchResult && (
            <div className="p-6 bg-[#fcfbf7] rounded-2xl border border-[#e2ded4] space-y-3 text-xs">
              <div className="flex items-center justify-between border-b border-[#e2ded4] pb-2">
                <span className="font-mono font-bold text-[#041d15]">Mã số: {searchResult.code}</span>
                <span className="px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px]">
                  {searchResult.status}
                </span>
              </div>
              <div className="space-y-1.5 text-[#4a5548]">
                <p><strong>Điểm trường tiếp nhận:</strong> {searchResult.recipientSchool}</p>
                <p><strong>Số lượng:</strong> {searchResult.quantity}</p>
                <p><strong>Thời gian bàn giao:</strong> {searchResult.dateHandover}</p>
                <p><strong>Kiểm định kỹ thuật:</strong> {searchResult.techAudit}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* 3. QUY TẮC BẢO VỆ DANH TÍNH TRẺ EM */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f5f2e9] p-8 sm:p-12 rounded-3xl border border-[#e2ded4] space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#7c8663] uppercase">
            <Lock className="w-4 h-4" /> NGUYÊN TẮC NHÂN VĂN
          </div>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#041d15]">
            Hành trình bàn giao, không thương mại hóa danh tính trẻ
          </h2>
          <p className="text-xs sm:text-sm text-[#4a5548] leading-relaxed">
            Tuân thủ hướng dẫn đạo đức truyền thông của UNICEF, SolarBag không bao giờ đăng tải hình ảnh khuôn mặt cận cảnh có biểu cảm đáng thương hoặc công khai thông tin cá nhân của các em học sinh. Chúng mình tập trung báo cáo về số lượng thiết bị, tính hữu dụng của đèn học và hiệu quả cải thiện việc học buổi tối.
          </p>
        </div>
      </section>

      {/* 4. Financial Allocation */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            CƠ CẤU SỬ DỤNG KINH PHÍ TÀI TRỢ
          </span>
          <h2 className="font-headline text-3xl font-bold text-[#041d15]">
            Rõ ràng từng phần, tập trung cho sản phẩm
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white rounded-2xl border border-[#e2ded4] space-y-2">
            <span className="font-mono text-2xl font-bold text-[#041d15]">72%</span>
            <h3 className="font-headline font-bold text-base text-[#041d15]">
              Sản xuất & Pin CIGS
            </h3>
            <p className="text-xs text-[#4a5548]">
              Trực tiếp mua sắm tế bào quang điện CIGS, pin Li-ion an toàn, vi mạch sạc BMS và may vỏ balo bền chắc.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#e2ded4] space-y-2">
            <span className="font-mono text-2xl font-bold text-[#041d15]">18%</span>
            <h3 className="font-headline font-bold text-base text-[#041d15]">
              Vận chuyển & Bàn giao
            </h3>
            <p className="text-xs text-[#4a5548]">
              Chi phí xăng xe, gùi tải qua các đoạn đường sạt lở vào tận các nóc xa xôi và tổ chức hướng dẫn sử dụng cho học sinh.
            </p>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-[#e2ded4] space-y-2">
            <span className="font-mono text-2xl font-bold text-[#041d15]">10%</span>
            <h3 className="font-headline font-bold text-base text-[#041d15]">
              Bảo hành & Quỹ thay pin
            </h3>
            <p className="text-xs text-[#4a5548]">
              Duy trì linh kiện dự phòng sẵn sàng đổi mới miễn phí cho học sinh khi phát sinh hỏng hóc hoặc hết chu kỳ pin.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

