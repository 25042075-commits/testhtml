import React, { useState } from 'react';
import '../styles/Login.css';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    confirmPassword: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      alert('Đăng nhập thành công!');
    } else {
      if (formData.password !== formData.confirmPassword) {
        alert('Mật khẩu không khớp!');
        return;
      }
      alert('Đăng ký thành công!');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-image">
          <img src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=600&h=800&fit=crop" alt="Beauty" />
          <div className="image-overlay">
            <h2>Chào Mừng Đến Với</h2>
            <h1>Luxe Beauty</h1>
            <p>Khám phá vẻ đẹp tự nhiên của bạn</p>
          </div>
        </div>

        <div className="login-form-wrapper">
          <div className="login-form-container">
            <div className="form-header">
              <h2>{isLogin ? 'Đăng Nhập' : 'Đăng Ký'}</h2>
              <p>{isLogin ? 'Chào mừng bạn trở lại!' : 'Tạo tài khoản mới'}</p>
            </div>

            <form onSubmit={handleSubmit} className="auth-form">
              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="name">Họ và tên</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required={!isLogin}
                    placeholder="Nhập họ và tên"
                  />
                </div>
              )}

              <div className="form-group">
                <label htmlFor="email">Email</label>
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
                <label htmlFor="password">Mật khẩu</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder="Nhập mật khẩu"
                />
              </div>

              {!isLogin && (
                <div className="form-group">
                  <label htmlFor="confirmPassword">Xác nhận mật khẩu</label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required={!isLogin}
                    placeholder="Nhập lại mật khẩu"
                  />
                </div>
              )}

              {isLogin && (
                <div className="form-extras">
                  <label className="checkbox-label">
                    <input type="checkbox" />
                    <span>Ghi nhớ đăng nhập</span>
                  </label>
                  <a href="/forgot-password" className="forgot-link">Quên mật khẩu?</a>
                </div>
              )}

              <button type="submit" className="submit-btn">
                {isLogin ? 'Đăng nhập' : 'Đăng ký'}
              </button>
            </form>

            <div className="social-login">
              <p className="divider">Hoặc tiếp tục với</p>
              <div className="social-buttons">
                <button className="social-btn google">
                  <span>📧</span> Google
                </button>
                <button className="social-btn facebook">
                  <span>📘</span> Facebook
                </button>
              </div>
            </div>

            <div className="form-switch">
              <p>
                {isLogin ? 'Chưa có tài khoản?' : 'Đã có tài khoản?'}
                {' '}
                <button
                  type="button"
                  onClick={() => setIsLogin(!isLogin)}
                  className="switch-btn"
                >
                  {isLogin ? 'Đăng ký ngay' : 'Đăng nhập'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
