import React from 'react';
import '../styles/Blog.css';

const blogPosts = [
  {
    id: 1,
    title: '10 Bước Chăm Sóc Da Hàng Ngày Cho Làn Da Tươi Sáng',
    excerpt: 'Khám phá quy trình skincare 10 bước đến từ Hàn Quốc giúp làn da luôn khỏe đẹp và tươi trẻ...',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=600&h=400&fit=crop',
    author: 'Nguyễn Thị Lan',
    date: '15/11/2024',
    category: 'Chăm sóc da',
    readTime: '5 phút đọc'
  },
  {
    id: 2,
    title: 'Cách Chọn Serum Phù Hợp Với Từng Loại Da',
    excerpt: 'Serum là bước quan trọng trong quy trình skincare. Hãy cùng tìm hiểu cách chọn serum phù hợp...',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=400&fit=crop',
    author: 'Trần Minh Anh',
    date: '12/11/2024',
    category: 'Sản phẩm',
    readTime: '7 phút đọc'
  },
  {
    id: 3,
    title: 'Xu Hướng Trang Điểm Tự Nhiên 2024',
    excerpt: 'Khám phá xu hướng makeup tự nhiên, trong trẻo đang được yêu thích nhất năm 2024...',
    image: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=600&h=400&fit=crop',
    author: 'Lê Thị Hương',
    date: '10/11/2024',
    category: 'Trang điểm',
    readTime: '6 phút đọc'
  },
  {
    id: 4,
    title: 'Bí Quyết Chống Lão Hóa Hiệu Quả Từ Tuổi 25',
    excerpt: 'Bắt đầu chống lão hóa sớm là chìa khóa cho làn da trẻ lâu. Cùng tìm hiểu các bí quyết...',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop',
    author: 'Nguyễn Thị Lan',
    date: '08/11/2024',
    category: 'Chăm sóc da',
    readTime: '8 phút đọc'
  },
  {
    id: 5,
    title: 'Cách Sử Dụng Vitamin C Đúng Cách',
    excerpt: 'Vitamin C là thành phần vàng trong skincare nhưng cần biết cách sử dụng đúng...',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=600&h=400&fit=crop',
    author: 'Trần Minh Anh',
    date: '05/11/2024',
    category: 'Sản phẩm',
    readTime: '6 phút đọc'
  },
  {
    id: 6,
    title: 'Top 5 Sản Phẩm Must-Have Cho Da Khô',
    excerpt: 'Những sản phẩm không thể thiếu trong tủ đồ của người có làn da khô...',
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=600&h=400&fit=crop',
    author: 'Lê Thị Hương',
    date: '03/11/2024',
    category: 'Review',
    readTime: '5 phút đọc'
  }
];

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('all');

  const categories = ['all', 'Chăm sóc da', 'Sản phẩm', 'Trang điểm', 'Review'];

  const filteredPosts = selectedCategory === 'all'
    ? blogPosts
    : blogPosts.filter(post => post.category === selectedCategory);

  return (
    <div className="blog-page">
      <div className="blog-hero">
        <div className="container">
          <h1 className="page-title">Blog Làm Đẹp</h1>
          <p className="page-subtitle">Chia sẻ kiến thức và tips làm đẹp từ chuyên gia</p>
        </div>
      </div>

      <div className="container">
        <div className="blog-categories">
          {categories.map(cat => (
            <button
              key={cat}
              className={`category-btn ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat === 'all' ? 'Tất cả' : cat}
            </button>
          ))}
        </div>

        <div className="blog-grid">
          {filteredPosts.map(post => (
            <article key={post.id} className="blog-card">
              <div className="blog-image">
                <img src={post.image} alt={post.title} />
                <span className="blog-category">{post.category}</span>
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="blog-date">📅 {post.date}</span>
                  <span className="blog-read-time">⏱️ {post.readTime}</span>
                </div>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
                <div className="blog-footer">
                  <div className="blog-author">
                    <span>👤 {post.author}</span>
                  </div>
                  <a href={`/blog/${post.id}`} className="read-more">
                    Đọc thêm →
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="blog-cta">
          <h2>Đăng Ký Nhận Bản Tin</h2>
          <p>Nhận những bài viết mới nhất và tips làm đẹp hàng tuần</p>
          <div className="newsletter-form">
            <input type="email" placeholder="Nhập email của bạn..." />
            <button>Đăng ký</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
