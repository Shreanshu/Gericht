import React from 'react';
import { DiningIntro, DessertIntro, BarIntro } from '../../constants';
import { CardCarousel } from '../../components';
import { data } from '../../constants';
import './Introduction.css';



const Introduction = ( {type} ) => {
    return (
        <div className="app__introduction flex__center section__padding">

            {
                type === 'dining'
                &&
                <>
                    <div className="app__introduction-video">
                        <video
                            src={DiningIntro}
                            type='video/mp4'
                            loop
                            controls={false}
                            controlsList="nodownload"
                            muted
                            autoPlay
                        />
                    </div>

                    <div className="app__introduction-cardcontainer">
                        <CardCarousel categoryType="dining" categoryDetails={data.diningCategory} />
                    </div>
                </>
            }

            {
                type === 'bar'
                &&
                <>
                    <div className="app__introduction-video">
                        <video
                            src={BarIntro}
                            type='video/mp4'
                            loop
                            controls={false}
                            controlsList="nodownload"
                            muted
                            autoPlay
                        />
                    </div>

                    <div className="app__introduction-cardcontainer">
                        <CardCarousel categoryType="bar" categoryDetails={data.barCategory} />
                    </div>
                </>
            }

            {
                type === 'dessert'
                &&
                <>
                    <div className="app__introduction-video">
                        <video
                            src={DessertIntro}
                            type='video/mp4'
                            loop
                            controls={false}
                            controlsList="nodownload"
                            muted
                            autoPlay
                        />
                    </div>

                    <div className="app__introduction-cardcontainer">
                        <CardCarousel categoryType="dessert" categoryDetails={data.dessertCategory} />
                    </div>
                </>
            }

        </div>
    );
};

export default Introduction;