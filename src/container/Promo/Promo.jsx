import React, { useState, useRef } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { RestaurantPromo, DiningPromo, DessertPromo, BarPromo } from '../../constants';
import './Promo.css';



const Promo = ( {type} ) => {
  const [playVideo, setPlayVideo] = useState(true);
  const vidRef = useRef();

  const handleVideo = () => {
    setPlayVideo( (prevHandle) => !prevHandle);

    if (playVideo)
      {
        vidRef.current.pause();
      }
    else
      {
        vidRef.current.play();
      }
  }
   
  return (
    <div className="app__video" id='promo'>

      {
        type === 'restaurant'
        &&
        <video
          src={RestaurantPromo}
          ref={vidRef}
          type='video/mp4'
          loop
          controls={false}
          controlsList="nodownload"
          muted
          autoPlay
        />
      }

      {
        type === 'dining'
        &&
        <video
          src={DiningPromo}
          ref={vidRef}
          type='video/mp4'
          loop
          controls={false}
          controlsList="nodownload"
          muted
          autoPlay
        />
      }

      {
        type === 'bar'
        &&
        <video
          src={BarPromo}
          ref={vidRef}
          type='video/mp4'
          loop
          controls={false}
          controlsList="nodownload"
          muted
          autoPlay
        />
      }

      {
        type === 'dessert'
        &&
        <video
          src={DessertPromo}
          ref={vidRef}
          type='video/mp4'
          loop
          controls={false}
          controlsList="nodownload"
          muted
          autoPlay
        />
      }

      <div className="app__video-overlay flex__center">
        <div 
          className="app__video-overlay_circle flex__center"
          onClick={handleVideo}
        >
          { playVideo ?
            ( <BsPauseFill color="#fff" fontSize={50} opacity="0.9" /> ) :
            ( <BsFillPlayFill color="#fff" fontSize={50} opacity="0.9" /> )
          }
        </div>
      </div>

    </div>
  )
};

export default Promo;
