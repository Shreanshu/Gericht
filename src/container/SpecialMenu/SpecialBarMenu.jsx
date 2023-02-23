import React, { useContext } from 'react';
import { SubHeading, MenuItem } from '../../components/index';
import { images, data } from '../../constants/index';
import { GlobalContext } from '../../constants/Context';
import './SpecialMenu.css';



const SpecialBarMenu = () => {
  const {global_state: {special_bar_menu} } = useContext(GlobalContext);

  return (
    <div className="app__specialMenu Flex__center section__padding" id="special-menu">
      
      <div className="app__specialMenu-title">
        <SubHeading title="Poisons To Cherish Your Moments" />
        <h1 className="headtext__cormorant">Barfrau Specials</h1>
      </div>

      <div className="app__specialMenu-menu">

        <div className="app__specialMenu-menu_wine flex__center">
          <p className='app__specialMenu-menu_heading'>{special_bar_menu.menu1}</p>
          <div className="app__specialMenu-menu_items">
          {data.barMenu.map( (alcohol, index) => {
              if (alcohol.category === special_bar_menu.menu1 && alcohol.specialMenu === 'true')
                {
                  return (
                    <MenuItem key={alcohol.title + index} title={alcohol.title} price={alcohol.price} tags={alcohol.subTags} />
                  )
                }
            } )}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.barMenu} alt="Menu Image" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className='app__specialMenu-menu_heading'>{special_bar_menu.menu2}</p>
          <div className="app__specialMenu-menu_items">
            {data.barMenu.map( (alcohol, index) => {
              if (alcohol.category === special_bar_menu.menu2 && alcohol.specialMenu === 'true')
                {
                  return (
                    <MenuItem key={alcohol.title + index} title={alcohol.title} price={alcohol.price} tags={alcohol.subTags} />
                  )
                }
            } )}
          </div>
        </div>

      </div>

      <div style={ {marginTop: '15px', textAlign: 'center'} }>
        <button type='button' className="custom__button"><a href='#complete-menu'>Explore More Poisons</a></button>
      </div>

    </div>
  )
}

export default SpecialBarMenu;
