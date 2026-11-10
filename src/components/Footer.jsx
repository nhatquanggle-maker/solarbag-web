import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="relative bg-[#1F3D2B] text-[#E3DCC8] overflow-hidden border-t border-[#5E7A45]/30">
      {/* Background Mountain Forest Image with Deep Gradient Overlays */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center opacity-25 mix-blend-overlay"
        style={{ backgroundImage: `url('/assets/images/848964cbd532afecf9186a7febc11b47f40704bf.png')` }}
      />
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#1F3D2B]/95 via-[#162C1F]/95 to-[#102017]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-12">
          
          {/* Brand Info Left Column */}
          <div className="lg:col-span-5 space-y-6">
            <Link to="/" className="inline-flex items-center gap-4 group">
              <img 
                src="/assets/images/logo.png" 
                alt="GuiNang - Gùi Nắng Logo" 
                className="h-20 sm:h-24 lg:h-28 w-auto object-contain transition-transform group-hover:scale-105 duration-300 logo-glow" 
              />
              <div className="flex flex-col justify-center">
                <span className="font-headline text-3xl sm:text-4xl font-bold tracking-tight text-[#FFFFFF] leading-none">
                  GuiNang
                </span>
                <span className="font-serif italic text-sm text-[#F2B632] mt-1.5 tracking-wide">
                  Công ty TNHH GuiNang · Gùi Nắng
                </span>
              </div>
            </Link>

            <div>
              <p className="font-serif italic text-[#F2B632] text-xl font-medium tracking-wide">
                Nắng theo chân, sáng muôn miền.
              </p>
              <p className="font-handwriting text-[#8FA8B6] text-base mt-1 tracking-wider">
                ~ Đi giữa những tầng mây, gửi lại ánh sáng nơi bản làng ~
              </p>
            </div>

            <p className="text-sm leading-relaxed text-[#E3DCC8]/90 max-w-md">
              Hệ sinh thái sản phẩm và giải pháp công nghệ ứng dụng năng lượng mặt trời: kết nối hai hành trình giá trị Khám Phá (GuiNang Trail) và Ánh Sáng (GuiNang Edu).
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-full bg-[#162C1F] border border-[#5E7A45]/50 flex items-center justify-center text-[#F2B632] hover:bg-[#F2B632] hover:text-[#1F3D2B] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>

              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-full bg-[#162C1F] border border-[#5E7A45]/50 flex items-center justify-center text-[#F2B632] hover:bg-[#F2B632] hover:text-[#1F3D2B] transition-all"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>

              <a 
                href="mailto:contact@guinang.vn" 
                aria-label="Mail"
                className="w-9 h-9 rounded-full bg-[#162C1F] border border-[#5E7A45]/50 flex items-center justify-center text-[#F2B632] hover:bg-[#F2B632] hover:text-[#1F3D2B] transition-all"
              >
                <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
              </a>
            </div>
          </div>

          {/* Links Columns Right */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            
            {/* Column 1: SẢN PHẨM */}
            <div className="border-l border-[#5E7A45]/40 pl-5 sm:pl-6 space-y-4">
              <h3 className="font-headline text-[#F2B632] text-sm font-semibold tracking-wider uppercase">
                SẢN PHẨM & CÔNG NGHỆ
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/products/solarbag-pro" className="hover:text-[#F2B632] transition-colors">
                    GuiNang Trail (1.500.000đ)
                  </Link>
                </li>
                <li>
                  <Link to="/products/solarbag-lite" className="hover:text-[#F2B632] transition-colors">
                    GuiNang Edu (880.000đ)
                  </Link>
                </li>
                <li>
                  <Link to="/products/technology" className="hover:text-[#F2B632] transition-colors">
                    Đèn Solar Lamp (450.000đ)
                  </Link>
                </li>
                <li>
                  <Link to="/products/nfc-passport" className="hover:text-[#F2B632] transition-colors">
                    Hộ chiếu số Product Passport
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: HỆ SINH THÁI */}
            <div className="border-l border-[#5E7A45]/40 pl-5 sm:pl-6 space-y-4">
              <h3 className="font-headline text-[#F2B632] text-sm font-semibold tracking-wider uppercase">
                HỆ SINH THÁI
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/explore" className="hover:text-[#F2B632] transition-colors">
                    Hành trình khám phá
                  </Link>
                </li>
                <li>
                  <Link to="/impact" className="hover:text-[#F2B632] transition-colors">
                    Hành trình ánh sáng (Edu)
                  </Link>
                </li>
                <li>
                  <Link to="/explore/app" className="hover:text-[#F2B632] transition-colors">
                    Ứng dụng GuiNang App
                  </Link>
                </li>
                <li>
                  <Link to="/impact/transparency" className="hover:text-[#F2B632] transition-colors">
                    Minh bạch tài trợ (Donation Tracking)
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: HỖ TRỢ */}
            <div className="border-l border-[#5E7A45]/40 pl-5 sm:pl-6 space-y-4">
              <h3 className="font-headline text-[#F2B632] text-sm font-semibold tracking-wider uppercase">
                HỖ TRỢ & BẢO HÀNH
              </h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/support/faq" className="hover:text-[#F2B632] transition-colors">
                    Trung tâm trợ giúp (FAQ)
                  </Link>
                </li>
                <li>
                  <Link to="/support/user-guide" className="hover:text-[#F2B632] transition-colors">
                    Hướng dẫn sử dụng
                  </Link>
                </li>
                <li>
                  <Link to="/support/warranty" className="hover:text-[#F2B632] transition-colors">
                    Chính sách bảo hành Trạm Nắng
                  </Link>
                </li>
                <li>
                  <Link to="/support/contact" className="hover:text-[#F2B632] transition-colors">
                    Liên hệ & Gửi ticket
                  </Link>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Business Info Section */}
        <div className="border-t border-[#5E7A45]/30 pt-8 pb-6">
          <div className="space-y-2">
            <h4 className="font-headline text-xs font-semibold tracking-widest text-[#F2B632] uppercase">
              THÔNG TIN DOANH NGHIỆP DỰ ÁN
            </h4>
            <p className="text-sm text-[#E3DCC8]">
              Công ty TNHH GuiNang • Trụ sở: Xưởng Trạm Nắng, TP. Đà Nẵng • Email: contact@guinang.vn • Hotline: (+84) 905.409.257
            </p>
            <p className="text-xs text-[#8FA8B6]">
              Đề án tham gia Cuộc thi Sinh viên Kinh doanh số 2026 (Digital Business Contest 2026) — Sinh viên Lớp 50K22.1, Khoa Thương mại điện tử, Marketing và Công nghệ số – Trường Đại học Kinh tế – Đại học Đà Nẵng.
            </p>
          </div>
        </div>

        {/* Legal Divider & Bottom Row */}
        <div className="border-t border-[#5E7A45]/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8FA8B6]">
          <p>
            © 2026 GuiNang (Gùi Nắng). All rights reserved.
          </p>

          <div className="flex items-center gap-3">
            <Link to="/support/warranty" className="hover:text-[#E3DCC8] transition-colors">
              Chính sách bảo mật
            </Link>
            <span className="text-[#5E7A45]">•</span>
            <Link to="/support/user-guide" className="hover:text-[#E3DCC8] transition-colors">
              Điều khoản sử dụng
            </Link>
            <span className="text-[#5E7A45]">•</span>
            <Link to="/support/shipping-returns" className="hover:text-[#E3DCC8] transition-colors">
              Chính sách mua hàng
            </Link>
            <span className="text-[#5E7A45]">•</span>
            <Link to="/admin" className="text-[#F2B632] hover:underline transition-colors font-mono font-semibold">
              Quản trị SQLite (solarbag.db)
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
