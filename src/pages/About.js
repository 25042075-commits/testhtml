import React from 'react';
import '../styles/About.css';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-hero">
        <div className="container">
          <h1 className="page-title">Về Chúng Tôi</h1>
          <p className="page-subtitle">Câu chuyện thương hiệu Luxe Beauty</p>
        </div>
      </div>

      <div className="container">
        <section className="about-story">
          <div className="story-grid">
            <div className="story-image">
              <img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=600&h=600&fit=crop" alt="Our Story" />
            </div>
            <div className="story-content">
              <span className="section-label">Câu chuyện của chúng tôi</span>
              <h2>Hành Trình Làm Đẹp Tự Nhiên</h2>
              <p>
                Luxe Beauty được thành lập vào năm 2020 với sứ mệnh mang đến những sản phẩm
                mỹ phẩm cao cấp, chính hãng từ các thương hiệu hàng đầu thế giới cho phụ nữ Việt Nam.
              </p>
              <p>
                Chúng tôi tin rằng vẻ đẹp thật sự đến từ sự tự tin và chăm sóc bản thân đúng cách.
                Vì vậy, mỗi sản phẩm được chọn lọc kỹ càng, đảm bảo chất lượng và an toàn cho làn da.
              </p>
              <div className="story-stats">
                <div className="stat">
                  <h3>50K+</h3>
                  <p>Khách hàng tin tưởng</p>
                </div>
                <div className="stat">
                  <h3>200+</h3>
                  <p>Sản phẩm chính hãng</p>
                </div>
                <div className="stat">
                  <h3>4.9★</h3>
                  <p>Đánh giá trung bình</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about-values">
          <h2 className="section-title">Giá Trị Cốt Lõi</h2>
          <div className="values-grid">
            <div className="value-card">
              <span className="value-icon">✨</span>
              <h3>Chất Lượng</h3>
              <p>Cam kết sản phẩm chính hãng 100%, nhập khẩu từ các thương hiệu uy tín.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">❤️</span>
              <h3>Tận Tâm</h3>
              <p>Luôn đặt khách hàng lên hàng đầu, tư vấn tận tình và chăm sóc chu đáo.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🌿</span>
              <h3>Tự Nhiên</h3>
              <p>Ưu tiên các sản phẩm từ thiên nhiên, an toàn cho sức khỏe và môi trường.</p>
            </div>
            <div className="value-card">
              <span className="value-icon">🚀</span>
              <h3>Đổi Mới</h3>
              <p>Không ngừng cập nhật xu hướng làm đẹp mới nhất từ khắp nơi trên thế giới.</p>
            </div>
          </div>
        </section>

        <section className="about-team">
          <h2 className="section-title">Đội Ngũ Chuyên Gia</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop" alt="Team Member" />
              </div>
              <h4>Nguyễn Thị Lan</h4>
              <p className="member-role">CEO & Founder</p>
              <p className="member-bio">10+ năm kinh nghiệm trong ngành mỹ phẩm cao cấp</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&h=300&fit=crop" alt="Team Member" />
              </div>
              <h4>Trần Minh Anh</h4>
              <p className="member-role">Chuyên gia Da liễu</p>
              <p className="member-bio">Bác sĩ chuyên khoa da liễu, tư vấn sản phẩm</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop" alt="Team Member" />
              </div>
              <h4>Lê Thị Hương</h4>
              <p className="member-role">Giám đốc Marketing</p>
              <p className="member-bio">Chuyên gia về xu hướng làm đẹp và thương hiệu</p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <img src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=300&h=300&fit=crop" alt="Team Member" />
              </div>
              <h4>Phạm Văn Đức</h4>
              <p className="member-role">Quản lý Logistics</p>
              <p className="member-bio">Đảm bảo giao hàng nhanh chóng và an toàn</p>
            </div>
          </div>
        </section>

        <section className="about-cta">
          <div className="cta-content">
            <h2>Bắt Đầu Hành Trình Làm Đẹp Của Bạn</h2>
            <p>Khám phá bộ sưu tập mỹ phẩm cao cấp và nhận ưu đãi đặc biệt cho khách hàng mới</p>
            <a href="/#products" className="cta-button">Mua sắm ngay</a>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
