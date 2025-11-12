import React from 'react';
import '../styles/Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-badge">✨ Bộ sưu tập mới 2024</span>
            <h1 className="hero-title">
              Làm Đẹp
              <span className="gradient-text"> Tự Nhiên</span>
              <br />
              Tỏa Sáng Rạng Ngời
            </h1>
            <p className="hero-description">
              Khám phá bộ sưu tập mỹ phẩm cao cấp được tuyển chọn kỹ lưỡng từ những thương hiệu hàng đầu thế giới.
              Mang đến làn da khỏe đẹp tự nhiên, tỏa sáng từ bên trong.
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary">
                Khám phá ngay
                <span className="btn-icon">→</span>
              </button>
              <button className="btn btn-secondary">
                Xem bộ sưu tập
              </button>
            </div>

            <div className="hero-features">
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Chính hãng 100%</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Miễn phí vận chuyển</span>
              </div>
              <div className="feature-item">
                <span className="feature-icon">✓</span>
                <span>Đổi trả trong 30 ngày</span>
              </div>
            </div>
          </div>

          <div className="hero-image">
            <div className="floating-card card-1">
              <img src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop" alt="Product 1" />
            </div>
            <div className="floating-card card-2">
              <img src="https://images.unsplash.com/photo-1571875257727-256c39da42af?w=300&h=300&fit=crop" alt="Product 2" />
            </div>
            <div className="floating-card card-3">
              <img src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop" alt="Product 3" />
            </div>
            <div className="decoration-circle circle-1"></div>
            <div className="decoration-circle circle-2"></div>
          </div>
        </div>
      </div>

      <div className="hero-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>50K+</h3>
              <p>Khách hàng hài lòng</p>
            </div>
            <div className="stat-item">
              <h3>200+</h3>
              <p>Sản phẩm cao cấp</p>
            </div>
            <div className="stat-item">
              <h3>4.9★</h3>
              <p>Đánh giá trung bình</p>
            </div>
            <div className="stat-item">
              <h3>99%</h3>
              <p>Tỷ lệ hài lòng</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
