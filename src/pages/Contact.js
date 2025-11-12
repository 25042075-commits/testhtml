import React, { useState } from 'react';
import '../styles/Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm nhất.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="contact-page">
      <div className="contact-hero">
        <div className="container">
          <h1 className="page-title">Liên Hệ</h1>
          <p className="page-subtitle">Chúng tôi luôn sẵn sàng hỗ trợ bạn</p>
        </div>
      </div>

      <div className="container">
        <div className="contact-content">
          <div className="contact-info">
            <h2>Thông Tin Liên Hệ</h2>
            <p>Đội ngũ chuyên viên của chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn</p>

            <div className="info-items">
              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-details">
                  <h4>Địa chỉ</h4>
                  <p>123 Nguyễn Huệ, Quận 1<br/>Thành phố Hồ Chí Minh</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📞</div>
                <div className="info-details">
                  <h4>Điện thoại</h4>
                  <p>Hotline: 1900 1234<br/>Mobile: 0901 234 567</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">✉️</div>
                <div className="info-details">
                  <h4>Email</h4>
                  <p>hello@luxebeauty.vn<br/>support@luxebeauty.vn</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">🕐</div>
                <div className="info-details">
                  <h4>Giờ làm việc</h4>
                  <p>Thứ 2 - Thứ 7: 8:00 - 22:00<br/>Chủ nhật: 9:00 - 21:00</p>
                </div>
              </div>
            </div>

            <div className="social-contact">
              <h4>Kết nối với chúng tôi</h4>
              <div className="social-links">
                <a href="#facebook" className="social-btn">📘 Facebook</a>
                <a href="#instagram" className="social-btn">📷 Instagram</a>
                <a href="#zalo" className="social-btn">💬 Zalo</a>
              </div>
            </div>
          </div>

          <div className="contact-form-wrapper">
            <h2>Gửi Tin Nhắn</h2>
            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-group">
                <label htmlFor="name">Họ và tên *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Nhập họ và tên"
                />
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="email@example.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="phone">Số điện thoại *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    placeholder="0901 234 567"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Tiêu đề *</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Bạn cần hỗ trợ gì?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Nội dung *</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  placeholder="Nhập nội dung tin nhắn của bạn..."
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                Gửi tin nhắn
                <span className="btn-icon">→</span>
              </button>
            </form>
          </div>
        </div>

        <div className="map-section">
          <h2>Tìm Chúng Tôi</h2>
          <div className="map-placeholder">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4977!2d106.7017!3d10.7756!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDQ2JzMyLjIiTiAxMDbCsDQyJzA2LjEiRQ!5e0!3m2!1sen!2s!4v1234567890"
              width="100%"
              height="400"
              style={{ border: 0, borderRadius: '20px' }}
              allowFullScreen=""
              loading="lazy"
              title="Luxe Beauty Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
