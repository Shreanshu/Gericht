import React from 'react';

import { SubHeading } from '../../components/index';
import { images } from '../../constants/index';
import './Header.css';



const Header = ( {type} ) => {
  return (
    <div className="app__header app__wrapper section__padding" id="home">
      
      {
        type === 'dining'
        &&
        <>
          <div className="app__wrapper_info">
            <SubHeading title="Chase the new flavour" />
            
            <h1 className="app__header-h1">The Key to Fine Dining</h1>
            <p className="p__opensans" style={ {margin: '2rem 0'} }>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus. In Sed Odio Nec Aliquet Eu Proin Mauris Et. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae.
                                                                    In Sed Odio Nec Aliquet Eu Proin Mauris Et. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae.</p>
            <button type="button" className="custom__button"><a href='#special-menu'>Explore Our Specials</a></button>
          </div>
          
          <div className="app__wrapper_img">
            <img src={images.welcome_dining} alt="Header Image" />
          </div>
        </>
      }

      {
        type === 'bar'
        &&
        <>
          <div className="app__wrapper_info">
            <SubHeading title="Chase the new spirit" />
            
            <h1 className="app__header-h1">The Key to Cherish your Moments</h1>
            <p className="p__opensans" style={ {margin: '2rem 0'} }>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus. In Sed Odio Nec Aliquet Eu Proin Mauris Et. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae.
                                                                    In Sed Odio Nec Aliquet Eu Proin Mauris Et. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae.</p>
            <button type="button" className="custom__button"><a href='#special-menu'>Explore Our Specials</a></button>
          </div>
          
          <div className="app__wrapper_img">
            <img src={images.welcome_bar} alt="Header Image" />
          </div>
        </>
      }

      {
        type === 'dessert'
        &&
        <>
          <div className="app__wrapper_info">
            <SubHeading title="Chase the new sweetness" />
            
            <h1 className="app__header-h1">The Key to keep you Happy and Sweet</h1>
            <p className="p__opensans" style={ {margin: '2rem 0'} }>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus. In Sed Odio Nec Aliquet Eu Proin Mauris Et. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae.
                                                                    In Sed Odio Nec Aliquet Eu Proin Mauris Et. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae.</p>
            <button type="button" className="custom__button"><a href='#special-menu'>Explore Our Specials</a></button>
          </div>
          
          <div className="app__wrapper_img">
            <img src={images.welcome_dessert} alt="Header Image" />
          </div>
        </>
      }
      
    </div>
  )
};

export default Header;
