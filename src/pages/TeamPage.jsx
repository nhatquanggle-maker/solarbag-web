import React, { useState, useEffect } from 'react';
import { TEAM_MEMBERS, ADVISORY_NETWORK } from '../data/mockData';
import { 
  Quote, 
  Users, 
  GraduationCap, 
  Wrench, 
  HeartHandshake, 
  CheckCircle2, 
  Sparkles, 
  Cpu, 
  TrendingUp, 
  DollarSign, 
  Palette, 
  Compass, 
  ChevronRight,
  ChevronDown,
  X,
  Target,
  FileCheck2,
  Zap,
  Package,
  Code,
  Scale,
  Briefcase
} from 'lucide-react';

export default function TeamPage() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [openDomains, setOpenDomains] = useState(['business-startup']); // Mở sẵn lĩnh vực đầu tiên

  const toggleDomain = (domainId) => {
    setOpenDomains(prev => 
      prev.includes(domainId) 
        ? prev.filter(id => id !== domainId) 
        : [...prev, domainId]
    );
  };

  const expandAllDomains = () => {
    setOpenDomains(ADVISORY_NETWORK.map(d => d.id));
  };

  const collapseAllDomains = () => {
    setOpenDomains([]);
  };

  // Close modal on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedMember(null);
    };
    if (selectedMember) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedMember]);

  const getRoleIcon = (roleId) => {
    switch (roleId) {
      case 'thanh-thao':
        return <Compass className="w-5 h-5 text-[#efbc5c]" />;
      case 'thao-ngoc':
        return <DollarSign className="w-5 h-5 text-emerald-600" />;
      case 'nhat-quang':
        return <Cpu className="w-5 h-5 text-sky-600" />;
      case 'minh-khanh':
        return <Palette className="w-5 h-5 text-amber-600" />;
      case 'minh-kha':
        return <TrendingUp className="w-5 h-5 text-purple-600" />;
      default:
        return <Users className="w-5 h-5 text-[#efbc5c]" />;
    }
  };

  const getDomainIcon = (domainId, isOpen = false) => {
    const activeColor = isOpen ? 'text-[#efbc5c]' : '';
    switch (domainId) {
      case 'business-startup':
        return <TrendingUp className={`w-5 h-5 ${isOpen ? activeColor : 'text-emerald-600'}`} />;
      case 'electrical-solar':
        return <Zap className={`w-5 h-5 ${isOpen ? activeColor : 'text-amber-500'}`} />;
      case 'backpack-design':
        return <Package className={`w-5 h-5 ${isOpen ? activeColor : 'text-orange-600'}`} />;
      case 'software-dev':
        return <Code className={`w-5 h-5 ${isOpen ? activeColor : 'text-sky-600'}`} />;
      case 'finance-legal':
        return <Scale className={`w-5 h-5 ${isOpen ? activeColor : 'text-indigo-600'}`} />;
      case 'csr-community':
        return <HeartHandshake className={`w-5 h-5 ${isOpen ? activeColor : 'text-rose-600'}`} />;
      default:
        return <GraduationCap className={`w-5 h-5 ${isOpen ? activeColor : 'text-[#041d15]'}`} />;
    }
  };

  return (
    <div className="space-y-24 pb-20">
      
      {/* 1. Hero Quote Header */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-20 border-b border-[#124636]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="text-xs font-headline font-bold tracking-widest text-[#efbc5c] uppercase bg-[#0a3225] px-3.5 py-1.5 rounded-full border border-[#efbc5c]/30">
            CUỘC THI SINH VIÊN KINH DOANH SỐ 2026 · ĐẠI HỌC KINH TẾ ĐÀ NẴNG
          </span>
          <h1 className="font-headline text-3xl sm:text-5xl font-bold text-white tracking-tight uppercase">
            Đội Ngũ Sáng Lập GuiNang (Gùi Nắng)
          </h1>
          <div className="p-8 bg-[#0a3225]/80 rounded-2xl border border-[#7c8663]/30 relative my-6 shadow-xl">
            <Quote className="w-10 h-10 text-[#efbc5c]/40 mx-auto mb-4" />
            <p className="font-serif text-lg sm:text-2xl text-[#fcfbf7] italic leading-relaxed">
              “Nắng theo chân, sáng muôn miền — Chúng mình tin rằng công nghệ chỉ thực sự đẹp khi nó mang lại sự ấm áp và hy vọng cho con người.”
            </p>
            <p className="font-headline text-xs text-[#efbc5c] mt-4 uppercase tracking-widest font-semibold">
              — Nguyễn Thị Thanh Thảo · Founder & CEO GuiNang
            </p>
          </div>
        </div>
      </section>

      {/* 2. Core Team Members Grid (5 cards) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-headline font-bold tracking-widest text-[#7c8663] uppercase">
            5 THÀNH VIÊN SÁNG LẬP · 50K22.1 · KHOA THƯƠNG MẠI ĐIỆN TỬ, MARKETING VÀ CÔNG NGHỆ SỐ
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
            Những người đồng sáng lập dự án GuiNang
          </h2>
          <p className="text-sm font-sans text-[#4a5548]">
            5 mảnh ghép sáng lập đa ngành từ Trường Đại học Kinh tế – Đại học Đà Nẵng, kết hợp chặt chẽ giữa Quản trị điều hành, Nghiên cứu sản phẩm R&D, Công nghệ số, Phát triển kinh doanh B2B/B2N và Tiếp thị truyền thông.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {TEAM_MEMBERS.map((member) => {
            return (
              <div 
                key={member.id}
                className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                <div className="relative h-72 bg-[#f4f0e6] overflow-hidden">
                  <img 
                    src={member.avatar} 
                    alt={member.name}
                    style={{ objectPosition: member.objectPosition || 'center' }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  
                  {/* Nickname Badge */}
                  <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#041d15]/90 text-[#efbc5c] font-headline text-xs font-bold shadow-md border border-[#efbc5c]/40 backdrop-blur-sm">
                    {member.nickname || member.initials}
                  </div>

                  {/* SubRole Pill */}
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="block px-2.5 py-1.5 rounded-lg bg-black/65 text-[#f5f5e9] text-xs font-headline font-bold text-center backdrop-blur-md border border-white/20 truncate">
                      {member.role}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-1">
                    <h3 className="font-headline text-base font-bold text-[#041d15] leading-snug">
                      {member.name}
                    </h3>
                    <p className="font-serif-subheading text-xs text-[#5E7A45] font-semibold italic">
                      {member.dept}
                    </p>
                  </div>
                  
                  <p className="font-sans text-xs text-[#4a5548] leading-relaxed pt-2 border-t border-[#f0ede6]">
                    {member.desc}
                  </p>

                  <div className="pt-2">
                    <button
                      onClick={() => setSelectedMember(member)}
                      className="w-full py-2.5 px-3 rounded-xl text-xs font-headline font-bold transition-all flex items-center justify-center gap-1.5 border shadow-sm hover:shadow-md cursor-pointer bg-[#f5f2e9] hover:bg-[#041d15] text-[#041d15] hover:text-[#efbc5c] border-[#e2ded4]"
                    >
                      Xem chi tiết nhiệm vụ
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* POPUP MODAL: CHI TIẾT NHIỆM VỤ THÀNH VIÊN (Hiện ra ngay khi bấm nút) */}
      {selectedMember && (
        <div 
          onClick={() => setSelectedMember(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/65 backdrop-blur-sm animate-fadeIn"
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            className="bg-[#fbf9f4] rounded-3xl border border-[#e2ded4] shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col animate-scaleUp text-[#232622]"
          >
            {/* Modal Header */}
            <div className="bg-[#041d15] text-[#f5f5e9] p-6 sm:p-7 relative border-b border-[#124636] flex items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <img 
                  src={selectedMember.avatar} 
                  alt={selectedMember.name}
                  style={{ objectPosition: selectedMember.objectPosition || 'center' }}
                  className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl object-cover border-2 border-[#efbc5c]/40 shrink-0 shadow-lg"
                />
                <div className="space-y-1">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#0a3225] text-[#efbc5c] font-headline text-xs font-bold border border-[#efbc5c]/30">
                    {selectedMember.role}
                  </span>
                  <h3 className="font-headline text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {selectedMember.name} {selectedMember.nickname && <span className="text-[#efbc5c] font-normal text-base font-serif italic">({selectedMember.nickname})</span>}
                  </h3>
                  <p className="font-serif-subheading text-xs text-[#a3b899] italic">
                    {selectedMember.dept}
                  </p>
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setSelectedMember(null)}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors shrink-0"
                title="Đóng hộp thoại"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content Scrollable */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
              
              {/* Short Summary Box */}
              <div className="p-4 bg-white rounded-2xl border border-[#e2ded4] space-y-2 shadow-sm">
                <span className="font-headline text-xs font-bold text-[#7c8663] uppercase tracking-wider block">
                  Định vị chuyên môn
                </span>
                <p className="font-sans text-sm text-[#384337] leading-relaxed">
                  {selectedMember.desc}
                </p>
                {(selectedMember.phone || selectedMember.email) && (
                  <div className="pt-2 border-t border-[#f0ede6] flex flex-wrap gap-4 text-xs font-mono text-[#041d15]">
                    {selectedMember.phone && <span>📞 SĐT: <strong>{selectedMember.phone}</strong></span>}
                    {selectedMember.email && <span>✉️ Email: <strong>{selectedMember.email}</strong></span>}
                  </div>
                )}
              </div>

              {/* Detailed Tasks Breakdown */}
              <div className="space-y-5">
                <div className="flex items-center gap-2 border-b border-[#e2ded4] pb-2">
                  <FileCheck2 className="w-4 h-4 text-[#041d15]" />
                  <h4 className="font-headline text-sm font-bold text-[#041d15] uppercase tracking-wider">
                    Nhiệm vụ chi tiết & Sản phẩm bàn giao Capstone
                  </h4>
                </div>

                <div className="space-y-4">
                  {selectedMember.responsibilities && selectedMember.responsibilities.map((resp, idx) => (
                    <div 
                      key={idx} 
                      className="bg-white rounded-2xl p-5 border border-[#e2ded4] space-y-3 shadow-sm hover:border-[#5E7A45]/40 transition-all"
                    >
                      <h5 className="font-headline text-base font-bold text-[#041d15] flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#efbc5c] shrink-0" />
                        {resp.category}
                      </h5>
                      <ul className="space-y-2.5 pl-1">
                        {resp.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="font-sans text-xs sm:text-sm text-[#232622] flex items-start gap-2.5 leading-relaxed">
                            <CheckCircle2 className="w-4 h-4 text-[#5E7A45] shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 sm:p-5 bg-[#f5f2e9] border-t border-[#e2ded4] flex items-center justify-between">
              <span className="font-serif-subheading italic text-xs text-[#7c8663]">
                Dự án Capstone 2026 · Đại học Kinh tế – ĐH Đà Nẵng
              </span>
              <button
                onClick={() => setSelectedMember(null)}
                className="px-6 py-2.5 bg-[#041d15] text-[#efbc5c] hover:bg-[#072b20] rounded-xl font-headline font-bold text-xs tracking-wide transition-all shadow-md cursor-pointer"
              >
                Đóng
              </button>
            </div>

          </div>
        </div>
      )}

      {/* 3. BÊN TRONG XƯỞNG Ý TƯỞNG — R&D là một hành trình cùng học */}
      <section className="bg-[#f5f2e9] py-20 border-y border-[#e2ded4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-headline font-bold tracking-widest text-[#efbc5c] uppercase bg-[#041d15] px-4 py-1.5 rounded-full border border-[#efbc5c]/30 inline-flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              ẢNH TẬP THỂ DỰ ÁN CAPSTONE 2026
            </span>
            <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15]">
              Đội ngũ sáng lập GuiNang
            </h2>
            <p className="text-sm font-sans text-[#4a5548] leading-relaxed max-w-2xl mx-auto">
              5 bạn trẻ sinh viên lớp 50K22.1, Khoa Thương mại điện tử, Marketing và Công nghệ số – Trường Đại học Kinh tế, Đại học Đà Nẵng cùng gắn bó trong hành trình đưa nguyên mẫu ba lô năng lượng mặt trời từ giảng đường ra thực địa.
            </p>
          </div>

          {/* Group Photo Showcase Card */}
          <div className="bg-white rounded-3xl border border-[#e2ded4] overflow-hidden shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              
              {/* Photo Side with Clear Overlay Labels (Visible on both mobile & desktop) */}
              <div className="lg:col-span-7 relative h-80 sm:h-96 lg:h-auto min-h-[380px] bg-[#041d15] overflow-hidden group">
                <img 
                  src="/assets/team/IMG_1982_web.jpg" 
                  alt="Tập thể 5 thành viên sáng lập GuiNang" 
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/30" />
                
                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-full bg-[#041d15]/90 border border-[#efbc5c]/60 text-[#efbc5c] text-xs font-headline font-bold shadow-lg backdrop-blur-md flex items-center gap-2">
                  <span>📸</span>
                  <span>5 THÀNH VIÊN SÁNG LẬP GUINANG</span>
                </div>

                {/* Bottom Overlay Info (Visible on ALL devices) */}
                <div className="absolute bottom-4 left-4 right-4 z-10 text-white space-y-1">
                  <div className="font-headline font-bold text-sm sm:text-base text-white">
                    Tập thể sáng lập: Thảo (CEO), Ngọc (CPO), Quang (CTO), Kha (CSO), Khánh (CMO)
                  </div>
                  <div className="text-xs text-[#efbc5c] font-sans">
                    Lớp 50K22.1, Khoa Thương mại điện tử, Marketing và Công nghệ số — Trường Đại học Kinh tế, Đại học Đà Nẵng
                  </div>
                  <div className="text-[11px] text-[#d2ded0] italic">
                    Dự án đạt giải Cuộc thi Sinh viên Kinh doanh số 2026
                  </div>
                </div>
              </div>

              {/* Right Column: Detailed Context & Roles */}
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6 bg-gradient-to-br from-white to-[#faf8f2]">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#041d15] text-[#efbc5c] text-xs font-headline font-bold">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>TINH THẦN ĐỒNG ĐỘI GUINANG</span>
                  </div>
                  
                  <h3 className="font-headline text-2xl font-bold text-[#041d15] leading-tight">
                    Từ Giảng Đường Đến Những Dặm Đường Thực Địa
                  </h3>
                  
                  <p className="font-sans text-xs sm:text-sm text-[#4a5548] leading-relaxed">
                    Không chỉ dừng lại ở bài tập học phần, cả 5 bạn trẻ lớp 50K22.1, Khoa Thương mại điện tử, Marketing và Công nghệ số đã cùng nhau nghiên cứu, lắp ráp mạch sạc, may đo balo và thử nghiệm dã ngoại dưới nắng gắt để tạo nên giải pháp năng lượng xanh cho cộng đồng.
                  </p>

                  {/* 5 Members Checklist */}
                  <div className="space-y-2 pt-2 border-t border-[#e2ded4] text-xs">
                    <div className="flex items-center gap-2 text-[#041d15]">
                      <span className="w-2 h-2 rounded-full bg-[#efbc5c] shrink-0"></span>
                      <span><strong>Nguyễn Thị Thanh Thảo:</strong> Founder & CEO</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#041d15]">
                      <span className="w-2 h-2 rounded-full bg-[#efbc5c] shrink-0"></span>
                      <span><strong>Trần Trần Thảo Ngọc (Meo):</strong> Head of Product & R&D</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#041d15]">
                      <span className="w-2 h-2 rounded-full bg-[#efbc5c] shrink-0"></span>
                      <span><strong>Lê Nhật Quang:</strong> Head of Technology & Digital Platform</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#041d15]">
                      <span className="w-2 h-2 rounded-full bg-[#efbc5c] shrink-0"></span>
                      <span><strong>Đào Ngọc Minh Kha:</strong> Head of Business Development</span>
                    </div>
                    <div className="flex items-center gap-2 text-[#041d15]">
                      <span className="w-2 h-2 rounded-full bg-[#efbc5c] shrink-0"></span>
                      <span><strong>Lê Ngọc Minh Khánh:</strong> Head of Marketing & Communications</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#e2ded4] grid grid-cols-3 gap-2 sm:gap-3 text-center">
                  <div className="p-3 rounded-xl bg-[#f5f2e9]">
                    <div className="font-headline text-lg sm:text-xl font-bold text-[#041d15]">5</div>
                    <div className="text-[10px] sm:text-[11px] font-sans text-[#7c8663] uppercase tracking-wider">Thành viên</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f5f2e9]">
                    <div className="font-headline text-lg sm:text-xl font-bold text-[#041d15]">2</div>
                    <div className="text-[10px] sm:text-[11px] font-sans text-[#7c8663] uppercase tracking-wider">Dòng balo</div>
                  </div>
                  <div className="p-3 rounded-xl bg-[#f5f2e9]">
                    <div className="font-headline text-lg sm:text-xl font-bold text-[#efbc5c]">100%</div>
                    <div className="text-[10px] sm:text-[11px] font-sans text-[#7c8663] uppercase tracking-wider">Đồng lòng</div>
                  </div>
                </div>
              </div>
            </div>
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
              <p className="font-sans text-xs text-[#4a5548] leading-relaxed">
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
              <p className="font-sans text-xs text-[#4a5548] leading-relaxed">
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
              <p className="font-sans text-xs text-[#4a5548] leading-relaxed">
                Cùng các trekker mang nguyên mẫu gùi tải trọng 12kg qua các dốc đá và bùn lầy để đánh giá độ chịu lực của đường may và đệm lưng EVA.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. MẠNG LƯỚI ĐỒNG HÀNH (Dropdown / Accordion) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-headline font-bold tracking-widest text-[#7c8663] uppercase bg-[#f5f2e9] px-3.5 py-1.5 rounded-full border border-[#e2ded4]">
            MẠNG LƯỚI ĐỒNG HÀNH
          </span>
          <h2 className="font-headline text-3xl sm:text-4xl font-bold text-[#041d15] uppercase tracking-tight">
            Kết nối tri thức, kỹ thuật và cộng đồng
          </h2>
          <p className="text-sm font-sans text-[#4a5548] leading-relaxed">
            Hệ thống cố vấn chuyên môn, đối tác học thuật và mạng lưới đồng hành bảo chứng chất lượng kỹ thuật, tính khả thi tài chính và tác động xã hội của dự án SolarBag.
          </p>
        </div>

        {/* Toolbar: Số lượng & Nút Mở / Thu gọn tất cả */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e2ded4] pb-4">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#5E7A45]"></span>
            <span className="font-headline text-xs font-bold text-[#041d15] uppercase tracking-wider">
              6 Lĩnh vực cố vấn chuyên môn · Bấm vào từng mục để xem chi tiết
            </span>
          </div>
          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={expandAllDomains}
              className="px-3.5 py-1.5 rounded-xl text-xs font-headline font-bold text-[#041d15] bg-[#f5f2e9] hover:bg-[#041d15] hover:text-[#efbc5c] border border-[#e2ded4] transition-all cursor-pointer shadow-sm"
            >
              Mở tất cả
            </button>
            <button
              onClick={collapseAllDomains}
              className="px-3.5 py-1.5 rounded-xl text-xs font-headline font-bold text-[#7c8663] hover:text-[#041d15] hover:bg-[#f5f2e9] border border-transparent hover:border-[#e2ded4] transition-all cursor-pointer"
            >
              Thu gọn tất cả
            </button>
          </div>
        </div>

        {/* Danh sách Dropdown Accordion */}
        <div className="space-y-4">
          {ADVISORY_NETWORK.map((item) => {
            const isOpen = openDomains.includes(item.id);
            return (
              <div 
                key={item.id}
                className={`bg-white rounded-2xl border transition-all duration-300 overflow-hidden shadow-sm ${
                  isOpen 
                    ? 'border-[#5E7A45]/50 ring-1 ring-[#5E7A45]/20 shadow-md' 
                    : 'border-[#e2ded4] hover:border-[#7c8663]/60'
                }`}
              >
                {/* Header Dropdown Button (Click để xổ xuống) */}
                <button
                  type="button"
                  onClick={() => toggleDomain(item.id)}
                  aria-expanded={isOpen}
                  className="w-full p-4 sm:p-5 flex items-center justify-between gap-4 text-left transition-colors hover:bg-[#fbf9f4] cursor-pointer"
                >
                  <div className="flex items-center gap-3.5 sm:gap-4 flex-1 min-w-0">
                    <div className={`p-2.5 sm:p-3 rounded-xl border shrink-0 transition-colors ${
                      isOpen 
                        ? 'bg-[#041d15] text-[#efbc5c] border-[#041d15]' 
                        : 'bg-[#f5f2e9] text-[#041d15] border-[#e2ded4]'
                    }`}>
                      {getDomainIcon(item.id, isOpen)}
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
                        <h3 className="font-headline font-bold text-sm sm:text-base text-[#041d15]">
                          {item.domain}
                        </h3>
                      </div>
                      <p className="font-sans text-xs text-[#7c8663] truncate mt-0.5">
                        <span className="font-medium text-[#4a5548]">Phạm vi:</span> {item.scope}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 shrink-0">
                    <span className="hidden sm:inline-block font-headline text-xs font-semibold text-[#5E7A45]">
                      {isOpen ? 'Thu gọn' : 'Chi tiết cố vấn'}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#041d15] text-[#efbc5c]' : 'bg-[#f5f2e9] text-[#041d15]'
                    }`}>
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </div>
                </button>

                {/* Dropdown Content Xổ Xuống */}
                {isOpen && (
                  <div className="border-t border-[#e2ded4] bg-[#fdfcf9] p-5 sm:p-6 animate-fadeIn">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                      
                      {/* Cột Trái: Cố vấn & Đơn vị hỗ trợ */}
                      <div className="lg:col-span-7 space-y-3">
                        <div className="flex items-center gap-2 border-b border-[#e2ded4]/60 pb-2">
                          <Users className="w-4 h-4 text-[#5E7A45]" />
                          <span className="font-headline text-xs font-bold text-[#041d15] uppercase tracking-wider">
                            Cố vấn & Đơn vị hỗ trợ
                          </span>
                        </div>
                        
                        <div className="space-y-2 pt-1 font-sans text-xs sm:text-sm text-[#232622]">
                          {item.advisorsText.map((line, idx) => {
                            const isSubBullet = line.startsWith('•');
                            const isHeader = line.endsWith(':');
                            if (isSubBullet) {
                              return (
                                <div key={idx} className="pl-4 sm:pl-6 flex items-start gap-2 text-[#384337]">
                                  <span className="text-[#5E7A45] font-bold text-sm leading-none mt-0.5">•</span>
                                  <span className="font-medium leading-relaxed">{line.replace(/^•\s*/, '')}</span>
                                </div>
                              );
                            }
                            if (isHeader) {
                              return (
                                <div key={idx} className="font-headline font-bold text-xs sm:text-sm text-[#041d15] pt-2">
                                  {line}
                                </div>
                              );
                            }
                            return (
                              <div key={idx} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-[#5E7A45] shrink-0 mt-0.5" />
                                <span className="leading-relaxed">{line}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Cột Phải: Nội dung tư vấn */}
                      <div className="lg:col-span-5 space-y-3">
                        <div className="flex items-center gap-2 border-b border-[#e2ded4]/60 pb-2">
                          <Target className="w-4 h-4 text-[#efbc5c]" />
                          <span className="font-headline text-xs font-bold text-[#041d15] uppercase tracking-wider">
                            Nội dung & Phạm vi tư vấn
                          </span>
                        </div>

                        <div className="p-4 sm:p-5 rounded-2xl bg-white border border-[#e2ded4] shadow-sm space-y-2">
                          <p className="font-sans text-xs sm:text-sm text-[#384337] leading-relaxed font-medium">
                            {item.scope}
                          </p>
                        </div>
                      </div>

                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
