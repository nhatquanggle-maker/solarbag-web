import express from 'express';
import cors from 'cors';
import Database from 'better-sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS and JSON parsing
app.use(cors());
app.use(express.json());

// Initialize SQLite database file in project root
const dbPath = path.join(__dirname, 'solarbag.db');
const db = new Database(dbPath);

// Enable WAL mode for high performance
db.pragma('journal_mode = WAL');

// Create tables if not exist
db.exec(`
  CREATE TABLE IF NOT EXISTS orders (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    order_code TEXT UNIQUE,
    full_name TEXT,
    phone TEXT,
    email TEXT,
    address TEXT,
    city TEXT,
    district TEXT,
    note TEXT,
    payment_method TEXT,
    items_json TEXT,
    total_amount INTEGER,
    discount_amount INTEGER,
    final_total INTEGER,
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS sponsorships (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    sponsor_code TEXT UNIQUE,
    donor_name TEXT,
    donor_email TEXT,
    quantity INTEGER,
    total_amount INTEGER,
    message TEXT,
    school_name TEXT DEFAULT 'Điểm trường Lăng, Tây Giang, Quảng Nam',
    status TEXT DEFAULT 'confirmed',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS tickets (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    ticket_code TEXT UNIQUE,
    name TEXT,
    phone TEXT,
    email TEXT,
    topic TEXT,
    message TEXT,
    status TEXT DEFAULT 'open',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS warranty_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    warranty_code TEXT UNIQUE,
    serial_number TEXT,
    full_name TEXT,
    phone TEXT,
    issue_description TEXT,
    status TEXT DEFAULT 'processing',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS newsletter_subscribers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email_or_phone TEXT,
    source TEXT DEFAULT 'website',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

console.log('SQLite database initialized at:', dbPath);

// ==================== API ROUTES ====================

// 1. ORDERS
app.post('/api/orders', (req, res) => {
  try {
    const {
      fullName, phone, email, address, city, district, note,
      paymentMethod, items, totalAmount, discountAmount, finalTotal
    } = req.body;

    const orderCode = 'SB-ORD-' + Math.floor(100000 + Math.random() * 900000);
    const itemsJson = JSON.stringify(items || []);

    const stmt = db.prepare(`
      INSERT INTO orders (
        order_code, full_name, phone, email, address, city, district, note,
        payment_method, items_json, total_amount, discount_amount, final_total
      ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `);

    stmt.run(
      orderCode, fullName, phone, email, address, city || '', district || '',
      note || '', paymentMethod || 'cod', itemsJson, totalAmount || 0,
      discountAmount || 0, finalTotal || 0
    );

    res.json({ success: true, orderCode, message: 'Đơn hàng đã được lưu vào SQLite!' });
  } catch (error) {
    console.error('Order error:', error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/orders', (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM orders ORDER BY id DESC').all();
    const parsed = rows.map(r => ({
      ...r,
      items: r.items_json ? JSON.parse(r.items_json) : []
    }));
    res.json({ success: true, data: parsed });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/orders/track/:code', (req, res) => {
  try {
    const row = db.prepare('SELECT * FROM orders WHERE order_code = ?').get(req.params.code.toUpperCase());
    if (row) {
      row.items = row.items_json ? JSON.parse(row.items_json) : [];
      res.json({ success: true, data: row });
    } else {
      res.status(404).json({ success: false, message: 'Không tìm thấy đơn hàng' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 2. SPONSORSHIPS
app.post('/api/sponsorships', (req, res) => {
  try {
    const { donorName, donorEmail, quantity, totalAmount, message } = req.body;
    const sponsorCode = 'SB-DONOR-' + Math.floor(1000 + Math.random() * 9000);

    const stmt = db.prepare(`
      INSERT INTO sponsorships (sponsor_code, donor_name, donor_email, quantity, total_amount, message)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    stmt.run(sponsorCode, donorName, donorEmail, quantity || 1, totalAmount || 850000, message || '');

    res.json({ success: true, sponsorCode, message: 'Thông tin tài trợ đã lưu vào SQLite!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/sponsorships', (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM sponsorships ORDER BY id DESC').all();
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/sponsorships/track/:code', (req, res) => {
  try {
    const row = db.prepare('SELECT * FROM sponsorships WHERE sponsor_code = ?').get(req.params.code.toUpperCase());
    if (row) {
      res.json({ success: true, data: row });
    } else {
      res.status(404).json({ success: false, message: 'Không tìm thấy mã tài trợ' });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 3. TICKETS
app.post('/api/tickets', (req, res) => {
  try {
    const { name, phone, email, topic, message } = req.body;
    const ticketCode = 'SB-TICKET-' + Math.floor(1000 + Math.random() * 9000);

    const stmt = db.prepare(`
      INSERT INTO tickets (ticket_code, name, phone, email, topic, message)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    stmt.run(ticketCode, name, phone, email, topic, message);

    res.json({ success: true, ticketCode, message: 'Ticket hỗ trợ đã lưu vào SQLite!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/tickets', (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM tickets ORDER BY id DESC').all();
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 4. WARRANTY
app.post('/api/warranty', (req, res) => {
  try {
    const { serialNumber, fullName, phone, issueDescription } = req.body;
    const warrantyCode = 'BH-2026-' + Math.floor(1000 + Math.random() * 9000);

    const stmt = db.prepare(`
      INSERT INTO warranty_requests (warranty_code, serial_number, full_name, phone, issue_description)
      VALUES (?, ?, ?, ?, ?)
    `);

    stmt.run(warrantyCode, serialNumber, fullName, phone, issueDescription);

    res.json({ success: true, warrantyCode, message: 'Yêu cầu bảo hành đã lưu vào SQLite!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/warranty', (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM warranty_requests ORDER BY id DESC').all();
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 5. NEWSLETTER
app.post('/api/newsletter', (req, res) => {
  try {
    const { emailOrPhone, source } = req.body;
    const stmt = db.prepare(`
      INSERT INTO newsletter_subscribers (email_or_phone, source)
      VALUES (?, ?)
    `);
    stmt.run(emailOrPhone, source || 'website');
    res.json({ success: true, message: 'Đã lưu email nhận ưu đãi!' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

app.get('/api/newsletter', (req, res) => {
  try {
    const rows = db.prepare('SELECT * FROM newsletter_subscribers ORDER BY id DESC').all();
    res.json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// 6. DASHBOARD STATS
app.get('/api/stats', (req, res) => {
  try {
    const orderCount = db.prepare('SELECT COUNT(*) as count, COALESCE(SUM(final_total), 0) as total FROM orders').get();
    const sponsorCount = db.prepare('SELECT COUNT(*) as count, COALESCE(SUM(quantity), 0) as bags FROM sponsorships').get();
    const ticketCount = db.prepare('SELECT COUNT(*) as count FROM tickets').get();
    const warrantyCount = db.prepare('SELECT COUNT(*) as count FROM warranty_requests').get();
    const subscriberCount = db.prepare('SELECT COUNT(*) as count FROM newsletter_subscribers').get();

    res.json({
      success: true,
      data: {
        totalOrders: orderCount.count,
        totalRevenue: orderCount.total,
        totalSponsors: sponsorCount.count,
        totalBagsSponsored: sponsorCount.bags,
        totalTickets: ticketCount.count,
        totalWarrantyClaims: warrantyCount.count,
        totalSubscribers: subscriberCount.count
      }
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Start express server
app.listen(PORT, () => {
  console.log(`SolarBag SQLite API Server is running on http://localhost:${PORT}`);
});

