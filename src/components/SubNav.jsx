import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const SUB_NAV_GROUPS = {
  about: [
    { label: 'Câu chuyện thương hiệu', path: '/about/story' },
    { label: 'Đội ngũ & đối tác', path: '/about/team' },
    { label: 'Tin tức & nhật ký phát triển', path: '/about/journal' },
  ],
  products: [
    { label: 'Danh mục sản phẩm', path: '/products' },
    { label: 'Công nghệ & hướng dẫn', path: '/products/technology' },
    { label: 'Hộ chiếu số NFC', path: '/products/nfc-passport' },
  ],
  explore: [
    { label: 'Khám phá', path: '/explore' },
    { label: 'Thư viện tuyến đường', path: '/explore/trails' },
    { label: 'Chi tiết Lảo Thẩn', path: '/explore/trails/lao-than' },
    { label: 'Lập kế hoạch & checklist', path: '/explore/planner' },
    { label: 'SolarBag App', path: '/explore/app' },
  ],
  impact: [
    { label: 'Tổng quan cộng đồng', path: '/impact' },
    { label: 'Đồng hành cùng chúng tôi', path: '/impact/join' },
    { label: 'Minh bạch & báo cáo', path: '/impact/transparency' },
    { label: 'Cõng trời trên bản', path: '/impact/cong-troi-tren-ban' },
  ],
  support: [
    { label: 'FAQ', path: '/support/faq' },
    { label: 'Hướng dẫn sử dụng', path: '/support/user-guide' },
    { label: 'Bảo hành & sửa chữa', path: '/support/warranty' },
    { label: 'Đổi trả & vận chuyển', path: '/support/shipping-returns' },
    { label: 'Liên hệ & gửi ticket', path: '/support/contact' },
  ],
};

export default function SubNav() {
  const location = useLocation();
  const segment = location.pathname.split('/')[1];

  const items = SUB_NAV_GROUPS[segment];

  if (!items) return null;

  return (
    <div className="bg-[#f0ede4] border-b border-[#e2ded4] sticky top-24 z-30 shadow-sm backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-1 sm:space-x-3 overflow-x-auto py-2.5 scrollbar-none">
          <span className="text-xs font-mono font-bold uppercase text-[#7c8663] whitespace-nowrap pr-2 hidden md:inline-block">
            Chuyên mục:
          </span>
          {items.map((item) => {
            const active = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`whitespace-nowrap px-3.5 py-1.5 rounded-full text-xs font-headline tracking-wide font-medium transition-all ${
                  active
                    ? 'bg-[#041d15] text-[#efbc5c] shadow-sm font-semibold'
                    : 'text-[#333f34] bg-white/60 hover:bg-white hover:text-[#041d15] border border-[#e2ded4]'
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

