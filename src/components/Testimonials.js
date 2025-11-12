import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: 'Nguyễn Thị Hà',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    rating: 5,
    content: 'Sản phẩm chất lượng tuyệt vời! Da mình đã cải thiện rõ rệt sau 2 tuần sử dụng. Giao hàng nhanh, đóng gói cẩn thận. Sẽ tiếp tục ủng hộ shop!',
    product: 'Serum Vitamin C',
    date: '15/11/2024'
  },
  {
    id: 2,
    name: 'Trần Minh Tâm',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    rating: 5,
    content: 'Mình đã thử rất nhiều loại kem dưỡng nhưng chỉ có sản phẩm này là phù hợp nhất. Không gây nhờn rít, thấm nhanh và rất mịn màng.',
    product: 'Kem Dưỡng Gold Collagen',
    date: '12/11/2024'
  },
  {
    id: 3,
    name: 'Lê Thị Mai',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    rating: 5,
    content: 'Dịch vụ tư vấn rất tận tình! Shop đã giúp mình chọn được bộ sản phẩm phù hợp với da nhạy cảm. Cảm ơn Luxe Beauty rất nhiều!',
    product: 'Mặt Nạ Ngủ',
    date: '10/11/2024'
  },
  {
    id: 4,
    name: 'Phạm Thị Lan',
    avatar: 'https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=100&h=100&fit=crop',
    rating: 5,
    content: 'Son môi này quá tuyệt! Màu đẹp, lên môi chuẩn, giữ màu lâu mà không làm khô môi. Đã mua thêm 3 màu nữa rồi ạ!',
    product: 'Son Velvet Matte',
    date: '08/11/2024'
  },
  {
    id: 5,
    name: 'Hoàng Thị Thu',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop',
    rating: 5,
    content: 'Chất lượng sản phẩm tuyệt vời, giá cả hợp lý. Mình rất hài lòng với việc mua sắm tại Luxe Beauty. 5 sao xứng đáng!',
    product: 'Sữa Rửa Mặt',
    date: '05/11/2024'
  },
  {
    id: 6,
    name: 'Vũ Thị Hương',
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop',
    rating: 5,
    content: 'Kem chống nắng này quá ổn! Không gây bóng nhờn, không nặng mặt. Đã dùng hết 2 tuýp rồi, sẽ tiếp tục mua nữa!',
    product: 'Kem Chống Nắng SPF 50+',
    date: '03/11/2024'
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="container">
        <div className="section-header-center">
          <span className="section-label">Đánh giá</span>
          <h2 className="section-title">Khách Hàng Nói Gì</h2>
          <p className="section-description">
            Hơn 50,000 khách hàng đã tin tưởng và hài lòng với sản phẩm của chúng tôi
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <img src={testimonial.avatar} alt={testimonial.name} className="testimonial-avatar" />
                <div className="testimonial-info">
                  <h4>{testimonial.name}</h4>
                  <div className="testimonial-rating">
                    {'⭐'.repeat(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="testimonial-content">{testimonial.content}</p>
              <div className="testimonial-footer">
                <span className="testimonial-product">📦 {testimonial.product}</span>
                <span className="testimonial-date">📅 {testimonial.date}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="testimonials-stats">
          <div className="stat-box">
            <h3>4.9/5.0</h3>
            <p>Đánh giá trung bình</p>
            <div className="stars">⭐⭐⭐⭐⭐</div>
          </div>
          <div className="stat-box">
            <h3>12,456</h3>
            <p>Đánh giá tích cực</p>
          </div>
          <div className="stat-box">
            <h3>99%</h3>
            <p>Khách hàng hài lòng</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
