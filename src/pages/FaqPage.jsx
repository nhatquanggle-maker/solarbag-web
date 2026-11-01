import React, { useState } from 'react';
import { FAQS } from '../data/mockData';
import { Search, ChevronDown, HelpCircle, PhoneCall, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function FaqPage() {
  const [selectedCat, setSelectedCat] = useState('Tất cả');
  const [search, setSearch] = useState('');
  const [openIndex, setOpenIndex] = useState(0);

  const categories = ['Tất cả', 'Sản phẩm & PV', 'Pin & An toàn', 'Chương trình Cộng đồng', 'Hộ chiếu số NFC'];

  const filtered = FAQS.filter(f => {
    const matchCat = selectedCat === 'Tất cả' || f.category === selectedCat;
    const matchSearch = f.question.toLowerCase().includes(search.toLowerCase()) || 
                        f.answer.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Header Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-16 border-b border-[#124636] text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            SOLARBAG LUÔN LẮNG NGHE
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase">
            Bạn cần một chút hướng dẫn?
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-xl mx-auto">
            Tìm kiếm câu trả lời nhanh chóng về công nghệ tấm pin CIGS, mạch bảo vệ pin BMS, chính sách đổi trả và dự án cộng đồng.
          </p>

          <div className="max-w-md mx-auto relative pt-2">
            <Search className="w-4 h-4 text-[#7c8663] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Nhập câu hỏi của bạn..."
              className="w-full pl-10 pr-4 py-3 rounded-xl bg-white text-xs text-[#1e261e] placeholder-[#a0ac9d] outline-none shadow-md"
            />
          </div>
        </div>
      </section>

      {/* 2. Category Filter & FAQ Accordion */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none justify-center">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCat(c)}
              className={`px-4 py-2 rounded-full text-xs font-headline font-semibold whitespace-nowrap transition-all ${
                selectedCat === c
                  ? 'bg-[#041d15] text-[#efbc5c]'
                  : 'bg-white border border-[#e2ded4] text-[#4a5548] hover:bg-[#f4f0e6]'
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="space-y-4">
          {filtered.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm transition-all"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-headline font-bold text-lg text-[#041d15] hover:text-[#efbc5c] transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-[#7c8663] shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 text-xs sm:text-sm text-[#4a5548] leading-relaxed border-t border-[#f4f0e6] pt-4 font-sans">
                    <p>{faq.answer}</p>
                    <span className="text-[11px] font-mono text-[#7c8663] mt-2 block">
                      Phân loại: {faq.category}
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

      {/* 3. Still Have Questions CTA */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#f5f2e9] p-8 sm:p-10 rounded-3xl border border-[#e2ded4] flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="font-headline text-2xl font-bold text-[#041d15]">
              Chưa tìm thấy câu trả lời bạn cần?
            </h3>
            <p className="text-xs text-[#6c776b]">
              Đội ngũ kỹ thuật và cộng đồng SolarBag luôn sẵn sàng phản hồi trong vòng 24 giờ.
            </p>
          </div>
          <Link
            to="/support/contact"
            className="px-6 py-3 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-xl font-headline font-bold text-xs shrink-0"
          >
            Gửi yêu cầu hỗ trợ ↗
          </Link>
        </div>
      </section>

    </div>
  );
}

