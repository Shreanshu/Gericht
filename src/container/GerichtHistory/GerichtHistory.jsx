import React from 'react';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './GerichtHistory.css';



const GerichtHistory = () => {
    return (
        <div className="app__gerichthistory section__padding" id='history'>

            <div className="app__gerichthistory-title">

                <SubHeading title="Gericht History" />

                <h1 className="headtext__cormorant">
                    Serving customers for over a decade
                </h1>
                
            </div>

            <div className="app__gerichthistory-content flex__center">

                <div className="app__gerichthistory-content_section flex__center" id='gerichthistory-section1'>
                    
                    <p className="p__opensans">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                    </p>

                    <div className="app__gerichthistory-content_section-img">
                        <img src={images.history1} alt="Restaurant Lobby" />
                    </div>

                </div>

                <div className="app__gerichthistory-content_section flex__center" id='gerichthistory-section2'>
                    
                    <div className="app__gerichthistory-content_section-img">
                        <img src={images.history2} alt="Desserts" />
                    </div>

                    <p className="p__cormorant" style={ {color: 'var(--color-golden)'} }>
                        Over the years
                    </p>

                    <p className="p__opensans">
                        Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Quis Pharetra Adipiscing Ultrices Vulputate Posuere Tristique. In Sed Odio Nec Aliquet Eu Proin Mauris Et. Congue Iaculis Integer Curabitur Semper Sit Nunc.
                    </p>

                    <div className="section__content">

                        <div className="section__content-subcontent" id='subcontent-1'>
                            <p className="p__cormorant" style={ {color: 'var(--color-golden)'} }>8+</p>
                            <img src={images.spoon} alt="Spoon Illustration" style={ {marginBottom: '1rem'} } />
                            <p className="p__opensans">Cuisine Options</p>
                        </div>

                        <div className="vertical-division"></div>

                        <div className="section__content-subcontent" id='subcontent-2'>
                            <p className="p__cormorant" style={ {color: 'var(--color-golden)'} }>60+</p>
                            <img src={images.spoon} alt="Spoon Illustration" style={ {marginBottom: '1rem'} } />
                            <p className="p__opensans">Dinner Options</p>
                        </div>

                        <div className="vertical-division"></div>

                        <div className="section__content-subcontent" id='subcontent-3'>
                            <p className="p__cormorant" style={ {color: 'var(--color-golden)'} }>5</p>
                            <img src={images.spoon} alt="Spoon Illustration" style={ {marginBottom: '1rem'} } />
                            <p className="p__opensans">New Locations</p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default GerichtHistory;