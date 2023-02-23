import React from 'react';
import { ScrollToTopButton } from '../components';
import { Navbar, Header, AboutUs, Introduction, StarterMenu, SpecialDiningMenu, CompleteDiningMenu,
  Chef, Gallery, Promo, Teaser, Booking, BlogPage, FeedbackForm, FindUs, GoogleMap, Newsletter, Footer } from '../container';



const Dining = () => (
  <div className='app'>
    <Navbar />
    <Header type="dining" />
    <AboutUs />
    <Introduction type="dining" />
    <StarterMenu />
    <SpecialDiningMenu />
    <CompleteDiningMenu />
    <Chef type="dining" />
    <Teaser type="bar" />
    <Teaser type="dessert" />
    <Gallery type="dining" />
    <Promo type="dining" />
    <Booking />
    <BlogPage />
    <FeedbackForm />
    <FindUs />
    <Footer />
    <ScrollToTopButton />
  </div>
);

export default Dining;