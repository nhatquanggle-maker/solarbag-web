import React, { useState, useEffect } from 'react';
import { api } from '../services/api';
import { useAuth } from '../context/AuthContext';
import { 
  Database, 
  ShoppingBag, 
  Heart, 
  LifeBuoy, 
  ShieldCheck, 
  ShieldAlert,
  Mail, 
  RefreshCw, 
  Sparkles,
  Server,
  FileCheck2,
  Trash2
} from 'lucide-react';

export default function AdminDashboard() {
  const { currentUser, isAdmin, loginAsAdmin } = useAuth();
  const [activeTab, setActiveTab] = useState('orders');
  const [stats, setStats] = useState(null);
  const [orders, setOrders] = useState([]);
  const [sponsors, setSponsors] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [warranties, setWarranties] = useState([]);
  const [subscribers, setSubscribers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dbStatus, setDbStatus] = useState('checking');

  const loadAllData = async () => {
    setLoading(true);
    try {
      const [s, ord, spon, tck, war] = await Promise.all([
        api.getStats(),
        api.getOrders(),
        api.getSponsorships(),
        api.getTickets(),
        api.getWarrantyRequests(),
      ]);
      setStats(s);
      setOrders(ord || []);
      setSponsors(spon || []);
      setTickets(tck || []);
      setWarranties(war || []);
      setDbStatus(s ? 'online' : 'offline');
    } catch (e) {
      console.error(e);
      setDbStatus('offline');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadAllData();
  }, []);

  // Quick Seed Demo Data helper for presenting
  const handleSeedData = async () => {
    setLoading(true);
    await api.createOrder({
      fullName: 'Trần Văn Minh',
      phone: '0905123456',
      email: 'minhtran@gmail.com',
      address: '120 Nguyễn Văn Thoại',
      city: 'Đà Nẵng',
      paymentMethod: 'cod',
      items: [
        { id: 'solarbag-pro', name: 'SolarBag Pro', quantity: 1, price: 1650000 },
        { id: 'lamp-multipurpose', name: 'Đèn tháo rời SolarLight', quantity: 1, price: 220000 }
      ],
      totalAmount: 1870000,
      discountAmount: 374000,
      finalTotal: 1496000
    });

    await api.createSponsorship({
      donorName: 'Cộng đồng Trekker Đà Nẵng',
      donorEmail: 'trekkingdn@gmail.com',
      quantity: 5,
      totalAmount: 4250000,
      message: 'Chúc các em học sinh điểm trường Lăng luôn vững bước đến trường!'
    });

    await api.createTicket({
      name: 'Lê Hoàng Yến',
      phone: '0988776655',
      email: 'yenle@yahoo.com',
      topic: 'Hỗ trợ kỹ thuật & Pin sạc',
      message: 'Tấm pin CIGS trên balo sau khi uốn cong có cần lưu ý bảo quản gì không ạ?'
    });

    await api.createWarranty({
      serialNumber: 'SB-DEMO-PRO-0089',
      fullName: 'Nguyễn Anh Tuấn',
      phone: '0912334455',
      issueDescription: 'Đèn LED bị lỏng ngàm nam châm sau chuyến trekking Tà Xùa'
    });

    await loadAllData();
  };

  return (
    <div className="space-y-8 pb-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
      
      {/* Role Notice Banner if not logged in as Admin */}
      {!isAdmin && (
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-300 text-amber-900 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm animate-fadeIn">
          <div className="flex items-center gap-3">
            <ShieldAlert className="w-6 h-6 text-[#C2562B] shrink-0" />
            <div>
              <p className="font-headline font-bold text-sm text-[#1F3D2B]">
                Phân quyền truy cập: Bạn đang ở chế độ xem thử nghiệm ({currentUser ? currentUser.tier : 'Chưa đăng nhập'} — {currentUser ? currentUser.name : 'Khách'})
              </p>
              <p className="text-xs text-amber-800">
                Để trải nghiệm toàn quyền quản trị đơn hàng, tài trợ và ticket SQLite, vui lòng đăng nhập tài khoản Admin.
              </p>
            </div>
          </div>
          <button
            onClick={loginAsAdmin}
            className="px-4 py-2 bg-[#1F3D2B] text-[#F2B632] hover:bg-[#284F38] rounded-xl text-xs font-headline font-bold whitespace-nowrap shadow-md transition-all"
          >
            Đăng nhập nhanh quyền Admin &rarr;
          </button>
        </div>
      )}

      {/* 1. Header Banner */}
      <div className="bg-[#041d15] text-[#f5f5e9] p-8 sm:p-10 rounded-3xl border border-[#124636] shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold text-[#efbc5c] uppercase bg-[#0a3225] px-3 py-1 rounded-full border border-[#efbc5c]/30 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5" />
              SQLITE DATABASE MONITOR
            </span>
            <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold ${
              dbStatus === 'online' ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40' : 'bg-amber-500/20 text-amber-300'
            }`}>
              {dbStatus === 'online' ? '● SQLite Online (solarbag.db)' : '○ Local Storage Mode'}
            </span>
          </div>
          <h1 className="font-headline text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Bảng Quản Trị Dữ Liệu SQLite — SolarBag
          </h1>
          <p className="text-xs sm:text-sm text-[#d2ded0] max-w-xl">
            Tất cả đơn đặt hàng, tài trợ balo học sinh, yêu cầu bảo hành và ticket từ website được lưu trữ tập trung vào tệp cơ sở dữ liệu <code>solarbag.db</code>.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={handleSeedData}
            disabled={loading}
            className="px-4 py-2.5 bg-[#efbc5c] text-[#041d15] hover:bg-[#f6d288] rounded-xl text-xs font-headline font-bold flex items-center gap-2 transition-all shadow-md"
          >
            <Sparkles className="w-4 h-4" />
            Tạo dữ liệu mẫu Demo
          </button>

          <button
            onClick={loadAllData}
            disabled={loading}
            className="p-2.5 bg-white/10 hover:bg-white/20 text-white rounded-xl border border-[#7c8663]/40 transition-colors"
            title="Tải lại dữ liệu"
          >
            <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
          </button>
        </div>
      </div>

      {/* 2. Top Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-[#e2ded4] shadow-sm space-y-2">
          <div className="flex items-center justify-between text-[#7c8663]">
            <span className="text-xs font-mono font-bold uppercase">Đơn đặt trước</span>
            <ShoppingBag className="w-4 h-4 text-[#041d15]" />
          </div>
          <p className="font-headline text-3xl font-bold text-[#041d15]">
            {orders.length}
          </p>
          <span className="text-[11px] font-mono text-emerald-700">
            Tổng: {orders.reduce((a, c) => a + (c.final_total || 0), 0).toLocaleString('vi-VN')}đ
          </span>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#e2ded4] shadow-sm space-y-2">
          <div className="flex items-center justify-between text-[#7c8663]">
            <span className="text-xs font-mono font-bold uppercase">Tài trợ Balo Lite</span>
            <Heart className="w-4 h-4 text-red-500" />
          </div>
          <p className="font-headline text-3xl font-bold text-[#041d15]">
            {sponsors.reduce((a, c) => a + (c.quantity || 1), 0)} Balo
          </p>
          <span className="text-[11px] font-mono text-[#7c8663]">
            Từ {sponsors.length} lượt đóng góp
          </span>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#e2ded4] shadow-sm space-y-2">
          <div className="flex items-center justify-between text-[#7c8663]">
            <span className="text-xs font-mono font-bold uppercase">Ticket hỗ trợ</span>
            <LifeBuoy className="w-4 h-4 text-[#efbc5c]" />
          </div>
          <p className="font-headline text-3xl font-bold text-[#041d15]">
            {tickets.length}
          </p>
          <span className="text-[11px] font-mono text-[#7c8663]">
            Đang mở
          </span>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-[#e2ded4] shadow-sm space-y-2">
          <div className="flex items-center justify-between text-[#7c8663]">
            <span className="text-xs font-mono font-bold uppercase">Bảo hành & Sửa</span>
            <ShieldCheck className="w-4 h-4 text-emerald-700" />
          </div>
          <p className="font-headline text-3xl font-bold text-[#041d15]">
            {warranties.length}
          </p>
          <span className="text-[11px] font-mono text-[#7c8663]">
            Yêu cầu tiếp nhận
          </span>
        </div>
      </div>

      {/* 3. Navigation Tabs */}
      <div className="flex gap-2 border-b border-[#e2ded4] pb-2 overflow-x-auto">
        {[
          { key: 'orders', label: `Đơn Hàng (${orders.length})`, icon: ShoppingBag },
          { key: 'sponsors', label: `Tài Trợ Balo (${sponsors.length})`, icon: Heart },
          { key: 'tickets', label: `Tickets Hỗ Trợ (${tickets.length})`, icon: LifeBuoy },
          { key: 'warranties', label: `Bảo Hành (${warranties.length})`, icon: ShieldCheck },
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.key;
          return (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-xl font-headline font-bold text-xs flex items-center gap-2 whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#041d15] text-[#efbc5c] shadow-sm'
                  : 'bg-white border border-[#e2ded4] text-[#4a5548] hover:bg-[#f4f0e6]'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* 4. Table Views */}
      <div className="bg-white rounded-2xl border border-[#e2ded4] overflow-hidden shadow-sm">
        
        {/* Tab 1: Orders */}
        {activeTab === 'orders' && (
          <div className="overflow-x-auto">
            {orders.length === 0 ? (
              <div className="text-center py-16 text-xs text-[#6c776b]">
                Chưa có đơn hàng nào trong SQLite. Bạn hãy đặt thử một đơn ở trang <a href="/checkout" className="text-[#041d15] font-bold underline">Thanh toán</a> hoặc nhấn "Tạo dữ liệu mẫu Demo".
              </div>
            ) : (
              <table className="w-full text-left text-xs">
                <thead className="bg-[#f5f2e9] text-[#7c8663] font-mono uppercase border-b border-[#e2ded4]">
                  <tr>
                    <th className="p-4">Mã đơn</th>
                    <th className="p-4">Khách hàng</th>
                    <th className="p-4">Số điện thoại</th>
                    <th className="p-4">Địa chỉ</th>
                    <th className="p-4">Sản phẩm</th>
                    <th className="p-4">Tổng tiền</th>
                    <th className="p-4">Trạng thái</th>
                    <th className="p-4">Thời gian</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e2ded4]">
                  {orders.map((o, idx) => (
                    <tr key={idx} className="hover:bg-[#fcfbf7] transition-colors">
                      <td className="p-4 font-mono font-bold text-[#041d15]">{o.order_code}</td>
                      <td className="p-4 font-medium text-[#1e261e]">{o.full_name}</td>
                      <td className="p-4 font-mono text-[#4a5548]">{o.phone}</td>
                      <td className="p-4 text-[#4a5548]">{o.address}, {o.city}</td>
                      <td className="p-4">
                        {o.items && o.items.length > 0 ? (
                          <div className="space-y-0.5">
                            {o.items.map((it, i) => (
                              <div key={i} className="text-[11px] text-[#041d15]">
                                • {it.name} (x{it.quantity})
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="text-[#a0ac9d]">Chi tiết trong đơn</span>
                        )}
                      </td>
                      <td className="p-4 font-mono font-bold text-[#041d15]">
                        {(o.final_total || 0).toLocaleString('vi-VN')}đ
                      </td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-amber-100 text-amber-800">
                          {o.status || 'Pending'}
                        </span>
                      </td>
                      <td className="p-4 font-mono text-[#7c8663] whitespace-nowrap">
                        {o.created_at ? new Date(o.created_at).toLocaleString('vi-VN') : 'Vừa xong'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Tab 2: Sponsorships */}
        {activeTab === 'sponsors' && (
          <div className="overflow-x-auto">
            {sponsors.length === 0 ? (
              <div className="text-center py-16 text-xs text-[#6c776b]">
                Chưa có dữ liệu tài trợ trong SQLite.
              </div>
            ) : (
              <table className="w-full text-left text-xs">
                <thead className="bg-[#f5f2e9] text-[#7c8663] font-mono uppercase border-b border-[#e2ded4]">
                  <tr>
                    <th className="p-4">Mã tài trợ</th>
                    <th className="p-4">Nhà hảo tâm</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Số lượng</th>
                    <th className="p-4">Tổng số tiền</th>
                    <th className="p-4">Lời nhắn NFC</th>
                    <th className="p-4">Điểm trường</th>
                    <th className="p-4">Thời gian</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e2ded4]">
                  {sponsors.map((s, idx) => (
                    <tr key={idx} className="hover:bg-[#fcfbf7] transition-colors">
                      <td className="p-4 font-mono font-bold text-[#041d15]">{s.sponsor_code}</td>
                      <td className="p-4 font-medium text-[#1e261e]">{s.donor_name}</td>
                      <td className="p-4 font-mono text-[#4a5548]">{s.donor_email}</td>
                      <td className="p-4 font-bold text-emerald-800">{s.quantity} Balo Lite</td>
                      <td className="p-4 font-mono font-bold text-[#041d15]">
                        {(s.total_amount || 0).toLocaleString('vi-VN')}đ
                      </td>
                      <td className="p-4 text-[#4a5548] italic max-w-xs truncate">
                        "{s.message || 'Chúc các em học tốt'}"
                      </td>
                      <td className="p-4 text-[#7c8663]">{s.school_name || 'Điểm trường Lăng'}</td>
                      <td className="p-4 font-mono text-[#7c8663] whitespace-nowrap">
                        {s.created_at ? new Date(s.created_at).toLocaleString('vi-VN') : 'Vừa xong'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Tab 3: Tickets */}
        {activeTab === 'tickets' && (
          <div className="overflow-x-auto">
            {tickets.length === 0 ? (
              <div className="text-center py-16 text-xs text-[#6c776b]">
                Chưa có ticket nào trong SQLite.
              </div>
            ) : (
              <table className="w-full text-left text-xs">
                <thead className="bg-[#f5f2e9] text-[#7c8663] font-mono uppercase border-b border-[#e2ded4]">
                  <tr>
                    <th className="p-4">Mã ticket</th>
                    <th className="p-4">Họ tên</th>
                    <th className="p-4">Số điện thoại</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Chủ đề</th>
                    <th className="p-4">Nội dung</th>
                    <th className="p-4">Thời gian</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e2ded4]">
                  {tickets.map((t, idx) => (
                    <tr key={idx} className="hover:bg-[#fcfbf7] transition-colors">
                      <td className="p-4 font-mono font-bold text-[#041d15]">{t.ticket_code}</td>
                      <td className="p-4 font-medium text-[#1e261e]">{t.name}</td>
                      <td className="p-4 font-mono text-[#4a5548]">{t.phone}</td>
                      <td className="p-4 font-mono text-[#4a5548]">{t.email}</td>
                      <td className="p-4 font-semibold text-[#041d15]">{t.topic}</td>
                      <td className="p-4 text-[#4a5548] max-w-sm">{t.message}</td>
                      <td className="p-4 font-mono text-[#7c8663] whitespace-nowrap">
                        {t.created_at ? new Date(t.created_at).toLocaleString('vi-VN') : 'Vừa xong'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

        {/* Tab 4: Warranties */}
        {activeTab === 'warranties' && (
          <div className="overflow-x-auto">
            {warranties.length === 0 ? (
              <div className="text-center py-16 text-xs text-[#6c776b]">
                Chưa có yêu cầu bảo hành nào trong SQLite.
              </div>
            ) : (
              <table className="w-full text-left text-xs">
                <thead className="bg-[#f5f2e9] text-[#7c8663] font-mono uppercase border-b border-[#e2ded4]">
                  <tr>
                    <th className="p-4">Mã tiếp nhận</th>
                    <th className="p-4">Serial sản phẩm</th>
                    <th className="p-4">Chủ sở hữu</th>
                    <th className="p-4">Số điện thoại</th>
                    <th className="p-4">Mô tả sự cố</th>
                    <th className="p-4">Trạng thái</th>
                    <th className="p-4">Thời gian</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#e2ded4]">
                  {warranties.map((w, idx) => (
                    <tr key={idx} className="hover:bg-[#fcfbf7] transition-colors">
                      <td className="p-4 font-mono font-bold text-[#041d15]">{w.warranty_code}</td>
                      <td className="p-4 font-mono text-[#efbc5c] font-bold bg-[#041d15] px-2 py-0.5 rounded text-[11px] inline-block">
                        {w.serial_number}
                      </td>
                      <td className="p-4 font-medium text-[#1e261e]">{w.full_name}</td>
                      <td className="p-4 font-mono text-[#4a5548]">{w.phone}</td>
                      <td className="p-4 text-[#4a5548] max-w-sm">{w.issue_description}</td>
                      <td className="p-4">
                        <span className="px-2 py-0.5 rounded-full text-[10px] font-mono font-bold bg-blue-100 text-blue-800">
                          {w.status || 'Processing'}
                        </span>
                      </td>
                      <td className="p-4 font-mono text-[#7c8663] whitespace-nowrap">
                        {w.created_at ? new Date(w.created_at).toLocaleString('vi-VN') : 'Vừa xong'}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}

      </div>

    </div>
  );
}

