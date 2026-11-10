import React, { useState, useEffect, useRef } from 'react';

const DIRECTIONS = [
  'up-left', 'up', 'up-right',
  'left', 'center', 'right',
  'down-left', 'down', 'down-right'
];

const REACTIONS = [
  'blink', 'heart', 'sparkle',
  'surprised', 'wink', 'bashful',
  'sleepy', 'dizzy', 'delighted'
];

const CLOCKWISE = [
  'right', 'down-right', 'down', 'down-left',
  'left', 'up-left', 'up', 'up-right'
];

const SECTOR = (Math.PI * 2) / CLOCKWISE.length;
const HYSTERESIS = 0.12;
const DEAD_ZONE = 70;
const PAYOFFS = ['heart', 'sparkle', 'delighted'];

const SQUASH_KEYFRAMES = [
  { transform: 'scale(1, 1)', easing: 'ease-in' },
  { transform: 'scale(1.10, 0.86)', offset: 0.18, easing: 'ease-out' },
  { transform: 'scale(0.95, 1.08)', offset: 0.45, easing: 'ease-in-out' },
  { transform: 'scale(1.03, 0.97)', offset: 0.72, easing: 'ease-in-out' },
  { transform: 'scale(1, 1)' }
];

const DEFAULT_QUOTES = [
  "Nắng theo chân, sáng muôn miền! ☀️",
  "Tớ là Voọc — người bạn đồng hành của GuiNang trên mọi cung đường! 🐒🎒",
  "Balo GuiNang Trail đã tích đầy pin 18650 xanh rồi nhé! 🔋",
  "Cùng chung tay mang ánh sáng học đường GuiNang Edu đến vùng cao nào! 💡",
  "Chạm NFC để kích hoạt Hộ chiếu sản phẩm số (Product Passport) nha! 📲",
  "Bạn vừa gõ tớ đấy à? Voọc thích leo núi Sơn Trà lắm đó! ❤️",
  "Đường trekking hôm nay thoáng nắng tuyệt vời! 🏔️"
];

export default function SolarTrekMascot({
  directions = '/mascots/solartrek-directions.webp?v=2',
  reactions = '/mascots/solartrek-reactions.webp?v=2',
  size = 120,
  quotes = DEFAULT_QUOTES,
  enableSound = true
}) {
  const btnRef = useRef(null);
  const squashRef = useRef(null);
  const timersRef = useRef([]);
  const boopsRef = useRef({ count: 0, at: 0 });

  const [direction, setDirection] = useState('center');
  const [reaction, setReaction] = useState(null);
  const [currentQuote, setCurrentQuote] = useState(quotes[0]);
  const [showSpeech, setShowSpeech] = useState(true);
  const [isMinimized, setIsMinimized] = useState(false);

  const audioCtxRef = useRef(null);

  // Cached Web Audio API - Phản hồi âm thanh tức thì 0ms không độ trễ
  const playBoop = (freq = 480) => {
    if (!enableSound || typeof window === 'undefined') return;
    try {
      if (!audioCtxRef.current) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        audioCtxRef.current = new AudioCtx();
      }
      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freq * 1.4, ctx.currentTime + 0.1);
      gain.gain.setValueAtTime(0.22, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.1);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.1);
    } catch {}
  };

  useEffect(() => {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    let sector = -1;
    let pointer = null;

    const aim = () => {
      const btn = btnRef.current;
      if (!btn || !pointer) return;
      const box = btn.getBoundingClientRect();
      const dx = pointer.x - (box.left + box.width / 2);
      const dy = pointer.y - (box.top + box.height / 2);

      if (Math.hypot(dx, dy) < DEAD_ZONE) {
        sector = -1;
        setDirection('center');
        return;
      }

      const angle = Math.atan2(dy, dx);
      const wrap = (a) => Math.atan2(Math.sin(a), Math.cos(a));
      if (sector !== -1 && Math.abs(wrap(angle - sector * SECTOR)) < SECTOR / 2 + HYSTERESIS) {
        return;
      }

      sector = (Math.round(angle / SECTOR) + CLOCKWISE.length) % CLOCKWISE.length;
      setDirection(CLOCKWISE[sector]);
    };

    const onPointerMove = (e) => {
      pointer = { x: e.clientX, y: e.clientY };
      aim();
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', aim, { passive: true });

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', aim);
    };
  }, []);

  const handleBoop = (e) => {
    // Ngăn chặn nổi bọt sự kiện
    if (e && e.stopPropagation) e.stopPropagation();

    timersRef.current.forEach(window.clearTimeout);
    timersRef.current = [];

    const now = Date.now();
    const boops = boopsRef.current;
    boops.count = now - boops.at < 1600 ? boops.count + 1 : 1;
    boops.at = now;

    // Kích hoạt ngay lập tức 0ms - Không độ trễ
    if (boops.count >= 4) {
      boops.count = 0;
      setReaction('dizzy');
      setCurrentQuote('Ui da, chóng mặt quá đi mất! 😵');
      playBoop(280);
      timersRef.current.push(window.setTimeout(() => setReaction(null), 1100));
    } else {
      const targetReaction = PAYOFFS[(boops.count - 1) % PAYOFFS.length];
      setReaction(targetReaction);
      playBoop(520 + boops.count * 80);
      const nextQ = quotes[Math.floor(Math.random() * quotes.length)];
      setCurrentQuote(nextQ);
      setShowSpeech(true);
      timersRef.current.push(window.setTimeout(() => setReaction(null), 600));
    }

    // Hiệu ứng nhún nảy tức thì
    squashRef.current?.animate(SQUASH_KEYFRAMES, { duration: 380, easing: 'ease-out' });
  };

  const getCellPosition = (idx) => {
    const x = (idx % 3) * 50;
    const y = Math.floor(idx / 3) * 50;
    return `${x}% ${y}%`;
  };

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="fixed bottom-6 right-6 z-40 bg-[#041d15] text-[#efbc5c] border border-[#efbc5c]/40 px-3 py-2 rounded-full shadow-2xl flex items-center gap-2 hover:scale-105 transition-all text-xs font-bold"
        aria-label="Mở lại Mascot Voọc GuiNang"
      >
        <span>🐒</span>
        <span>Voọc Mascot · GuiNang</span>
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end select-none pointer-events-none">
      {/* Bong bóng thoại */}
      {showSpeech && (
        <div className="pointer-events-auto relative mb-3 max-w-[260px] bg-white border-2 border-[#f59e0b] text-[#374151] px-3.5 py-2 rounded-2xl text-[13px] font-semibold shadow-lg text-center leading-snug animate-pulse">
          {currentQuote}
          {/* Nút tắt bong bóng */}
          <button
            onClick={() => setShowSpeech(false)}
            className="absolute -top-2 -left-2 w-5 h-5 bg-gray-200 hover:bg-gray-300 text-gray-600 rounded-full flex items-center justify-center text-[10px] font-bold"
            title="Đóng bong bóng"
          >
            ✕
          </button>
          {/* Mũi nhọn căn chuẩn đỉnh đầu của mascot */}
          <div
            className="absolute -bottom-2 right-[52px] w-0 h-0 border-l-[7px] border-l-transparent border-r-[7px] border-r-transparent border-t-[8px] border-t-[#f59e0b]"
          />
        </div>
      )}

      {/* Container Mascot */}
      <div className="relative pointer-events-auto flex items-center">
        {/* Nút thu nhỏ mascot */}
        <button
          onClick={() => setIsMinimized(true)}
          className="absolute -top-1 -right-1 z-10 w-5 h-5 bg-[#041d15]/80 hover:bg-[#041d15] text-[#efbc5c] rounded-full flex items-center justify-center text-[10px] font-bold shadow-md transition-transform hover:scale-110"
          title="Thu gọn Mascot"
        >
          ─
        </button>

        <button
          ref={btnRef}
          type="button"
          onPointerDown={handleBoop}
          aria-label="Solar Trek Mascot"
          className="relative block p-0 border-0 bg-transparent cursor-pointer outline-none transition-transform hover:scale-105 active:scale-95"
          style={{
            width: size,
            height: size,
            filter: 'drop-shadow(0 10px 15px rgba(0, 0, 0, 0.12))'
          }}
        >
          <span
            ref={squashRef}
            className="relative block w-full h-full origin-[50%_78%]"
          >
            {/* Lớp Directions */}
            <span
              className="absolute inset-0 no-repeat"
              style={{
                backgroundImage: `url(${directions})`,
                backgroundSize: '300% 300%',
                backgroundPosition: getCellPosition(DIRECTIONS.indexOf(direction)),
                opacity: reaction ? 0 : 1
              }}
            />
            {/* Lớp Reactions */}
            <span
              className="absolute inset-0 no-repeat"
              style={{
                backgroundImage: `url(${reactions})`,
                backgroundSize: '300% 300%',
                backgroundPosition: getCellPosition(REACTIONS.indexOf(reaction || 'blink')),
                opacity: reaction ? 1 : 0
              }}
            />
          </span>
        </button>
      </div>
    </div>
  );
}

