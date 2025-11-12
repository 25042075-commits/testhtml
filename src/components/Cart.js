import React from 'react';
import '../styles/Cart.css';

const Cart = ({ isOpen, onClose, cartItems, onUpdateQuantity, onRemoveItem }) => {
  const formatPrice = (price) => {
    return new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND'
    }).format(price);
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 500000 ? 0 : 30000;
  const total = subtotal + shipping;

  if (!isOpen) return null;

  return (
    <>
      <div className="cart-overlay" onClick={onClose}></div>
      <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
        <div className="cart-header">
          <h2>
            Giỏ hàng
            <span className="cart-count">({cartItems.length})</span>
          </h2>
          <button className="close-cart-btn" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="cart-content">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <span className="empty-icon">🛍️</span>
              <h3>Giỏ hàng trống</h3>
              <p>Hãy thêm sản phẩm yêu thích vào giỏ hàng nhé!</p>
              <button className="continue-shopping-btn" onClick={onClose}>
                Tiếp tục mua sắm
              </button>
            </div>
          ) : (
            <>
              <div className="cart-items">
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="item-details">
                      <h4>{item.name}</h4>
                      <p className="item-category">{item.category}</p>
                      <div className="item-price">{formatPrice(item.price)}</div>
                    </div>
                    <div className="item-actions">
                      <div className="quantity-controls">
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                          disabled={item.quantity <= 1}
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="remove-btn"
                        onClick={() => onRemoveItem(item.id)}
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cart-footer">
                {subtotal < 500000 && (
                  <div className="shipping-notice">
                    💡 Mua thêm {formatPrice(500000 - subtotal)} để được miễn phí vận chuyển!
                  </div>
                )}

                <div className="cart-summary">
                  <div className="summary-row">
                    <span>Tạm tính:</span>
                    <span>{formatPrice(subtotal)}</span>
                  </div>
                  <div className="summary-row">
                    <span>Vận chuyển:</span>
                    <span>{shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}</span>
                  </div>
                  <div className="summary-row total">
                    <span>Tổng cộng:</span>
                    <span className="total-amount">{formatPrice(total)}</span>
                  </div>
                </div>

                <button className="checkout-btn">
                  Thanh toán
                  <span className="btn-icon">→</span>
                </button>

                <button className="continue-btn" onClick={onClose}>
                  Tiếp tục mua sắm
                </button>

                <div className="payment-methods">
                  <span className="payment-label">Chấp nhận:</span>
                  <div className="payment-icons">
                    <span>💳</span>
                    <span>🏦</span>
                    <span>📱</span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
