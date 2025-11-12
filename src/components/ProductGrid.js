import React, { useState } from 'react';
import ProductCard from './ProductCard';
import { products, categories } from '../data/products';
import '../styles/ProductGrid.css';

const ProductGrid = ({ onAddToCart }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const filteredProducts = products.filter(product => {
    if (selectedCategory === 'all') return true;
    return product.category.toLowerCase().includes(selectedCategory);
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name, 'vi');
      default:
        return 0;
    }
  });

  return (
    <section className="products-section" id="products">
      <div className="container">
        <div className="section-header">
          <div className="section-title-group">
            <span className="section-subtitle">Khám phá bộ sưu tập</span>
            <h2 className="section-title">Sản Phẩm Nổi Bật</h2>
          </div>

          <div className="sort-controls">
            <select
              className="sort-select"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="default">Sắp xếp mặc định</option>
              <option value="price-low">Giá: Thấp đến cao</option>
              <option value="price-high">Giá: Cao đến thấp</option>
              <option value="rating">Đánh giá cao nhất</option>
              <option value="name">Tên A-Z</option>
            </select>
          </div>
        </div>

        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              <span className="category-icon">{category.icon}</span>
              <span className="category-name">{category.name}</span>
            </button>
          ))}
        </div>

        <div className="products-grid">
          {sortedProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {sortedProducts.length === 0 && (
          <div className="no-products">
            <span className="no-products-icon">🔍</span>
            <h3>Không tìm thấy sản phẩm</h3>
            <p>Vui lòng thử chọn danh mục khác</p>
          </div>
        )}

        <div className="load-more">
          <button className="load-more-btn">
            Xem thêm sản phẩm
            <span className="btn-icon">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
