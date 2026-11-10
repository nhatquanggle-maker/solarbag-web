import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { Search, SlidersHorizontal, ArrowUpRight, CheckCircle2, ShieldCheck, Sun } from 'lucide-react';

export default function ProductsPage() {
  const { addToCart } = useCart();
  const [filterTab, setFilterTab] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.description.toLowerCase().includes(searchQuery.toLowerCase());
    if (!matchesSearch) return false;

    if (filterTab === 'TRAIL') return p.id.includes('trail') || p.id.includes('pro');
    if (filterTab === 'EDU') return p.id.includes('edu') || p.id.includes('lite');
    return true;
  });

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Header Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-16 border-b border-[#124636]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            HỆ SINH THÁI SẢN PHẨM GUINANG
          </span>
          <h1 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight uppercase">
            Nắng theo chân — <span className="text-[#efbc5c] font-serif italic normal-case whitespace-normal sm:whitespace-nowrap">Sáng bừng muôn dặm đường</span>
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-2xl mx-auto">
            Hệ sinh thái kết hợp giữa sản phẩm vật lý (GuiNang Trail, GuiNang Edu), phần cứng chiếu sáng Solar Lamp và nền tảng số Website - App - Product Passport.
          </p>
        </div>
      </section>

      {/* 2. Search & Filter Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#e2ded4] shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-[#7c8663] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm kiếm GuiNang Trail, GuiNang Edu..."
              className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-[#e2ded4] text-xs outline-none focus:border-[#efbc5c] text-[#1e261e] placeholder-[#a0ac9d]"
            />
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto scrollbar-none">
            <button
              onClick={() => setFilterTab('ALL')}
              className={`px-4 py-2 rounded-full text-xs font-headline font-semibold tracking-wide whitespace-nowrap transition-all ${
                filterTab === 'ALL'
                  ? 'bg-[#041d15] text-[#efbc5c]'
                  : 'bg-[#f4f0e6] text-[#4a5548] hover:bg-[#e8e4d8]'
              }`}
            >
              Tất cả (2 Sản phẩm)
            </button>
            <button
              onClick={() => setFilterTab('TRAIL')}
              className={`px-4 py-2 rounded-full text-xs font-headline font-semibold tracking-wide whitespace-nowrap transition-all ${
                filterTab === 'TRAIL'
                  ? 'bg-[#041d15] text-[#efbc5c]'
                  : 'bg-[#f4f0e6] text-[#4a5548] hover:bg-[#e8e4d8]'
              }`}
            >
              GuiNang Trail (Outdoor)
            </button>
            <button
              onClick={() => setFilterTab('EDU')}
              className={`px-4 py-2 rounded-full text-xs font-headline font-semibold tracking-wide whitespace-nowrap transition-all ${
                filterTab === 'EDU'
                  ? 'bg-[#041d15] text-[#efbc5c]'
                  : 'bg-[#f4f0e6] text-[#4a5548] hover:bg-[#e8e4d8]'
              }`}
            >
              GuiNang Edu (Học sinh vùng cao)
            </button>
          </div>

        </div>
      </section>

      {/* 3. Products Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {filteredProducts.map((p) => (
            <div 
              key={p.id}
              className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="p-8 space-y-6">
                <div className="flex justify-between items-start">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[#041d15] text-[#efbc5c]">
                    {p.category}
                  </span>
                  <span className="text-xs text-[#7c8663] font-mono">
                    {p.status}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-headline text-3xl font-bold text-[#041d15] group-hover:text-[#efbc5c] transition-colors">
                    {p.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#4a5548] leading-relaxed line-clamp-3">
                    {p.description}
                  </p>
                </div>

                <div className="relative h-64 bg-[#fcfbf7] rounded-xl overflow-hidden flex items-center justify-center p-4 border border-[#e2ded4]/60">
                  <img 
                    src={p.image} 
                    alt={p.name}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500" 
                  />
                </div>

                <div className="space-y-1 pt-2">
                  <div className="flex items-baseline gap-2">
                    <span className="font-headline text-2xl font-bold text-[#041d15]">
                      {p.priceFormatted}
                    </span>
                    <span className="text-xs text-[#7c8663] font-mono">
                      {p.priceNote}
                    </span>
                  </div>
                  <p className="text-xs font-mono text-[#6c776b]">
                    {p.shortSpecs}
                  </p>
                </div>
              </div>

              <div className="p-8 pt-0 flex flex-col sm:flex-row gap-3">
                <Link
                  to={p.link}
                  className="flex-1 py-3 px-4 text-center rounded-md border border-[#041d15] text-[#041d15] hover:bg-[#041d15] hover:text-[#efbc5c] font-headline font-bold text-sm tracking-wide transition-colors"
                >
                  Xem chi tiết ↗
                </Link>
                <button
                  onClick={() => addToCart(p, 1)}
                  className="flex-1 py-3 px-4 rounded-md bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] font-headline font-bold text-sm tracking-wide transition-colors shadow-md"
                >
                  Thêm vào giỏ
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Early-Bird Pre-order Box */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#041d15] text-white rounded-3xl p-8 sm:p-12 border border-[#124636] text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            HẸN NHAU DƯỚI NẮNG
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white">
            Đăng ký nhận thông tin mở bán đợt 1 & Nhận ưu đãi 20%
          </h2>
          <p className="text-xs sm:text-sm text-[#c6cfc2] max-w-md mx-auto">
            Cùng hoàn thiện SolarBag. Đăng ký nhận thông tin thử nghiệm, không phải đặt mua hay cam kết thanh toán.
          </p>

          {subscribed ? (
            <div className="p-3 bg-[#0a3225] border border-[#efbc5c]/40 rounded-md text-xs text-[#efbc5c] flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Đã đăng ký trải nghiệm thành công!
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
              <input
                type="text"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email / SĐT..."
                className="flex-1 px-4 py-3 rounded-md bg-[#0a3225] border border-[#7c8663]/40 text-xs text-white placeholder-[#a0ac9d] outline-none"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-[#efbc5c] text-[#041d15] font-headline font-bold text-sm rounded-md hover:bg-[#f6d288]"
              >
                Đăng Ký Trải Nghiệm ↗
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}

