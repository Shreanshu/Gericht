import React from 'react';
import { images } from '../../constants';
import './HappyHours.css';



const HappyHours = () => {
    return (
        <div className="app__happyhours flex__center">

            <div className="app__happyhours-img">
                <img src={images.happy_hours} alt="Fine Dining" />
            </div>

            <div className="app__happyhours-title">
                <p className="headtext__cormorant">Happy Hours</p>
                <p className="p__opensans">Monday to Friday &#40;08:00 A.M. - 10:00 P.M.&#41;</p>
                <p className="p__opensans">Saturday to Sunday &#40;12:00 P.M. - 10:00 P.M.&#41;</p>
            </div>

        </div>
    );
};

export default HappyHours;