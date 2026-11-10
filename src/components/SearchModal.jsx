import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, X, ArrowRight, Compass, ShieldCheck, BookOpen } from 'lucide-react';
import { PRODUCTS, TRAILS, JOURNALS, FAQS } from '../data/mockData';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  if (!isOpen) return null;

  const q = query.trim().toLowerCase();

  const matchedProducts = q ? PRODUCTS.filter(p => p.name.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)) : [];
  const matchedTrails = q ? TRAILS.filter(t => t.title.toLowerCase().includes(q) || t.region.toLowerCase().includes(q)) : [];
  const matchedJournals = q ? JOURNALS.filter(j => j.title.toLowerCase().includes(q) || j.excerpt.toLowerCase().includes(q)) : [];
  const matchedFaqs = q ? FAQS.filter(f => f.question.toLowerCase().includes(q) || f.answer.toLowerCase().includes(q)) : [];

  const handleSelect = (url) => {
    onClose();
    navigate(url);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20">
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      <div className="relative mx-auto max-w-2xl bg-[#fcfbf7] rounded-xl shadow-2xl border border-[#e2ded4] overflow-hidden">
        {/* Search input header */}
        <div className="flex items-center px-4 border-b border-[#e2ded4] bg-white">
          <Search className="w-5 h-5 text-[#7c8663]" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Tìm GuiNang Trail, GuiNang Edu, Solar Lamp, cung đường, mạch sạc..."
            className="w-full px-4 py-4 text-sm bg-transparent outline-none placeholder-[#a0ac9d] text-[#1e261e]"
            autoFocus
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 text-[#a0ac9d] hover:text-[#1e261e]">
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Search results or default suggestions */}
        <div className="max-h-96 overflow-y-auto p-4 space-y-6">
          {!q ? (
            <div className="space-y-4">
              <p className="text-xs font-mono font-medium text-[#7c8663] uppercase tracking-wider">
                Gợi ý tìm kiếm phổ biến
              </p>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => handleSelect('/products/solarbag-pro')}
                  className="p-3 text-left bg-white rounded-lg border border-[#e2ded4] hover:border-[#efbc5c] hover:bg-[#fbf8ee] transition-all"
                >
                  <span className="font-semibold text-sm text-[#041d15] block">GuiNang Trail</span>
                  <span className="text-xs text-[#6c776b]">Balo trekking tích hợp đèn Solar Lamp (1.500.000đ)</span>
                </button>
                <button
                  onClick={() => handleSelect('/products/solarbag-lite')}
                  className="p-3 text-left bg-white rounded-lg border border-[#e2ded4] hover:border-[#efbc5c] hover:bg-[#fbf8ee] transition-all"
                >
                  <span className="font-semibold text-sm text-[#041d15] block">GuiNang Edu</span>
                  <span className="text-xs text-[#6c776b]">Cặp học sinh & đèn học tháo rời (880.000đ)</span>
                </button>
                <button
                  onClick={() => handleSelect('/explore/trails/lao-than')}
                  className="p-3 text-left bg-white rounded-lg border border-[#e2ded4] hover:border-[#efbc5c] hover:bg-[#fbf8ee] transition-all"
                >
                  <span className="font-semibold text-sm text-[#041d15] block">Tuyến Lảo Thẩn 2.860m</span>
                  <span className="text-xs text-[#6c776b]">Hồ sơ tuyến & thử nghiệm thực địa</span>
                </button>
                <button
                  onClick={() => handleSelect('/products/technology')}
                  className="p-3 text-left bg-white rounded-lg border border-[#e2ded4] hover:border-[#efbc5c] hover:bg-[#fbf8ee] transition-all"
                >
                  <span className="font-semibold text-sm text-[#041d15] block">Đèn Solar Lamp & Mạch TP4056</span>
                  <span className="text-xs text-[#6c776b]">Cảm biến MOSFET IRF4905 & Pin 18650</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {matchedProducts.length === 0 && matchedTrails.length === 0 && matchedJournals.length === 0 && matchedFaqs.length === 0 ? (
                <div className="text-center py-8 text-sm text-[#6c776b]">
                  Không tìm thấy kết quả phù hợp cho "{query}".
                </div>
              ) : (
                <>
                  {matchedProducts.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-mono font-medium text-[#7c8663] uppercase tracking-wider">
                        Sản phẩm ({matchedProducts.length})
                      </p>
                      {matchedProducts.map(p => (
                        <div
                          key={p.id}
                          onClick={() => handleSelect(p.link)}
                          className="flex items-center justify-between p-2.5 bg-white rounded-md border border-[#e2ded4] hover:border-[#efbc5c] cursor-pointer"
                        >
                          <div className="flex items-center gap-3">
                            <img src={p.image} alt={p.name} className="w-10 h-10 object-cover rounded bg-[#f4f0e6]" />
                            <div>
                              <p className="font-semibold text-sm text-[#041d15]">{p.name}</p>
                              <p className="text-xs text-[#7c8663]">{p.priceFormatted} · {p.category}</p>
                            </div>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#a0ac9d]" />
                        </div>
                      ))}
                    </div>
                  )}

                  {matchedTrails.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-mono font-medium text-[#7c8663] uppercase tracking-wider flex items-center gap-1.5">
                        <Compass className="w-3.5 h-3.5" /> Tuyến khám phá ({matchedTrails.length})
                      </p>
                      {matchedTrails.map(t => (
                        <div
                          key={t.id}
                          onClick={() => handleSelect(`/explore/trails/${t.id}`)}
                          className="p-2.5 bg-white rounded-md border border-[#e2ded4] hover:border-[#efbc5c] cursor-pointer flex justify-between items-center"
                        >
                          <div>
                            <p className="font-semibold text-sm text-[#041d15]">{t.title}</p>
                            <p className="text-xs text-[#7c8663]">{t.region} · Độ cao: {t.altitude}</p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-[#a0ac9d]" />
                        </div>
                      ))}
                    </div>
                  )}

                  {matchedJournals.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-mono font-medium text-[#7c8663] uppercase tracking-wider flex items-center gap-1.5">
                        <BookOpen className="w-3.5 h-3.5" /> Nhật ký & Bài viết ({matchedJournals.length})
                      </p>
                      {matchedJournals.map(j => (
                        <div
                          key={j.id}
                          onClick={() => handleSelect('/about/journal')}
                          className="p-2.5 bg-white rounded-md border border-[#e2ded4] hover:border-[#efbc5c] cursor-pointer"
                        >
                          <p className="font-semibold text-sm text-[#041d15] line-clamp-1">{j.title}</p>
                          <p className="text-xs text-[#7c8663]">{j.category} · {j.date}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {matchedFaqs.length > 0 && (
                    <div className="space-y-2">
                      <p className="text-xs font-mono font-medium text-[#7c8663] uppercase tracking-wider flex items-center gap-1.5">
                        <ShieldCheck className="w-3.5 h-3.5" /> Hỏi đáp hỗ trợ ({matchedFaqs.length})
                      </p>
                      {matchedFaqs.map((f, i) => (
                        <div
                          key={i}
                          onClick={() => handleSelect('/support/faq')}
                          className="p-2.5 bg-white rounded-md border border-[#e2ded4] hover:border-[#efbc5c] cursor-pointer"
                        >
                          <p className="font-semibold text-sm text-[#041d15]">{f.question}</p>
                          <p className="text-xs text-[#6c776b] line-clamp-2 mt-0.5">{f.answer}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-[#f4f0e6] border-t border-[#e2ded4] text-[11px] text-[#7c8663] flex justify-between items-center">
          <span>Nhấn ESC để đóng</span>
          <span>Hệ thống dữ liệu SolarBag</span>
        </div>
      </div>
    </div>
  );
}

