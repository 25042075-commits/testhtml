import React, { useState } from 'react';
import '../styles/Checkout.css';

const Checkout = ({ cartItems }) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    district: '',
    note: '',
    paymentMethod: 'cod'
  });

  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500000 ? 0 : 30000;
  const total = subtotal + shipping;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      alert('Đặt hàng thành công! Cảm ơn bạn đã mua sắm tại Luxe Beauty.');
      window.location.href = '/';
    }
  };

  return (
    <div className="checkout-page">
      <div className="container">
        <h1 className="page-title">Thanh Toán</h1>

        <div className="checkout-steps">
          <div className={`step ${step >= 1 ? 'active' : ''} ${step > 1 ? 'completed' : ''}`}>
            <span className="step-number">1</span>
            <span className="step-label">Thông tin</span>
          </div>
          <div className={`step ${step >= 2 ? 'active' : ''} ${step > 2 ? 'completed' : ''}`}>
            <span className="step-number">2</span>
            <span className="step-label">Vận chuyển</span>
          </div>
          <div className={`step ${step >= 3 ? 'active' : ''}`}>
            <span className="step-number">3</span>
            <span className="step-label">Thanh toán</span>
          </div>
        </div>

        <div className="checkout-grid">
          <div className="checkout-form">
            <form onSubmit={handleSubmit}>
              {step === 1 && (
                <div className="form-section">
                  <h3>Thông Tin Khách Hàng</h3>
                  <div className="form-group">
                    <label htmlFor="name">Họ và tên *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Nhập họ và tên"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="email">Email *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="email@example.com"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Số điện thoại *</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="0901 234 567"
                      />
                    </div>
                  </div>

                  <button type="submit" className="next-btn">
                    Tiếp tục →
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="form-section">
                  <h3>Địa Chỉ Giao Hàng</h3>
                  <div className="form-group">
                    <label htmlFor="address">Địa chỉ *</label>
                    <input
                      type="text"
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      required
                      placeholder="Số nhà, tên đường"
                    />
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="district">Quận/Huyện *</label>
                      <select
                        id="district"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Chọn quận/huyện</option>
                        <option value="q1">Quận 1</option>
                        <option value="q2">Quận 2</option>
                        <option value="q3">Quận 3</option>
                        <option value="q4">Quận 4</option>
                        <option value="q5">Quận 5</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label htmlFor="city">Tỉnh/Thành phố *</label>
                      <select
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Chọn tỉnh/thành</option>
                        <option value="hcm">TP. Hồ Chí Minh</option>
                        <option value="hn">Hà Nội</option>
                        <option value="dn">Đà Nẵng</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="note">Ghi chú (tùy chọn)</label>
                    <textarea
                      id="note"
                      name="note"
                      value={formData.note}
                      onChange={handleChange}
                      rows="3"
                      placeholder="Ghi chú cho đơn hàng..."
                    ></textarea>
                  </div>

                  <div className="form-buttons">
                    <button type="button" onClick={() => setStep(1)} className="back-btn">
                      ← Quay lại
                    </button>
                    <button type="submit" className="next-btn">
                      Tiếp tục →
                    </button>
                  </div>
                </div>
              )}

              {step === 3 && (
                <div className="form-section">
                  <h3>Phương Thức Thanh Toán</h3>
                  <div className="payment-methods">
                    <label className="payment-method">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="cod"
                        checked={formData.paymentMethod === 'cod'}
                        onChange={handleChange}
                      />
                      <div className="method-info">
                        <span className="method-icon">💵</span>
                        <div>
                          <strong>Thanh toán khi nhận hàng (COD)</strong>
                          <p>Thanh toán bằng tiền mặt khi nhận hàng</p>
                        </div>
                      </div>
                    </label>

                    <label className="payment-method">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="bank"
                        checked={formData.paymentMethod === 'bank'}
                        onChange={handleChange}
                      />
                      <div className="method-info">
                        <span className="method-icon">🏦</span>
                        <div>
                          <strong>Chuyển khoản ngân hàng</strong>
                          <p>Chuyển khoản qua ATM/Internet Banking</p>
                        </div>
                      </div>
                    </label>

                    <label className="payment-method">
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="momo"
                        checked={formData.paymentMethod === 'momo'}
                        onChange={handleChange}
                      />
                      <div className="method-info">
                        <span className="method-icon">📱</span>
                        <div>
                          <strong>Ví điện tử MoMo</strong>
                          <p>Thanh toán qua ví MoMo</p>
                        </div>
                      </div>
                    </label>
                  </div>

                  <div className="form-buttons">
                    <button type="button" onClick={() => setStep(2)} className="back-btn">
                      ← Quay lại
                    </button>
                    <button type="submit" className="submit-btn">
                      Đặt hàng
                    </button>
                  </div>
                </div>
              )}
            </form>
          </div>

          <div className="order-summary">
            <h3>Đơn Hàng Của Bạn</h3>
            <div className="summary-items">
              {cartItems.map(item => (
                <div key={item.id} className="summary-item">
                  <img src={item.image} alt={item.name} />
                  <div className="item-info">
                    <h4>{item.name}</h4>
                    <p>SL: {item.quantity}</p>
                  </div>
                  <span className="item-price">{formatPrice(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>

            <div className="summary-totals">
              <div className="total-row">
                <span>Tạm tính:</span>
                <span>{formatPrice(subtotal)}</span>
              </div>
              <div className="total-row">
                <span>Phí vận chuyển:</span>
                <span>{shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}</span>
              </div>
              <div className="total-row final">
                <span>Tổng cộng:</span>
                <span className="final-amount">{formatPrice(total)}</span>
              </div>
            </div>

            <div className="checkout-benefits">
              <div className="benefit">✓ Miễn phí đổi trả trong 30 ngày</div>
              <div className="benefit">✓ Chính hãng 100%</div>
              <div className="benefit">✓ Giao hàng nhanh chóng</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
