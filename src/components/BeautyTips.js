import React from 'react';
import '../styles/BeautyTips.css';

const tips = [
  {
    id: 1,
    title: 'Quy Trình Skincare Buổi Sáng',
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400&h=300&fit=crop',
    description: 'Khám phá 5 bước skincare buổi sáng giúp da khỏe đẹp suốt cả ngày',
    category: 'Chăm sóc da',
    readTime: '3 phút đọc'
  },
  {
    id: 2,
    title: 'Cách Chọn Kem Chống Nắng',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
    description: 'Hướng dẫn chi tiết cách chọn kem chống nắng phù hợp với từng loại da',
    category: 'Tips',
    readTime: '4 phút đọc'
  },
  {
    id: 3,
    title: 'Makeup Tự Nhiên Hàng Ngày',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=400&h=300&fit=crop',
    description: 'Bí quyết trang điểm tự nhiên, trong trẻo cho nàng công sở',
    category: 'Makeup',
    readTime: '5 phút đọc'
  }
];

const BeautyTips = () => {
  return (
    <section className="beauty-tips-section">
      <div className="container">
        <div className="section-header-split">
          <div>
            <span className="section-label">Blog & Tips</span>
            <h2 className="section-title">Bí Quyết Làm Đẹp</h2>
            <p className="section-description">
              Chia sẻ kiến thức và kinh nghiệm từ chuyên gia
            </p>
          </div>
          <a href="/blog" className="view-all-link">
            Xem tất cả →
          </a>
        </div>

        <div className="tips-grid">
          {tips.map(tip => (
            <article key={tip.id} className="tip-card">
              <div className="tip-image">
                <img src={tip.image} alt={tip.title} />
                <span className="tip-category">{tip.category}</span>
              </div>
              <div className="tip-content">
                <h3>{tip.title}</h3>
                <p>{tip.description}</p>
                <div className="tip-footer">
                  <span className="read-time">⏱️ {tip.readTime}</span>
                  <a href={`/blog/${tip.id}`} className="read-more">
                    Đọc thêm →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BeautyTips;
