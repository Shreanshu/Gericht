import React from 'react';
import { SubHeading } from '../../components';
import './Objective.css';



const Objective = () => {
    return (
        <div className="app__objective section__padding">
            <SubHeading title="What we offer" margin='3rem' />
            <h1 className="headtext__cormorant">
                We at Gericht are serving our customers for over a decade.
            </h1>
            <p className="p__opensans">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.
                Congue Iaculis Integer Curabitur Semper Sit Nunc. Vestibulum Ante Ipsum Primis In Faucibus Orci Luctus Et Ultrices Posuere Cubilia Curae; Aliquam Fringilla Ut Velit Vel Pulvinar.
            </p>
            <div className="app__objective-buttons">
                <button type='button' className='outline__button'>
                    <a href='#history'>Read More</a>
                </button>
                <button type='button' className='outline__button'>
                    <a href='#contact'>Contact Us</a>
                </button>
            </div>
        </div>
    );
};

export default Objective;