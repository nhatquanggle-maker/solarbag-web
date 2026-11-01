/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bảng màu chính thức Brand Guidelines SolarBag
        palette: {
          deepForest: '#1F3D2B',    // RỪNG SÂU
          mountainMoss: '#5E7A45',  // RÊU NÚI
          solarSun: '#F2B632',       // NẮNG PIN
          redEarth: '#C2562B',       // ĐẤT ĐỎ
          mist: '#8FA8B6',           // SƯƠNG MÙ
          paperCream: '#E3DCC8',     // GIẤY KEM
          charcoal: '#232622',       // MỰC THAN
          pureWhite: '#FFFFFF',      // TRẮNG TINH
        },
        // Hệ màu solar kế thừa chuẩn sắc thái từ Brand Guidelines
        solar: {
          dark: '#1F3D2B',           // Rừng sâu (#1F3D2B)
          darker: '#162C1F',
          forest: '#1F3D2B',         // Rừng sâu (#1F3D2B)
          forestLight: '#284F38',
          gold: '#F2B632',           // Nắng pin (#F2B632)
          goldLight: '#F7C966',
          goldDark: '#C2562B',       // Đất đỏ (#C2562B)
          sage: '#5E7A45',           // Rêu núi (#5E7A45)
          sageLight: '#8FA8B6',      // Sương mù (#8FA8B6)
          sageBorder: '#4A6237',
          cream: '#E3DCC8',          // Giấy kem (#E3DCC8)
          creamSurface: '#F6F3EA',
          creamBorder: '#D8D1BD',
          earthBrown: '#C2562B',     // Đất đỏ (#C2562B)
          charcoal: '#232622',       // Mực than (#232622)
          mist: '#8FA8B6',           // Sương mù (#8FA8B6)
          white: '#FFFFFF',          // Trắng tinh (#FFFFFF)
        }
      },
      fontFamily: {
        // Nội dung - dùng font bo tròn Nunito hỗ trợ 100% tiếng Việt
        sans: ['Nunito', 'system-ui', 'sans-serif'],
        body: ['Nunito', 'system-ui', 'sans-serif'],
        // Phụ đề - Noto Serif (nét serif nghiêng nhẹ, logotype phụ)
        serif: ['"Noto Serif"', 'serif'],
        subheading: ['"Noto Serif"', 'serif'],
        // Tiêu đề - Font Việt hóa 1FTV VIP Boring Time (fallback Baloo 2 bo tròn vui tươi)
        headline: ['"1FTV VIP Boring Time"', '"Baloo 2"', 'Nunito', 'sans-serif'],
        display: ['"1FTV VIP Boring Time"', '"Baloo 2"', 'Nunito', 'sans-serif'],
        // Chú thích, viết tay - Mansalva (đã kiểm định 100% tiếng Việt)
        handwriting: ['Mansalva', 'cursive'],
        note: ['Mansalva', 'cursive'],
        // Backward compatibility
        'Roboto_Condensed': ['"1FTV VIP Boring Time"', '"Baloo 2"', 'Nunito', 'sans-serif'],
        'Lora': ['"Noto Serif"', 'serif'],
      }
    },
  },
  plugins: [],
}
