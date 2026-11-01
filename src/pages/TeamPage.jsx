import React from 'react';
import { TEAM_MEMBERS } from '../data/mockData';
import { Quote, Users, Award, GraduationCap, Wrench, HeartHandshake } from 'lucide-react';

export default function TeamPage() {
  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Hero Quote Header */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-20 border-b border-[#124636]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            NHỮNG NGƯỜI GÓI NẮNG
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
            Biệt Đội Ánh Sáng — Những Người Trẻ Vì Cộng Đồng
          </h1>
          <div className="p-8 bg-[#0a3225]/80 rounded-2xl border border-[#7c8663]/30 relative my-6">
            <Quote className="w-10 h-10 text-[#efbc5c]/40 mx-auto mb-4" />
            <p className="font-serif text-lg sm:text-2xl text-[#fcfbf7] italic leading-relaxed">
              “Chúng mình tin rằng công nghệ chỉ thực sự đẹp khi nó mang lại sự ấm áp và hy vọng cho con người.”
            </p>
            <p className="font-mono text-xs text-[#efbc5c] mt-4 uppercase tracking-widest">
              — Nguyễn Thị Thanh Thảo · Founder
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Team Members Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            ĐỘI NGŨ CỐT LÕI
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
            Những người đồng sáng lập dự án
          </h2>
          <p className="text-sm text-[#4a5548]">
            5 mảnh ghép sáng lập đa ngành giữa kinh doanh số, kỹ thuật công nghệ, tiếp thị cộng đồng, chiến lược phát triển và vận hành sản phẩm.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {TEAM_MEMBERS.map((member, i) => (
            <div 
              key={i}
              className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
            >
              <div className="relative h-64 bg-[#f4f0e6] overflow-hidden">
                <img 
                  src={member.avatar} 
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-[#041d15] text-[#efbc5c] font-mono text-xs font-bold flex items-center justify-center">
                  {member.initials}
                </div>
              </div>

              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div className="space-y-1">
                  <h3 className="font-headline text-lg font-bold text-[#041d15]">
                    {member.name}
                  </h3>
                  <p className="text-xs font-mono text-[#efbc5c] font-semibold">
                    {member.role}
                  </p>
                  <p className="text-[11px] text-[#7c8663] font-mono">
                    {member.dept}
                  </p>
                </div>
                <p className="text-xs text-[#4a5548] leading-relaxed pt-2 border-t border-[#f0ede6]">
                  {member.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. BÊN TRONG XƯỞNG Ý TƯỞNG — R&D là một hành trình cùng học */}
      <section className="bg-[#f5f2e9] py-20 border-y border-[#e2ded4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
              BÊN TRONG XƯỞNG Ý TƯỞNG
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
              R&D là một hành trình cùng học
            </h2>
            <p className="text-sm text-[#4a5548]">
              Từng linh kiện được thử thách qua hàng trăm bài test va chạm, nhiệt độ và kháng nước trước khi ghép thành sản phẩm.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl overflow-hidden border border-[#e2ded4] shadow-sm space-y-4 p-5">
              <div className="h-48 rounded-lg bg-[#f0ede4] overflow-hidden">
                <img 
                  src="/assets/images/1595b43f57ec520a9a1f68274689730c87a2b65c.png" 
                  alt="Thử tấm pin giữa trưa" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-headline text-lg font-bold text-[#041d15]">
                Thử tấm pin giữa trưa Đà Nẵng
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Đo cường độ dòng điện (Ampe) và điện áp (Volt) từ sáng sớm tới chiều muộn dưới bức xạ nhiệt 38°C tại bãi biển Mỹ Khê để đo mức suy hao công suất.
              </p>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-[#e2ded4] shadow-sm space-y-4 p-5">
              <div className="h-48 rounded-lg bg-[#f0ede4] overflow-hidden">
                <img 
                  src="/assets/images/48cf0d5ef6a1b7b192aa539c6aeff170fce905b8.png" 
                  alt="Hàn mạch sạc" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-headline text-lg font-bold text-[#041d15]">
                Hàn mạch sạc nguyên mẫu
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Cân chỉnh từng linh kiện MOSFET IRF4905, diode ngắt dòng ngược và cảm biến ngắt nhiệt độ tích hợp trong hộp bảo vệ IPX6 độc lập.
              </p>
            </div>

            <div className="bg-white rounded-xl overflow-hidden border border-[#e2ded4] shadow-sm space-y-4 p-5">
              <div className="h-48 rounded-lg bg-[#f0ede4] overflow-hidden">
                <img 
                  src="/assets/images/6de495ed65dbb40e4b88642bad776e96c19a1cd7.png" 
                  alt="Thực địa trekking" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-headline text-lg font-bold text-[#041d15]">
                Kiểm nghiệm thực tế trên đường dốc
              </h3>
              <p className="text-xs text-[#4a5548] leading-relaxed">
                Cùng các trekker mang nguyên mẫu gùi tải trọng 12kg qua các dốc đá và bùn lầy để đánh giá độ chịu lực của đường may và đệm lưng EVA.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MẠNG LƯỚI ĐỐI TÁC HỌC THUẬT & CỘNG ĐỒNG */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest text-[#7c8663] uppercase">
            MẠNG LƯỚI ĐỒNG HÀNH
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
            Kết nối tri thức, kỹ thuật và cộng đồng
          </h2>
          <p className="text-sm text-[#4a5548]">
            Sự ủng hộ từ các trường đại học, vườn ươm khởi nghiệp và tổ chức xã hội là điểm tựa vững chắc cho dự án.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-4">
            <div className="flex items-center gap-3">
              <GraduationCap className="w-6 h-6 text-[#041d15]" />
              <h3 className="font-headline text-xl font-bold text-[#041d15]">Học thuật & Cố vấn</h3>
            </div>
            <ul className="space-y-2 text-xs text-[#4a5548]">
              <li className="p-2 rounded bg-[#fcfbf7] border border-[#e2ded4]">• Trường Đại học Kinh tế – ĐH Đà Nẵng</li>
              <li className="p-2 rounded bg-[#fcfbf7] border border-[#e2ded4]">• Trường Đại học Bách Khoa – ĐH Đà Nẵng</li>
              <li className="p-2 rounded bg-[#fcfbf7] border border-[#e2ded4]">• Khoa Thương mại Điện tử & Kinh doanh số</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-4">
            <div className="flex items-center gap-3">
              <Wrench className="w-6 h-6 text-[#041d15]" />
              <h3 className="font-headline text-xl font-bold text-[#041d15]">Kỹ thuật & Ươm tạo</h3>
            </div>
            <ul className="space-y-2 text-xs text-[#4a5548]">
              <li className="p-2 rounded bg-[#fcfbf7] border border-[#e2ded4]">• Danang Business Incubator (DNES)</li>
              <li className="p-2 rounded bg-[#fcfbf7] border border-[#e2ded4]">• FabLab Da Nang Open Makerspace</li>
              <li className="p-2 rounded bg-[#fcfbf7] border border-[#e2ded4]">• Đối tác kiểm định tế bào quang điện</li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl bg-white border border-[#e2ded4] space-y-4">
            <div className="flex items-center gap-3">
              <HeartHandshake className="w-6 h-6 text-[#041d15]" />
              <h3 className="font-headline text-xl font-bold text-[#041d15]">Cộng đồng & Thiện nguyện</h3>
            </div>
            <ul className="space-y-2 text-xs text-[#4a5548]">
              <li className="p-2 rounded bg-[#fcfbf7] border border-[#e2ded4]">• Nhóm Thiện nguyện Cõng Chữ Lên Non</li>
              <li className="p-2 rounded bg-[#fcfbf7] border border-[#e2ded4]">• Cộng đồng Trekking & Outdoor Việt Nam</li>
              <li className="p-2 rounded bg-[#fcfbf7] border border-[#e2ded4]">• Huyện Đoàn & Phòng GD-ĐT Tây Giang</li>
            </ul>
          </div>
        </div>
      </section>

    </div>
  );
}

