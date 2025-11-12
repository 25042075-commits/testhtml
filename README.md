# 💄 Luxe Beauty - Cosmetics E-Commerce Website

Giao diện web bán hàng mỹ phẩm hiện đại, cao cấp được xây dựng bằng React.

## ✨ Tính năng

- 🎨 **Giao diện hiện đại**: Thiết kế sang trọng với gradient màu đẹp mắt
- 🛍️ **Giỏ hàng thông minh**: Sidebar giỏ hàng với đầy đủ chức năng
- 📱 **Responsive Design**: Tối ưu cho mọi thiết bị (Desktop, Tablet, Mobile)
- 🎭 **Animations mượt mà**: Hiệu ứng chuyển động đẹp mắt
- 🔍 **Tìm kiếm & Lọc**: Lọc sản phẩm theo danh mục, sắp xếp theo nhiều tiêu chí
- ⭐ **Product Cards**: Thẻ sản phẩm với Quick View, Wishlist
- 💳 **Cart Management**: Quản lý giỏ hàng hoàn chỉnh (thêm, xóa, cập nhật số lượng)
- 🎯 **Modern UI/UX**: Trải nghiệm người dùng tối ưu

## 🚀 Công nghệ sử dụng

- **React 18.2.0**: Thư viện UI component-based
- **CSS3**: Styling hiện đại với Flexbox & Grid
- **Google Fonts**: Playfair Display & Poppins
- **Unsplash Images**: Hình ảnh chất lượng cao

## 📦 Cấu trúc thư mục

```
testhtml/
├── public/
│   └── index.html          # HTML template
├── src/
│   ├── components/         # React components
│   │   ├── Header.js      # Header với navigation
│   │   ├── Hero.js        # Hero section
│   │   ├── ProductCard.js # Thẻ sản phẩm
│   │   ├── ProductGrid.js # Grid hiển thị sản phẩm
│   │   ├── Cart.js        # Giỏ hàng sidebar
│   │   └── Footer.js      # Footer
│   ├── data/
│   │   └── products.js    # Dữ liệu sản phẩm
│   ├── styles/            # CSS files
│   │   ├── index.css      # Global styles
│   │   ├── App.css        # App styles
│   │   ├── Header.css
│   │   ├── Hero.css
│   │   ├── ProductCard.css
│   │   ├── ProductGrid.css
│   │   ├── Cart.css
│   │   └── Footer.css
│   ├── App.js             # Main component
│   └── index.js           # Entry point
└── package.json           # Dependencies
```

## 🎨 Components

### Header
- Logo và branding
- Navigation menu
- Search bar
- Shopping cart icon với counter
- Wishlist và user menu
- Responsive mobile menu

### Hero Section
- Banner chính với CTA buttons
- Animated floating product cards
- Statistics section
- Gradient background

### Product Grid
- Category filter
- Sort functionality
- Responsive grid layout
- Load more button

### Product Card
- Product image với hover effect
- Quick view modal
- Wishlist toggle
- Rating & reviews
- Price với discount badge
- Add to cart button

### Shopping Cart
- Sidebar cart với smooth animation
- Product list với thumbnail
- Quantity controls
- Remove item functionality
- Price calculation (subtotal, shipping, total)
- Free shipping notification
- Payment methods

### Footer
- Newsletter subscription
- Brand information
- Product links
- Support links
- Contact information
- Social media links
- Payment badges

## 🎯 Tính năng chính

### 1. Quản lý Giỏ hàng
- Thêm sản phẩm vào giỏ
- Cập nhật số lượng
- Xóa sản phẩm
- Tính toán tổng tiền tự động
- Miễn phí ship cho đơn > 500k

### 2. Lọc & Sắp xếp
- Lọc theo danh mục
- Sắp xếp theo giá, đánh giá, tên
- Hiển thị số lượng kết quả

### 3. UI/UX
- Smooth animations
- Loading states
- Hover effects
- Notifications
- Modal dialogs
- Responsive design

## 🎨 Color Scheme

- **Primary Gradient**: #667eea → #764ba2
- **Background**: #f8f9fa
- **Text**: #2d3748
- **Secondary**: #718096
- **Accent**: #ff4757

## 📱 Responsive Breakpoints

- **Desktop**: > 968px
- **Tablet**: 768px - 968px
- **Mobile**: < 768px

## 🌟 Highlights

1. **Modern Design**: Giao diện hiện đại với gradient đẹp mắt
2. **Smooth Animations**: Hiệu ứng chuyển động mượt mà
3. **User-Friendly**: Dễ sử dụng, trực quan
4. **Performance**: Tối ưu hiệu suất
5. **Accessibility**: Hỗ trợ keyboard navigation

## 📝 Hướng dẫn cài đặt

```bash
# Cài đặt dependencies
npm install

# Chạy development server
npm start

# Build production
npm run build
```

## 🚀 Deployment

Sau khi build, deploy folder `build/` lên hosting như:
- Vercel
- Netlify
- GitHub Pages
- Firebase Hosting

## 📄 License

MIT License - Tự do sử dụng cho mục đích cá nhân và thương mại.

---

Được tạo với ❤️ bởi Claude AI
