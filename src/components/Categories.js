import React from 'react';
import '../styles/Categories.css';

const categories = [
  {
    id: 1,
    name: 'Serum',
    icon: '💧',
    count: 45,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop',
    color: '#667eea'
  },
  {
    id: 2,
    name: 'Kem Dưỡng',
    icon: '🧴',
    count: 38,
    image: 'https://images.unsplash.com/photo-1556229010-aa9e9f4524e8?w=300&h=300&fit=crop',
    color: '#f093fb'
  },
  {
    id: 3,
    name: 'Mặt Nạ',
    icon: '🎭',
    count: 52,
    image: 'https://images.unsplash.com/photo-1598452963314-b09f397a5c48?w=300&h=300&fit=crop',
    color: '#4facfe'
  },
  {
    id: 4,
    name: 'Trang Điểm',
    icon: '💄',
    count: 67,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop',
    color: '#fa709a'
  },
  {
    id: 5,
    name: 'Làm Sạch',
    icon: '🧼',
    count: 41,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=300&h=300&fit=crop',
    color: '#30cfd0'
  },
  {
    id: 6,
    name: 'Chống Nắng',
    icon: '☀️',
    count: 29,
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop',
    color: '#ffd89b'
  }
];

const Categories = () => {
  return (
    <section className="categories-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Khám phá</span>
          <h2 className="section-title">Danh Mục Sản Phẩm</h2>
          <p className="section-description">
            Tìm kiếm sản phẩm phù hợp với nhu cầu của bạn
          </p>
        </div>

        <div className="categories-grid">
          {categories.map(category => (
            <a
              key={category.id}
              href={`/#products`}
              className="category-card"
              style={{ '--category-color': category.color }}
            >
              <div className="category-image">
                <img src={category.image} alt={category.name} />
                <div className="category-overlay"></div>
              </div>
              <div className="category-content">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.name}</h3>
                <p>{category.count} sản phẩm</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
