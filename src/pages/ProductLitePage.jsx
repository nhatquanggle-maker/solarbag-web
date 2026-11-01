import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { Sun, Lightbulb, BookOpen, Heart, ShieldCheck, ArrowRight } from 'lucide-react';

export default function ProductLitePage() {
  const { addToCart } = useCart();
  const product = PRODUCTS.find(p => p.id === 'solarbag-lite');

  if (!product) return null;

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Main Overview */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Gallery Image */}
          <div className="lg:col-span-7">
            <div className="relative h-[420px] sm:h-[500px] bg-white rounded-3xl border border-[#e2ded4] overflow-hidden flex items-center justify-center p-8 shadow-sm">
              <span className="absolute top-4 left-4 px-3 py-1 bg-[#7c8663] text-white font-mono text-xs font-bold rounded-full">
                {product.category}
              </span>
              <img 
                src={product.image} 
                alt={product.name}
                className="max-h-full max-w-full object-contain" 
              />
            </div>
          </div>

          {/* Details */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
                COMMUNITY LIGHT SERIES
              </span>
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
            <div className="p-5 rounded-2xl bg-[#f5f2e9] border border-[#e2ded4] space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="font-headline text-3xl font-bold text-[#041d15]">
                  {product.priceFormatted}
                </span>
                <span className="text-xs font-mono font-semibold text-[#7c8663]">
                  {product.priceNote}
                </span>
              </div>
              <p className="text-xs text-[#6c776b]">
                Kèm module đèn LED bảo vệ thị lực tháo rời và chip NFC lưu trữ hồ sơ tài trợ.
              </p>
            </div>

            {/* Fast specs */}
            <div className="grid grid-cols-2 gap-2 text-xs font-mono text-[#4a5548] p-3 rounded-xl bg-white border border-[#e2ded4]">
              <div>• Pin an toàn: Li-ion 3.000 mAh</div>
              <div>• Khối lượng: 680g siêu nhẹ</div>
              <div>• Đèn LED: 300 Lumens / 6h</div>
              <div>• Vật liệu: Vải dù chống rách</div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => addToCart(product, 1)}
                className="w-full py-4 rounded-xl bg-[#7c8663] text-white hover:bg-[#687352] font-headline font-bold text-base tracking-wide transition-all shadow-md flex items-center justify-center gap-2"
              >
                Tài trợ một chiếc SolarBag Lite cho bản cao
              </button>

              <Link
                to="/impact/join"
                className="w-full py-3 rounded-xl border border-[#041d15] text-[#041d15] hover:bg-[#041d15] hover:text-[#efbc5c] font-headline font-bold text-sm tracking-wide transition-colors flex items-center justify-center gap-2"
              >
                Tìm hiểu chương trình đồng hành CSR Doanh nghiệp ↗
              </Link>
            </div>

          </div>

        </div>
      </section>

      {/* 2. KHI NẮNG TRÊN VAI Ở LẠI BÊN TRANG SÁCH */}
      <section className="bg-[#f5f2e9] py-20 border-y border-[#e2ded4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              THIẾT KẾ DÀNH RIÊNG CHO TRẺ EM VÙNG CAO
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
              Khi nắng trên vai ở lại bên trang sách.
            </h2>
            <p className="text-sm text-[#4a5548]">
              Hành trình đi bộ đến trường không còn chỉ là sự vất vả, mà trở thành nguồn năng lượng nuôi dưỡng ước mơ con chữ.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-3 shadow-sm">
              <Sun className="w-8 h-8 text-[#efbc5c]" />
              <h3 className="font-headline text-xl font-bold text-[#041d15]">
                Đi bộ đón nắng
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Tấm quang điện CIGS 7W bề mặt trước balo tự động hấp thụ ánh sáng trong suốt 2-3 giờ học sinh đi bộ từ bản đến trường.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-3 shadow-sm">
              <Lightbulb className="w-8 h-8 text-[#efbc5c]" />
              <h3 className="font-headline text-xl font-bold text-[#041d15]">
                Tháo đèn một chạm
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Về nhà, các em chỉ cần xoay nhẹ ngàm nam châm để tháo đèn LED ra đặt lên bàn học hoặc treo tường, cho ánh sáng ấm dịu suốt cả buổi tối.
              </p>
            </div>

            <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-3 shadow-sm">
              <BookOpen className="w-8 h-8 text-[#efbc5c]" />
              <h3 className="font-headline text-xl font-bold text-[#041d15]">
                Bảo vệ thị lực
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Đèn LED nhiệt độ màu 4000K không nhấp nháy, giúp giảm 80% nguy cơ cận thị và các bệnh về mắt so với việc học dưới ngọn đèn dầu khói cay xè.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Specs Table */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            THÔNG SỐ THIẾT KẾ LITE
          </span>
          <h2 className="font-headline text-3xl font-bold text-[#041d15]">
            Ít phức tạp hơn. Đúng nhu cầu hơn.
          </h2>
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

    </div>
  );
}

