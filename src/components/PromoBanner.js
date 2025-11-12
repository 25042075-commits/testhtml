import React from 'react';
import '../styles/PromoBanner.css';

const PromoBanner = () => {
  return (
    <section className="promo-banner">
      <div className="container">
        <div className="promo-content">
          <div className="promo-text">
            <span className="promo-badge">🎉 Ưu đãi đặc biệt</span>
            <h2>Giảm Giá Lên Đến 40%</h2>
            <p>Cho tất cả sản phẩm Serum cao cấp. Chương trình có hạn!</p>
            <div className="promo-countdown">
              <div className="countdown-item">
                <span className="number">12</span>
                <span className="label">Giờ</span>
              </div>
              <span className="separator">:</span>
              <div className="countdown-item">
                <span className="number">34</span>
                <span className="label">Phút</span>
              </div>
              <span className="separator">:</span>
              <div className="countdown-item">
                <span className="number">56</span>
                <span className="label">Giây</span>
              </div>
            </div>
            <a href="/#products" className="promo-btn">
              Mua ngay
              <span className="btn-icon">→</span>
            </a>
          </div>
          <div className="promo-image">
            <img src="https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500&h=500&fit=crop" alt="Promo" />
            <div className="promo-badge-float">-40%</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PromoBanner;
