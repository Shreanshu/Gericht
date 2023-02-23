import React from 'react';
import { images } from '../../constants';
import './ServiceIntro.css';



const ServiceIntro = ( {type} ) => {
    return (
        <div className="app__serviceintro section__padding flex__center">

            {
                type === 'dining'
                &&
                <>
                    <div className="app__serviceintro-img">
                        <img src={images.Dining_Intro} alt="Fine Dining" />
                    </div>
                    <p className="app__serviceintro-title">
                        <i>Dine with Pleasure</i>
                    </p>
                </>
            }

            {
                type === 'bar'
                &&
                <>
                    <div className="app__serviceintro-img">
                        <img src={images.Bar_Intro} alt="Fine Dining" />
                    </div>
                    <p className="app__serviceintro-title">
                        <i>On The Rocks</i>
                    </p>
                </>
            }

            {
                type === 'dessert'
                &&
                <>
                    <div className="app__serviceintro-img">
                        <img src={images.Dessert_Intro} alt="Fine Dining" />
                    </div>
                    <p className="app__serviceintro-title">
                        <i>Sweeten your Life</i>
                    </p>
                </>
            }

        </div>
    );
};

export default ServiceIntro;