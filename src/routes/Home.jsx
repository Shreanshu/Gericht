import React from 'react';
import { ScrollToTopButton } from '../components';
import { Navbar, Welcome, Objective, GerichtHistory, AboutGericht, Promo, Chef, Teaser, Gallery, HappyHours,
    Booking, Laurels, BlogPage, Testimony, FindUs, GoogleMap, Newsletter, Footer } from '../container';



const Home = () => (
  <div className='app'>
    <Navbar type="home" />
    <Welcome />
    <Objective />
    <GerichtHistory />
    <AboutGericht />
    <Promo type="restaurant" />
    <Chef type="dining" />
    <Teaser type="dining" />
    <Chef type="bar" />
    <Teaser type="bar" />
    <Chef type="dessert" />
    <Teaser type="dessert" />
    <Gallery type="all" />
    <HappyHours />
    <Booking />
    <Laurels />
    <BlogPage />
    <Testimony />
    <FindUs />
    <GoogleMap />
    <Newsletter />
    <Footer />
    <ScrollToTopButton />
  </div>
);

export default Home;