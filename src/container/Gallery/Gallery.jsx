import React, { useRef } from 'react';
import { SubHeading } from '../../components/index';
import { images } from '../../constants/index';
import { BsInstagram } from 'react-icons/bs';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import './Gallery.css';



const Gallery = ( {type} ) => {
  const scrollRef = useRef(null);

  const screenDimensions = {width: window.innerWidth, height: window.innerHeight};
  
  const scroll = (direction) => {
    if (direction === 'left')
      {
        switch (true)
          {
            case (screenDimensions.width >= 2000):
              scrollRef.current.scrollLeft -= 634.5;
              break;

            case (screenDimensions.width > 1150 && screenDimensions.width < 2000):
              scrollRef.current.scrollLeft -= 354.5;
              break;

            case (screenDimensions.width > 850 && screenDimensions.width <= 1150):
              scrollRef.current.scrollLeft -= 454.5;
              break;

            case (screenDimensions.width <= 850):
              scrollRef.current.scrollLeft -= screenDimensions.width+24.5;
              break;
          }
      }
    
    else if (direction === 'right')
      {
        switch (true)
          {
            case (screenDimensions.width >= 2000):
              scrollRef.current.scrollLeft += 634.5;
              break;

            case (screenDimensions.width > 1150 && screenDimensions.width < 2000):
              scrollRef.current.scrollLeft += 354.5;
              break;

            case (screenDimensions.width > 850 && screenDimensions.width <= 1150):
              scrollRef.current.scrollLeft += 454.5;
              break;

            case (screenDimensions.width <= 850):
              scrollRef.current.scrollLeft += screenDimensions.width+24.5;
              break;
          }
      }
  }

  const diningGalleryImages = [images.dining_gallery01, images.dining_gallery02, images.dining_gallery03, images.dining_gallery04, images.dining_gallery05, images.dining_gallery06, images.dining_gallery07, images.dining_gallery08, images.dining_gallery09, images.dining_gallery10,
                         images.dining_gallery11, images.dining_gallery12, images.dining_gallery13, images.dining_gallery14, images.dining_gallery15, images.dining_gallery16, images.dining_gallery17, images.dining_gallery18, images.dining_gallery19, images.dining_gallery20];

  const dessertGalleryImages = [images.dessert_gallery01, images.dessert_gallery02, images.dessert_gallery03, images.dessert_gallery04, images.dessert_gallery05, images.dessert_gallery06, images.dessert_gallery07, images.dessert_gallery08, images.dessert_gallery09, images.dessert_gallery10,
                         images.dessert_gallery11, images.dessert_gallery12, images.dessert_gallery13, images.dessert_gallery14, images.dessert_gallery15, images.dessert_gallery16, images.dessert_gallery17, images.dessert_gallery18, images.dessert_gallery19, images.dessert_gallery20];

  const barGalleryImages = [images.bar_gallery01, images.bar_gallery02, images.bar_gallery03, images.bar_gallery04, images.bar_gallery05, images.bar_gallery06, images.bar_gallery07, images.bar_gallery08, images.bar_gallery09, images.bar_gallery10,
                         images.bar_gallery11, images.bar_gallery12, images.bar_gallery13, images.bar_gallery14, images.bar_gallery15, images.bar_gallery16, images.bar_gallery17, images.bar_gallery18, images.bar_gallery19, images.bar_gallery20];

  return (
    <div className="app__gallery flex__center">
      
      <div className="app__gallery-content">
        <SubHeading title="Eat with your eyes" font="3rem" margin="5rem" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>

        {
          type === 'dining'
          &&
          <p className="p__opensans" style={ {color: "#AAA", marginTop: '2rem'} }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae; Aliquam Fringilla Ut Velit Vel Pulvinar.</p>
        }

        {
          type === 'bar'
          &&
          <p className="p__opensans" style={ {color: "#AAA", marginTop: '2rem'} }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae; Aliquam Fringilla Ut Velit Vel Pulvinar.</p>
        }

        {
          type === 'dessert'
          &&
          <p className="p__opensans" style={ {color: "#AAA", marginTop: '2rem'} }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae; Aliquam Fringilla Ut Velit Vel Pulvinar.</p>
        }

        {
          type === 'all'
          &&
          <p className="p__opensans" style={ {color: "#AAA", marginTop: '2rem'} }>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vulputate Nulla Lobortis Mauris Eget Sit. Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue Iaculis Integer Curabitur Semper Sit Nunc. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae; Aliquam Fringilla Ut Velit Vel Pulvinar.</p>
        }

        <button type="button" className="custom__button"><a href={type === 'all' ? '#blogs' : '#promo'}>Explore More</a></button>
      </div>

      <div className="app__gallery-images">

        {
          type === 'dining'
          &&
          <div ref={scrollRef} className="app__gallery-images_container" style={ {borderLeft: 'solid 1px var(--color-golden)', borderRight: 'solid 1px var(--color-golden)'} } >
            {diningGalleryImages.map( (image, index) => (
              <div key={`diningGalleryImage-${index+1}`} className="app__gallery-images_card flex__center" style={ {border: 'solid 1px var(--color-golden)'} } >
                <img src={image} alt="Gallery" />
                <a href='https://www.instagram.com/' target="_blank" rel="noreferrer" className='gallery__image-link'><BsInstagram className='gallery__image-icon' /></a>
              </div>
            ))}
          </div>
        }

        {
          type === 'bar'
          &&
          <div ref={scrollRef} className="app__gallery-images_container" style={ {borderLeft: 'solid 1px var(--color-golden)', borderRight: 'solid 1px var(--color-golden)'} } >
            {barGalleryImages.map( (image, index) => (
              <div key={`barGalleryImage-${index+1}`} className="app__gallery-images_card flex__center" style={ {border: 'solid 1px var(--color-golden)'} } >
                <img src={image} alt="Gallery" />
                <a href='https://www.instagram.com/' target="_blank" rel="noreferrer" className='gallery__image-link'><BsInstagram className='gallery__image-icon' /></a>
              </div>
            ))}
          </div>
        }

        {
          type === 'dessert'
          &&
          <div ref={scrollRef} className="app__gallery-images_container" style={ {borderLeft: 'solid 1px var(--color-golden)', borderRight: 'solid 1px var(--color-golden)'} } >
            {dessertGalleryImages.map( (image, index) => (
              <div key={`dessertGalleryImage-${index+1}`} className="app__gallery-images_card flex__center" style={ {border: 'solid 1px var(--color-golden)'} } >
                <img src={image} alt="Gallery" />
                <a href='https://www.instagram.com/' target="_blank" rel="noreferrer" className='gallery__image-link'><BsInstagram className='gallery__image-icon' /></a>
              </div>
            ))}
          </div>
        }

        {
          type === 'all'
          &&
          <div ref={scrollRef} className="app__gallery-images_container" style={ {borderLeft: 'solid 1px var(--color-golden)', borderRight: 'solid 1px var(--color-golden)'} } >
            {barGalleryImages.concat(diningGalleryImages, dessertGalleryImages).map( (image, index) => (
              <div key={`barGalleryImage-${index+1}`} className="app__gallery-images_card flex__center" style={ {border: 'solid 1px var(--color-golden)'} } >
                <img src={image} alt="Gallery" />
                <a href='https://www.instagram.com/' target="_blank" rel="noreferrer" className='gallery__image-link'><BsInstagram className='gallery__image-icon' /></a>
              </div>
            ))}
          </div>
        }

        <MdChevronLeft className='gallery__arrow-icon' id='gallery__left-arrow' onClick={ () => scroll('left') } />
        
        <MdChevronRight className='gallery__arrow-icon' id='gallery__right-arrow'  onClick={ () => scroll('right') } />

      </div>

    </div>
  )
};

export default Gallery;