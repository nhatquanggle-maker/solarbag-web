import React, { useState } from 'react';
import { TRAILS } from '../data/mockData';
import { CheckSquare, Square, BatteryCharging, Sun, Compass, Download, Printer, CheckCircle2, Sparkles } from 'lucide-react';

export default function PlannerPage() {
  const [destination, setDestination] = useState('lao-than');
  const [days, setDays] = useState(2);
  const [members, setMembers] = useState(2);

  // Device counts
  const [phones, setPhones] = useState(2);
  const [gps, setGps] = useState(1);
  const [cameras, setCameras] = useState(1);
  const [lights, setLights] = useState(2);

  // Checklist items
  const [checklist, setChecklist] = useState({
    solarbag: true,
    cable: true,
    water: true,
    firstAid: false,
    jacket: true,
    shoes: true,
    raincoat: false,
    snacks: true,
    gpxDownloaded: true,
    idCard: true,
  });

  const toggleCheck = (key) => {
    setChecklist(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Estimate energy needed: phone = 4000mAh, gps = 3000mAh, camera = 2000mAh, light = 1200mAh
  const totalEnergyNeed = (phones * 4000 + gps * 3000 + cameras * 2000 + lights * 1200) * (days > 1 ? (days - 0.5) : 1);
  const solarBagProCapacity = 10000;
  const solarGenPerDay = 5000; // estimated CIGS generation per sunny day
  const netDeficit = Math.max(0, totalEnergyNeed - (solarBagProCapacity + solarGenPerDay * (days - 1)));

  const completedChecks = Object.values(checklist).filter(Boolean).length;
  const totalChecks = Object.keys(checklist).length;

  return (
    <div className="space-y-20 pb-20">
      
      {/* 1. Header Hero */}
      <section className="bg-[#041d15] text-[#f5f5e9] py-16 border-b border-[#124636]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-[#efbc5c] uppercase">
            ĐI XA BẮT ĐẦU TỪ CHUẨN BỊ
          </span>
          <h1 className="font-headline text-4xl sm:text-6xl font-bold text-white tracking-tight uppercase">
            Lên kế hoạch cho cả cảnh đẹp <br />
            <span className="text-[#efbc5c] font-serif italic normal-case">& điều bất ngờ.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#d2ded0] max-w-xl mx-auto">
            Hành trình mẫu ba bước: chọn điểm đến, tính toán nhu cầu năng lượng và hoàn tất danh mục trang bị trước giờ xuất phát.
          </p>
        </div>
      </section>

      {/* 2. Interactive Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Step 1: Destination & Group */}
        <section className="bg-white p-8 rounded-3xl border border-[#e2ded4] shadow-sm space-y-6">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#041d15] text-[#efbc5c] font-mono text-xs font-bold flex items-center justify-center">
              01
            </span>
            <h2 className="font-headline text-2xl font-bold text-[#041d15]">
              Bạn sẽ đi đâu, với ai?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="space-y-1">
              <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">
                Điểm đến trekking
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full p-3 rounded-xl border border-[#e2ded4] text-xs font-semibold text-[#041d15] bg-[#fcfbf7] outline-none"
              >
                <option value="lao-than">Lảo Thẩn (2.860m) · Lào Cai</option>
                <option value="ta-xua">Tà Xùa (2.865m) · Sơn La</option>
                <option value="fansipan">Fansipan (3.143m) · Sa Pa</option>
              </select>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">
                Thời gian hành trình
              </label>
              <div className="flex gap-2">
                {[1, 2, 3].map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setDays(d)}
                    className={`flex-1 py-2.5 rounded-lg border text-xs font-bold ${
                      days === d
                        ? 'bg-[#041d15] text-[#efbc5c] border-[#041d15]'
                        : 'bg-[#fcfbf7] border-[#e2ded4] text-[#4a5548]'
                    }`}
                  >
                    {d} Ngày
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-xs font-mono font-bold uppercase text-[#7c8663]">
                Số thành viên trong nhóm
              </label>
              <div className="flex gap-2">
                {[1, 2, 4, 6].map((m) => (
                  <button
                    key={m}
                    type="button"
                    onClick={() => setMembers(m)}
                    className={`flex-1 py-2.5 rounded-lg border text-xs font-bold ${
                      members === m
                        ? 'bg-[#041d15] text-[#efbc5c] border-[#041d15]'
                        : 'bg-[#fcfbf7] border-[#e2ded4] text-[#4a5548]'
                    }`}
                  >
                    {m} Người
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Step 2: Energy Calculator */}
        <section className="bg-white p-8 rounded-3xl border border-[#e2ded4] shadow-sm space-y-8">
          <div className="flex items-center gap-3">
            <span className="w-8 h-8 rounded-full bg-[#041d15] text-[#efbc5c] font-mono text-xs font-bold flex items-center justify-center">
              02
            </span>
            <h2 className="font-headline text-2xl font-bold text-[#041d15]">
              Đếm nhu cầu trước khi chọn nguồn sạc
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div className="p-4 bg-[#fcfbf7] rounded-xl border border-[#e2ded4] space-y-2 text-center">
              <span className="text-xs font-mono text-[#7c8663] block">Điện thoại di động</span>
              <div className="flex items-center justify-center gap-3">
                <button 
                  onClick={() => setPhones(Math.max(1, phones - 1))}
                  className="w-7 h-7 bg-white rounded border border-[#e2ded4] font-bold text-xs"
                >-</button>
                <span className="font-bold text-lg text-[#041d15]">{phones}</span>
                <button 
                  onClick={() => setPhones(phones + 1)}
                  className="w-7 h-7 bg-white rounded border border-[#e2ded4] font-bold text-xs"
                >+</button>
              </div>
              <p className="text-[10px] text-[#a0ac9d]">4.000 mAh/máy</p>
            </div>

            <div className="p-4 bg-[#fcfbf7] rounded-xl border border-[#e2ded4] space-y-2 text-center">
              <span className="text-xs font-mono text-[#7c8663] block">Thiết bị GPS</span>
              <div className="flex items-center justify-center gap-3">
                <button 
                  onClick={() => setGps(Math.max(0, gps - 1))}
                  className="w-7 h-7 bg-white rounded border border-[#e2ded4] font-bold text-xs"
                >-</button>
                <span className="font-bold text-lg text-[#041d15]">{gps}</span>
                <button 
                  onClick={() => setGps(gps + 1)}
                  className="w-7 h-7 bg-white rounded border border-[#e2ded4] font-bold text-xs"
                >+</button>
              </div>
              <p className="text-[10px] text-[#a0ac9d]">3.000 mAh/máy</p>
            </div>

            <div className="p-4 bg-[#fcfbf7] rounded-xl border border-[#e2ded4] space-y-2 text-center">
              <span className="text-xs font-mono text-[#7c8663] block">Máy ảnh / Flycam</span>
              <div className="flex items-center justify-center gap-3">
                <button 
                  onClick={() => setCameras(Math.max(0, cameras - 1))}
                  className="w-7 h-7 bg-white rounded border border-[#e2ded4] font-bold text-xs"
                >-</button>
                <span className="font-bold text-lg text-[#041d15]">{cameras}</span>
                <button 
                  onClick={() => setCameras(cameras + 1)}
                  className="w-7 h-7 bg-white rounded border border-[#e2ded4] font-bold text-xs"
                >+</button>
              </div>
              <p className="text-[10px] text-[#a0ac9d]">2.000 mAh/pin</p>
            </div>

            <div className="p-4 bg-[#fcfbf7] rounded-xl border border-[#e2ded4] space-y-2 text-center">
              <span className="text-xs font-mono text-[#7c8663] block">Đèn pin / Đèn lều</span>
              <div className="flex items-center justify-center gap-3">
                <button 
                  onClick={() => setLights(Math.max(1, lights - 1))}
                  className="w-7 h-7 bg-white rounded border border-[#e2ded4] font-bold text-xs"
                >-</button>
                <span className="font-bold text-lg text-[#041d15]">{lights}</span>
                <button 
                  onClick={() => setLights(lights + 1)}
                  className="w-7 h-7 bg-white rounded border border-[#e2ded4] font-bold text-xs"
                >+</button>
              </div>
              <p className="text-[10px] text-[#a0ac9d]">1.200 mAh/đèn</p>
            </div>
          </div>

          {/* Result Calculation Banner */}
          <div className="p-6 rounded-2xl bg-[#041d15] text-[#f5f5e9] flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#efbc5c] uppercase">TÍNH TOÁN NHU CẦU NĂNG LƯỢNG:</span>
              <p className="font-headline text-2xl font-bold text-white">
                Tổng nhu cầu: {Math.round(totalEnergyNeed).toLocaleString('vi-VN')} mAh
              </p>
              <p className="text-xs text-[#d2ded0]">
                Ước tính SolarBag Pro (10.000 mAh) + Tấm CIGS nạp ban ngày ({Math.round(solarGenPerDay * (days - 1)).toLocaleString('vi-VN')} mAh) = Đủ đáp ứng 95% năng lượng.
              </p>
            </div>
            <div className="shrink-0 text-right">
              <span className="px-4 py-2 rounded-full bg-[#efbc5c] text-[#041d15] font-headline font-bold text-xs">
                Khuyên dùng: SolarBag Pro 10.000 mAh
              </span>
            </div>
          </div>
        </section>

        {/* Step 3: Outdoor Checklist */}
        <section className="bg-white p-8 rounded-3xl border border-[#e2ded4] shadow-sm space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-[#041d15] text-[#efbc5c] font-mono text-xs font-bold flex items-center justify-center">
                03
              </span>
              <div>
                <h2 className="font-headline text-2xl font-bold text-[#041d15]">
                  Kiểm tra lại. Chia sẻ. Sẵn sàng lên đường.
                </h2>
                <p className="text-xs text-[#7c8663]">
                  Đã hoàn thành {completedChecks}/{totalChecks} hạng mục thiết yếu
                </p>
              </div>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 border border-[#e2ded4] hover:bg-[#f4f0e6] rounded-lg text-xs font-mono text-[#041d15] flex items-center gap-1.5 font-bold"
              >
                <Printer className="w-4 h-4" /> In Checklist
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { key: 'solarbag', label: 'Balo SolarBag Pro (đã sạc sẵn pin tại nhà)' },
              { key: 'cable', label: 'Dây cáp sạc nhanh Type-C to Type-C & Lightning' },
              { key: 'water', label: 'Bình giữ nhiệt chứa tối thiểu 1.5 - 2 Lít nước' },
              { key: 'firstAid', label: 'Túi sơ cứu: Băng gạc, salonpas, thuốc hạ sốt, đau bụng' },
              { key: 'jacket', label: 'Áo khoác gió cản nhiệt (đêm trên đỉnh hạ nhiệt nhanh)' },
              { key: 'shoes', label: 'Giày trekking có gai bám chống trơn trượt' },
              { key: 'raincoat', label: 'Áo mưa bộ tiện lợi & bọc balo chống nước' },
              { key: 'snacks', label: 'Lương khô, chocolate, thanh năng lượng bổ sung đường' },
              { key: 'gpxDownloaded', label: 'Tải trước bản đồ GPX ngoại tuyến vào điện thoại' },
              { key: 'idCard', label: 'CCCD / Giấy tờ tùy thân để khai báo lưu trú bản' },
            ].map((item) => (
              <div
                key={item.key}
                onClick={() => toggleCheck(item.key)}
                className={`p-4 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                  checklist[item.key]
                    ? 'bg-[#f4f8f4] border-emerald-300 text-[#041d15]'
                    : 'bg-[#fcfbf7] border-[#e2ded4] text-[#6c776b]'
                }`}
              >
                {checklist[item.key] ? (
                  <CheckSquare className="w-5 h-5 text-emerald-700 shrink-0" />
                ) : (
                  <Square className="w-5 h-5 text-[#a0ac9d] shrink-0" />
                )}
                <span className="text-xs font-medium">{item.label}</span>
              </div>
            ))}
          </div>

          {completedChecks === totalChecks && (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center text-xs text-emerald-800 font-semibold flex items-center justify-center gap-2">
              <Sparkles className="w-4 h-4 text-emerald-600" />
              Tuyệt vời! Hành trang của bạn đã sẵn sàng 100% để bước vào thiên nhiên.
            </div>
          )}
        </section>

      </div>

    </div>
  );
}

