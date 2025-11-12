import React from 'react';
import '../styles/InstagramFeed.css';

const instagramPosts = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=300&h=300&fit=crop',
    likes: 1234
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1571875257727-256c39da42af?w=300&h=300&fit=crop',
    likes: 2341
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=300&h=300&fit=crop',
    likes: 3456
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1556229010-aa9e9f4524e8?w=300&h=300&fit=crop',
    likes: 987
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1598452963314-b09f397a5c48?w=300&h=300&fit=crop',
    likes: 1876
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=300&h=300&fit=crop',
    likes: 2109
  }
];

const InstagramFeed = () => {
  return (
    <section className="instagram-feed-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">📷 Instagram</span>
          <h2 className="section-title">Follow Us @LuxeBeauty</h2>
          <p className="section-description">
            Khám phá thêm nhiều tips làm đẹp và sản phẩm mới trên Instagram
          </p>
        </div>

        <div className="instagram-grid">
          {instagramPosts.map(post => (
            <a
              key={post.id}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="instagram-post"
            >
              <img src={post.image} alt={`Instagram post ${post.id}`} />
              <div className="instagram-overlay">
                <span className="likes">❤️ {post.likes.toLocaleString()}</span>
              </div>
            </a>
          ))}
        </div>

        <div className="instagram-cta">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="instagram-btn"
          >
            <span className="icon">📷</span>
            Theo dõi trên Instagram
          </a>
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
