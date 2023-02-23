import React from 'react';
import { images } from '../../constants/index';



const SubHeading = ({ title, margin='1rem'  }) => {
  return (
    <div style={ {marginBottom: `${margin}`} } className="subheading">
      <p className="p__cormorant" style={ {marginBottom: '1rem'} }>{title}</p>
      <img className='spoon__img' src={images.spoon} alt="spoon" />
    </div>
  )
};

export default SubHeading;