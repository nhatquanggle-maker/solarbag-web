import React, { useState } from 'react';
import { JOURNALS } from '../data/mockData';
import { BookOpen, Calendar, Clock, ArrowRight, Tag, CheckCircle2 } from 'lucide-react';

export default function JournalPage() {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [readingArticle, setReadingArticle] = useState(null);

  const categories = [
    'Tất cả',
    'Nhật ký R&D & Chế tạo',
    'Cẩm nang Trekking',
    'Hoạt động Bản làng',
    'Thông cáo báo chí'
  ];

  const filtered = selectedCategory === 'Tất cả' 
    ? JOURNALS 
    : JOURNALS.filter(j => j.category === selectedCategory);

  const featured = JOURNALS[0];

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Header Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-16 border-b border-[#124636]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            THE SOLARBAG FIELD JOURNAL
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white tracking-tight leading-tight uppercase">
            Ghi lại từng bước. <br />
            <span className="text-[#efbc5c] font-serif italic normal-case">Giữ lại từng tia nắng.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-xl mx-auto">
            Góc nhìn chân thực từ xưởng chế tạo, các cung đường trekking hiểm trở và hành trình thắp sáng những lớp học non cao.
          </p>
        </div>
      </section>

      {/* 2. Featured Article Banner */}
      {featured && (
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            onClick={() => setReadingArticle(featured)}
            className="bg-white rounded-3xl border border-[#e2ded4] overflow-hidden shadow-sm hover:shadow-xl transition-all cursor-pointer grid grid-cols-1 lg:grid-cols-12 group"
          >
            <div className="lg:col-span-7 relative h-72 sm:h-96 lg:h-auto overflow-hidden bg-[#f4f0e6]">
              <img 
                src={featured.image} 
                alt={featured.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 px-3 py-1 rounded bg-[#041d15] text-[#efbc5c] text-xs font-mono font-bold">
                {featured.category}
              </span>
            </div>

            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-mono text-[#7c8663]">
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {featured.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {featured.readTime}</span>
                </div>
                <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#041d15] group-hover:text-[#efbc5c] transition-colors leading-tight">
                  {featured.title}
                </h2>
                <p className="text-sm text-[#4a5548] leading-relaxed">
                  {featured.excerpt}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 font-headline font-bold text-sm text-[#041d15] group-hover:text-[#efbc5c] transition-colors">
                <span>Đọc toàn bộ nhật ký</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Category Filter & Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Categories Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none border-b border-[#e2ded4]">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-headline font-semibold tracking-wide whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-[#041d15] text-[#efbc5c] shadow-sm'
                  : 'bg-white text-[#4a5548] hover:bg-[#f4f0e6] border border-[#e2ded4]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles List */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <article 
              key={item.id}
              onClick={() => setReadingArticle(item)}
              className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm hover:shadow-lg transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div className="relative h-52 bg-[#f4f0e6] overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#041d15]/80 text-[#efbc5c] text-[11px] font-mono backdrop-blur-sm">
                  {item.category}
                </span>
              </div>

              <div className="p-6 space-y-4 flex-1 flex flex-col justify-between">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-[#a0ac9d]">
                    <span>{item.date}</span>
                    <span>•</span>
                    <span>{item.readTime}</span>
                  </div>
                  <h3 className="font-headline text-xl font-bold text-[#041d15] group-hover:text-[#efbc5c] transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-xs text-[#6c776b] line-clamp-3 leading-relaxed">
                    {item.excerpt}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#f0ede6] flex items-center justify-between text-xs font-headline font-semibold text-[#041d15]">
                  <span>{item.author}</span>
                  <span className="text-[#efbc5c] group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    Xem ↗
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* 4. Article Modal Reader */}
      {readingArticle && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-12 flex items-center justify-center">
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setReadingArticle(null)} />
          <div className="relative bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl border border-[#e2ded4] z-10 space-y-6 max-h-[85vh] overflow-y-auto">
            <div className="flex justify-between items-start border-b border-[#e2ded4] pb-4">
              <span className="px-3 py-1 rounded bg-[#041d15] text-[#efbc5c] font-mono text-xs font-bold">
                {readingArticle.category}
              </span>
              <button 
                onClick={() => setReadingArticle(null)}
                className="text-[#7c8663] hover:text-[#041d15] font-bold text-sm"
              >
                ✕ Đóng
              </button>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-[#7c8663]">{readingArticle.date} · Tác giả: {readingArticle.author}</span>
              <h2 className="font-headline text-2xl sm:text-3xl font-bold text-[#041d15]">
                {readingArticle.title}
              </h2>
            </div>

            <img 
              src={readingArticle.image} 
              alt={readingArticle.title} 
              className="w-full h-72 object-cover rounded-xl"
            />

            <div className="prose text-sm text-[#333f34] space-y-4 leading-relaxed font-sans">
              <p className="font-medium text-base text-[#041d15]">
                {readingArticle.excerpt}
              </p>
              <p>
                Trên mỗi chặng đường khảo nghiệm, điều thử thách lớn nhất không chỉ là sức chịu tải của tấm quang điện CIGS dưới bức xạ mặt trời gay gắt, mà còn là làm sao để chiếc balo trở thành người bạn đồng hành thực thụ của người mang.
              </p>
              <p>
                Từ việc tính toán từng gram trọng lượng của hộp pin, thiết kế lớp thoáng lưng EVA tổ ong tránh đọng mồ hôi, cho đến công tắc từ tính gắn chiếc đèn học nhỏ gọn — tất cả đều được nhóm tinh chỉnh sau từng lần leo núi cùng các trekker.
              </p>
              <p>
                Đặc biệt, khoảnh khắc trao tặng nguyên mẫu SolarBag Lite tại điểm trường Tây Giang đã tiếp thêm động lực to lớn cho toàn đội ngũ. Ánh mắt hồn nhiên của các em học sinh khi tự tay bật chiếc đèn LED sáng rực giữa gian phòng tối là minh chứng rõ nhất cho sứ mệnh: "Mỗi hành trình, một nguồn sáng."
              </p>
            </div>

            <div className="pt-4 border-t border-[#e2ded4] flex justify-end">
              <button
                onClick={() => setReadingArticle(null)}
                className="px-6 py-2.5 rounded-md bg-[#041d15] text-[#efbc5c] font-headline font-bold text-sm"
              >
                Đóng bài viết
              </button>
            </div>
          </div>
        </div>
      )}

      {/* 5. Newsletter */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#041d15] text-white rounded-3xl p-8 sm:p-12 border border-[#124636] text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            HẸN NHAU DƯỚI NẮNG
          </span>
          <h2 className="font-headline text-2xl sm:text-3xl font-bold text-white">
            Nhận nhật ký ánh sáng mỗi tháng một lần
          </h2>
          <p className="text-xs sm:text-sm text-[#c6cfc2] max-w-md mx-auto">
            Cập nhật tiến độ nguyên mẫu, những cung đường trekking mới nhất và các đợt bàn giao balo tại bản cao.
          </p>

          {subscribed ? (
            <div className="p-3 bg-[#0a3225] border border-[#efbc5c]/40 rounded-md text-xs text-[#efbc5c] flex items-center justify-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Đã đăng ký nhận bản tin thành công!
            </div>
          ) : (
            <form onSubmit={(e) => { e.preventDefault(); if (email) setSubscribed(true); }} className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto pt-2">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Nhập email của bạn..."
                className="flex-1 px-4 py-3 rounded-md bg-[#0a3225] border border-[#7c8663]/40 text-xs text-white placeholder-[#a0ac9d] outline-none"
              />
              <button
                type="submit"
                className="px-5 py-3 bg-[#efbc5c] text-[#041d15] font-headline font-bold text-sm rounded-md hover:bg-[#f6d288]"
              >
                Đăng Ký ↗
              </button>
            </form>
          )}
        </div>
      </section>

    </div>
  );
}

