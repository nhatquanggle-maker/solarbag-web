import React, { useState, useEffect } from 'react';
import { TRAILS } from '../data/mockData';
import { 
  Search, Heart, Compass, MapPin, Sun, Mountain, 
  Smartphone, QrCode, ArrowRight, ShieldCheck, Zap,
  Navigation, Radio, AlertTriangle, CheckCircle2, Download,
  Clock, X, Sparkles, Battery, ExternalLink, Shield, Check,
  Plus, Minus, Trash2, RotateCcw
} from 'lucide-react';

export default function ExplorePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [favorites, setFavorites] = useState(['lao-than']);
  const [selectedTrail, setSelectedTrail] = useState(null);
  const [activeModal, setActiveModal] = useState(null); // 'trip-planner' | 'energy-planner' | 'all-trails' | 'app-download' | null
  const [toastMessage, setToastMessage] = useState('');

  // ==========================================
  // CUSTOM ENERGY PLANNER STATE (Tự Custom)
  // ==========================================
  const DEFAULT_DEVICES = [
    { id: 'phone', name: 'Điện Thoại Thông Minh (Smartphone)', powerWh: 15, count: 1, note: 'Pin 4.000mAh ~ 15Wh / lần sạc' },
    { id: 'lamp', name: 'Đèn Cắm Trại Solar Lamp (Tháo Rời)', powerWh: 9.6, count: 1, note: 'Pin 2.600mAh chiếu sáng 6–8h' },
    { id: 'gopro', name: 'Camera Hành Trình (Action Cam / GoPro)', powerWh: 6.5, count: 2, note: 'Pin 1.720mAh ~ 6.5Wh / viên' },
    { id: 'gps', name: 'Đồng Hồ GPS / Định Vị Vệ Tinh Garmin', powerWh: 2, count: 1, note: 'Định vị vệ tinh liên tục cả ngày' },
  ];

  const [backpackModel, setBackpackModel] = useState('trail'); // 'trail' (20W) | 'edu' (10W)
  const [sunHours, setSunHours] = useState(5); // 6 (nắng gắt), 4 (nắng vừa), 2 (nhiều mây)
  const [customDevices, setCustomDevices] = useState(DEFAULT_DEVICES);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newDeviceName, setNewDeviceName] = useState('');
  const [newDeviceWh, setNewDeviceWh] = useState('');

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedTrail || activeModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedTrail, activeModal]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  const toggleFavorite = (id, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setFavorites(prev => {
      const isFav = prev.includes(id);
      const next = isFav ? prev.filter(item => item !== id) : [...prev, id];
      showToast(isFav ? 'Đã bỏ lưu cung đường' : 'Đã lưu cung đường vào mục yêu thích');
      return next;
    });
  };

  const updateDeviceCount = (id, delta) => {
    setCustomDevices(prev => prev.map(d => {
      if (d.id === id) {
        const newCount = Math.max(0, d.count + delta);
        return { ...d, count: newCount };
      }
      return d;
    }));
  };

  const removeDevice = (id) => {
    setCustomDevices(prev => prev.filter(d => d.id !== id));
    showToast('Đã xóa thiết bị khỏi bảng tính');
  };

  const handleAddCustomDevice = (e) => {
    e.preventDefault();
    if (!newDeviceName.trim()) {
      showToast('Vui lòng nhập tên thiết bị');
      return;
    }
    const wh = parseFloat(newDeviceWh);
    if (isNaN(wh) || wh <= 0) {
      showToast('Vui lòng nhập công suất Wh hợp lệ (> 0)');
      return;
    }
    const newId = 'custom-' + Date.now();
    setCustomDevices(prev => [
      ...prev,
      {
        id: newId,
        name: newDeviceName.trim(),
        powerWh: wh,
        count: 1,
        note: `Thiết bị tự thêm: ${wh} Wh / lần sạc`
      }
    ]);
    setNewDeviceName('');
    setNewDeviceWh('');
    setShowAddForm(false);
    showToast(`Đã thêm "${newDeviceName.trim()}" vào bảng tính!`);
  };

  const resetDevices = () => {
    setCustomDevices(DEFAULT_DEVICES);
    setBackpackModel('trail');
    setSunHours(5);
    showToast('Đã khôi phục bảng tính năng lượng về mặc định');
  };

  // Calculations
  const totalNeededWh = customDevices.reduce((sum, d) => sum + (d.powerWh * d.count), 0);
  const panelWatt = backpackModel === 'trail' ? 20 : 10;
  const sunEfficiency = sunHours >= 6 ? 1.0 : sunHours >= 4 ? 0.85 : 0.55;
  const solarHarvestWh = Math.round(panelWatt * sunHours * sunEfficiency * 0.88); // 88% BMS conversion
  const internalBatteryWh = backpackModel === 'trail' ? 18.5 : 9.6;
  const totalAvailableWh = solarHarvestWh + internalBatteryWh;
  const coveragePercent = Math.min(200, Math.round((totalAvailableWh / (totalNeededWh || 1)) * 100));
  const isFullySufficient = totalAvailableWh >= totalNeededWh;

  const filteredTrails = TRAILS.filter(t => 
    t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    t.region.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (t.difficulty && t.difficulty.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const scrollToTrails = () => {
    const el = document.getElementById('trails-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="space-y-20 pb-20 bg-[#faf8f2]">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#041d15] text-[#f5f5e9] px-5 py-3 rounded-xl shadow-2xl border border-[#efbc5c]/40 flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-4 h-4 text-[#efbc5c]" />
          <span className="text-xs font-headline font-bold">{toastMessage}</span>
        </div>
      )}

      {/* =========================================================================
          SECTION 1: HERO SEARCH "FIND YOUR NEXT ADVENTURE"
      ========================================================================= */}
      <section className="relative min-h-[78vh] flex items-center justify-center bg-[#041d15] text-[#f5f5e9] overflow-hidden">
        {/* Background photo */}
        <div 
          className="absolute inset-0 z-0 bg-cover bg-center opacity-55 scale-105 transition-transform duration-1000"
          style={{ backgroundImage: `url('/assets/images/6de495ed65dbb40e4b88642bad776e96c19a1cd7.png')` }}
        />
        {/* Gradients */}
        <div className="absolute inset-0 z-0 bg-gradient-to-t from-[#041d15] via-[#041d15]/40 to-black/60" />

        {/* Content Container */}
        <div className="relative z-10 max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 pt-8">
          
          {/* Main Title */}
          <h1 className="font-headline text-4xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
            Find your next adventure
          </h1>
          <p className="font-serif italic text-base sm:text-xl text-[#efbc5c] -mt-3">
            Tìm hành trình tiếp theo của bạn cùng SolarBag Trail & SolarBag App
          </p>

          {/* Search Bar (Padding corrected: pl-16 so text never collides with search icon) */}
          <div className="max-w-2xl mx-auto relative shadow-2xl">
            <div className="relative flex items-center">
              <Search className="w-5 h-5 text-gray-400 absolute left-6 pointer-events-none z-10" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by city, park, or trail name / Tìm theo cung đường, địa danh..."
                className="w-full pl-16 pr-12 py-4 sm:py-5 rounded-full bg-white text-[#041d15] placeholder-gray-400 text-sm sm:text-base font-sans outline-none shadow-xl border-2 border-transparent focus:border-[#efbc5c] transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-5 text-xs font-mono font-bold text-gray-400 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full w-6 h-6 flex items-center justify-center transition-colors cursor-pointer"
                >
                  ✕
                </button>
              )}
            </div>
          </div>

          {/* 3 Action Pills Under Search (All modal-triggered or scroll, NO navigation away) */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3.5 pt-1">
            <button
              onClick={() => setActiveModal('trip-planner')}
              className="px-5 py-2.5 rounded-full bg-white/90 hover:bg-white text-[#041d15] text-xs sm:text-sm font-headline font-bold transition-all shadow-md hover:scale-105 flex items-center gap-2 border border-white/40 cursor-pointer"
            >
              <span>✨</span>
              <span>Create a trip (Tạo chuyến đi)</span>
            </button>

            <button
              onClick={() => setActiveModal('energy-planner')}
              className="px-5 py-2.5 rounded-full bg-white/90 hover:bg-white text-[#041d15] text-xs sm:text-sm font-headline font-bold transition-all shadow-md hover:scale-105 flex items-center gap-2 border border-white/40 cursor-pointer"
            >
              <span>📐</span>
              <span>Build custom route (Lập kế hoạch thiết bị)</span>
            </button>

            <button
              onClick={scrollToTrails}
              className="px-5 py-2.5 rounded-full bg-white/90 hover:bg-white text-[#041d15] text-xs sm:text-sm font-headline font-bold transition-all shadow-md hover:scale-105 flex items-center gap-2 border border-white/40 cursor-pointer"
            >
              <span>📍</span>
              <span>Nearby trails (Cung đường gần bạn)</span>
            </button>
          </div>

        </div>


      </section>


      {/* =========================================================================
          SECTION 2: LOCAL FAVORITES / CÁC HÀNH TRÌNH NỔI BẬT
      ========================================================================= */}
      <section id="trails-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 scroll-mt-24">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#e2ded4] pb-5">
          <div className="space-y-1">
            <h2 className="font-headline text-2xl sm:text-3xl lg:text-4xl font-bold text-[#041d15]">
              Local favorites near <span className="underline decoration-[#efbc5c] decoration-4 underline-offset-4">Đà Nẵng & Việt Nam</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#556353]">
              Những cung đường trekking được đón nắng và cộng đồng đánh giá cao nhất dành cho dòng balo GuiNang Trail. Bấm trực tiếp vào cung đường để xem chi tiết ngay tại đây.
            </p>
          </div>

          <button
            onClick={() => setActiveModal('all-trails')}
            className="text-xs font-headline font-bold text-[#041d15] hover:text-[#5E7A45] flex items-center gap-1.5 shrink-0 bg-white px-4 py-2 rounded-full border border-[#e2ded4] shadow-sm hover:shadow transition-all cursor-pointer"
          >
            <span>Khám phá tất cả các cung đường</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Trail Cards Grid: Click opens rich detail modal in-place without page jump */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {filteredTrails.slice(0, 3).map((trail) => {
            const isFav = favorites.includes(trail.id);
            const isHard = trail.difficulty && (trail.difficulty.includes('Hard') || trail.difficulty.includes('Thử thách') || trail.difficulty.includes('Nâng cao'));

            return (
              <div
                key={trail.id}
                onClick={() => setSelectedTrail(trail)}
                className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group cursor-pointer hover:-translate-y-1 text-left"
              >
                {/* Image with Heart Button */}
                <div className="relative aspect-[4/3] bg-[#f4f0e6] overflow-hidden">
                  <img 
                    src={trail.coverImage} 
                    alt={trail.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      // Fallback safeguard so an image never shows broken
                      e.target.src = '/assets/images/6de495ed65dbb40e4b88642bad776e96c19a1cd7.png';
                    }}
                  />
                  
                  {/* Heart Favorite Button */}
                  <button
                    onClick={(e) => toggleFavorite(trail.id, e)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 hover:bg-white text-[#041d15] flex items-center justify-center transition-all shadow-md hover:scale-110 z-10 cursor-pointer"
                    title={isFav ? 'Bỏ lưu' : 'Lưu cung đường'}
                  >
                    <Heart 
                      className={`w-4 h-4 transition-colors ${
                        isFav ? 'fill-red-500 text-red-500' : 'text-gray-700'
                      }`} 
                    />
                  </button>

                  {/* Altitude Tag */}
                  <div className="absolute bottom-2.5 left-2.5 px-2.5 py-0.5 rounded-md bg-[#041d15]/85 text-[#efbc5c] font-mono text-[11px] font-bold backdrop-blur-sm shadow">
                    {trail.altitude}
                  </div>
                </div>

                {/* Trail Details */}
                <div className="p-4 space-y-2.5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-headline text-base font-bold text-[#041d15] group-hover:text-[#5E7A45] transition-colors line-clamp-1">
                      {trail.title}
                    </h3>
                    <p className="text-xs text-[#7c8663] font-medium line-clamp-1 mt-0.5">
                      {trail.region}
                    </p>
                  </div>

                  {/* Meta stats: Rating · Difficulty dot · Distance */}
                  <div className="pt-2.5 border-t border-[#f0ede6] flex items-center justify-between text-xs font-sans text-[#4a5548]">
                    <div className="flex items-center gap-1.5 font-medium">
                      <span className="text-amber-500">★ 4.8</span>
                      <span className="text-gray-300">·</span>
                      <span className="flex items-center gap-1">
                        <span className={`w-2 h-2 rounded-full ${isHard ? 'bg-red-500' : 'bg-emerald-500'}`} />
                        <span>{isHard ? 'Khó' : 'Vừa sức'}</span>
                      </span>
                    </div>
                    <span className="font-mono text-[11px] text-[#6c776b]">
                      {trail.distance.split(' ')[0]} {trail.distance.split(' ')[1] || 'km'}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </section>


      {/* =========================================================================
          SECTION 3: GIỚI THIỆU SOLARBAG APP (REAL APP SCREENSHOT & FEATURES)
      ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#041d15] text-[#f5f5e9] rounded-3xl border border-[#124636] overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-8 sm:p-12 lg:p-14">
            
            {/* Left Column: App Copy & Download Badges */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#efbc5c]/20 text-[#efbc5c] text-xs font-mono font-bold tracking-widest uppercase border border-[#efbc5c]/30">
                <Smartphone className="w-3.5 h-3.5" /> ỨNG DỤNG NGOẠI TUYẾN DÀNH CHO TREKKER
              </div>

              <h2 className="font-headline text-2xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                Ghi lại mọi khoảnh khắc — <span className="text-[#efbc5c] font-serif italic normal-case whitespace-normal sm:whitespace-nowrap">SolarBag App</span>
              </h2>

              <p className="text-xs sm:text-sm text-[#d2ded0] leading-relaxed max-w-xl">
                Bản đồ địa hình 3D Mapbox Outdoors hoạt động hoàn toàn ngoại tuyến không cần sóng 4G. Theo dõi công suất sạc watt (+4.2W) theo thời gian thực từ tấm pin mặt trời và đồng bộ hành trình trực tiếp qua chip NFC trên quai gùi.
              </p>

              {/* 3 Core Highlights matching user app screen */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2">
                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 space-y-1.5 hover:border-[#efbc5c]/50 transition-colors">
                  <div className="text-[#efbc5c] font-headline font-bold text-xs flex items-center gap-1.5">
                    <Navigation className="w-3.5 h-3.5" /> Mapbox Outdoors
                  </div>
                  <p className="text-[11px] text-[#a3b899] leading-relaxed">
                    Đường đồng mức độ cao (Contour lines), định vị GPS ngoại tuyến 50+ đỉnh núi không cần internet.
                  </p>
                </div>

                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 space-y-1.5 hover:border-[#efbc5c]/50 transition-colors">
                  <div className="text-[#efbc5c] font-headline font-bold text-xs flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5" /> Telemetry Sạc Pin
                  </div>
                  <p className="text-[11px] text-[#a3b899] leading-relaxed">
                    Giám sát dòng sạc Watt (+4.2W), tỷ lệ pin và ước tính Wh nạp được trên từng chặng leo núi.
                  </p>
                </div>

                <div className="p-3.5 bg-white/5 rounded-xl border border-white/10 space-y-1.5 hover:border-[#efbc5c]/50 transition-colors">
                  <div className="text-[#efbc5c] font-headline font-bold text-xs flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" /> Cảnh Báo Địa Hình
                  </div>
                  <p className="text-[11px] text-[#a3b899] leading-relaxed">
                    Cảnh báo điểm sạt lở (Landslide), trơn trượt (Slippery) và phát tín hiệu đèn LED SOS khẩn cấp.
                  </p>
                </div>
              </div>

              {/* Download Row: QR Code + Store Buttons */}
              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center gap-6">
                <div 
                  onClick={() => setActiveModal('app-download')}
                  className="flex items-center gap-3 bg-white/10 p-2.5 rounded-2xl border border-white/15 cursor-pointer hover:bg-white/15 transition-all"
                  title="Bấm để xem mã QR phóng to"
                >
                  <div className="w-16 h-16 bg-white rounded-xl p-1.5 flex items-center justify-center">
                    <QrCode className="w-full h-full text-[#041d15]" />
                  </div>
                  <div className="text-left space-y-0.5">
                    <div className="text-[11px] font-mono font-bold text-[#efbc5c]">QUÉT ĐỂ TẢI APP</div>
                    <div className="text-[10px] text-[#d2ded0]">SolarBag App iOS & Android</div>
                    <div className="text-[9px] text-[#7c8663] font-mono">Phiên bản v1.2 Beta 2026</div>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => setActiveModal('app-download')}
                    className="px-4 py-2 bg-white text-[#041d15] hover:bg-gray-100 rounded-xl text-xs font-headline font-bold transition-all shadow flex items-center gap-2 cursor-pointer"
                  >
                    <span>🍏</span> Tải trên App Store
                  </button>
                  <button 
                    onClick={() => setActiveModal('app-download')}
                    className="px-4 py-2 bg-white/15 hover:bg-white/25 text-white rounded-xl text-xs font-headline font-bold transition-all border border-white/20 flex items-center gap-2 cursor-pointer"
                  >
                    <span>▶️</span> Tải trên Google Play
                  </button>
                </div>
              </div>

            </div>

            {/* Right Column: Real Smartphone Frame Displaying User's Actual App Screenshot */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[310px] group">
                
                {/* Glow behind phone */}
                <div className="absolute -inset-2 bg-gradient-to-r from-[#efbc5c]/20 to-[#5E7A45]/30 rounded-[50px] blur-xl opacity-75 group-hover:opacity-100 transition duration-700" />

                {/* Phone Outer Chassis */}
                <div className="relative bg-[#1a201c] rounded-[48px] p-2.5 shadow-2xl border-4 border-[#2d3830] ring-1 ring-white/10">
                  
                  {/* Phone Screen Container with Aspect Ratio */}
                  <div className="relative rounded-[38px] overflow-hidden bg-black border border-white/10 shadow-inner">
                    
                    {/* The User's Real App Screen Image */}
                    <img 
                      src="/assets/project/solarbag_app_screen.jpg" 
                      alt="SolarBag App Interface" 
                      className="w-full h-auto block select-none"
                    />

                    {/* Subtle Glass Sheen Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
                  </div>

                  {/* Bottom Speaker/Home Bar Accent */}
                  <div className="w-24 h-1 bg-white/30 rounded-full mx-auto mt-2" />
                </div>

                {/* Floating Telemetry Pill */}
                <div className="absolute -bottom-4 -left-4 bg-[#041d15] border border-[#efbc5c]/40 text-white px-3.5 py-1.5 rounded-full shadow-xl flex items-center gap-2 text-[11px] font-mono">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span className="text-[#efbc5c] font-bold">SolarBag Pro: +4.2W</span>
                </div>

                <div className="absolute -top-3 -right-3 bg-[#041d15] border border-white/20 text-white px-3 py-1 rounded-full shadow-lg text-[10px] font-mono text-emerald-400">
                  ✓ Offline 100%
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* =========================================================================
          MODAL 1: TRAIL DETAIL MODAL (Opens when clicking any trail card)
      ========================================================================= */}
      {selectedTrail && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div 
            className="relative w-full max-w-3xl bg-[#faf8f2] rounded-3xl overflow-hidden shadow-2xl border border-[#e2ded4] max-h-[90vh] flex flex-col text-[#041d15]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar with Image */}
            <div className="relative h-64 sm:h-72 w-full bg-[#041d15] shrink-0 overflow-hidden">
              <img 
                src={selectedTrail.coverImage} 
                alt={selectedTrail.title} 
                className="w-full h-full object-cover opacity-85"
                onError={(e) => {
                  e.target.src = '/assets/images/6de495ed65dbb40e4b88642bad776e96c19a1cd7.png';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#041d15] via-[#041d15]/40 to-black/50" />
              
              {/* Close Button */}
              <button
                onClick={() => setSelectedTrail(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 hover:bg-black/80 text-white flex items-center justify-center transition-colors z-20 cursor-pointer"
                title="Đóng (Esc)"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Title & Badge */}
              <div className="absolute bottom-4 left-6 right-6 z-10 space-y-1 text-white">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#efbc5c] text-[#041d15] text-[10px] font-mono font-bold uppercase">
                    {selectedTrail.altitude}
                  </span>
                  <span className="text-xs font-mono text-[#d2ded0]">
                    {selectedTrail.region}
                  </span>
                </div>
                <h3 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight">
                  {selectedTrail.title}
                </h3>
              </div>
            </div>

            {/* Modal Scrollable Content */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* 4 Stats Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3 bg-white rounded-xl border border-[#e2ded4] space-y-0.5">
                  <div className="text-[11px] text-[#7c8663] font-mono flex items-center gap-1">
                    <Mountain className="w-3.5 h-3.5 text-[#5E7A45]" /> ĐỘ CAO
                  </div>
                  <div className="font-headline text-sm font-bold text-[#041d15]">{selectedTrail.altitude}</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#e2ded4] space-y-0.5">
                  <div className="text-[11px] text-[#7c8663] font-mono flex items-center gap-1">
                    <Compass className="w-3.5 h-3.5 text-[#5E7A45]" /> QUÃNG ĐƯỜNG
                  </div>
                  <div className="font-headline text-sm font-bold text-[#041d15]">{selectedTrail.distance}</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#e2ded4] space-y-0.5">
                  <div className="text-[11px] text-[#7c8663] font-mono flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#5E7A45]" /> THỜI GIAN
                  </div>
                  <div className="font-headline text-sm font-bold text-[#041d15]">{selectedTrail.duration}</div>
                </div>

                <div className="p-3 bg-white rounded-xl border border-[#e2ded4] space-y-0.5">
                  <div className="text-[11px] text-[#7c8663] font-mono flex items-center gap-1">
                    <Sun className="w-3.5 h-3.5 text-amber-500" /> ĐÓN NẮNG
                  </div>
                  <div className="font-headline text-sm font-bold text-amber-600">{selectedTrail.sunExposure}</div>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono font-bold text-[#7c8663] uppercase tracking-wider">
                  Mô Tả & Trải Nghiệm Tuyến Đi
                </h4>
                <p className="text-sm text-[#3b4739] leading-relaxed">
                  {selectedTrail.description}
                </p>
              </div>

              {/* Solar Telemetry Box */}
              <div className="bg-[#041d15] text-[#f5f5e9] p-5 rounded-2xl border border-[#1b3d2c] space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-2">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#efbc5c]" />
                    <span className="font-headline font-bold text-sm text-[#efbc5c]">
                      Đánh Giá Năng Lượng Mặt Trời (Solar Rating)
                    </span>
                  </div>
                  <span className="text-xs font-mono text-emerald-400">Hiệu quả cao</span>
                </div>
                
                <p className="text-xs text-[#d2ded0]">
                  <strong>Độ đón nắng:</strong> {selectedTrail.solarRating || 'Tuyệt vời, tối ưu cho tấm pin 15W - 20W của GuiNang Trail.'}
                </p>
                {selectedTrail.solarHarvestWh && (
                  <p className="text-xs text-[#efbc5c] font-mono">
                    ⚡ <strong>Ước tính thu nạp:</strong> {selectedTrail.solarHarvestWh}
                  </p>
                )}
              </div>

              {/* Stops / Milestones */}
              {selectedTrail.stops && selectedTrail.stops.length > 0 && (
                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold text-[#7c8663] uppercase tracking-wider">
                    Các Điểm Trạm & Mốc Tọa Độ Chính
                  </h4>
                  <div className="space-y-2">
                    {selectedTrail.stops.map((stop, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-white rounded-xl border border-[#e2ded4]">
                        <span className="w-6 h-6 rounded-full bg-[#efbc5c]/20 text-[#041d15] font-mono text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                          {idx + 1}
                        </span>
                        <div className="flex-1 text-xs">
                          <div className="font-headline font-bold text-[#041d15] flex items-center justify-between">
                            <span>{stop.name}</span>
                            <span className="font-mono text-[#7c8663]">{stop.alt}</span>
                          </div>
                          <p className="text-[#556353] mt-0.5">{stop.note}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Packing Checklist */}
              {selectedTrail.packingGuide && (
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold text-[#7c8663] uppercase tracking-wider">
                    Đồ Nghề Khuyên Dùng Cùng Balo SolarBag Trail
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedTrail.packingGuide.map((item, idx) => (
                      <span key={idx} className="px-3 py-1 bg-white rounded-full text-xs font-sans text-[#041d15] border border-[#e2ded4] flex items-center gap-1.5 shadow-sm">
                        <Check className="w-3.5 h-3.5 text-[#5E7A45]" /> {item}
                      </span>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Modal Bottom Actions */}
            <div className="p-4 sm:p-6 bg-white border-t border-[#e2ded4] shrink-0 flex flex-wrap items-center justify-between gap-3">
              <button
                onClick={() => toggleFavorite(selectedTrail.id)}
                className="px-4 py-2.5 rounded-xl border border-[#e2ded4] hover:bg-gray-50 text-xs font-headline font-bold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <Heart className={`w-4 h-4 ${favorites.includes(selectedTrail.id) ? 'fill-red-500 text-red-500' : 'text-gray-500'}`} />
                <span>{favorites.includes(selectedTrail.id) ? 'Đã lưu' : 'Lưu cung đường'}</span>
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => showToast(`Đã xuất file GPS ${selectedTrail.id}.gpx thành công!`)}
                  className="px-4 py-2.5 rounded-xl bg-[#faf8f2] hover:bg-[#f0ede6] text-[#041d15] border border-[#e2ded4] text-xs font-headline font-bold flex items-center gap-2 transition-colors cursor-pointer"
                >
                  <Download className="w-3.5 h-3.5" /> Tải File GPX
                </button>

                <button
                  onClick={() => {
                    setSelectedTrail(null);
                    setActiveModal('app-download');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#efbc5c] hover:bg-[#f6d288] text-[#041d15] text-xs font-headline font-bold transition-colors shadow-md flex items-center gap-2 cursor-pointer"
                >
                  <Smartphone className="w-3.5 h-3.5" /> Mở trên SolarBag App
                </button>
              </div>
            </div>

          </div>
        </div>
      )}


      {/* =========================================================================
          MODAL 2: TRIP PLANNER MODAL ("Create a trip")
      ========================================================================= */}
      {activeModal === 'trip-planner' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div 
            className="relative w-full max-w-2xl bg-[#faf8f2] rounded-3xl overflow-hidden shadow-2xl border border-[#e2ded4] max-h-[90vh] flex flex-col text-[#041d15]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 bg-[#041d15] text-[#f5f5e9] flex items-center justify-between border-b border-[#1b3d2c]">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#efbc5c] text-xs font-mono font-bold uppercase">
                  <Sparkles className="w-3.5 h-3.5" /> LẬP KẾ HOẠCH HÀNH TRÌNH TỰ ĐỘNG
                </div>
                <h3 className="font-headline text-2xl font-bold text-white">Create a Trip (Tạo Chuyến Đi)</h3>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <p className="text-xs text-[#556353]">
                Chọn điểm đến và thời gian dự kiến. Hệ thống SolarBag sẽ tính toán mức năng lượng cần thiết, đồ dùng chuẩn bị và điều kiện đón nắng lý tưởng.
              </p>

              <div className="space-y-3">
                <label className="text-xs font-mono font-bold text-[#7c8663] uppercase">
                  1. Chọn Cung Đường Muốn Chinh Phục:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {TRAILS.map((t) => (
                    <button
                      key={t.id}
                      onClick={() => {
                        setActiveModal(null);
                        setSelectedTrail(t);
                      }}
                      className="p-3.5 bg-white rounded-xl border border-[#e2ded4] hover:border-[#efbc5c] hover:shadow-md text-left transition-all space-y-1 group cursor-pointer"
                    >
                      <div className="font-headline font-bold text-xs text-[#041d15] group-hover:text-[#5E7A45] line-clamp-1">
                        {t.title}
                      </div>
                      <div className="text-[11px] text-[#7c8663] flex items-center justify-between">
                        <span>{t.altitude}</span>
                        <span className="font-mono text-amber-600">{t.sunExposure.split('%')[0]}% Nắng</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-white rounded-2xl border border-[#e2ded4] space-y-3">
                <label className="text-xs font-mono font-bold text-[#7c8663] uppercase">
                  2. Đề Xuất Thiết Bị Tối Ưu Năng Lượng Mặt Trời:
                </label>
                <div className="space-y-2 text-xs text-[#3b4739]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5E7A45]" />
                    <span><strong>Balo SolarBag Trail 25L:</strong> Tấm pin 18–20Wp sạc liên tục khi di chuyển</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5E7A45]" />
                    <span><strong>Cụm đèn Solar Lamp COB 3W:</strong> Chiếu sáng lều ban đêm 6–8h</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#5E7A45]" />
                    <span><strong>SolarBag App:</strong> Lưu sẵn bản đồ ngoại tuyến 100% trước khi mất sóng</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white border-t border-[#e2ded4] flex justify-end gap-2">
              <button 
                onClick={() => setActiveModal(null)}
                className="px-4 py-2 rounded-xl text-xs font-headline font-bold hover:bg-gray-100 transition-colors cursor-pointer"
              >
                Đóng
              </button>
              <button
                onClick={() => {
                  showToast('Đã tạo lịch trình thành công! Đang đồng bộ vào SolarBag App...');
                  setActiveModal(null);
                }}
                className="px-5 py-2.5 rounded-xl bg-[#efbc5c] hover:bg-[#f6d288] text-[#041d15] text-xs font-headline font-bold transition-all shadow cursor-pointer"
              >
                Xác Nhận & Lưu Kế Hoạch
              </button>
            </div>
          </div>
        </div>
      )}


      {/* =========================================================================
          MODAL 3: ENERGY & DEVICE PLANNER ("Build custom route" - TỰ CUSTOM)
      ========================================================================= */}
      {activeModal === 'energy-planner' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div 
            className="relative w-full max-w-3xl bg-[#faf8f2] rounded-3xl overflow-hidden shadow-2xl border border-[#e2ded4] max-h-[92vh] flex flex-col text-[#041d15]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 bg-[#041d15] text-[#f5f5e9] flex items-center justify-between border-b border-[#1b3d2c]">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#efbc5c] text-xs font-mono font-bold uppercase">
                  <Zap className="w-3.5 h-3.5" /> BẢNG TÍNH NĂNG LƯỢNG TỰ CUSTOM
                </div>
                <h3 className="font-headline text-2xl font-bold text-white">Lập Kế Hoạch Năng Lượng Thiết Bị</h3>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              
              {/* Step 1: Chọn mẫu balo & Điều kiện thời tiết */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Backpack selection */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-[#7c8663] uppercase">
                    1. Mẫu Balo Của Bạn:
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setBackpackModel('trail')}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        backpackModel === 'trail'
                          ? 'bg-[#041d15] text-white border-[#041d15] shadow-md'
                          : 'bg-white text-[#041d15] border-[#e2ded4] hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-headline font-bold text-xs">GuiNang Trail</div>
                      <div className="text-[10px] text-[#efbc5c] font-mono mt-0.5">20W CIGS · 5000mAh</div>
                    </button>

                    <button
                      type="button"
                      onClick={() => setBackpackModel('edu')}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        backpackModel === 'edu'
                          ? 'bg-[#041d15] text-white border-[#041d15] shadow-md'
                          : 'bg-white text-[#041d15] border-[#e2ded4] hover:bg-gray-50'
                      }`}
                    >
                      <div className="font-headline font-bold text-xs">GuiNang Edu</div>
                      <div className="text-[10px] text-[#efbc5c] font-mono mt-0.5">10W Silicon · 2600mAh</div>
                    </button>
                  </div>
                </div>

                {/* Sun hours selection */}
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold text-[#7c8663] uppercase">
                    2. Điều Kiện Đón Nắng:
                  </label>
                  <div className="grid grid-cols-3 gap-1.5">
                    <button
                      type="button"
                      onClick={() => setSunHours(6)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer text-xs ${
                        sunHours === 6
                          ? 'bg-amber-500 text-white border-amber-600 font-bold shadow'
                          : 'bg-white text-[#041d15] border-[#e2ded4] hover:bg-gray-50'
                      }`}
                    >
                      ☀️ Nắng gắt (6h)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSunHours(4)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer text-xs ${
                        sunHours === 4
                          ? 'bg-amber-500 text-white border-amber-600 font-bold shadow'
                          : 'bg-white text-[#041d15] border-[#e2ded4] hover:bg-gray-50'
                      }`}
                    >
                      ⛅ Nắng vừa (4h)
                    </button>
                    <button
                      type="button"
                      onClick={() => setSunHours(2)}
                      className={`p-2.5 rounded-xl border text-center transition-all cursor-pointer text-xs ${
                        sunHours === 2
                          ? 'bg-amber-500 text-white border-amber-600 font-bold shadow'
                          : 'bg-white text-[#041d15] border-[#e2ded4] hover:bg-gray-50'
                      }`}
                    >
                      ☁️ Râm mây (2h)
                    </button>
                  </div>
                </div>

              </div>

              {/* Step 2: Custom Devices List */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-mono font-bold text-[#7c8663] uppercase">
                    3. Danh Sách Thiết Bị Mang Theo (Tự Do Tăng / Giảm / Thêm Mới):
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(!showAddForm)}
                    className="text-xs font-headline font-bold text-[#5E7A45] hover:text-[#041d15] flex items-center gap-1 cursor-pointer"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{showAddForm ? 'Đóng form thêm' : '+ Thêm thiết bị khác'}</span>
                  </button>
                </div>

                {/* Optional Add Device Form */}
                {showAddForm && (
                  <form onSubmit={handleAddCustomDevice} className="p-4 bg-white rounded-2xl border-2 border-dashed border-[#efbc5c] space-y-3 animate-fadeIn">
                    <div className="font-headline font-bold text-xs text-[#041d15]">
                      Thêm Thiết Bị Của Bạn Vào Bảng Tính:
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                      <input 
                        type="text" 
                        value={newDeviceName}
                        onChange={(e) => setNewDeviceName(e.target.value)}
                        placeholder="Tên thiết bị (vd: Máy bay Flycam, Loa bluetooth...)" 
                        className="sm:col-span-7 px-3 py-2 rounded-xl border border-[#e2ded4] text-xs outline-none focus:border-[#efbc5c]"
                      />
                      <input 
                        type="number" 
                        step="0.5"
                        min="0.5"
                        max="500"
                        value={newDeviceWh}
                        onChange={(e) => setNewDeviceWh(e.target.value)}
                        placeholder="Năng lượng (Wh)" 
                        className="sm:col-span-3 px-3 py-2 rounded-xl border border-[#e2ded4] text-xs outline-none focus:border-[#efbc5c]"
                      />
                      <button 
                        type="submit"
                        className="sm:col-span-2 px-3 py-2 bg-[#041d15] hover:bg-[#12362a] text-white rounded-xl text-xs font-headline font-bold cursor-pointer"
                      >
                        Thêm
                      </button>
                    </div>
                    <p className="text-[10px] text-[#7c8663] font-mono">
                      * Mẹo: Pin 3.000mAh ở điện áp 3.7V tương đương ~ 11.1 Wh (Wh = mAh x 3.7 / 1000).
                    </p>
                  </form>
                )}

                {/* Device Rows */}
                <div className="space-y-2.5">
                  {customDevices.map((device) => {
                    const rowWh = device.powerWh * device.count;
                    return (
                      <div 
                        key={device.id}
                        className="p-3.5 bg-white rounded-2xl border border-[#e2ded4] flex items-center justify-between gap-3 text-xs shadow-sm hover:border-[#5E7A45]/40 transition-colors"
                      >
                        <div className="flex-1 min-w-0">
                          <div className="font-headline font-bold text-[#041d15] truncate">
                            {device.name}
                          </div>
                          <div className="text-[11px] text-[#7c8663] font-mono">
                            {device.powerWh} Wh/máy · {device.note}
                          </div>
                        </div>

                        {/* Quantity Counter */}
                        <div className="flex items-center gap-2 shrink-0">
                          <button
                            type="button"
                            onClick={() => updateDeviceCount(device.id, -1)}
                            className="w-7 h-7 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 flex items-center justify-center font-bold cursor-pointer transition-colors"
                            title="Giảm số lượng"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          
                          <span className="w-6 text-center font-headline font-bold text-sm text-[#041d15]">
                            {device.count}
                          </span>

                          <button
                            type="button"
                            onClick={() => updateDeviceCount(device.id, 1)}
                            className="w-7 h-7 rounded-lg bg-[#041d15] hover:bg-[#12362a] text-white flex items-center justify-center font-bold cursor-pointer transition-colors"
                            title="Tăng số lượng"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Row Subtotal */}
                        <div className="w-16 text-right shrink-0 font-mono font-bold text-xs text-[#041d15]">
                          {rowWh.toFixed(1)} Wh
                        </div>

                        {/* Delete button */}
                        <button
                          type="button"
                          onClick={() => removeDevice(device.id)}
                          className="p-1.5 text-gray-400 hover:text-red-500 rounded-lg hover:bg-red-50 transition-colors cursor-pointer shrink-0"
                          title="Xóa thiết bị"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: LIVE CALCULATION DASHBOARD */}
              <div className="bg-[#041d15] text-[#f5f5e9] p-6 rounded-2xl border border-[#1b3d2c] space-y-5">
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-[#efbc5c]" />
                    <span className="font-headline font-bold text-sm text-[#efbc5c]">
                      Bảng Phân Tích Năng Lượng Thực Tế
                    </span>
                  </div>
                  
                  <span className={`px-3 py-1 rounded-full font-mono text-xs font-bold ${
                    isFullySufficient 
                      ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' 
                      : 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
                  }`}>
                    {isFullySufficient ? '✓ 100% Tự Chủ Năng Lượng' : `⚡ Đạt ${coveragePercent}% Nhu Cầu`}
                  </span>
                </div>

                {/* 3 Metric Columns */}
                <div className="grid grid-cols-3 gap-3 text-center">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-[11px] text-[#a3b899]">Nhu Cầu Tiêu Thụ</div>
                    <div className="font-headline text-lg sm:text-xl font-bold text-white mt-0.5">
                      {totalNeededWh.toFixed(1)} <span className="text-xs font-normal">Wh</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-[11px] text-[#a3b899]">Quang Điện Thu Nạp</div>
                    <div className="font-headline text-lg sm:text-xl font-bold text-[#efbc5c] mt-0.5">
                      +{solarHarvestWh} <span className="text-xs font-normal">Wh/ngày</span>
                    </div>
                  </div>

                  <div className="p-3 bg-white/5 rounded-xl border border-white/10">
                    <div className="text-[11px] text-[#a3b899]">Pin Lưu Sẵn Có</div>
                    <div className="font-headline text-lg sm:text-xl font-bold text-emerald-400 mt-0.5">
                      {internalBatteryWh} <span className="text-xs font-normal">Wh</span>
                    </div>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="space-y-1.5">
                  <div className="flex justify-between text-[11px] font-mono">
                    <span className="text-[#a3b899]">Khả năng đáp ứng điện năng:</span>
                    <span className="font-bold text-white">{totalAvailableWh} Wh / {totalNeededWh.toFixed(1)} Wh</span>
                  </div>
                  <div className="w-full h-2.5 bg-white/10 rounded-full overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-500 rounded-full ${
                        isFullySufficient ? 'bg-emerald-400' : 'bg-[#efbc5c]'
                      }`}
                      style={{ width: `${Math.min(100, coveragePercent)}%` }}
                    />
                  </div>
                </div>

                {/* Intelligent Guidance */}
                <p className="text-xs text-[#d2ded0] leading-relaxed pt-1">
                  {isFullySufficient ? (
                    <span>
                      🎉 <strong>Hoàn toàn tự chủ!</strong> Với {sunHours} giờ nắng, balo {backpackModel === 'trail' ? 'GuiNang Trail (20Wp)' : 'GuiNang Edu (10Wp)'} sẽ sản xuất đủ điện năng để duy trì mọi thiết bị của bạn mà không cần mang theo pin sạc dự phòng cồng kềnh.
                    </span>
                  ) : (
                    <span>
                      ⚠️ <strong>Gợi ý:</strong> Tổng nhu cầu ({totalNeededWh.toFixed(1)} Wh) vượt quá nguồn thu ({totalAvailableWh} Wh). Bạn nên ưu tiên sạc điện thoại và đèn pin trước vào khung giờ nắng đỉnh điểm (9h–14h).
                    </span>
                  )}
                </p>

              </div>

            </div>

            {/* Modal Bottom Actions */}
            <div className="p-4 bg-white border-t border-[#e2ded4] flex items-center justify-between gap-3">
              <button
                type="button"
                onClick={resetDevices}
                className="px-4 py-2 rounded-xl text-xs font-headline font-bold text-[#7c8663] hover:text-[#041d15] hover:bg-gray-100 flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Khôi phục mặc định</span>
              </button>

              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setActiveModal(null)}
                  className="px-4 py-2 rounded-xl text-xs font-headline font-bold text-gray-600 hover:bg-gray-100 cursor-pointer"
                >
                  Đóng
                </button>
                <button
                  onClick={() => {
                    showToast('Đã lưu cấu hình năng lượng tùy chỉnh vào hồ sơ SolarBag!');
                    setActiveModal(null);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-[#efbc5c] hover:bg-[#f6d288] text-[#041d15] text-xs font-headline font-bold transition-all shadow cursor-pointer"
                >
                  Lưu & Áp Dụng Cấu Hình
                </button>
              </div>
            </div>

          </div>
        </div>
      )}


      {/* =========================================================================
          MODAL 4: ALL TRAILS MODAL ("Khám phá tất cả các cung đường")
      ========================================================================= */}
      {activeModal === 'all-trails' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div 
            className="relative w-full max-w-4xl bg-[#faf8f2] rounded-3xl overflow-hidden shadow-2xl border border-[#e2ded4] max-h-[92vh] flex flex-col text-[#041d15]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 bg-[#041d15] text-[#f5f5e9] flex items-center justify-between border-b border-[#1b3d2c]">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#efbc5c] text-xs font-mono font-bold uppercase">
                  <Mountain className="w-3.5 h-3.5" /> THƯ VIỆN ĐỊA HÌNH VIỆT NAM
                </div>
                <h3 className="font-headline text-2xl font-bold text-white">Tất Cả Cung Đường Trekking Đón Nắng</h3>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
              <p className="text-xs text-[#556353]">
                Tuyển chọn những cung đường phù hợp nhất cho trải nghiệm sạc năng lượng mặt trời di động cùng SolarBag. Bấm vào cung đường bất kỳ để xem chi tiết ngay lập tức.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {TRAILS.map((t) => {
                  const isFav = favorites.includes(t.id);
                  return (
                    <div
                      key={t.id}
                      onClick={() => {
                        setActiveModal(null);
                        setSelectedTrail(t);
                      }}
                      className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm hover:shadow-lg transition-all group cursor-pointer text-left flex flex-col justify-between"
                    >
                      <div className="relative aspect-[16/10] bg-[#f4f0e6] overflow-hidden">
                        <img 
                          src={t.coverImage} 
                          alt={t.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            e.target.src = '/assets/images/6de495ed65dbb40e4b88642bad776e96c19a1cd7.png';
                          }}
                        />
                        <button
                          onClick={(e) => toggleFavorite(t.id, e)}
                          className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white/90 hover:bg-white text-[#041d15] flex items-center justify-center transition-all shadow z-10 cursor-pointer"
                        >
                          <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-red-500 text-red-500' : 'text-gray-700'}`} />
                        </button>
                        <div className="absolute bottom-2 left-2 px-2 py-0.5 rounded bg-[#041d15]/85 text-[#efbc5c] font-mono text-[10px] font-bold">
                          {t.altitude}
                        </div>
                      </div>

                      <div className="p-3.5 space-y-1.5">
                        <h4 className="font-headline font-bold text-sm text-[#041d15] group-hover:text-[#5E7A45] line-clamp-1">
                          {t.title}
                        </h4>
                        <p className="text-[11px] text-[#7c8663] line-clamp-1">{t.region}</p>
                        <div className="pt-2 border-t border-gray-100 flex items-center justify-between text-[11px] text-[#556353]">
                          <span className="text-amber-500 font-bold">★ 4.8</span>
                          <span className="font-mono">{t.distance.split(' ')[0]} {t.distance.split(' ')[1] || 'km'}</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="p-4 bg-white border-t border-[#e2ded4] flex justify-end">
              <button 
                onClick={() => setActiveModal(null)}
                className="px-5 py-2.5 rounded-xl bg-[#041d15] hover:bg-[#12362a] text-white text-xs font-headline font-bold transition-all shadow cursor-pointer"
              >
                Đóng
              </button>
            </div>
          </div>
        </div>
      )}


      {/* =========================================================================
          MODAL 5: APP DOWNLOAD MODAL ("Tải SolarBag App")
      ========================================================================= */}
      {activeModal === 'app-download' && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-sm animate-fadeIn">
          <div 
            className="relative w-full max-w-md bg-[#faf8f2] rounded-3xl overflow-hidden shadow-2xl border border-[#e2ded4] flex flex-col text-[#041d15]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-6 bg-[#041d15] text-[#f5f5e9] flex items-center justify-between border-b border-[#1b3d2c]">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-[#efbc5c] text-xs font-mono font-bold uppercase">
                  <Smartphone className="w-3.5 h-3.5" /> DI ĐỘNG NGOẠI TUYẾN
                </div>
                <h3 className="font-headline text-xl font-bold text-white">Tải Ứng Dụng SolarBag App</h3>
              </div>
              <button 
                onClick={() => setActiveModal(null)}
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-6 text-center space-y-5">
              <div className="w-44 h-44 mx-auto bg-white p-3 rounded-2xl border border-[#e2ded4] shadow-md flex items-center justify-center">
                <QrCode className="w-full h-full text-[#041d15]" />
              </div>

              <div className="space-y-1">
                <div className="font-headline font-bold text-base text-[#041d15]">
                  Quét Mã Để Cài Đặt SolarBag App
                </div>
                <p className="text-xs text-[#556353]">
                  Hỗ trợ cả iOS 16+ và Android 12+. Kết nối trực tiếp chip NFC trên quai đeo balo.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-2.5 pt-2">
                <button
                  onClick={() => showToast('Đang mở liên kết cài đặt trên Apple App Store...')}
                  className="py-2.5 px-3 bg-[#041d15] hover:bg-[#12362a] text-white rounded-xl text-xs font-headline font-bold flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
                >
                  <span>🍏</span> App Store
                </button>
                <button
                  onClick={() => showToast('Đang mở liên kết cài đặt trên Google Play Store...')}
                  className="py-2.5 px-3 bg-white hover:bg-gray-50 text-[#041d15] border border-[#e2ded4] rounded-xl text-xs font-headline font-bold flex items-center justify-center gap-1.5 transition-colors shadow-sm cursor-pointer"
                >
                  <span>▶️</span> Google Play
                </button>
              </div>
            </div>

            <div className="p-3 bg-white border-t border-[#e2ded4] text-center">
              <button 
                onClick={() => setActiveModal(null)}
                className="text-xs font-headline font-bold text-[#7c8663] hover:text-[#041d15] cursor-pointer"
              >
                Đóng cửa sổ
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
