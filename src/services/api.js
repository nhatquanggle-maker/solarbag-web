// Centralized API Client for SolarBag SQLite Backend

const API_BASE = 'http://localhost:5000/api';

// Helper for fetch with timeout & fallback
async function request(endpoint, options = {}) {
  try {
    const res = await fetch(`${API_BASE}${endpoint}`, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });
    return await res.json();
  } catch (error) {
    console.warn(`[SQLite API Notice] Could not reach backend at ${API_BASE}${endpoint}:`, error.message);
    return null;
  }
}

export const api = {
  // 1. Orders
  async createOrder(orderData) {
    const res = await request('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    });
    if (res && res.success) return res;

    // Fallback: local storage
    const fallbackCode = 'SB-ORD-' + Math.floor(100000 + Math.random() * 900000);
    const existing = JSON.parse(localStorage.getItem('solarbag_local_orders') || '[]');
    existing.unshift({ ...orderData, order_code: fallbackCode, created_at: new Date().toISOString() });
    localStorage.setItem('solarbag_local_orders', JSON.stringify(existing));
    return { success: true, orderCode: fallbackCode, fallback: true };
  },

  async getOrders() {
    const res = await request('/orders');
    if (res && res.success) return res.data;
    return JSON.parse(localStorage.getItem('solarbag_local_orders') || '[]');
  },

  async trackOrder(code) {
    const res = await request(`/orders/track/${code}`);
    if (res && res.success) return res.data;

    const existing = JSON.parse(localStorage.getItem('solarbag_local_orders') || '[]');
    return existing.find(o => o.order_code === code.toUpperCase()) || null;
  },

  // 2. Sponsorships
  async createSponsorship(data) {
    const res = await request('/sponsorships', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (res && res.success) return res;

    const fallbackCode = 'SB-DONOR-' + Math.floor(1000 + Math.random() * 9000);
    const existing = JSON.parse(localStorage.getItem('solarbag_local_sponsors') || '[]');
    existing.unshift({ ...data, sponsor_code: fallbackCode, created_at: new Date().toISOString() });
    localStorage.setItem('solarbag_local_sponsors', JSON.stringify(existing));
    return { success: true, sponsorCode: fallbackCode, fallback: true };
  },

  async getSponsorships() {
    const res = await request('/sponsorships');
    if (res && res.success) return res.data;
    return JSON.parse(localStorage.getItem('solarbag_local_sponsors') || '[]');
  },

  async trackSponsorship(code) {
    const res = await request(`/sponsorships/track/${code}`);
    if (res && res.success) return res.data;

    const existing = JSON.parse(localStorage.getItem('solarbag_local_sponsors') || '[]');
    return existing.find(s => s.sponsor_code === code.toUpperCase()) || null;
  },

  // 3. Tickets
  async createTicket(data) {
    const res = await request('/tickets', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (res && res.success) return res;

    const fallbackCode = 'SB-TICKET-' + Math.floor(1000 + Math.random() * 9000);
    const existing = JSON.parse(localStorage.getItem('solarbag_local_tickets') || '[]');
    existing.unshift({ ...data, ticket_code: fallbackCode, created_at: new Date().toISOString() });
    localStorage.setItem('solarbag_local_tickets', JSON.stringify(existing));
    return { success: true, ticketCode: fallbackCode, fallback: true };
  },

  async getTickets() {
    const res = await request('/tickets');
    if (res && res.success) return res.data;
    return JSON.parse(localStorage.getItem('solarbag_local_tickets') || '[]');
  },

  // 4. Warranty
  async createWarranty(data) {
    const res = await request('/warranty', {
      method: 'POST',
      body: JSON.stringify(data),
    });
    if (res && res.success) return res;

    const fallbackCode = 'BH-2026-' + Math.floor(1000 + Math.random() * 9000);
    const existing = JSON.parse(localStorage.getItem('solarbag_local_warranty') || '[]');
    existing.unshift({ ...data, warranty_code: fallbackCode, created_at: new Date().toISOString() });
    localStorage.setItem('solarbag_local_warranty', JSON.stringify(existing));
    return { success: true, warrantyCode: fallbackCode, fallback: true };
  },

  async getWarrantyRequests() {
    const res = await request('/warranty');
    if (res && res.success) return res.data;
    return JSON.parse(localStorage.getItem('solarbag_local_warranty') || '[]');
  },

  // 5. Newsletter
  async subscribeNewsletter(emailOrPhone, source = 'website') {
    const res = await request('/newsletter', {
      method: 'POST',
      body: JSON.stringify({ emailOrPhone, source }),
    });
    return res || { success: true, fallback: true };
  },

  // 6. Stats
  async getStats() {
    const res = await request('/stats');
    if (res && res.success) return res.data;
    return null;
  }
};

export const apiService = api;
export default api;

