import React, { useState } from 'react';
import '../styles/ProductCard.css';

const ProductCard = ({ product, onAddToCart }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [isQuickView, setIsQuickView] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : 0;

  return (
    <div className="product-card">
      {product.badge && (
        <span className={`product-badge badge-${product.badge.toLowerCase().replace(' ', '-')}`}>
          {product.badge}
        </span>
      )}
      {discount > 0 && (
        <span className="discount-badge">-{discount}%</span>
      )}

      <button
        className={`wishlist-btn ${isWishlisted ? 'active' : ''}`}
        onClick={() => setIsWishlisted(!isWishlisted)}
      >
        {isWishlisted ? '❤️' : '🤍'}
      </button>

      <div className="product-image">
        <img src={product.image} alt={product.name} />
        <div className="product-overlay">
          <button className="quick-view-btn" onClick={() => setIsQuickView(true)}>
            👁️ Xem nhanh
          </button>
        </div>
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-description">{product.description}</p>

        <div className="product-rating">
          <div className="stars">
            {'⭐'.repeat(Math.floor(product.rating))}
          </div>
          <span className="rating-text">
            {product.rating} ({product.reviews} đánh giá)
          </span>
        </div>

        <div className="product-price">
          <span className="current-price">{formatPrice(product.price)}</span>
          {product.originalPrice && (
            <span className="original-price">{formatPrice(product.originalPrice)}</span>
          )}
        </div>

        <button
          className="add-to-cart-btn"
          onClick={() => onAddToCart(product)}
        >
          <span className="cart-icon">🛒</span>
          Thêm vào giỏ
        </button>
      </div>

      {isQuickView && (
        <div className="quick-view-modal" onClick={() => setIsQuickView(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setIsQuickView(false)}>
              ✕
            </button>
            <div className="modal-grid">
              <div className="modal-image">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="modal-info">
                <span className="product-category">{product.category}</span>
                <h2>{product.name}</h2>
                <div className="product-rating">
                  <div className="stars">
                    {'⭐'.repeat(Math.floor(product.rating))}
                  </div>
                  <span className="rating-text">
                    {product.rating} ({product.reviews} đánh giá)
                  </span>
                </div>
                <p className="modal-description">{product.description}</p>
                <div className="product-price">
                  <span className="current-price">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="original-price">{formatPrice(product.originalPrice)}</span>
                  )}
                </div>
                <button
                  className="add-to-cart-btn large"
                  onClick={() => {
                    onAddToCart(product);
                    setIsQuickView(false);
                  }}
                >
                  <span className="cart-icon">🛒</span>
                  Thêm vào giỏ hàng
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductCard;
