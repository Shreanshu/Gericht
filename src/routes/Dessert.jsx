import React from 'react';
import { ScrollToTopButton } from '../components';
import { Navbar, Header, AboutUs, Introduction, SpecialDessertMenu, CompleteDessertMenu,
  Chef, Teaser, Gallery, Promo, Booking, BlogPage, FeedbackForm, FindUs, GoogleMap, Newsletter, Footer } from '../container';



const Dessert = () => (
  <div className='app'>
    <Navbar />
    <Header type="dessert" />
    <AboutUs />
    <Introduction type="dessert" />
    <SpecialDessertMenu />
    <CompleteDessertMenu />
    <Chef type="dessert" />
    <Teaser type="dining" />
    <Teaser type="bar" />
    <Gallery type="dessert" />
    <Promo type="dessert" />
    <Booking />
    <BlogPage />
    <FeedbackForm />
    <FindUs />
    <Footer />
    <ScrollToTopButton />
  </div>
);

export default Dessert;