import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

            <Link to="/" className="logo">
              <h1>Luxe Beauty</h1>
              <span className="logo-tagline">Làm đẹp tự nhiên</span>
            </Link>

            <nav className={`nav ${isMenuOpen ? 'active' : ''}`}>
              <Link to="/" className="nav-link">Trang chủ</Link>
              <Link to="/#products" className="nav-link">Sản phẩm</Link>
              <Link to="/about" className="nav-link">Về chúng tôi</Link>
              <Link to="/blog" className="nav-link">Blog</Link>
              <Link to="/contact" className="nav-link">Liên hệ</Link>
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
              <Link to="/login" className="action-btn user-btn">
                👤
              </Link>
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
