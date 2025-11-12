import React from 'react';
import { useParams } from 'react-router-dom';
import { products } from '../data/products';
import '../styles/ProductDetail.css';

const ProductDetail = ({ onAddToCart }) => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="container" style={{padding: '100px 20px', textAlign: 'center'}}>
      <h2>Sản phẩm không tồn tại</h2>
    </div>;
  }

  const [selectedImage, setSelectedImage] = React.useState(0);
  const [quantity, setQuantity] = React.useState(1);

  const images = [
    product.image,
    product.image,
    product.image,
    product.image
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const relatedProducts = products.filter(p =>
    p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  return (
    <div className="product-detail-page">
      <div className="container">
        <div className="breadcrumb">
          <a href="/">Trang chủ</a> / <a href="/#products">Sản phẩm</a> / <span>{product.name}</span>
        </div>

        <div className="product-detail-grid">
          <div className="product-images">
            <div className="main-image">
              <img src={images[selectedImage]} alt={product.name} />
              {product.badge && <span className="product-badge">{product.badge}</span>}
            </div>
            <div className="image-thumbnails">
              {images.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`${product.name} ${idx + 1}`}
                  className={selectedImage === idx ? 'active' : ''}
                  onClick={() => setSelectedImage(idx)}
                />
              ))}
            </div>
          </div>

          <div className="product-info-detail">
            <h1>{product.name}</h1>
            <div className="product-rating">
              <div className="stars">{'⭐'.repeat(Math.floor(product.rating))}</div>
              <span className="rating-text">
                {product.rating} ({product.reviews} đánh giá)
              </span>
            </div>

            <div className="product-price-detail">
              <span className="current-price">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <>
                  <span className="original-price">{formatPrice(product.originalPrice)}</span>
                  <span className="discount-percent">
                    Tiết kiệm {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
                  </span>
                </>
              )}
            </div>

            <p className="product-description-full">{product.description}</p>

            <div className="product-features">
              <h3>✨ Đặc điểm nổi bật:</h3>
              <ul>
                <li>✓ Chính hãng 100%, nhập khẩu trực tiếp</li>
                <li>✓ Phù hợp cho mọi loại da</li>
                <li>✓ Không chứa paraben, không gây kích ứng</li>
                <li>✓ Được kiểm nghiệm lâm sàng</li>
                <li>✓ Cam kết đổi trả trong 30 ngày</li>
              </ul>
            </div>

            <div className="product-actions-detail">
              <div className="quantity-selector">
                <label>Số lượng:</label>
                <div className="quantity-controls">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>

              <button
                className="add-to-cart-btn large"
                onClick={() => {
                  for (let i = 0; i < quantity; i++) {
                    onAddToCart(product);
                  }
                }}
              >
                <span className="cart-icon">🛒</span>
                Thêm vào giỏ hàng
              </button>

              <button className="buy-now-btn">
                Mua ngay
              </button>
            </div>

            <div className="product-benefits">
              <div className="benefit-item">
                <span className="icon">🚚</span>
                <div>
                  <strong>Miễn phí vận chuyển</strong>
                  <p>Cho đơn hàng từ 500.000đ</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="icon">🔄</span>
                <div>
                  <strong>Đổi trả dễ dàng</strong>
                  <p>Trong vòng 30 ngày</p>
                </div>
              </div>
              <div className="benefit-item">
                <span className="icon">✅</span>
                <div>
                  <strong>Chính hãng 100%</strong>
                  <p>Cam kết từ nhà sản xuất</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="product-tabs">
          <div className="tabs-header">
            <button className="tab-btn active">Mô tả chi tiết</button>
            <button className="tab-btn">Thành phần</button>
            <button className="tab-btn">Hướng dẫn sử dụng</button>
            <button className="tab-btn">Đánh giá ({product.reviews})</button>
          </div>
          <div className="tabs-content">
            <div className="tab-panel active">
              <h3>Thông tin sản phẩm</h3>
              <p>{product.description}</p>
              <p>
                Sản phẩm được nghiên cứu và phát triển bởi đội ngũ chuyên gia hàng đầu,
                kết hợp công nghệ hiện đại và thành phần thiên nhiên để mang lại hiệu quả
                tối ưu cho làn da của bạn. Phù hợp cho mọi loại da, kể cả da nhạy cảm.
              </p>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="related-products">
            <h2>Sản phẩm tương tự</h2>
            <div className="products-grid">
              {relatedProducts.map(p => (
                <div key={p.id} className="product-card-mini">
                  <a href={`/product/${p.id}`}>
                    <img src={p.image} alt={p.name} />
                    <h4>{p.name}</h4>
                    <div className="price">{formatPrice(p.price)}</div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
