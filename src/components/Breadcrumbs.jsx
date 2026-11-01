import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

export default function Breadcrumbs({ customCrumbs }) {
  const location = useLocation();

  if (location.pathname === '/') return null;

  const crumbs = customCrumbs || generateCrumbs(location.pathname);

  return (
    <div className="bg-[#f5f2e9] border-b border-[#e5e0d3] py-2.5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center space-x-2 text-xs font-mono text-[#7c8663]">
          <Link to="/" className="hover:text-[#041d15] flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span>Trang chủ</span>
          </Link>
          {crumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-[#a0ac9d]" />
              {crumb.path && idx < crumbs.length - 1 ? (
                <Link to={crumb.path} className="hover:text-[#041d15] transition-colors">
                  {crumb.label}
                </Link>
              ) : (
                <span className="text-[#041d15] font-semibold">{crumb.label}</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </div>
  );
}

function generateCrumbs(pathname) {
  const parts = pathname.split('/').filter(Boolean);
  const map = {
    about: 'Về doanh nghiệp',
    story: 'Câu chuyện thương hiệu',
    team: 'Đội ngũ & đối tác',
    journal: 'Tin tức & nhật ký',
    products: 'Sản phẩm',
    'solarbag-pro': 'SolarBag Pro',
    'solarbag-lite': 'SolarBag Lite',
    technology: 'Công nghệ & hướng dẫn',
    'nfc-passport': 'Hộ chiếu số NFC',
    checkout: 'Giỏ hàng & thanh toán',
    explore: 'Hành trình khám phá',
    trails: 'Thư viện tuyến đường',
    'lao-than': 'Chi tiết Lảo Thẩn',
    planner: 'Lập kế hoạch & checklist',
    app: 'SolarBag App',
    impact: 'Hành trình ánh sáng',
    join: 'Đồng hành cùng chúng tôi',
    transparency: 'Minh bạch & báo cáo',
    'cong-troi-tren-ban': 'Cõng trời trên bản',
    support: 'Trung tâm hỗ trợ',
    faq: 'Trợ giúp & FAQ',
    'user-guide': 'Hướng dẫn sử dụng',
    warranty: 'Bảo hành & sửa chữa',
    'shipping-returns': 'Đổi trả & vận chuyển',
    contact: 'Liên hệ & gửi ticket',
    account: 'Tài khoản (My SolarBag)',
    admin: 'Quản trị viên SQLite',
  };

  let acc = '';
  return parts.map((part) => {
    acc += `/${part}`;
    return {
      label: map[part] || part,
      path: acc,
    };
  });
}

