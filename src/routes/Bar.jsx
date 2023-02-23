import React from 'react';
import { ScrollToTopButton } from '../components';
import { Navbar, Header, AboutUs, Introduction, StarterMenu, SpecialBarMenu, CompleteBarMenu,
  Chef, Teaser, Gallery, Promo, Booking, BlogPage, FeedbackForm, FindUs, GoogleMap, Newsletter, Footer } from '../container';



const Bar = () => (
  <div className='app'>
    <Navbar />
    <Header type="bar" />
    <AboutUs />
    <Introduction type="bar" />
    <StarterMenu />
    <SpecialBarMenu />
    <CompleteBarMenu />
    <Chef type="bar" />
    <Teaser type="dining" />
    <Teaser type="dessert" />
    <Gallery type="bar" />
    <Promo type="bar" />
    <Booking />
    <BlogPage />
    <FeedbackForm />
    <FindUs />
    <Footer />
    <ScrollToTopButton />
  </div>
);

export default Bar;