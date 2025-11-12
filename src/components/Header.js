import React, { useState } from 'react';
import '../styles/Header.css';

const Header = ({ cartCount, onCartClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <span>✨ Miễn phí vận chuyển cho đơn hàng từ 500.000đ</span>
            <div className="header-links">
              <a href="#about">Về chúng tôi</a>
              <a href="#contact">Liên hệ</a>
              <a href="#blog">Blog làm đẹp</a>
            </div>
          </div>
        </div>
      </div>

      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <button
              className="menu-toggle"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              ☰
            </button>

            <div className="logo">
              <h1>Luxe Beauty</h1>
              <span className="logo-tagline">Làm đẹp tự nhiên</span>
            </div>

            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
              <a href="#home" className="nav-link active">Trang chủ</a>
              <a href="#products" className="nav-link">Sản phẩm</a>
              <a href="#bestseller" className="nav-link">Best Seller</a>
              <a href="#new" className="nav-link">Hàng mới</a>
              <a href="#promotion" className="nav-link sale-link">Khuyến mãi 🔥</a>
            </nav>

            <div className="header-actions">
              <button
                className="action-btn search-btn"
                onClick={() => setIsSearchOpen(!isSearchOpen)}
              >
                🔍
              </button>
              <button className="action-btn wishlist-btn">
                ❤️
                <span className="badge">3</span>
              </button>
              <button className="action-btn cart-btn" onClick={onCartClick}>
                🛍️
                {cartCount > 0 && <span className="badge">{cartCount}</span>}
              </button>
              <button className="action-btn user-btn">
                👤
              </button>
            </div>
          </div>

          {isSearchOpen && (
            <div className="search-bar">
              <input
                type="text"
                placeholder="Tìm kiếm sản phẩm..."
                autoFocus
              />
              <button>Tìm kiếm</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
