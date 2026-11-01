import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Lightbulb, Heart, ShieldCheck, ArrowRight, Sun, Leaf } from 'lucide-react';

export default function StoryPage() {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Header Hero */}
      <section className="relative bg-[#041d15] text-[#f5f5e9] py-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-overlay"
          style={{ backgroundImage: `url('/assets/images/1595b43f57ec520a9a1f68274689730c87a2b65c.png')` }}
        />
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#041d15] via-transparent to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            NHẬT KÝ KHỞI NGUỒN
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight uppercase">
            Từ tiếng gọi núi rừng <br />
            <span className="text-[#efbc5c] font-serif italic normal-case">đến nguồn sáng bản cao</span>
          </h1>
          <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#d2ded0] leading-relaxed">
            Chúng mình là những người trẻ Đà Nẵng, mang tinh thần khám phá và tình yêu công nghệ đến gần hơn với cộng đồng.
          </p>
        </div>
      </section>

      {/* 2. Ba khoảng trống. Một ý tưởng kết nối. */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            NHỮNG ĐIỀU THÔI THÚC CHÚNG MÌNH
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
            Ba khoảng trống. Một ý tưởng kết nối.
          </h2>
          <p className="text-sm text-[#4a5548]">
            Ý tưởng SolarBag không sinh ra trong phòng nghiên cứu lạnh lẽo, mà bắt nguồn từ những chuyến đi thực tế.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4 relative group hover:border-[#efbc5c] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#041d15] text-[#efbc5c] flex items-center justify-center">
              <Compass className="w-6 h-6 stroke-[1.8]" />
            </div>
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">01 / KHÁM PHÁ</span>
            <h3 className="font-headline text-2xl font-bold text-[#041d15]">
              Điện trên cung đường xa
            </h3>
            <p className="text-sm text-[#4a5548] leading-relaxed">
              Khi những ổ cắm ở lại sau lưng, điện thoại, thiết bị GPS và đèn pin sinh tồn luôn đòi hỏi nguồn năng lượng liên tục. Sạc dự phòng truyền thống cạn kiệt nhanh chóng trên những chuyến đi nhiều ngày.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4 relative group hover:border-[#efbc5c] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#efbc5c] text-[#041d15] flex items-center justify-center">
              <Lightbulb className="w-6 h-6 stroke-[1.8]" />
            </div>
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">02 / HỌC TẬP</span>
            <h3 className="font-headline text-2xl font-bold text-[#041d15]">
              Ánh sáng nơi non cao
            </h3>
            <p className="text-sm text-[#4a5548] leading-relaxed">
              Tại các điểm trường xa xôi ở Tây Giang, học sinh phải đi bộ hàng chục cây số đường rừng dưới nắng gắt. Buổi tối các em phải chen chúc học bài dưới ngọn đèn dầu leo lét, ảnh hưởng nặng nề đến thị lực.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#e2ded4] shadow-sm space-y-4 relative group hover:border-[#efbc5c] transition-all">
            <div className="w-12 h-12 rounded-xl bg-[#7c8663] text-white flex items-center justify-center">
              <Sun className="w-6 h-6 stroke-[1.8]" />
            </div>
            <span className="text-xs font-mono font-bold text-[#7c8663] uppercase">03 / CÔNG NGHỆ</span>
            <h3 className="font-headline text-2xl font-bold text-[#041d15]">
              Quang điện CIGS linh hoạt
            </h3>
            <p className="text-sm text-[#4a5548] leading-relaxed">
              Giải pháp: Thay vì dùng tấm pin silic cứng dễ vỡ, SolarBag tích hợp màng mỏng quang điện CIGS dẻo, bền, kết hợp mạch ngắt bảo vệ BMS — chuyển nắng trên lưng thành điện hữu ích.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Lộ trình phát triển — Từ bản phác thảo đến bước chân thực địa */}
      <section className="bg-[#f5f2e9] py-20 border-y border-[#e2ded4]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              SỔ TAY R&D
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
              Từ bản phác thảo đến bước chân thực địa
            </h2>
            <p className="text-sm text-[#4a5548]">
              Lộ trình phát triển dự án — các mốc định hướng phát triển bài bản và thực tế.
            </p>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-white rounded-xl border border-[#e2ded4] flex flex-col md:flex-row gap-6 items-start">
              <span className="px-4 py-2 bg-[#041d15] text-[#efbc5c] font-mono text-sm font-bold rounded-lg shrink-0">
                Giai đoạn 1 · T1–T3
              </span>
              <div className="space-y-1">
                <h3 className="font-headline text-xl font-bold text-[#041d15]">Lắng nghe & Khảo sát thực địa</h3>
                <p className="text-sm text-[#4a5548]">
                  Khảo sát thói quen sử dụng năng lượng của 300+ trekker và phỏng vấn các thầy cô giáo tại 8 điểm trường khó khăn miền núi Quảng Nam – Đà Nẵng.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#e2ded4] flex flex-col md:flex-row gap-6 items-start">
              <span className="px-4 py-2 bg-[#041d15] text-[#efbc5c] font-mono text-sm font-bold rounded-lg shrink-0">
                Giai đoạn 2 · T4–T6
              </span>
              <div className="space-y-1">
                <h3 className="font-headline text-xl font-bold text-[#041d15]">Thử nghiệm mạch sạc & Nguyên mẫu đầu tiên</h3>
                <p className="text-sm text-[#4a5548]">
                  Chế tạo mạch MOSFET IRF4905 chống dòng ngược, tích hợp pin BMS và kiểm nghiệm độ bền tấm CIGS khi uốn cong trên bề mặt cong của balo.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#e2ded4] flex flex-col md:flex-row gap-6 items-start">
              <span className="px-4 py-2 bg-[#041d15] text-[#efbc5c] font-mono text-sm font-bold rounded-lg shrink-0">
                Giai đoạn 3 · T7–T9
              </span>
              <div className="space-y-1">
                <h3 className="font-headline text-xl font-bold text-[#041d15]">Chuyến đi Lảo Thẩn & Thử nghiệm Tây Giang</h3>
                <p className="text-sm text-[#4a5548]">
                  Đưa nguyên mẫu SolarBag Pro lên độ cao 2.860m và trao tặng đợt thử nghiệm 50 chiếc SolarBag Lite đầu tiên cho học sinh vùng cao.
                </p>
              </div>
            </div>

            <div className="p-6 bg-white rounded-xl border border-[#e2ded4] flex flex-col md:flex-row gap-6 items-start">
              <span className="px-4 py-2 bg-[#efbc5c] text-[#041d15] font-mono text-sm font-bold rounded-lg shrink-0">
                Giai đoạn 4 · T10–T12
              </span>
              <div className="space-y-1">
                <h3 className="font-headline text-xl font-bold text-[#041d15]">Hoàn thiện hồ sơ kinh doanh & Ra mắt Early-Bird</h3>
                <p className="text-sm text-[#4a5548]">
                  Tối ưu hóa chuỗi cung ứng linh kiện, kiểm định an toàn IPX6 và mở cổng tiếp nhận đăng ký trải nghiệm phiên bản thương mại đầu tiên.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Tầm nhìn, Sứ mệnh & Giá trị cốt lõi */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-[#041d15] text-white p-10 rounded-2xl space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
              TẦM NHÌN
            </span>
            <h3 className="font-headline text-3xl font-bold text-white">
              Thương hiệu outdoor xanh bền vững của người Việt
            </h3>
            <p className="text-sm text-[#d2ded0] leading-relaxed">
              Trở thành biểu tượng của công nghệ ứng dụng xanh, nơi mỗi sản phẩm thương mại được sinh ra đều đồng hành trực tiếp cùng sự tiến bộ của giáo dục vùng cao.
            </p>
          </div>

          <div className="bg-[#0a3225] text-white p-10 rounded-2xl space-y-4">
            <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
              SỨ MỆNH
            </span>
            <h3 className="font-headline text-3xl font-bold text-white">
              Gói nắng trên vai, thắp sáng tương lai
            </h3>
            <p className="text-sm text-[#d2ded0] leading-relaxed">
              Cung cấp năng lượng di động bền bỉ, an toàn cho những người đam mê xê dịch, đồng thời mở rộng cơ hội tiếp cận ánh sáng học tập chất lượng cho trẻ em nghèo.
            </p>
          </div>
        </div>

        {/* 3 Giá trị cốt lõi */}
        <div className="pt-6">
          <div className="text-center max-w-xl mx-auto space-y-2 mb-8">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              BA GIÁ TRỊ CỐT LÕI
            </span>
            <h2 className="font-headline text-3xl font-bold text-[#041d15]">
              Những điều không đổi trên mọi hành trình
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl bg-white border border-[#e2ded4] space-y-2">
              <h4 className="font-headline text-lg font-bold text-[#041d15]">Thiết kế hữu ích</h4>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Bắt đầu từ nhu cầu có thật. Không thêm thắt tính năng dư thừa, ưu tiên độ bền vật lý, sự nhẹ nhàng và an toàn điện môi trường khắc nghiệt.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-[#e2ded4] space-y-2">
              <h4 className="font-headline text-lg font-bold text-[#041d15]">Phát triển có trách nhiệm</h4>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Định hướng sử dụng vải bạt tái chế, cơ chế thu hồi pin cũ và cam kết bảo hành, sửa chữa trọn đời để hạn chế tối đa rác thải điện tử.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-white border border-[#e2ded4] space-y-2">
              <h4 className="font-headline text-lg font-bold text-[#041d15]">Minh bạch tác động</h4>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Ứng dụng chip NFC trên từng sản phẩm để bất kỳ người dùng nào cũng có thể theo dõi chiếc balo Lite tương ứng đã được trao đi đâu, vào ngày nào.
              </p>
            </div>
          </div>
        </div>

        {/* Handwritten Founder Note */}
        <div className="mt-12 text-center p-8 rounded-2xl bg-[#E3DCC8]/50 border border-[#5E7A45]/30 max-w-2xl mx-auto shadow-sm">
          <p className="font-handwriting text-2xl text-[#1F3D2B] leading-relaxed">
            "Chúng mình tin rằng, ánh sáng đẹp nhất không phải là ánh đèn rực rỡ nơi phố thị, mà là ánh sáng được thắp lên nơi bản làng còn khó khăn."
          </p>
          <p className="font-serif italic text-sm text-[#C2562B] font-semibold mt-2">
            — Đội ngũ sáng lập SolarBag, Capstone 2026
          </p>
        </div>
      </section>

    </div>
  );
}

