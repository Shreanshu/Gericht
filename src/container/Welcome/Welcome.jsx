import React from 'react';
import { images } from '../../constants';
import './Welcome.css';



const Welcome = () => {
    return (
        <div className="app__welcome section__padding flex__center">

            <div className="app__welcome-img">
                <img src={images.welcome} alt="Restaurant" />
            </div>

            <div className="app__welcome-title">
                {
                    window.innerWidth < 450
                    ?
                    <h1 className="headtext__cormorant" style={ {marginBottom: '2rem'} }>
                        Welcome <br></br> to <br></br> Gerícht
                    </h1>
                    :
                    <h1 className="headtext__cormorant">
                        Welcome to Gerícht
                    </h1>
                }
                <p className="p__opensans">
                    A multicuisine fine dining restaurant and bar
                </p>
            </div>

        </div>
    );
};

export default Welcome;