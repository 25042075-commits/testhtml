import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container">
          <div className="newsletter">
            <div className="newsletter-content">
              <h3>Đăng Ký Nhận Tin</h3>
              <p>Nhận thông tin ưu đãi và tips làm đẹp mới nhất</p>
            </div>
            <div className="newsletter-form">
              <input type="email" placeholder="Nhập email của bạn..." />
              <button>Đăng ký</button>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-main">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-col">
              <div className="footer-brand">
                <h2>Luxe Beauty</h2>
                <p className="brand-tagline">Làm đẹp tự nhiên</p>
              </div>
              <p className="footer-description">
                Chúng tôi mang đến những sản phẩm mỹ phẩm cao cấp,
                chính hãng từ các thương hiệu hàng đầu thế giới.
                Cam kết chất lượng và dịch vụ tốt nhất.
              </p>
              <div className="social-links">
                <a href="#facebook" className="social-btn">📘</a>
                <a href="#instagram" className="social-btn">📷</a>
                <a href="#twitter" className="social-btn">🐦</a>
                <a href="#youtube" className="social-btn">📺</a>
                <a href="#tiktok" className="social-btn">🎵</a>
              </div>
            </div>

            <div className="footer-col">
              <h4>Sản Phẩm</h4>
              <ul>
                <li><a href="#serum">Serum</a></li>
                <li><a href="#cream">Kem dưỡng</a></li>
                <li><a href="#mask">Mặt nạ</a></li>
                <li><a href="#makeup">Trang điểm</a></li>
                <li><a href="#cleanser">Làm sạch</a></li>
                <li><a href="#sunscreen">Chống nắng</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Hỗ Trợ</h4>
              <ul>
                <li><a href="#about">Về chúng tôi</a></li>
                <li><a href="#contact">Liên hệ</a></li>
                <li><a href="#shipping">Vận chuyển</a></li>
                <li><a href="#return">Đổi trả</a></li>
                <li><a href="#faq">Câu hỏi thường gặp</a></li>
                <li><a href="#guide">Hướng dẫn mua hàng</a></li>
              </ul>
            </div>

            <div className="footer-col">
              <h4>Liên Hệ</h4>
              <ul className="contact-info">
                <li>
                  <span className="icon">📍</span>
                  <span>123 Nguyễn Huệ, Q.1, TP.HCM</span>
                </li>
                <li>
                  <span className="icon">📞</span>
                  <span>1900 1234</span>
                </li>
                <li>
                  <span className="icon">✉️</span>
                  <span>hello@luxebeauty.vn</span>
                </li>
                <li>
                  <span className="icon">🕐</span>
                  <span>8:00 - 22:00 (Hàng ngày)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p className="copyright">
              © 2024 Luxe Beauty. Tất cả quyền được bảo lưu.
            </p>
            <div className="footer-links">
              <a href="#privacy">Chính sách bảo mật</a>
              <a href="#terms">Điều khoản sử dụng</a>
              <a href="#cookies">Cookie</a>
            </div>
            <div className="payment-badges">
              <span>Thanh toán an toàn</span>
              <div className="badges">
                <span>💳</span>
                <span>🏦</span>
                <span>📱</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
