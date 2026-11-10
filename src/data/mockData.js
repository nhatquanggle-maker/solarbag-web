// GuiNang (Gùi Nắng) Official Mock Data - Dự án Cuộc thi Sinh viên Kinh doanh số 2026
// Trường Đại học Kinh tế - Đại học Đà Nẵng (Khóa 50K22.1, Khoa Thương mại điện tử, Marketing và Công nghệ số)
// Slogan: "Nắng theo chân, sáng muôn miền"
// Hotline: (+84) 905.409.257 · Email: contact@guinang.vn · Xưởng Trạm Nắng (Đà Nẵng)

export const BRAND_INFO = {
  name: 'GuiNang',
  vietnameseName: 'Gùi Nắng',
  companyName: 'Công ty Trách Nhiệm Hữu Hạn GuiNang',
  slogan: 'Nắng theo chân, sáng muôn miền',
  hotline: '(+84) 905.409.257',
  email: 'contact@guinang.vn',
  address: 'Xưởng Trạm Nắng, TP. Đà Nẵng',
  institution: 'Trường Đại học Kinh tế – Đại học Đà Nẵng',
  contest: 'Cuộc thi Sinh viên Kinh doanh số 2026 (Digital Business Contest 2026)',
  twoJourneys: {
    discovery: 'Hành trình Khám Phá — Đồng hành cùng cộng đồng outdoor, trekking, camping',
    light: 'Hành trình Ánh Sáng — Kết nối cá nhân, doanh nghiệp và tổ chức trao gửi ánh sáng học đường'
  },
  mascot: {
    name: 'Voọc',
    fullName: 'Voọc chà vá chân nâu',
    title: 'Người bạn đồng hành của GuiNang',
    origin: 'Bán đảo Sơn Trà, Đà Nẵng',
    personality: 'Khám phá, thân thiện, thông minh, gắn kết với thiên nhiên'
  }
};

export const PRODUCTS = [
  {
    id: 'guinang-trail',
    legacyId: 'solarbag-pro',
    name: 'GuiNang Trail',
    subName: 'Solar Bag Trail (Hệ Outdoor Trekking)',
    category: 'TREKKING / HIKING / OUTDOOR',
    status: 'Sản phẩm thương mại chủ lực',
    badge: 'Flagship Trail Series',
    price: 1500000,
    priceFormatted: '1.500.000đ',
    priceNote: 'Giá niêm yết thương mại chính thức',
    description: 'Dành cho người đi bộ đường dài, trekking, camping và hoạt động ngoài trời. Tích hợp cụm đèn Solar Lamp tháo rời, 2 tấm solar 5V–3W, pin lưu trữ 18650 lõi, sạc điện thoại & GPS qua USB-C, khung trợ lực phân tán tải và vải Ripstop kháng nước.',
    shortSpecs: '5.000 mAh (37 Wh) · 2× Solar 5V-3W · Đèn LED COB 3W · 1.570g',
    image: '/assets/images/f07df218a363e35785a95f4364dfb00b0a8ab664.png',
    link: '/products/solarbag-pro',
    specs: {
      battery: 'Khối pin Li-ion 18650 (2 viên × 2.500 mAh = 5.000 mAh ~ 37 Wh, năng lượng hữu ích 25,9 Wh)',
      solar: '2 tấm pin quang điện mặt trời 5V – 3W (Tổng công suất 6W, có thể gập/tháo)',
      lamp: 'Cụm đèn Solar Lamp tháo rời 70g · LED COB 3.7V / 3W (sáng 8,6h – 51,8h tùy mức)',
      circuit: 'Mạch sạc TP4056 + MOSFET kênh P IRF4905 tự động kích hoạt bật khi tối, ngắt khi sáng',
      material: 'Vải Ripstop PET 420D–600D phủ PU/TPU · Đáy gia cường 900D viền xám than',
      harness: 'Hệ quai chỉnh 60–95 cm · Đệm EVA + Mặt lưng 3D mesh · Khung trợ lực PE/PP/nhôm · Đai ngực & hông',
      ports: 'Cổng USB-C sạc ra cho smartphone/GPS + Cổng nạp dự phòng · Chip NFC Product Passport',
      dimensions: '52 × 32 × 22 cm · Dung tích 35L – 40L',
      weight: '1.570g tổng (thân cặp 750g + Solar Lamp 70g + linh kiện & khung, chuẩn ≤ 1.600g)',
      waterproof: 'Khoang điện kín riêng cách nhiệt & chống nước mưa rừng',
    },
    features: [
      {
        title: 'Pin lưu trữ là lõi — Không phụ thuộc nắng ngắt quãng',
        desc: 'Khắc phục hoàn toàn nhược điểm của balo solar thông thường: pin 18650 5.000 mAh tích trữ điện liên tục dưới nắng, cung cấp nguồn năng lượng ổn định cho đèn và smartphone ngay cả trong bóng râm hoặc ban đêm.'
      },
      {
        title: 'Cụm đèn Solar Lamp tháo rời đa năng',
        desc: 'Đèn LED COB 3W tự động bật sáng khi trời tối nhờ cảm biến MOSFET IRF4905. Có thể tháo rời nhanh chóng để treo trong lều, đặt bàn dã ngoại hoặc làm đèn cầm tay soi đường.'
      },
      {
        title: 'Khung trợ lực & Đệm thoáng khí 3D Mesh',
        desc: 'Hệ thống đai ngực, đai hông trợ lực kết hợp khung phân bổ tải trọng giúp giảm đáng kể áp lực lên vai và cột sống khi mang vác đồ đạc trekking trên hành trình dài.'
      },
      {
        title: 'Hộ chiếu sản phẩm số (Product Passport NFC)',
        desc: 'Tích hợp chip NFC định danh trên quai đeo. Một chạm bằng smartphone để tra cứu nguồn gốc sản xuất, kích hoạt bảo hành điện tử 12 tháng và ghi nhận nhật ký hành trình.'
      }
    ]
  },
  {
    id: 'guinang-edu',
    legacyId: 'solarbag-lite',
    name: 'GuiNang Edu',
    subName: 'Solar Bag Edu (Hệ Cặp Học Sinh Vùng Cao)',
    category: 'HỌC ĐƯỜNG / HÀNH TRÌNH ÁNH SÁNG (B2N)',
    status: 'Gói đồng hành & tài trợ học đường',
    badge: 'Hành Trình Ánh Sáng · B2N Edition',
    price: 880000,
    priceFormatted: '880.000đ',
    priceNote: 'Giá gói tài trợ B2N & thương mại học đường',
    description: 'Thiết kế tinh gọn dành cho học sinh tiểu học và THCS tại các điểm trường chưa có điện lưới ổn định (Nam Trà My, Tây Giang, Hà Giang...). Thu năng lượng khi đi bộ đến trường, về nhà tháo cụm đèn Solar Lamp đặt bàn học bài suốt buổi tối.',
    shortSpecs: '18,5 Wh (5.000 mAh) · Tấm Solar 5V-3W tháo rời · Đèn học LED COB 3W · 925g',
    image: '/assets/images/f77e12bdb6a411ee17f7d138f4d0fd634a28a1d4.png',
    link: '/products/solarbag-lite',
    specs: {
      battery: 'Khối pin Li-ion 18650 an toàn (18,5 Wh, năng lượng hữu ích 12,95 Wh)',
      solar: 'Tấm pin quang điện 5V – 3W bề mặt ngoài, có thể tháo rời phơi nắng nơi cửa sổ',
      lamp: 'Đèn học tháo rời Solar Lamp 70g · Mức học tập 1.0–1.5W chiếu sáng liên tục ≥ 6–8 tiếng',
      circuit: 'Mạch sạc TP4056 + MOSFET IRF4905 ngắt sạc tự động và bảo vệ quá áp, quá nhiệt',
      material: 'Vải PET 420D–600D phủ PU/TPU chống thấm · Đáy gia cường rPET 600D bền bỉ',
      harness: 'Quai đeo rộng 5–6 cm đệm EVA 6–10 mm · Lưng đệm foam phẳng thoáng khí · Dải phản quang ban đêm',
      ports: 'Cổng sạc USB-C dự phòng · Chip NFC liên kết cổng Donation Tracking',
      dimensions: '40 × 28 × 16 cm · Dung tích 20L',
      weight: '925g tổng (thân cặp 500g + Solar Lamp 70g, chuẩn ≤ 1.000g bảo vệ cột sống trẻ)',
      waterproof: 'Khoang điện bọc foam cách nhiệt, áo mưa đi kèm bảo vệ cặp mùa mưa lũ',
    },
    features: [
      {
        title: 'Nắng theo chân đến trường, sáng bừng bên trang sách',
        desc: 'Học sinh đi bộ 1–2 giờ đến trường dưới nắng để sạc pin. Tối về em tháo đèn Solar Lamp đặt bàn học bài 6–8 tiếng mà không phụ thuộc điện lưới hay đèn dầu độc hại.'
      },
      {
        title: 'Trọng lượng siêu nhẹ dưới 1kg & Dải phản quang an toàn',
        desc: 'Tổng khối lượng chỉ 925g phù hợp thể trọng trẻ em vùng cao. Dải phản quang trước ngực và quai đeo giúp xe cộ và người đi đường dễ nhận biết khi trẻ đi trong sương mù hoặc lúc chập choạng tối.'
      },
      {
        title: 'Cơ chế trợ giá chéo minh bạch',
        desc: 'Một phần lợi nhuận từ mỗi chiếc GuiNang Trail được trích lập để trợ giá vận chuyển, linh kiện bảo hành và hỗ trợ phát triển các bộ GuiNang Edu tại các điểm trường khó khăn.'
      },
      {
        title: 'Minh bạch tài trợ với Donation Tracking NFC',
        desc: 'Mỗi chiếc cặp mang một mã định danh NFC riêng. Tại điểm bàn giao, cán bộ quét NFC xác thực trao tặng; hình ảnh và biên bản nghiệm thu được đồng bộ ngay lên website cho nhà tài trợ kiểm chứng.'
      }
    ]
  }
];

export const TRAILS = [
  {
    id: 'lao-than',
    title: 'Lảo Thẩn — Đi giữa những tầng mây',
    region: 'Y Tý, Bát Xát, Lào Cai',
    altitude: '2.860m',
    distance: '16 km cả đi và về',
    duration: '2 ngày 1 đêm',
    difficulty: 'Trung bình (Moderate)',
    sunExposure: '85% cung đường thoáng nắng',
    coverImage: '/assets/images/6de495ed65dbb40e4b88642bad776e96c19a1cd7.png',
    description: 'Được mệnh danh là nóc nhà Y Tý, Lảo Thẩn sở hữu địa hình đồi trọc với nắng gió ngút ngàn — môi trường lý tưởng để kiểm nghiệm sức mạnh tấm pin quang điện và đèn Solar Lamp của GuiNang Trail.',
    solarRating: 'Tuyệt vời (Sạc đầy trong 3–4h nắng tốt)',
    solarHarvestWh: '24 Wh/ngày (sạc đầy 1.5 lần smartphone)',
    packingGuide: ['Balo SolarBag Trail 25L', 'Cáp sạc từ tính 3 đầu', 'Đèn Solar Lamp tháo rời', 'Áo gió chống nước', 'Gậy trekking hợp kim'],
    stops: [
      { name: 'Chân núi Phìn Hồ', alt: '1.800m', note: 'Điểm tập kết, xuất phát đón nắng sáng' },
      { name: 'Lán nghỉ A Hờ', alt: '2.560m', note: 'Điểm hạ trại, đón hoàng hôn, thử nghiệm đèn tháo rời' },
      { name: 'Đỉnh Lảo Thẩn', alt: '2.860m', note: 'Biển mây Y Tý, đón bình minh và kiểm tra nguồn dự phòng' }
    ]
  },
  {
    id: 'ta-xua',
    title: 'Tà Xùa — Sống lưng khủng long hùng vĩ',
    region: 'Bắc Yên, Sơn La',
    altitude: '2.865m',
    distance: '14 km đường mòn sống núi',
    duration: '2 ngày 1 đêm',
    difficulty: 'Thử thách (Challenging)',
    sunExposure: '70% nắng trực diện trên sống núi',
    coverImage: '/assets/images/1595b43f57ec520a9a1f68274689730c87a2b65c.png',
    description: 'Cung đường gió mạnh và nắng gắt trên sống núi hiểm trở. Balo trợ lực và nguồn pin dự phòng ổn định là trợ thủ sinh tồn không thể thiếu cho trekker.',
    solarRating: 'Tốt (Hiệu suất nạp cao từ 9h - 15h)',
    solarHarvestWh: '20 Wh/ngày (sạc đầy smartphone + 2 pin máy ảnh)',
    packingGuide: ['Balo SolarBag Trail 25L', 'Đèn pin chiếu xa COB 3W', 'Khăn rằn chống nắng', 'Giày trekking bám đá', 'Túi cứu thương mini'],
    stops: [
      { name: 'Xã Tà Xùa', alt: '1.600m', note: 'Điểm chuẩn bị và kiểm tra dung lượng pin' },
      { name: 'Mỏm cá heo', alt: '2.100m', note: 'Check-in đón nắng và sạc nhanh thiết bị' },
      { name: 'Sống lưng khủng long Háng Đồng', alt: '2.865m', note: 'Thử nghiệm khung trợ lực và độ ổn định pin mặt trời khi gió mạnh' }
    ]
  },
  {
    id: 'fansipan-tram-ton',
    title: 'Fansipan — Chinh phục nóc nhà Đông Dương',
    region: 'Sa Pa, Lào Cai',
    altitude: '3.143m',
    distance: '22 km cung Trạm Tôn',
    duration: '2 ngày 1 đêm',
    difficulty: 'Nâng cao (Hard)',
    sunExposure: '50% rừng trúc, 50% đỉnh thoáng',
    coverImage: '/assets/images/77412110c5deb516750882d297c1f3af65e01093.png',
    description: 'Hành trình vượt qua nhiều tầng thảm thực vật từ rừng ẩm ướt đến vách đá gió buốt. Thử nghiệm độ bền vỏ Ripstop phủ TPU kháng nước và khung trợ lực GuiNang Trail.',
    solarRating: 'Khá (Đón nắng đỉnh núi)',
    solarHarvestWh: '18 Wh/ngày (đủ duy trì GPS Garmin và điện thoại 2 ngày)',
    packingGuide: ['Balo SolarBag Trail 25L chống nước IPX6', 'Cáp sạc chống gãy', 'Đèn chiếu khẩn cấp SOS', 'Găng tay leo núi', 'Áo khoác giữ nhiệt'],
    stops: [
      { name: 'Trạm Tôn', alt: '1.900m', note: 'Bắt đầu hành trình qua rừng nguyên sinh' },
      { name: 'Lán 2.200m & 2.800m', alt: '2.800m', note: 'Nghỉ đêm, dùng đèn Solar Lamp thắp sáng lều' },
      { name: 'Đỉnh Fansipan', alt: '3.143m', note: 'Chạm mốc Nóc nhà Đông Dương, kiểm tra telemetry mặt trời' }
    ]
  }
];

export const JOURNALS = [
  {
    id: 'nam-tra-my-journey',
    title: 'Hành trình khảo sát Nam Trà My: Khi ánh sáng GuiNang Edu chuẩn bị thắp sáng những lớp học vùng cao',
    category: 'Hoạt động Bản làng & CSR',
    date: '15/10/2026',
    author: 'Đội ngũ Dự án GuiNang',
    image: '/assets/images/7cdd184be59dec8a062f677e6c3bf37ba8334d3d.png',
    excerpt: 'Ghi nhận thực địa tại các điểm trường miền núi Nam Trà My (Quảng Nam - Đà Nẵng). Nhu cầu đèn học an toàn của các em nhỏ là động lực lớn nhất để GuiNang Edu hoàn thiện quy chuẩn kỹ thuật.',
    readTime: '6 phút đọc'
  },
  {
    id: 'solar-testing-danang',
    title: 'Thử nghiệm mạch sạc TP4056 & MOSFET IRF4905 dưới cái nắng Đà Nẵng: Bài học tối ưu nguồn năng lượng',
    category: 'Nhật ký R&D & Trạm Nắng',
    date: '02/10/2026',
    author: 'Trần Trần Thảo Ngọc & Đội ngũ Kỹ thuật',
    image: '/assets/images/1595b43f57ec520a9a1f68274689730c87a2b65c.png',
    excerpt: 'Báo cáo chi tiết về thông số dòng nạp, cơ chế tự động bật tắt đèn bằng MOSFET IRF4905 và giải pháp tản nhiệt cho pin Li-ion 18650 trong điều kiện thực địa.',
    readTime: '8 phút đọc'
  },
  {
    id: 'lao-than-field-test',
    title: 'Chiến dịch "Thử Nắng Giữa Đường": 48 giờ cùng nhóm nữ Trekker kiểm nghiệm mẫu GuiNang Trail V1',
    category: 'Cẩm nang Trekking',
    date: '18/09/2026',
    author: 'Nhóm trải nghiệm thực địa GuiNang',
    image: '/assets/images/6de495ed65dbb40e4b88642bad776e96c19a1cd7.png',
    excerpt: 'Cùng nhóm nữ Trekker mang nguyên mẫu GuiNang Trail lên độ cao 2.860m đỉnh Lảo Thẩn để đo độ êm quai đeo, hiệu quả khung trợ lực và độ ổn định cụm đèn Solar Lamp.',
    readTime: '5 phút đọc'
  }
];

export const TEAM_MEMBERS = [
  {
    id: 'nhat-quang',
    name: 'LÊ NHẬT QUANG',
    role: 'HEAD OF TECHNOLOGY & DIGITAL PLATFORM (CTO)',
    titleVi: 'Giám Đốc Công Nghệ & Nền Tảng Số',
    nickname: 'Quang',
    dept: 'Sinh viên năm 3, lớp 50K22.1, Khoa Thương mại điện tử, Marketing và Công nghệ số – Trường Đại học Kinh tế, ĐH Đà Nẵng',
    initials: 'NQ',
    avatar: '/assets/team/nhat-quang.jpg',
    objectPosition: 'center 15%',
    desc: 'Phụ trách kiến trúc hệ sinh thái số: phát triển Website chính thức, thiết kế giao diện ứng dụng di động GuiNang App, tích hợp hệ thống NFC/QR Product Passport và cổng Donation Tracking.',
    responsibilities: [
      {
        category: 'Công nghệ & Nền tảng số',
        items: [
          'Xây dựng và vận hành Website thương mại điện tử và thông tin dự án GuiNang',
          'Thiết kế UI/UX và lộ trình phát triển ứng dụng di động GuiNang App cho người đi outdoor',
          'Tích hợp chip NFC định danh trên từng sản phẩm; xây dựng hệ thống Hộ chiếu sản phẩm số (Product Passport)',
          'Phát triển cổng tra cứu tài trợ minh bạch (Donation Tracking) cho nhà hảo tâm và doanh nghiệp CSR'
        ]
      }
    ]
  },
  {
    id: 'thao-ngoc',
    name: 'TRẦN TRẦN THẢO NGỌC',
    role: 'HEAD OF PRODUCT & R&D (CPO)',
    titleVi: 'Giám Đốc Sản Phẩm & Nghiên Cứu Phát Triển',
    nickname: 'Meo',
    dept: 'Sinh viên năm 3, lớp 50K22.1, Khoa Thương mại điện tử, Marketing và Công nghệ số – Trường Đại học Kinh tế, ĐH Đà Nẵng',
    initials: 'TN',
    avatar: '/assets/team/thao-ngoc.jpg',
    objectPosition: 'center 15%',
    desc: 'Hoàn thiện thiết kế GuiNang Trail & GuiNang Edu, nghiên cứu thông số kỹ thuật (pin 18650, tấm PV, mạch sạc), thiết lập quy trình kiểm định IQC/QC tại Xưởng Trạm Nắng.',
    responsibilities: [
      {
        category: 'Nghiên cứu & Phát triển Sản phẩm',
        items: [
          'Thiết kế kết cấu balo: Vải Ripstop 420D–600D phủ TPU, đáy 900D, khung trợ lực, đệm 3D mesh và dải phản quang an toàn',
          'Tối ưu thông số kỹ thuật đèn Solar Lamp: Mạch sạc TP4056, MOSFET IRF4905, pin 18650 và LED COB 3W',
          'Xây dựng và vận hành Xưởng Trạm Nắng (180 m² tại Đà Nẵng) với 8 phân khu và quy trình 1 chiều nghiêm ngặt',
          'Tổ chức thử nghiệm mẫu V1, V2; kiểm định chống nước, an toàn pin và chuẩn hóa chính sách bảo hành 6–12 tháng'
        ]
      }
    ]
  },
  {
    id: 'thanh-thao',
    name: 'NGUYỄN THỊ THANH THẢO',
    role: 'LEADER / FOUNDER & CEO',
    titleVi: 'Trưởng Nhóm / Tổng Giám Đốc',
    nickname: 'Thảo',
    dept: 'Sinh viên năm 3, lớp 50K22.1, Khoa Thương mại điện tử, Marketing và Công nghệ số – Trường Đại học Kinh tế, ĐH Đà Nẵng',
    initials: 'TT',
    avatar: '/assets/team/thanh-thao.jpg',
    objectPosition: 'center 15%',
    phone: '0905409257',
    email: 'ntthanhthao.2016@gmail.com',
    desc: 'Khởi xướng và điều hành tổng thể dự án GuiNang; hoạch định chiến lược phát triển, quản lý tiến độ và ngân sách tài chính; kết nối đối tác cấp cao CSR và các tổ chức xã hội.',
    responsibilities: [
      {
        category: 'Điều hành & Hoạch định Chiến lược',
        items: [
          'Khởi xướng sứ mệnh và định hướng phát triển tổng thể thương hiệu GuiNang',
          'Quản lý tiến độ triển khai dự án, phân bổ ngân sách và quản trị dòng tiền',
          'Đại diện làm việc với các nhà tài trợ, doanh nghiệp CSR, tổ chức phi lợi nhuận (B2N) và các trường học vùng cao',
          'Điều phối liên kết giữa 4 mảng: Sản phẩm R&D, Công nghệ số, Kinh doanh và Marketing'
        ]
      }
    ]
  },
  {
    id: 'minh-kha',
    name: 'ĐÀO NGỌC MINH KHA',
    role: 'HEAD OF BUSINESS DEVELOPMENT (CSO / BDO)',
    titleVi: 'Giám Đốc Phát Triển Kinh Doanh & Đối Tác',
    nickname: 'Kha',
    dept: 'Sinh viên năm 3, lớp 50K22.1, Khoa Thương mại điện tử, Marketing và Công nghệ số – Trường Đại học Kinh tế, ĐH Đà Nẵng',
    initials: 'Kha',
    avatar: '/assets/team/minh-kha.jpg',
    objectPosition: 'center 15%',
    desc: 'Phụ trách nghiên cứu thị trường, kế hoạch kinh doanh 3 giai đoạn; phát triển mạng lưới phân phối B2C, tiếp cận các đối tác tài trợ doanh nghiệp B2B và điều phối chương trình GuiNang Edu.',
    responsibilities: [
      {
        category: 'Kinh doanh & Phát triển Đối tác',
        items: [
          'Khảo sát thị trường outdoor và phân tích nhu cầu chiếu sáng tại các điểm trường vùng cao',
          'Xây dựng kế hoạch kinh doanh và mở rộng kênh phân phối: Website, sàn TMĐT, cửa hàng outdoor đối tác',
          'Tiếp cận doanh nghiệp B2B, tổ chức phi lợi nhuận (B2N) và trường học để triển khai các gói tài trợ GuiNang Edu',
          'Điều phối quy trình tiếp nhận tài trợ, kiểm chứng nhu cầu, tổ chức trao tặng và chăm sóc khách hàng'
        ]
      }
    ]
  },
  {
    id: 'minh-khanh',
    name: 'LÊ NGỌC MINH KHÁNH',
    role: 'HEAD OF MARKETING & COMMUNICATIONS (CMO)',
    titleVi: 'Giám Đốc Marketing & Truyền Thông',
    nickname: 'Khánh',
    dept: 'Sinh viên năm 3, lớp 50K22.1, Khoa Thương mại điện tử, Marketing và Công nghệ số – Trường Đại học Kinh tế, ĐH Đà Nẵng',
    initials: 'MK',
    avatar: '/assets/team/minh-khanh.jpg',
    objectPosition: 'center 15%',
    desc: 'Xây dựng nhận diện thương hiệu GuiNang, Mascot Voọc; lập kế hoạch Marketing Master Plan 2026–2029 với 18 chiến dịch chủ đạo (ngân sách 646 triệu VNĐ) và quản trị truyền thông tích hợp.',
    responsibilities: [
      {
        category: 'Marketing & Nhận diện Thương hiệu',
        items: [
          'Định vị thương hiệu GuiNang (Gùi Nắng), Slogan "Nắng theo chân, sáng muôn miền" và Mascot Voọc chà vá chân nâu',
          'Xây dựng hệ thống nhận diện: Bảng màu thiên nhiên rừng núi, typography, moodboard và quy chuẩn thiết kế',
          'Lập kế hoạch Marketing Master Plan 2026–2029 gồm 18 chiến dịch (Thắp Nắng, Lan Nắng, Nối Nắng) với ngân sách 646.000.000đ',
          'Triển khai truyền thông đa kênh: Mạng xã hội, KOC outdoor, sự kiện trải nghiệm thực tế và lan tỏa giá trị xã hội'
        ]
      }
    ]
  }
];

export const MARKETING_PLAN = {
  budget: '646.000.000 VNĐ',
  totalCampaigns: 18,
  period: '01/10/2026 – 30/09/2029 (36 tháng)',
  phases: [
    {
      id: 'thap-nang',
      name: 'Giai đoạn 1: Thắp Nắng',
      period: '01/10/2026 – 30/09/2027',
      budget: '144.000.000 VNĐ',
      focus: 'Nghiên cứu thị trường, kiểm chứng nhu cầu, hoàn thiện mẫu V1/V2, bố trí Xưởng Trạm Nắng và thử nghiệm thực địa',
      campaigns: [
        { name: 'Lắng Nghe Những Đôi Vai', desc: 'Nghiên cứu thị trường sâu, xác định nỗi đau & insight của trekker và học sinh vùng cao' },
        { name: 'Gọi Nắng Vào Gùi', desc: 'Giới thiệu thương hiệu GuiNang, website chính thức và sản phẩm mẫu V1' },
        { name: 'Gùi Nắng 2.0', desc: 'Truyền thông quá trình cải tiến kỹ thuật và ra mắt nguyên mẫu V2 hoàn thiện' },
        { name: 'Thử Nắng Giữa Đường', desc: 'Tổ chức các chuyến đi thực địa với nữ Trekker, tạo bằng chứng công năng và kiểm chứng an toàn' }
      ]
    },
    {
      id: 'lan-nang',
      name: 'Giai đoạn 2: Lan Nắng',
      period: '01/10/2027 – 30/09/2028',
      budget: '261.000.000 VNĐ',
      focus: 'Thương mại hóa chính thức, mở bán qua website và kênh TMĐT, giao đơn quà Tết, triển khai lô GuiNang Edu đầu tiên trước khai giảng',
      campaigns: [
        { name: 'Hai Gùi, Một Mặt Trời', desc: 'Giới thiệu chính thức 2 dòng sản phẩm thương mại: GuiNang Trail và GuiNang Edu' },
        { name: 'Tết Gùi Nắng Về', desc: 'Mở bán dịp Tết, tiếp nhận đơn quà tặng doanh nghiệp CSR và chương trình ưu đãi Early-Bird' },
        { name: 'Xách Gùi Lên Đường', desc: 'Tiếp cận cộng đồng outdoor và các câu lạc bộ leo núi thông qua chuỗi workshop trải nghiệm' },
        { name: 'Bước Chân Thắp Nắng', desc: 'Thử thách trekking cộng đồng: mỗi km bước chân quy đổi thành quỹ ủng hộ trẻ em nghèo' },
        { name: 'Đường Đến Lớp Có Nắng', desc: 'Bàn giao các lô GuiNang Edu cho học sinh vùng cao trước thềm năm học mới' }
      ]
    },
    {
      id: 'noi-nang',
      name: 'Giai đoạn 3: Nối Nắng',
      period: '01/10/2028 – 30/09/2029',
      budget: '241.000.000 VNĐ',
      focus: 'Mở rộng thị trường, phát triển hệ thống hội viên GuiNang App, đa dạng hóa chương trình CSR học bổng và phát triển bền vững',
      campaigns: [
        { name: 'Hội Những Người Gùi Nắng', desc: 'Phát triển cộng đồng hội viên, đặc quyền thành viên và hoạt động giao lưu khám phá' },
        { name: 'Tết Nối Nắng', desc: 'Chương trình tri ân khách hàng, tổng kết tác động xã hội và duy trì quan hệ đối tác B2B' },
        { name: 'Một Gùi, Nhiều Hành Trình', desc: 'Lan tỏa câu chuyện hành trình của người dùng Trail và học sinh nhận cặp Edu' },
        { name: 'Bản Đồ Trạm Nắng', desc: 'Minh bạch hóa toàn bộ dữ liệu tác động xã hội trên bản đồ số tương tác' }
      ]
    }
  ]
};

export const IMPACT_METRICS = {
  bagsDeployed: '2.950+',
  bagsUnit: 'Bộ GuiNang Edu dự kiến trao tặng trong 3 năm',
  villagesReached: '15+',
  villagesUnit: 'Điểm trường & xã bản vùng cao tiếp cận ánh sáng',
  yearOneTarget: '300 Bộ',
  yearTwoTarget: '850 Bộ',
  yearThreeTarget: '1.800 Bộ',
  trailOutput: '1.500 Chiếc',
  trailOutputDesc: 'Balo GuiNang Trail đồng hành cùng cộng đồng outdoor',
  studyHoursLit: '18.000+',
  studyHoursUnit: 'Giờ học ban đêm an toàn được thắp sáng',
  co2Offset: '1.2 Tấn',
  co2Unit: 'Giảm thải tương đương pin khô dùng 1 lần & đèn dầu',
  workshopArea: '180 m²',
  workshopDesc: 'Diện tích Xưởng Trạm Nắng Đà Nẵng với 8 phân khu vận hành chuẩn'
};

export const FAQS = [
  {
    category: 'Thương hiệu & Ý nghĩa',
    question: 'Tên gọi "GuiNang" và slogan có ý nghĩa gì?',
    answer: 'GuiNang (Gùi Nắng) kết hợp giữa "Gùi" - vật dụng mang vác bền bỉ, gắn bó sâu sắc với đồng bào miền núi và hành trình khám phá thiên nhiên, và "Nắng" - nguồn năng lượng mặt trời vô tận và ánh sáng hy vọng. Slogan "Nắng theo chân, sáng muôn miền" thể hiện hai tầng ý nghĩa: nguồn năng lượng đồng hành cùng bước chân khám phá cá nhân, và lan tỏa ánh sáng học đường đến các em nhỏ tại mọi miền xa xôi.'
  },
  {
    category: 'Sản phẩm & Hiệu năng',
    question: 'Trời mưa hoặc nhiều mây thì balo có sạc và phát sáng được không?',
    answer: 'Hoàn toàn được. Không giống các dòng balo solar giá rẻ chỉ chạy trực tiếp từ tấm pin, GuiNang tích hợp khối pin Li-ion 18650 làm lõi lưu trữ (5.000 mAh trên Trail và 18,5 Wh trên Edu). Năng lượng được tích trữ liên tục khi có nắng và duy trì chiếu sáng từ 6 đến 51 tiếng ngay cả khi trời mưa bão nhiều ngày.'
  },
  {
    category: 'Sản phẩm & Hiệu năng',
    question: 'Cơ chế tự động bật tắt của đèn Solar Lamp hoạt động thế nào?',
    answer: 'Cụm đèn Solar Lamp sử dụng mạch sạc TP4056 kết hợp MOSFET kênh P IRF4905. Ban ngày khi tấm pin mặt trời xuất điện áp (>5V), chân Gate bị kích mức cao làm MOSFET tắt, ngắt dòng điện vào đèn và chuyển sang sạc pin. Khi trời tối, điện áp tấm pin tụt về 0V, điện trở 10k kéo Gate xuống đất làm MOSFET tự động mở dòng cho đèn LED COB sáng. Ngoài ra, người dùng có thể chủ động bật/tắt thủ công bằng công tắc cơ.'
  },
  {
    category: 'An toàn & Chất lượng',
    question: 'Balo mang đi mưa rừng và mang lên máy bay có an toàn không?',
    answer: 'Cực kỳ an toàn. Hộp module điện được bọc kín chịu nhiệt và chống nước; pin lithium 18650 được kiểm định theo chuẩn an toàn UN 38.3 và IEC 62133-2. Dung lượng pin tối đa 37 Wh, hoàn toàn đáp ứng tiêu chuẩn an toàn hàng không IATA (dưới 100 Wh được phép mang trong hành lý xách tay).'
  },
  {
    category: 'Mô hình Xã hội & Trợ giá',
    question: 'Cơ chế trợ giá chéo và gói tài trợ GuiNang Edu hoạt động ra sao?',
    answer: 'Doanh nghiệp GuiNang áp dụng cơ chế trợ giá chéo: trích một phần lợi nhuận từ dòng thương mại GuiNang Trail trong hạn mức xác định để hỗ trợ chi phí vận chuyển và bảo hành cho dòng GuiNang Edu. Đối với nhà tài trợ doanh nghiệp (CSR) hoặc nhà hảo tâm, gói GuiNang Edu có giá 880.000đ/bộ, được trao tận tay học sinh với đầy đủ minh chứng qua hệ thống Donation Tracking.'
  },
  {
    category: 'Hộ chiếu số NFC',
    question: 'Hộ chiếu sản phẩm số (Product Passport NFC) dùng để làm gì?',
    answer: 'Mỗi chiếc balo/cặp GuiNang đều được gắn một chip NFC với mã định danh duy nhất. Chỉ cần chạm điện thoại có NFC: người dùng Trail có thể kích hoạt bảo hành điện tử, xem hồ sơ kỹ thuật và hướng dẫn sử dụng; còn với dòng Edu, cán bộ trao tặng chạm NFC để ghi nhận bàn giao và tải ảnh xác thực lên website cho nhà tài trợ kiểm chứng.'
  }
];

export const ADVISORY_NETWORK = [
  {
    id: 'business-startup',
    domain: 'Quản trị kinh doanh và khởi nghiệp',
    scope: 'Mô hình kinh doanh, chiến lược giá, quản trị nguồn lực, kế hoạch thương mại hóa',
    advisorsText: [
      'Cố vấn hỗ trợ: Giảng viên trường Đại học Kinh tế – Đại học Đà Nẵng',
      'Cố vấn trực tiếp: Th.S Nguyễn Văn Chức – Giảng viên chính Khoa Thương Mại Điện Tử - Marketing và Công nghệ số',
      'Cố vấn doanh nghiệp:',
      '• Anh Nhật Trần – Founder & CEO của Gengidi Agency, Giám đốc văn phòng Đà Nẵng tại công ty Level Up Đà Nẵng',
      '• Trần Anh Khoa – Founder & CEO của Enjoy Creative Agency - DMHub',
      'Tổ chức hỗ trợ khởi nghiệp & Vườn ươm ĐH Đà Nẵng'
    ]
  },
  {
    id: 'electrical-solar',
    domain: 'Điện – điện tử, năng lượng mặt trời',
    scope: 'Mạch điện TP4056, MOSFET IRF4905, pin 18650, hiệu suất, an toàn pin và tản nhiệt',
    advisorsText: [
      'Kỹ sư chất lượng cao (Khoa Điện) Đại học Bách khoa – Đại học Đà Nẵng:',
      '• Nguyễn Thị Lan Anh',
      '• Nguyễn Đức Thanh Thế',
      '• Nguyễn Mạnh Chiến',
      'Phòng thử nghiệm kỹ thuật tại Đại học Bách khoa – Đại học Đà Nẵng'
    ]
  },
  {
    id: 'backpack-design',
    domain: 'Thiết kế và sản xuất balo',
    scope: 'Vật liệu Ripstop 420D-600D, đáy 900D, rập may, khung trợ lực và quy trình may gia công',
    advisorsText: [
      'Xưởng may chuyên dụng tại Đà Nẵng',
      'Chuyên gia thiết kế rập công thái học cho thiết bị ngoài trời'
    ]
  },
  {
    id: 'software-dev',
    domain: 'Phát triển phần mềm & Nền tảng số',
    scope: 'Kiến trúc hệ thống Website, App di động, NFC Product Passport và bảo mật dữ liệu',
    advisorsText: [
      'Kỹ sư phần mềm cao cấp Workday: Nguyễn Thanh Đô',
      'Chuyên gia kiến trúc hệ thống và bảo mật dữ liệu'
    ]
  },
  {
    id: 'finance-legal',
    domain: 'Kế toán, tài chính và pháp lý',
    scope: 'Cấu trúc vốn đầu tư 1,6 tỷ đồng, hợp đồng cung ứng, thuế và sở hữu trí tuệ',
    advisorsText: [
      'Cố vấn tài chính doanh nghiệp',
      'Luật sư tư vấn pháp lý và sở hữu trí tuệ'
    ]
  },
  {
    id: 'csr-community',
    domain: 'CSR và hoạt động cộng đồng',
    scope: 'Xác minh nhu cầu điểm trường, quy trình bàn giao, minh bạch tài trợ và bảo vệ quyền trẻ em',
    advisorsText: [
      'Đại diện tổ chức tình nguyện và Đoàn Thanh niên',
      'Chuyên gia giáo dục vùng cao và đại diện cộng đồng thụ hưởng Nam Trà My, Tây Giang'
    ]
  }
];
