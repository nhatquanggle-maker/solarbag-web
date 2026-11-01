// SolarBag Official Mock Data - Extracted from Figma Design File 7MZVGFPkeFh2B1Usl35jgd

export const PRODUCTS = [
  {
    id: 'solarbag-pro',
    name: 'SolarBag Pro',
    category: 'TREKKING / CAMPING',
    status: 'Đang thử nghiệm / Sắp ra mắt',
    badge: 'Flagship Series',
    price: 1650000,
    priceFormatted: '1.650.000đ',
    priceNote: 'Giá mục tiêu · Early-Bird',
    description: 'Dành cho trekker, hiker và camper. Dung lượng pin lớn, sạc điện thoại + GPS, bảo vệ chuẩn IPX5/IPX6 và quai đeo công thái học trợ lực.',
    shortSpecs: '5.000 / 10.000 mAh · Type-C / USB · Quai trợ lực',
    image: '/assets/images/f07df218a363e35785a95f4364dfb00b0a8ab664.png',
    link: '/products/solarbag-pro',
    specs: {
      battery: 'Li-ion 5.000 / 10.000 mAh · BMS bảo vệ đa tầng',
      solar: 'Quang điện CIGS linh hoạt 15W',
      material: 'Vải bạt tái chế kháng nước · EVA lưng thoáng khí',
      ports: 'Type-C PD 18W + USB-A Quick Charge · NFC quai đeo',
      dimensions: '52 × 32 × 20 cm · 35L',
      weight: '1.45 kg (Nguyên mẫu thử nghiệm)',
      waterproof: 'IPX6 kháng nước áp lực mưa rừng',
    },
    features: [
      {
        title: 'Năng lượng di động',
        desc: 'Tấm quang điện CIGS linh hoạt kết hợp pin tích trữ, hỗ trợ sạc liên tục điện thoại, đèn pin và thiết bị GPS ngay khi di chuyển dưới nắng.'
      },
      {
        title: 'Bền bỉ trước thời tiết',
        desc: 'Vải bạt tái chế chống xước rách, phủ TPU kháng nước, cấu trúc bảo vệ mạch sạc độc lập chuẩn IPX5/IPX6 chịu được sương mù và mưa rào.'
      },
      {
        title: 'Thoải mái đường dài',
        desc: 'Đệm lưng EVA thoáng khí dạng tổ ong kết hợp đai ngực và đai hông trợ lực giúp giảm 30% áp lực dồn lên cột sống khi gùi nặng.'
      }
    ]
  },
  {
    id: 'solarbag-lite',
    name: 'SolarBag Lite',
    category: 'HỌC TẬP / TÀI TRỢ BẢN CAO',
    status: 'Đang thử nghiệm / Sắp ra mắt',
    badge: 'Community Light Edition',
    price: 850000,
    priceFormatted: '850.000đ',
    priceNote: 'Giá mục tiêu · Dự án hỗ trợ',
    description: 'Thiết kế tinh gọn dành cho học sinh vùng cao và nhu cầu hàng ngày: sạc đèn học tháo rời một chạm, nhẹ nhàng và siêu bền bỉ.',
    shortSpecs: '3.000 mAh · Đèn LED đọc sách tháo rời · Trọng lượng nhẹ',
    image: '/assets/images/f77e12bdb6a411ee17f7d138f4d0fd634a28a1d4.png',
    link: '/products/solarbag-lite',
    specs: {
      battery: 'Li-ion 3.000 mAh Grade A an toàn tuyệt đối',
      solar: 'Quang điện CIGS 7W bề mặt trước',
      material: 'Vải dù tái chế chống thấm, chống bám bẩn',
      ports: 'Type-C + Chân tiếp xúc nam châm cho đèn',
      dimensions: '42 × 28 × 15 cm · 20L',
      weight: '680g siêu nhẹ cho học sinh',
      waterproof: 'IPX4 chống mưa hắt hàng ngày',
    },
    features: [
      {
        title: 'Khi nắng trên vai ở lại bên trang sách',
        desc: 'Học sinh đi bộ đến trường dưới nắng để sạc đầy pin; buổi tối tháo đèn LED ra học bài suốt 6–8 tiếng mà không phụ thuộc điện lưới.'
      },
      {
        title: 'Ít phức tạp hơn. Đúng nhu cầu hơn.',
        desc: 'Loại bỏ các cổng sạc rườm rà, tập trung vào độ bền vật lý, đèn học đa năng bảo vệ thị lực và khả năng chống va đập.'
      },
      {
        title: 'Một chiếc balo, một hành trình được chăm sóc',
        desc: 'Tích hợp thẻ NFC tra cứu ngày trao tặng, thông tin đơn vị bảo trợ và nhật ký bảo trì miễn phí trọn đời.'
      }
    ]
  },
  {
    id: 'cigs-panel-15w',
    name: 'Tấm quang điện CIGS 15W',
    category: 'MODULE PHỤ KIỆN',
    status: 'Đang thử nghiệm',
    badge: 'Accessory',
    price: 350000,
    priceFormatted: '350.000đ',
    priceNote: 'Giá dự kiến',
    description: 'Module tấm quang điện CIGS dẻo tháo rời, có thể gập gọn, hiệu suất quang điện cao ngay cả trong điều kiện nắng tán xạ hoặc mây mù.',
    shortSpecs: '15W Max · Chuẩn tháo rời khóa nam châm · Trọng lượng 180g',
    image: '/assets/images/fa344fb966908adf2a5e47150da8675b1bf7804b.png',
    link: '/products/technology',
    specs: {
      power: '15W CIGS Flexible Film',
      efficiency: '17.2% trong điều kiện tiêu chuẩn',
      connector: 'Chân pin từ tính IP67',
    }
  },
  {
    id: 'lamp-multipurpose',
    name: 'Đèn tháo rời đa năng SolarLight',
    category: 'MODULE PHỤ KIỆN',
    status: 'Đang thử nghiệm',
    badge: 'Accessory',
    price: 220000,
    priceFormatted: '220.000đ',
    priceNote: 'Giá dự kiến',
    description: 'Chiếc đèn nhỏ gọn gắn trên quai hoặc nóc balo, tích hợp 3 chế độ: Đèn đọc sách chống mỏi mắt, Đèn pin soi đường trekking và Đèn chớp cứu hộ SOS.',
    shortSpecs: '3 Chế độ (Đọc sách / Pin / SOS) · 300 Lumens · Pin 1200mAh',
    image: '/assets/images/7979fa915a7086e80d0b025294ffb7f5ae203daa.png',
    link: '/products/technology',
    specs: {
      modes: 'Đọc sách 4000K dịu mắt / Đèn pin chiếu xa / SOS cứu hộ',
      battery: '1200mAh tích hợp',
      mount: 'Đế hít nam châm + Kẹp quai balo',
    }
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
    description: 'Được mệnh danh là nóc nhà Y Tý, Lảo Thẩn sở hữu địa hình đồi trọc với nắng gió ngút ngàn — môi trường lý tưởng để kiểm nghiệm sức mạnh tấm pin quang điện SolarBag.',
    solarRating: 'Tuyệt vời (Sạc đầy trong 4h nắng)',
    stops: [
      { name: 'Chân núi Phìn Hồ', alt: '1.800m', note: 'Điểm tập kết, nước suối cuối cùng' },
      { name: 'Lán nghỉ A Hờ', alt: '2.560m', note: 'Điểm hạ trại, đón nắng hoàng hôn' },
      { name: 'Đỉnh Lảo Thẩn', alt: '2.860m', note: 'Biển mây Y Tý, đón bình minh' }
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
    description: 'Cung đường gió mạnh và nắng gắt trên sống núi hiểm trở. Balo trợ lực và nguồn pin dự phòng ổn định là trợ thủ sinh tồn không thể thiếu.',
    solarRating: 'Tốt (Hiệu suất cao từ 9h-15h)',
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
    description: 'Hành trình vượt qua nhiều tầng thảm thực vật từ rừng già ẩm ướt đến vách đá gió buốt. Thử nghiệm độ bền vỏ chống nước IPX6 của SolarBag Pro.',
    solarRating: 'Khá (Đón nắng đỉnh núi)',
  }
];

export const JOURNALS = [
  {
    id: 'tay-giang-journey',
    title: 'Hành trình vượt 150km rừng Tây Giang: Khi ánh sáng SolarBag lần đầu thắp sáng phòng học trên mây',
    category: 'Hoạt động Bản làng',
    date: '15/10/2026',
    author: 'Đội ngũ R&D & Cộng đồng SolarBag',
    image: '/assets/images/7cdd184be59dec8a062f677e6c3bf37ba8334d3d.png',
    excerpt: 'Góc nhìn biên tập về hành trình kết nối công nghệ và ánh sáng học tập. 50 chiếc balo SolarBag Lite đã cùng các em học sinh Cơ Tu bước vào năm học mới.',
    readTime: '6 phút đọc'
  },
  {
    id: 'cigs-testing-danang',
    title: 'Thử nghiệm tế bào quang điện CIGS dưới cái nắng 38°C tại Đà Nẵng: Kết quả và bài học thiết kế mạch sạc BMS',
    category: 'Nhật ký R&D & Chế tạo',
    date: '02/10/2026',
    author: 'Nguyễn Thanh Thảo & Kỹ sư Phần cứng',
    image: '/assets/images/1595b43f57ec520a9a1f68274689730c87a2b65c.png',
    excerpt: 'Ghi chép chi tiết về các thông số dòng nạp MOSFET IRF4905, cơ chế ngắt chống quá nhiệt và giải pháp vật liệu tản nhiệt lưng thoáng EVA.',
    readTime: '8 phút đọc'
  },
  {
    id: 'lao-than-field-test',
    title: 'Theo nắng trên một cung đường mới: 48 giờ thực địa Lảo Thẩn cùng cộng đồng Trekker Việt Nam',
    category: 'Cẩm nang Trekking',
    date: '18/09/2026',
    author: 'Nhóm trải nghiệm thực địa',
    image: '/assets/images/6de495ed65dbb40e4b88642bad776e96c19a1cd7.png',
    excerpt: 'Chúng mình cùng 12 trekker mang 6 nguyên mẫu SolarBag Pro leo lên độ cao 2.860m để ghi nhận phản hồi về trọng lượng và tốc độ sạc thiết bị GPS.',
    readTime: '5 phút đọc'
  }
];

export const TEAM_MEMBERS = [
  {
    name: 'NGUYỄN THỊ THANH THẢO',
    role: 'FOUNDER',
    dept: 'ĐH Kinh tế – ĐH Đà Nẵng',
    initials: 'TT',
    desc: 'Khởi xướng và dẫn dắt sứ mệnh dự án SolarBag, hoạch định định hướng phát triển tổng thể và kết nối mạng lưới đối tác CSR vì cộng đồng.',
    avatar: '/assets/images/5d59b10d3e2205ad52d9ebdaa019a140cc394398.png'
  },
  {
    name: 'LÊ NHẬT QUANG',
    role: 'GIÁM ĐỐC CÔNG NGHỆ',
    dept: 'ĐH Bách Khoa – ĐH Đà Nẵng',
    initials: 'NQ',
    desc: 'Chủ trì nghiên cứu tích hợp tấm quang điện CIGS uốn dẻo, tối ưu hóa mạch sạc thông minh BMS và phát triển hệ thống dữ liệu IoT.',
    avatar: '/assets/images/fc0ba1d3705038da20807943fb55ad836d082283.png'
  },
  {
    name: 'LÊ NGỌC MINH KHÁNH',
    role: 'GIÁM ĐỐC MARKETING',
    dept: 'ĐH Kinh tế – ĐH Đà Nẵng',
    initials: 'MK',
    desc: 'Lan tỏa thông điệp "Hai hành trình, một nguồn sáng", xây dựng thương hiệu xanh bền vững và phát triển cộng đồng người dùng leo núi.',
    avatar: '/assets/images/4c61e32c5bcf53831075cff1bdf5df361df0d2f6.png'
  },
  {
    name: 'ĐÀO NGỌC MINH KHA',
    role: 'GIÁM ĐỐC CHIẾN LƯỢC & PHÁT TRIỂN KINH DOANH',
    dept: 'ĐH Kinh tế – ĐH Đà Nẵng',
    initials: 'MK',
    desc: 'Xây dựng mô hình kinh doanh số bền vững, thiết lập chiến lược tiếp cận thị trường và mở rộng hợp tác tài trợ doanh nghiệp.',
    avatar: '/assets/images/11b60016e9dfc4ed420ce7f1606d8dcf8b0a55aa.png'
  },
  {
    name: 'TRẦN TRẦN THẢO NGỌC',
    role: 'GIÁM ĐỐC SẢN PHẨM & VẬN HÀNH',
    dept: 'ĐH Kinh tế – ĐH Đà Nẵng',
    initials: 'TN',
    desc: 'Thiết kế công thái học và kiểm định nguyên mẫu thực địa, chuẩn hóa quy trình chuỗi cung ứng vật liệu tái chế và vận hành trao tặng.',
    avatar: '/assets/images/1595b43f57ec520a9a1f68274689730c87a2b65c.png'
  }
];

export const IMPACT_METRICS = {
  bagsDeployed: '250+',
  bagsUnit: 'Chiếc balo ánh sáng đã trao tay',
  villagesReached: '8',
  villagesUnit: 'Điểm trường vùng cao Tây Giang & Nam Trà My',
  studyHoursLit: '18.000+',
  studyHoursUnit: 'Giờ học ban đêm được thắp sáng',
  co2Offset: '1.2 Tấn',
  co2Unit: 'Giảm thiểu phát thải tương đương pin dùng 1 lần',
};

export const FAQS = [
  {
    category: 'Sản phẩm & PV',
    question: 'SolarBag đã mở bán chính thức chưa?',
    answer: 'Hiện tại dự án SolarBag đang trong giai đoạn thử nghiệm nguyên mẫu kỹ thuật (Prototype Testing). Chúng mình đang mở cổng Đăng ký trải nghiệm Early-Bird với ưu đãi 20% khi sản phẩm ra mắt chính thức.'
  },
  {
    category: 'Sản phẩm & PV',
    question: 'Nắng yếu hoặc trời nhiều mây có sạc được không?',
    answer: 'Có. Công nghệ màng mỏng CIGS (Copper Indium Gallium Selenide) sở hữu dải hấp thụ quang phổ rộng hơn pin silicon truyền thống, vẫn duy trì tạo dòng nạp ngay cả khi ánh nắng tán xạ hoặc trời mù mây.'
  },
  {
    category: 'Pin & An toàn',
    question: 'Balo đi dưới trời mưa lớn có an toàn cho linh kiện và người đeo không?',
    answer: 'Cực kỳ an toàn. Ngăn chứa pin và mạch điều phối BMS được bọc kín trong hộp chống nước chuẩn IPX6, kèm diode ngăn dòng ngược và ngắt mạch tự động khi phát hiện quá nhiệt hay ẩm ướt.'
  },
  {
    category: 'Pin & An toàn',
    question: 'Pin trong balo có được phép mang lên máy bay không?',
    answer: 'Có. Dung lượng pin của SolarBag Pro (tối đa 10.000 mAh ~ 37Wh) và SolarBag Lite (3.000 mAh ~ 11.1Wh) hoàn toàn tuân thủ quy định an toàn hàng không IATA (dưới 100Wh được mang trong hành lý xách tay).'
  },
  {
    category: 'Chương trình Cộng đồng',
    question: 'Dự án "Cõng trời trên bản" hoạt động như thế nào?',
    answer: 'Với mỗi chiếc balo SolarBag Pro được cộng đồng khám phá ủng hộ, một phần kinh phí sẽ được trích lập trực tiếp vào quỹ sản xuất SolarBag Lite để gửi tặng học sinh tại các bản làng chưa có điện lưới.'
  },
  {
    category: 'Hộ chiếu số NFC',
    question: 'Hộ chiếu số NFC trên quai đeo dùng để làm gì?',
    answer: 'Bạn chỉ cần chạm điện thoại có NFC vào logo ở quai balo: hệ thống sẽ hiển thị nguồn gốc xuất xưởng, thời hạn bảo hành điện tử, lịch sử sửa chữa và mã đóng góp cộng đồng tương ứng.'
  }
];

