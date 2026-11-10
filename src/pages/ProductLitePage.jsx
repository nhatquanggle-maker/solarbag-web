import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { Sun, Lightbulb, BookOpen, ShieldCheck, Heart, Sparkles, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

export default function ProductLitePage() {
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === 'solarbag-lite') || PRODUCTS[1];

  if (!product) return null;

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Main Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Gallery Image */}
          <div className="lg:col-span-7">
            <div className="relative h-[420px] sm:h-[520px] bg-white rounded-3xl border border-[#e2ded4] overflow-hidden flex items-center justify-center p-8 shadow-sm">
              <span className="absolute top-4 left-4 px-3 py-1 bg-[#7c8663] text-white font-mono text-xs font-bold rounded-full">
                {product.category}
              </span>
              <span className="absolute top-4 right-4 px-3 py-1 bg-[#f2b632]/20 text-[#041d15] font-mono text-xs font-bold rounded-full border border-[#f2b632]/40">
                Trọng lượng siêu nhẹ: 925g
              </span>
              <img 
                src={product.image} 
                alt={product.name}
                className="max-h-full max-w-full object-contain" 
              />
            </div>

            {/* Quick Badges below image */}
            <div className="grid grid-cols-3 gap-3 mt-4">
              <div className="p-3 bg-[#f5f2e9] rounded-xl border border-[#e2ded4] text-center">
                <p className="text-[11px] font-mono text-[#7c8663] uppercase">Tấm Solar</p>
                <p className="text-sm font-bold text-[#041d15]">5V – 3W tháo rời</p>
              </div>
              <div className="p-3 bg-[#f5f2e9] rounded-xl border border-[#e2ded4] text-center">
                <p className="text-[11px] font-mono text-[#7c8663] uppercase">Đèn Solar Lamp</p>
                <p className="text-sm font-bold text-[#041d15]">70g • LED COB 3W</p>
              </div>
              <div className="p-3 bg-[#f5f2e9] rounded-xl border border-[#e2ded4] text-center">
                <p className="text-[11px] font-mono text-[#7c8663] uppercase">Minh bạch NFC</p>
                <p className="text-sm font-bold text-[#041d15]">Hồ sơ tài trợ CSR</p>
              </div>
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 space-y-7">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#f5f2e9] rounded-full text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase border border-[#e2ded4]">
                <Heart className="w-3.5 h-3.5 text-[#c2562b]" /> HÀNH TRÌNH ÁNH SÁNG • BẢN CAO
              </div>
              <h1 className="font-headline text-4xl sm:text-5xl font-bold text-[#041d15]">
                {product.name}
              </h1>
              <p className="font-serif italic text-[#7c8663] text-lg">
                Khi nắng trên vai ở lại bên trang sách.
              </p>
              <p className="text-sm text-[#4a5548] leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Price Box */}
            <div className="p-5 rounded-2xl bg-[#f5f2e9] border border-[#e2ded4] space-y-2">
              <div className="flex items-baseline gap-3">
                <span className="font-headline text-3xl font-bold text-[#041d15]">
                  {product.priceFormatted}
                </span>
                <span className="text-xs font-mono font-semibold text-[#c2562b] px-2 py-0.5 bg-[#c2562b]/10 rounded-full">
                  {product.priceNote}
                </span>
              </div>
              <p className="text-xs text-[#6c776b] leading-relaxed">
                Được trợ giá chéo từ dòng GuiNang Trail (trích 100.000đ/balo thương mại) kết hợp sự đồng hành của các Quỹ CSR Doanh nghiệp & Nhà tài trợ.
              </p>
            </div>

            {/* Fast specs */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#4a5548] p-4 rounded-xl bg-white border border-[#e2ded4]">
              <div>• Pin an toàn: Li-ion 18650 18,5 Wh</div>
              <div>• Tổng khối lượng: 925g (≤ 1.000g)</div>
              <div>• Đèn LED COB: 3W (sáng ≥ 6-8h)</div>
              <div>• Vỏ ngoài: PET 420D trượt nước</div>
              <div>• Đáy cặp: rPET 600D chống mài mòn</div>
              <div>• An toàn: Dải phản quang 360°</div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => addToCart(product, 1)}
                className="w-full py-4 rounded-xl bg-[#c2562b] text-white hover:bg-[#a6451e] font-headline font-bold text-base tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Heart className="w-5 h-5" />
                Tài trợ một bộ GuiNang Edu (880.000đ)
              </button>

              <Link
                to="/impact/join"
                className="w-full py-3.5 rounded-xl border border-[#041d15] text-[#041d15] hover:bg-[#041d15] hover:text-[#efbc5c] font-headline font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2 text-center"
              >
                Chương trình đồng hành CSR Doanh nghiệp & Trường học <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Guarantee Note */}
            <div className="flex items-center gap-3 p-3 rounded-xl bg-[#041d15]/5 border border-[#041d15]/10 text-xs text-[#4a5548]">
              <ShieldCheck className="w-5 h-5 text-[#7c8663] shrink-0" />
              <span>Sản xuất & kiểm định 8 bước IQC/QC tại <strong>Xưởng Trạm Nắng, TP. Đà Nẵng</strong>. Bảo hành kỹ thuật 6-12 tháng.</span>
            </div>

          </div>

        </div>
      </section>

      {/* 2. KHI NẮNG TRÊN VAI Ở LẠI BÊN TRANG SÁCH */}
      <section className="bg-[#f5f2e9] py-20 border-y border-[#e2ded4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              GIẢI PHÁP ĐO NI ĐÓNG GIÀY CHO HỌC SINH VÙNG NÚI CAO
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
              Khi nắng trên vai ở lại bên trang sách.
            </h2>
            <p className="text-sm text-[#4a5548]">
              Quãng đường đi bộ 5–10km vượt dốc đến trường của trẻ em vùng cao biến thành hành trình tích lũy ánh sáng học bài mỗi tối.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#f2b632]/20 flex items-center justify-center text-[#c2562b]">
                <Sun className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-xl font-bold text-[#041d15]">
                Đi bộ đón nắng vùng cao
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Tấm quang điện 5V–3W gắn mặt trước balo hấp thụ quang năng liên tục trên đường đi học. Chỉ cần 2–3 giờ đi bộ dưới nắng dịu là nạp đủ năng lượng cho cả buổi tối học bài.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#f2b632]/20 flex items-center justify-center text-[#c2562b]">
                <Lightbulb className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-xl font-bold text-[#041d15]">
                Đèn Solar Lamp 70g tháo rời
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Trọng lượng siêu nhẹ 70g, ngàm cài linh hoạt. Tích hợp mạch cảm biến MOSFET IRF4905 tự động bật khi trời tối và tắt khi trời sáng, kèm công tắc cơ 2 mức sáng tiện lợi.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-4 shadow-sm">
              <div className="w-12 h-12 rounded-xl bg-[#f2b632]/20 flex items-center justify-center text-[#c2562b]">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="font-headline text-xl font-bold text-[#041d15]">
                Bảo vệ thị lực & Sức khỏe
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Đèn LED COB 3W ánh sáng trắng ấm 4000K, không nhấp nháy, thay thế hoàn toàn đèn dầu hay nến độc hại, bảo vệ mắt học sinh khỏi nguy cơ cận thị và hít khói bồ hóng.
              </p>
            </div>
          </div>

          {/* Additional Features: Safety & Tracking */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            <div className="p-6 rounded-2xl bg-white border border-[#e2ded4] flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#7c8663]/10 flex items-center justify-center text-[#7c8663] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-headline font-bold text-base text-[#041d15]">Dải phản quang 360° bảo vệ an toàn</h4>
                <p className="text-xs text-[#4a5548] leading-relaxed">
                  Thiết kế phản quang ở cả mặt trước và quai đeo giúp tài xế xe tải, xe máy dễ dàng phát hiện học sinh từ khoảng cách xa trong sương mù dày đặc và chiều tối vùng cao.
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#e2ded4] flex items-start gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#7c8663]/10 flex items-center justify-center text-[#7c8663] shrink-0">
                <Cpu className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h4 className="font-headline font-bold text-base text-[#041d15]">Minh bạch tài trợ qua NFC Tag</h4>
                <p className="text-xs text-[#4a5548] leading-relaxed">
                  Mỗi chiếc cặp chứa mã định danh số duy nhất. Khi đội ngũ GuiNang trao tặng tại các điểm trường ở Nam Trà My hay Tây Giang, cán bộ quét NFC xác nhận vị trí GPS và tình trạng bàn giao trực tiếp lên hệ thống cho Nhà tài trợ.
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Specs Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            BẢNG THÔNG SỐ KỸ THUẬT CHI TIẾT
          </span>
          <h2 className="font-headline text-3xl font-bold text-[#041d15]">
            Tối giản trọng lượng. Tối đa độ bền.
          </h2>
          <p className="text-xs text-[#4a5548] max-w-xl mx-auto">
            Quy chuẩn kỹ thuật sản phẩm GuiNang Edu theo đề án nghiên cứu và thử nghiệm thực địa 2026.
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm">
          <div className="divide-y divide-[#e2ded4] text-xs sm:text-sm">
            {Object.entries(product.specs).map(([k, v], i) => (
              <div key={i} className="grid grid-cols-1 sm:grid-cols-3 p-4 hover:bg-[#fcfbf7] transition-colors">
                <span className="font-mono font-bold uppercase text-[#7c8663]">{k}</span>
                <span className="sm:col-span-2 font-medium text-[#1e261e]">{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Cross-Subsidization Banner */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-[#041d15] text-[#f5f2e9] space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-xl">
              <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
                MÔ HÌNH KINH DOANH TẠO TÁC ĐỘNG XÃ HỘI
              </span>
              <h3 className="font-headline text-2xl font-bold text-white">
                Cơ chế trợ giá chéo minh bạch 1:1
              </h3>
              <p className="text-xs sm:text-sm text-[#e1dac6] leading-relaxed">
                Mỗi chiếc <strong>GuiNang Trail</strong> bán ra trích ngay <strong>100.000 VNĐ</strong> vào Quỹ Ánh Sáng Bản Cao. Kết hợp cùng các đơn vị tài trợ CSR, chi phí GuiNang Edu được giảm trực tiếp từ 1.200.000đ xuống còn <strong>880.000 VNĐ</strong> để trao tận tay các em nhỏ khó khăn.
              </p>
            </div>
            <Link
              to="/impact"
              className="px-6 py-3.5 bg-[#efbc5c] text-[#041d15] hover:bg-[#f2b632] font-headline font-bold text-sm rounded-xl transition-all shadow shrink-0 text-center"
            >
              Xem báo cáo tác động xã hội →
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
