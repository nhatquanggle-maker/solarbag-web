# ☀️ SolarBag — Mỗi hành trình, một nguồn sáng

> **Dự án Ý Tưởng Kinh Doanh Số Capstone 2026**  
> *Đại học Kinh tế – Đại học Đà Nẵng*  
> Sứ mệnh: Năng lượng sạch cho người leo núi — Ánh sáng tri thức cho học sinh vùng cao.

---

## 🌟 Giới thiệu dự án

**SolarBag** là giải pháp balo quang điện thông minh ứng dụng công nghệ pin mặt trời màng mỏng **CIGS uốn dẻo**, vi mạch sạc bảo vệ đa tầng **BMS** và hộ chiếu số **NFC**. Dự án vận hành theo mô hình tạo tác động kép:
* **Hành trình khám phá (Outdoor Trekking):** Đồng hành cùng cộng đồng người leo núi với nguồn điện dự phòng bền bỉ, an toàn, kháng nước IPX6.
* **Hành trình ánh sáng (CSR Community):** Mỗi sản phẩm thương mại góp phần đưa những chiếc balo SolarBag Lite có đèn học tháo rời đến tay các em nhỏ tại các điểm trường vùng cao chưa có điện lưới.

---

## 👥 Đội ngũ Sáng lập (Founding Team)

| Thành viên | Vai trò | Chuyên môn đảm nhiệm |
| :--- | :--- | :--- |
| **Nguyễn Thị Thanh Thảo** | **FOUNDER** | Khởi xướng & dẫn dắt sứ mệnh dự án SolarBag, hoạch định chiến lược tổng thể và kết nối đối tác CSR. |
| **Lê Nhật Quang** | **GIÁM ĐỐC CÔNG NGHỆ (CTO)** | Nghiên cứu tích hợp tấm quang điện CIGS, mạch sạc thông minh BMS và phát triển hạ tầng số IoT. |
| **Lê Ngọc Minh Khánh** | **GIÁM ĐỐC MARKETING (CMO)** | Lan tỏa thông điệp "Hai hành trình, một nguồn sáng", phát triển thương hiệu và cộng đồng outdoor. |
| **Đào Ngọc Minh Kha** | **GIÁM ĐỐC CHIẾN LƯỢC & PHÁT TRIỂN (CSO/BDO)** | Xây dựng mô hình kinh doanh số, tiếp cận thị trường và mở rộng hợp tác tài trợ doanh nghiệp. |
| **Trần Trần Thảo Ngọc** | **GIÁM ĐỐC SẢN PHẨM & VẬN HÀNH (CPO/COO)** | Thiết kế công thái học, chuỗi cung ứng vật liệu tái chế và quản trị vận hành thực địa. |

---

## 🚀 Công nghệ & Kiến trúc Hệ thống

* **Frontend:** React 18 + Vite + Tailwind CSS + Lucide Icons + React Router DOM v6
* **Typography:** Chuẩn Brand Guidelines (Noto Serif, Baloo 2, Nunito, Mansalva)
* **Backend API:** Node.js + Express.js (Port 5000)
* **Cơ sở dữ liệu:** SQLite cục bộ cao cấp (`better-sqlite3`, chế độ WAL mode) lưu trữ tại `solarbag.db`
* **Xác thực & Phân quyền:** `AuthContext` hỗ trợ 2 vai trò: **Khách hàng** (`customer`) và **Quản trị viên** (`admin`)

---

## 📂 Cấu trúc Thư mục

```text
solarbag-web/
├── public/
│   ├── assets/
│   │   ├── images/         # 150+ hình ảnh chất lượng cao trích xuất từ Figma
│   │   ├── svg/            # Các biểu tượng logo, mạng xã hội chuẩn SVG
│   │   └── fonts/          # Thư mục font chữ dự phòng
├── src/
│   ├── components/         # Navbar, Footer (Node 23:629), Breadcrumbs, SubNav, LoginModal, CartDrawer...
│   ├── context/            # AuthContext (quản lý phân quyền), CartContext (giỏ hàng)
│   ├── data/               # Dữ liệu sản phẩm, cung đường trekking, danh sách sáng lập
│   ├── pages/              # 24 trang giao diện từ Figma + AdminDashboard + AccountPage
│   ├── services/           # api.js kết nối REST API Backend SQLite
│   ├── App.jsx             # Cấu hình định tuyến Route hệ thống
│   ├── index.css           # Typography và bảng màu thương hiệu SolarBag
│   └── main.jsx
├── server.js               # Backend REST API kết nối SQLite (solarbag.db)
├── start.bat               # File khởi động 1-click chạy đồng thời cả Backend & Frontend
├── package.json
└── tailwind.config.js
```

---

## 🛠️ Hướng dẫn Khởi chạy (Quick Start)

### 1. Cài đặt thư viện dependencies
```bash
npm install
```

### 2. Chạy ứng dụng

#### 👉 Cách 1: Nhanh nhất trên Windows (Khuyên dùng)
Nhấp đúp chuột vào file **`start.bat`** tại thư mục gốc. Hệ thống sẽ tự động bật 2 cửa sổ chạy đồng thời Backend SQLite và Frontend Vite.

#### 👉 Cách 2: Chạy bằng Terminal
```bash
npm start
```
*(Lệnh sử dụng `concurrently` để chạy song song cả 2 dịch vụ).*

#### 👉 Cách 3: Chạy thủ công từng Terminal riêng
* **Terminal 1 (Backend SQLite):**
  ```bash
  npm run server
  # Server API chạy tại: http://localhost:5000
  ```
* **Terminal 2 (Frontend React):**
  ```bash
  npm run dev
  # Website chạy tại: http://localhost:5173
  ```

---

## 🌐 Các Đường dẫn Chính trên Website

* 🏠 **Trang chủ:** `http://localhost:5173/`
* 👤 **Quản lý tài khoản (My SolarBag):** `http://localhost:5173/account`
* 🗄️ **Bảng Quản trị SQLite:** `http://localhost:5173/admin`
* 🛍️ **Danh mục sản phẩm:** `http://localhost:5173/products`
* 🏔️ **Hành trình khám phá:** `http://localhost:5173/explore`
* 💛 **Hành trình ánh sáng (CSR):** `http://localhost:5173/impact`
* ℹ️ **Về doanh nghiệp & Đội ngũ:** `http://localhost:5173/about/team`

