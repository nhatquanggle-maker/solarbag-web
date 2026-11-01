import React from 'react';
import { Link } from 'react-router-dom';
import { Cpu, ShieldCheck, Sun, Layers, Lightbulb, Battery, Wrench, AlertCircle, ArrowRight } from 'lucide-react';

export default function TechnologyPage() {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Header Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-16 border-b border-[#124636]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            HỆ THỐNG CÔNG NGHỆ SOLARBAG
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase">
            Công nghệ tinh gọn. <br />
            <span className="text-[#efbc5c] font-serif italic normal-case">Mục đích rõ ràng.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-xl mx-auto">
            CIGS uốn dẻo, vi mạch sạc bảo vệ đa tầng và thiết kế tháo rời từng module phục vụ mục tiêu đồng hành bền lâu.
          </p>
        </div>
      </section>

      {/* 2. Cấu trúc phân tầng 4 lớp */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            BẢN VẼ PHÂN TẦNG VẬT LIỆU
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
            4 Lớp Cấu Trúc Bảo Vệ & Thu Năng Lượng
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-2xl border border-[#e2ded4] shadow-sm space-y-3">
            <span className="font-mono text-xs font-bold text-[#efbc5c] bg-[#041d15] px-2.5 py-1 rounded">
              01 / VỎ NGOÀI
            </span>
            <h3 className="font-headline text-xl font-bold text-[#041d15] pt-1">
              Bạt tái chế kháng nước
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Vải bạt tái chế phủ TPU chống mài mòn, đạt chuẩn kháng nước sương mù và mưa rào IPX6.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#e2ded4] shadow-sm space-y-3">
            <span className="font-mono text-xs font-bold text-[#efbc5c] bg-[#041d15] px-2.5 py-1 rounded">
              02 / QUANG ĐIỆN
            </span>
            <h3 className="font-headline text-xl font-bold text-[#041d15] pt-1">
              Màng dẻo CIGS 15W
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Tế bào quang điện màng mỏng Copper Indium Gallium Selenide có thể uốn cong theo balo, không sợ nứt gãy.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#e2ded4] shadow-sm space-y-3">
            <span className="font-mono text-xs font-bold text-[#efbc5c] bg-[#041d15] px-2.5 py-1 rounded">
              03 / VI MẠCH
            </span>
            <h3 className="font-headline text-xl font-bold text-[#041d15] pt-1">
              Mạch sạc BMS thông minh
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Chip MOSFET IRF4905 điều tiết dòng nạp, bảo vệ chống quá áp, ngắn mạch và nhiệt độ cao.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#e2ded4] shadow-sm space-y-3">
            <span className="font-mono text-xs font-bold text-[#efbc5c] bg-[#041d15] px-2.5 py-1 rounded">
              04 / CÔNG THÁI HỌC
            </span>
            <h3 className="font-headline text-xl font-bold text-[#041d15] pt-1">
              Đệm lưng EVA thoáng khí
            </h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Lớp EVA tổ ong thoát nhiệt và đai ngực trợ lực giúp phân bổ đều trọng tải trên các cung đường dài.
            </p>
          </div>
        </div>
      </section>

      {/* 3. MỘT MẠCH SẠC. NHIỀU LỚP BẢO VỆ. */}
      <section className="bg-[#f5f2e9] py-20 border-y border-[#e2ded4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              BẢO VỆ NGUỒN NĂNG LƯỢNG
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
              Một mạch sạc. Nhiều lớp bảo vệ.
            </h2>
          </div>

          {/* Sơ đồ luồng điện */}
          <div className="p-8 bg-[#041d15] text-[#f5f5e9] rounded-2xl border border-[#124636] space-y-6">
            <span className="text-xs font-mono text-[#efbc5c] uppercase tracking-wider block">
              SƠ ĐỒ CHỨC NĂNG ĐIỀU PHỐI DÒNG ĐIỆN
            </span>
            <div className="flex flex-wrap items-center justify-between gap-4 font-headline font-bold text-sm sm:text-base text-center">
              <div className="p-3 bg-[#0a3225] border border-[#efbc5c]/40 rounded-lg flex-1 min-w-[120px]">
                ☼ ÁNH NẮNG
              </div>
              <span className="text-[#efbc5c]">→</span>
              <div className="p-3 bg-[#0a3225] border border-[#efbc5c]/40 rounded-lg flex-1 min-w-[120px]">
                TẤM CIGS 15W
              </div>
              <span className="text-[#efbc5c]">→</span>
              <div className="p-3 bg-[#0a3225] border border-[#efbc5c]/40 rounded-lg flex-1 min-w-[120px]">
                MẠCH MOSFET & BMS
              </div>
              <span className="text-[#efbc5c]">→</span>
              <div className="p-3 bg-[#0a3225] border border-[#efbc5c]/40 rounded-lg flex-1 min-w-[120px]">
                PIN GRADE A
              </div>
              <span className="text-[#efbc5c]">→</span>
              <div className="p-3 bg-[#0a3225] border border-[#efbc5c]/40 rounded-lg flex-1 min-w-[120px]">
                USB / ĐÈN LED
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border border-[#e2ded4] space-y-2">
              <h4 className="font-headline font-bold text-[#041d15] text-lg">MOSFET IRF4905</h4>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Định hướng tự ngắt dòng khi pin đạt 100% dung lượng và ngăn dòng điện chạy ngược từ pin về tấm quang điện khi trời tối.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-[#e2ded4] space-y-2">
              <h4 className="font-headline font-bold text-[#041d15] text-lg">Li-ion Grade A & BMS</h4>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Tế bào pin chuẩn hàng không, mạch quản lý pin (Battery Management System) giám sát nhiệt độ 24/7 và chống xả sâu.
              </p>
            </div>
            <div className="p-6 bg-white rounded-xl border border-[#e2ded4] space-y-2">
              <h4 className="font-headline font-bold text-[#041d15] text-lg">Hộp bảo vệ IPX6</h4>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Toàn bộ linh kiện pin và mạch được đúc kín trong buồng composite kháng nước, chịu được ngâm nước ngắn và áp lực xối mạnh.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CHIẾC ĐÈN NHỎ, BA CÁCH ĐỒNG HÀNH */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            THÁO MỘT CHẠM · ĐỔI MỘT BỐI CẢNH
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
            Chiếc đèn nhỏ, ba cách đồng hành
          </h2>
          <p className="text-sm text-[#4a5548]">
            Đèn tháo rời đa năng đáp ứng linh hoạt từ góc học tập bản cao đến cung đường leo núi đêm tối.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-3">
            <span className="px-3 py-1 rounded bg-[#f4f0e6] text-[#041d15] font-mono text-xs font-bold">
              Chế độ 1
            </span>
            <h3 className="font-headline text-xl font-bold text-[#041d15]">Đèn đọc sách 4000K</h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Ánh sáng vàng ấm chống mỏi mắt, không nhấp nháy, góc chiếu tỏa 120° bao trọn bàn học của các em nhỏ vùng cao suốt 6-8 tiếng liên tục.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-3">
            <span className="px-3 py-1 rounded bg-[#f4f0e6] text-[#041d15] font-mono text-xs font-bold">
              Chế độ 2
            </span>
            <h3 className="font-headline text-xl font-bold text-[#041d15]">Đèn pin soi đường</h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Công suất 300 Lumens, chùm sáng xa 40m hỗ trợ trekker di chuyển an toàn trong rừng rậm hoặc dựng lều lúc hoàng hôn buông xuống.
            </p>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-3">
            <span className="px-3 py-1 rounded bg-[#f4f0e6] text-[#041d15] font-mono text-xs font-bold">
              Chế độ 3
            </span>
            <h3 className="font-headline text-xl font-bold text-[#041d15]">Chớp nháy cứu hộ SOS</h3>
            <p className="text-xs text-[#4a5548] leading-relaxed">
              Nhịp chớp chuẩn quốc tế Morse SOS báo hiệu vị trí khẩn cấp khi lạc đường hoặc gặp sự cố bất ngờ trong điều kiện thời tiết xấu.
            </p>
          </div>
        </div>
      </section>

      {/* 5. Chăm sóc đúng, đồng hành lâu hơn */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            HƯỚNG DẪN BẢO QUẢN
          </span>
          <h2 className="font-headline text-3xl font-bold text-[#041d15]">
            Chăm sóc đúng, đồng hành lâu hơn
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-white rounded-xl border border-[#e2ded4] space-y-1">
            <h4 className="font-headline font-bold text-[#041d15]">01 / Vệ sinh bề mặt</h4>
            <p className="text-xs text-[#4a5548]">
              Lau tấm quang điện bằng khăn mềm ẩm sau mỗi chuyến đi bụi bặm. Tuyệt đối không giặt máy hoặc ngâm toàn bộ hộp pin trong nước tẩy rửa.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-[#e2ded4] space-y-1">
            <h4 className="font-headline font-bold text-[#041d15]">02 / Đón nắng hiệu quả</h4>
            <p className="text-xs text-[#4a5548]">
              Hướng bề mặt balo vuông góc với mặt trời khi nghỉ trưa hoặc đeo balo xuôi theo hướng nắng khi di chuyển.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-[#e2ded4] space-y-1">
            <h4 className="font-headline font-bold text-[#041d15]">03 / Lưu trữ khi không sử dụng</h4>
            <p className="text-xs text-[#4a5548]">
              Nên duy trì mức pin ở khoảng 50-70% và cất giữ ở nơi khô ráo, thoáng mát nếu không đi trekking trong thời gian dài.
            </p>
          </div>
          <div className="p-6 bg-white rounded-xl border border-[#e2ded4] space-y-1">
            <h4 className="font-headline font-bold text-[#041d15]">04 / Chính sách thu hồi pin cũ</h4>
            <p className="text-xs text-[#4a5548]">
              Hỗ trợ đổi pin cũ lấy voucher giảm giá module mới, đảm bảo pin hết hạn được thu hồi và tái chế đúng quy chuẩn môi trường.
            </p>
          </div>
        </div>
      </section>

    </div>
  );
}

