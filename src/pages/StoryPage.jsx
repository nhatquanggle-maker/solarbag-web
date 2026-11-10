import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Lightbulb, Sun, ShieldCheck, ArrowRight, Heart, MapPin, Factory } from 'lucide-react';

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
            CÂU CHUYỆN THƯƠNG HIỆU GUINANG (GÙI NẮNG)
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight uppercase">
            Nắng theo chân, <span className="text-[#efbc5c] font-serif italic normal-case whitespace-normal sm:whitespace-nowrap">sáng muôn miền</span>
          </h1>
          <p className="max-w-3xl mx-auto text-base sm:text-lg text-[#d2ded0] leading-relaxed">
            Khởi nguồn từ Đề án khởi nghiệp Cuộc thi Sinh viên Kinh doanh số 2026 bởi nhóm sinh viên Lớp 50K22.1, Khoa Thương mại điện tử, Marketing và Công nghệ số – Trường Đại học Kinh tế, ĐH Đà Nẵng.
          </p>
        </div>
      </section>

      {/* 2. Ý nghĩa tên gọi & Định vị thương hiệu: “Gùi Nắng” & “Gửi Nắng” */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Intro */}
        <div className="text-center max-w-4xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase bg-[#f5f2e9] px-4 py-1.5 rounded-full border border-[#e2ded4]">
            BẢN SẮC & Ý NGHĨA THƯƠNG HIỆU
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-[#041d15] whitespace-normal sm:whitespace-nowrap">
            Tên Thương Hiệu Và Ý Nghĩa: “Gùi Nắng” & “Gửi Nắng”
          </h2>
          <p className="text-sm sm:text-base text-[#4a5548] leading-relaxed">
            Tên thương hiệu chính thức của dự án là <strong>Guinang</strong>, mang hai tầng ý nghĩa bổ trợ cho nhau: <strong>“Gùi Nắng”</strong> và <strong>“Gửi Nắng”</strong>. Sự kết hợp này thể hiện đồng thời giá trị công năng của sản phẩm và định hướng trách nhiệm xã hội mà doanh nghiệp theo đuổi, gắn liền với hai hành trình cốt lõi: <em>Hành trình khám phá</em> và <em>Hành trình ánh sáng</em>.
          </p>
        </div>

        {/* 2 Parallel Core Meaning Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Meaning 1: GÙI NẮNG */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#e2ded4] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#041d15] text-[#efbc5c] text-xs font-headline font-bold uppercase tracking-wider">
                <Compass className="w-4 h-4 text-[#efbc5c]" />
                <span>HÀNH TRÌNH KHÁM PHÁ (B2C)</span>
              </div>
              
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#041d15] leading-tight">
                “Gùi Nắng” — Đồng hành trên hành trình khám phá
              </h3>

              <div className="space-y-3 text-sm text-[#4a5548] leading-relaxed">
                <p>
                  <strong>“Gùi”</strong> gợi liên tưởng đến vật dụng mang vác truyền thống, quen thuộc trong đời sống của nhiều cộng đồng miền núi, tượng trưng cho hành trang, sự bền bỉ và tinh thần vượt qua những chặng đường.
                </p>
                <p>
                  <strong>“Nắng”</strong> đại diện cho ánh sáng và nguồn năng lượng mặt trời, yếu tố công nghệ cốt lõi được ứng dụng trong sản phẩm của Guinang.
                </p>
                <div className="p-4 bg-[#f5f2e9] rounded-2xl border-l-4 border-[#5E7A45] text-xs sm:text-sm text-[#041d15] leading-relaxed">
                  Khi kết hợp, <strong>“Gùi Nắng”</strong> thể hiện hình ảnh người dùng mang theo nguồn năng lượng mặt trời trên những hành trình khám phá thiên nhiên. Ý nghĩa này gắn trực tiếp với dòng sản phẩm <strong>Trail</strong>, nhấn mạnh khả năng hỗ trợ năng lượng, tính tiện dụng và tinh thần chủ động trong các hoạt động trekking, hiking, camping và trải nghiệm ngoài trời.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#f0ede6] flex items-center justify-between text-xs font-mono text-[#7c8663]">
              <span>Dòng sản phẩm: GuiNang Trail</span>
              <span className="text-[#5E7A45] font-bold">Tự chủ quang năng</span>
            </div>
          </div>

          {/* Meaning 2: GỬI NẮNG */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#e2ded4] shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-6 relative overflow-hidden">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#efbc5c]/20 text-[#041d15] text-xs font-headline font-bold uppercase tracking-wider border border-[#efbc5c]/40">
                <Heart className="w-4 h-4 text-[#c2562b]" />
                <span>HÀNH TRÌNH ÁNH SÁNG (B2B / B2N)</span>
              </div>
              
              <h3 className="font-headline text-2xl sm:text-3xl font-bold text-[#041d15] leading-tight">
                “Gửi Nắng” — Lan tỏa ánh sáng đến cộng đồng
              </h3>

              <div className="space-y-3 text-sm text-[#4a5548] leading-relaxed">
                <p>
                  Nếu “Gùi Nắng” nhấn mạnh việc mang theo nguồn năng lượng cho hành trình cá nhân, thì <strong>“Gửi Nắng”</strong> mở rộng ý nghĩa thương hiệu sang hành trình kết nối và sẻ chia.
                </p>
                <p>
                  Trong đó, <strong>“Gửi”</strong> thể hiện hành động trao đi, kết nối những tấm lòng và chuyển tải các nguồn lực hỗ trợ; còn <strong>“Nắng”</strong> tượng trưng cho ánh sáng, sự tích cực và những cơ hội tốt đẹp.
                </p>
                <div className="p-4 bg-[#fcf8f0] rounded-2xl border-l-4 border-[#efbc5c] text-xs sm:text-sm text-[#041d15] leading-relaxed">
                  Ý nghĩa này gắn với <strong>Hành trình ánh sáng</strong>, thông qua đó Guinang kết nối các cá nhân, nhà hảo tâm, doanh nghiệp và tổ chức để đưa sản phẩm <strong>Edu</strong> cùng giải pháp chiếu sáng phù hợp đến trẻ em tại những địa phương còn hạn chế về điều kiện tiếp cận điện năng. “Gửi Nắng” vì vậy không chỉ mang ý nghĩa trao tặng một sản phẩm vật lý mà còn thể hiện mong muốn tạo ra giá trị thiết thực và lâu dài cho cộng đồng.
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#f0ede6] flex items-center justify-between text-xs font-mono text-[#7c8663]">
              <span>Dòng sản phẩm: GuiNang Edu</span>
              <span className="text-[#c2562b] font-bold">Thắp sáng tri thức</span>
            </div>
          </div>

        </div>

      </section>

      {/* 3. Bốn trụ cột giá trị khác biệt */}
      <section className="bg-[#f5f2e9] py-20 border-y border-[#e2ded4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-4xl mx-auto space-y-3">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              CẤU TRÚC GIÁ TRỊ KHÁC BIỆT
            </span>
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-[#041d15] whitespace-normal sm:whitespace-nowrap">
              Bốn Trụ Cột Xây Dựng Thương Hiệu GuiNang
            </h2>
            <p className="text-sm text-[#4a5548]">
              Điểm khác biệt của GuiNang nằm ở cách tổ chức và kết nối các thành phần thành một hệ sinh thái trải nghiệm hoàn chỉnh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            <div className="bg-white p-6 rounded-xl border border-[#e2ded4] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#041d15] text-[#efbc5c] flex items-center justify-center font-bold">
                01
              </div>
              <h3 className="font-headline text-lg font-bold text-[#041d15]">Sản phẩm vật lý</h3>
              <p className="text-xs font-mono text-[#7c8663]">GuiNang Trail, Edu & Solar Lamp</p>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Tạo giá trị sử dụng trực tiếp: Balo trekking trợ lực 1.570g, Cặp học sinh 925g tích hợp đèn học tháo rời 70g. Pin 18650 làm lõi lưu trữ không phụ thuộc nắng ngắt quãng.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e2ded4] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#041d15] text-[#efbc5c] flex items-center justify-center font-bold">
                02
              </div>
              <h3 className="font-headline text-lg font-bold text-[#041d15]">Nền tảng số & NFC</h3>
              <p className="text-xs font-mono text-[#7c8663]">Website, App, Product Passport</p>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Kết nối sản phẩm với thông tin dịch vụ, bản đồ ngoại tuyến, cảnh báo an toàn SOS và hệ thống theo dõi minh bạch nguồn tài trợ (Donation Tracking).
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e2ded4] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#041d15] text-[#efbc5c] flex items-center justify-center font-bold">
                03
              </div>
              <h3 className="font-headline text-lg font-bold text-[#041d15]">Cộng đồng khám phá</h3>
              <p className="text-xs font-mono text-[#7c8663]">Trekking, Hiking & Camping</p>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Tăng tính gắn kết qua các thử thách hành trình, cộng đồng thử nghiệm thực tế và hệ thống hội viên GuiNang đồng hành lâu dài.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-[#e2ded4] shadow-sm space-y-3">
              <div className="w-10 h-10 rounded-lg bg-[#041d15] text-[#efbc5c] flex items-center justify-center font-bold">
                04
              </div>
              <h3 className="font-headline text-lg font-bold text-[#041d15]">Trách nhiệm xã hội</h3>
              <p className="text-xs font-mono text-[#7c8663]">Hành trình Ánh Sáng & Edu</p>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Cơ chế trợ giá chéo minh bạch từ dòng Trail, kết nối doanh nghiệp CSR và nhà hảo tâm đưa ánh sáng tới các điểm trường Nam Trà My, Tây Giang, Hà Giang...
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. Kế hoạch Marketing & Lộ trình 3 Giai đoạn */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            LỘ TRÌNH CHIẾN LƯỢC 2026 – 2029
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
            Ba Giai Đoạn: Thắp Nắng — Lan Nắng — Nối Nắng
          </h2>
          <p className="text-sm text-[#4a5548]">
            Kế hoạch Marketing Master Plan 36 tháng với 18 chiến dịch chủ đạo và ngân sách 646.000.000 đồng được đồng bộ với tiến độ kinh doanh.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Phase 1 */}
          <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] shadow-sm space-y-4 relative">
            <span className="px-3 py-1 bg-[#1F3D2B] text-[#F2B632] font-mono text-xs font-bold rounded-full">
              Giai đoạn 1 (10/2026 – 09/2027)
            </span>
            <h3 className="font-headline text-2xl font-bold text-[#041d15]">Thắp Nắng</h3>
            <p className="text-xs font-mono text-[#C2562B] font-bold">Ngân sách Marketing: 144 triệu VNĐ</p>
            <p className="text-sm text-[#4a5548] leading-relaxed">
              Nghiên cứu thị trường, kiểm chứng nhu cầu khách hàng qua 40 bản ghi sâu sắc; hoàn thiện sản phẩm mẫu V1, V2; bố trí Xưởng Trạm Nắng tại Đà Nẵng; thử nghiệm thực địa với nhóm nữ Trekker và 1 điểm trường vùng cao.
            </p>
            <div className="pt-2 text-xs text-[#6c776b] space-y-1 border-t border-[#e2ded4]">
              <p>• Lắng Nghe Những Đôi Vai</p>
              <p>• Gọi Nắng Vào Gùi (Mẫu V1)</p>
              <p>• Gùi Nắng 2.0 (Mẫu V2)</p>
              <p>• Thử Nắng Giữa Đường (Thực địa Lảo Thẩn)</p>
            </div>
          </div>

          {/* Phase 2 */}
          <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] shadow-sm space-y-4 relative">
            <span className="px-3 py-1 bg-[#C2562B] text-white font-mono text-xs font-bold rounded-full">
              Giai đoạn 2 (10/2027 – 09/2028)
            </span>
            <h3 className="font-headline text-2xl font-bold text-[#041d15]">Lan Nắng</h3>
            <p className="text-xs font-mono text-[#C2562B] font-bold">Ngân sách Marketing: 261 triệu VNĐ</p>
            <p className="text-sm text-[#4a5548] leading-relaxed">
              Thương mại hóa chính thức GuiNang Trail và GuiNang Edu. Phân phối qua website chính thức, sàn TMĐT và đối tác outdoor; tiếp nhận đơn quà Tết doanh nghiệp; sản xuất và bàn giao lô GuiNang Edu đầu tiên trước thềm khai giảng.
            </p>
            <div className="pt-2 text-xs text-[#6c776b] space-y-1 border-t border-[#e2ded4]">
              <p>• Hai Gùi, Một Mặt Trời</p>
              <p>• Tết Gùi Nắng Về (Quà tặng CSR)</p>
              <p>• Xách Gùi Lên Đường & Bước Chân Thắp Nắng</p>
              <p>• Đường Đến Lớp Có Nắng (Bàn giao Edu)</p>
            </div>
          </div>

          {/* Phase 3 */}
          <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] shadow-sm space-y-4 relative">
            <span className="px-3 py-1 bg-[#5E7A45] text-white font-mono text-xs font-bold rounded-full">
              Giai đoạn 3 (10/2028 – 09/2029)
            </span>
            <h3 className="font-headline text-2xl font-bold text-[#041d15]">Nối Nắng</h3>
            <p className="text-xs font-mono text-[#C2562B] font-bold">Ngân sách Marketing: 241 triệu VNĐ</p>
            <p className="text-sm text-[#4a5548] leading-relaxed">
              Mở rộng thị trường và kênh B2B; nâng cấp ứng dụng GuiNang App và hệ thống hội viên VIP; đa dạng các chương trình GuiNang Edu (học bổng, cuộc thi sáng tạo xanh); tổng kết tác động xã hội và chuẩn bị định hướng phát triển bền vững sau 36 tháng.
            </p>
            <div className="pt-2 text-xs text-[#6c776b] space-y-1 border-t border-[#e2ded4]">
              <p>• Hội Những Người Gùi Nắng (Hội viên VIP)</p>
              <p>• Tết Nối Nắng</p>
              <p>• Một Gùi, Nhiều Hành Trình</p>
              <p>• Bản Đồ Trạm Nắng (Báo cáo tác động)</p>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Thông điệp sáng lập */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center p-8 rounded-2xl bg-[#E3DCC8]/50 border border-[#5E7A45]/30 max-w-2xl mx-auto shadow-sm">
          <p className="font-handwriting text-2xl text-[#1F3D2B] leading-relaxed">
            "Ánh sáng đẹp nhất không chỉ rực rỡ nơi phố thị, mà là ánh sáng được gùi trên vai thắp lên nơi những lớp học vùng cao xa xôi."
          </p>
          <p className="font-serif italic text-sm text-[#C2562B] font-semibold mt-2">
            — Đội ngũ sáng lập GuiNang (50K22.1, Khoa Thương mại điện tử, Marketing và Công nghệ số – Trường Đại học Kinh tế, ĐH Đà Nẵng)
          </p>
        </div>
      </section>

    </div>
  );
}
