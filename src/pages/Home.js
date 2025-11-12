import React from 'react';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import PromoBanner from '../components/PromoBanner';
import ProductGrid from '../components/ProductGrid';
import Testimonials from '../components/Testimonials';
import BeautyTips from '../components/BeautyTips';
import BrandPartners from '../components/BrandPartners';
import InstagramFeed from '../components/InstagramFeed';

const Home = ({ onAddToCart }) => {
  return (
    <div className="home-page">
      <Hero />
      <Categories />
      <FeaturedProducts onAddToCart={onAddToCart} />
      <PromoBanner />
      <ProductGrid onAddToCart={onAddToCart} />
      <Testimonials />
      <BeautyTips />
      <BrandPartners />
      <InstagramFeed />
    </div>
  );
};

export default Home;
