import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';
import '../styles/FeaturedProducts.css';

const FeaturedProducts = ({ onAddToCart }) => {
  const featuredProducts = products.slice(0, 4);

  return (
    <section className="featured-products-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Nổi bật</span>
          <h2 className="section-title">Sản Phẩm Bán Chạy</h2>
          <p className="section-description">
            Những sản phẩm được yêu thích nhất tại Luxe Beauty
          </p>
        </div>

        <div className="featured-grid">
          {featuredProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        <div className="featured-cta">
          <a href="/#products" className="view-all-btn">
            Xem tất cả sản phẩm
            <span className="btn-icon">→</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
