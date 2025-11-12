import React from 'react';
import '../styles/BrandPartners.css';

const brands = [
  { id: 1, name: 'La Roche-Posay', logo: '🏔️' },
  { id: 2, name: 'Innisfree', logo: '🌿' },
  { id: 3, name: 'The Ordinary', logo: '⚗️' },
  { id: 4, name: 'Sulwhasoo', logo: '🌸' },
  { id: 5, name: 'Drunk Elephant', logo: '🐘' },
  { id: 6, name: 'Laneige', logo: '💧' },
  { id: 7, name: 'Cosrx', logo: '✨' },
  { id: 8, name: 'SK-II', logo: '💎' }
];

const BrandPartners = () => {
  return (
    <section className="brand-partners-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Đối tác</span>
          <h2 className="section-title">Thương Hiệu Nổi Tiếng</h2>
          <p className="section-description">
            Chúng tôi hợp tác với các thương hiệu mỹ phẩm hàng đầu thế giới
          </p>
        </div>

        <div className="brands-grid">
          {brands.map(brand => (
            <div key={brand.id} className="brand-card">
              <div className="brand-logo">{brand.logo}</div>
              <h4>{brand.name}</h4>
            </div>
          ))}
        </div>

        <div className="brands-cta">
          <p>Tất cả sản phẩm đều <strong>chính hãng 100%</strong> với tem chống hàng giả</p>
        </div>
      </div>
    </section>
  );
};

export default BrandPartners;
