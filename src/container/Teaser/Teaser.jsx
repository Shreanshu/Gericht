import React from 'react';
import { Link } from 'react-router-dom';
import { images } from '../../constants';
import { SubHeading } from '../../components';
import { DiningTeaser, DessertTeaser, BarTeaser } from '../../constants';
import './Teaser.css';



const Teaser = ( {type} ) => {
    const diningTeaser = [ {title: 'indian', image: images.dining_teaser01}, {title: 'mexican', image: images.dining_teaser02}, {title: 'italian', image: images.dining_teaser03} ];
    const barTeaser = [ {title: 'wines', image: images.bar_teaser01}, {title: 'cocktails', image: images.bar_teaser02}, {title: 'beers', image: images.bar_teaser03} ];
    const dessertTeaser = [ {title: 'pies', image: images.dessert_teaser01}, {title: 'cakes', image: images.dessert_teaser02}, {title: 'pastries', image: images.dessert_teaser03} ];

    return (
        <div className="app__teaser flex__center section__padding">

            {
                type === 'dining'
                &&
                <>
                    <div className="app__teaser-video">
                        <video
                            src={DiningTeaser}
                            type='video/mp4'
                            loop
                            controls={false}
                            controlsList="nodownload"
                            muted
                            autoPlay
                        />
                    </div>

                    <div className="app__teaser-content">
                        
                        <SubHeading title="Dine With Pleasure" />

                        <h1 className="headtext__cormorant">What's your favorite cuisine?</h1>

                        <div className="app__teaser-content_cardcontainer">
                            {
                                diningTeaser.map( (cardDetails, index) => (

                                    <div key={cardDetails.title + index} className="app__teaser-content_cardcontainer-card">
                                        <img src={cardDetails.image} alt={cardDetails.title + ' image'} className="flex__center" />
                                        <p className="headtext__cormorant">{cardDetails.title}</p>
                                    </div>

                                ))
                            }
                        </div>

                        <button type='button' className='custom__button'>
                            <Link to="/dining">Gerícht Küche</Link>
                        </button>
                    </div>
                </>
            }

            {
                type === 'bar'
                &&
                <>
                    <div className="app__teaser-video">
                        <video
                            src={BarTeaser}
                            type='video/mp4'
                            loop
                            controls={false}
                            controlsList="nodownload"
                            muted
                            autoPlay
                            style={ {opacity: '0.8'} }
                        />
                    </div>

                    <div className="app__teaser-content">
                        
                        <SubHeading title="On The Rocks" />

                        <h1 className="headtext__cormorant">What's your poison?</h1>

                        <div className="app__teaser-content_cardcontainer">
                            {
                                barTeaser.map( (cardDetails, index) => (

                                    <div key={cardDetails.title + index} className="app__teaser-content_cardcontainer-card">
                                        <img src={cardDetails.image} alt={cardDetails.title + ' image'} className="flex__center" />
                                        <p className="headtext__cormorant">{cardDetails.title}</p>
                                    </div>

                                ))
                            }
                        </div>

                        <button type='button' className='custom__button'>
                            <Link to="/bar">Gerícht Getränke</Link>
                        </button>
                    </div>
                </>
            }

            {
                type === 'dessert'
                &&
                <>
                    <div className="app__teaser-video">
                        <video
                            src={DessertTeaser}
                            type='video/mp4'
                            loop
                            controls={false}
                            controlsList="nodownload"
                            muted
                            autoPlay
                        />
                    </div>

                    <div className="app__teaser-content">
                        
                        <SubHeading title="Sweeten your life" />

                        <h1 className="headtext__cormorant">What's your sweet treat?</h1>

                        <div className="app__teaser-content_cardcontainer">
                            {
                                dessertTeaser.map( (cardDetails, index) => (

                                    <div key={cardDetails.title + index} className="app__teaser-content_cardcontainer-card">
                                        <img src={cardDetails.image} alt={cardDetails.title + ' image'} className="flex__center" />
                                        <p className="headtext__cormorant">{cardDetails.title}</p>
                                    </div>

                                ))
                            }
                        </div>

                        <button type='button' className='custom__button'>
                            <Link to="/dessert">Gerícht Nachtisch</Link>
                        </button>
                    </div>
                </>
            }

        </div>
    );
};

export default Teaser;
