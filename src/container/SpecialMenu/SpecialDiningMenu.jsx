import React, { useContext } from 'react';
import { SubHeading, MenuItem } from '../../components/index';
import { images, data } from '../../constants/index';
import { GlobalContext } from '../../constants/Context';
import './SpecialMenu.css';



const SpecialDiningMenu = () => {
  const {global_state: {special_dining_menu}} = useContext(GlobalContext);

  return (
    <div className="app__specialMenu Flex__center section__padding" id="special-menu">
      
      <div className="app__specialMenu-title">
        <SubHeading title="A culinary experience of the flavors of life" />
        <h1 className="headtext__cormorant">Küchenchef Specials</h1>
      </div>

      <div className="app__specialMenu-menu">

        <div className="app__specialMenu-menu_wine flex__center">
          <p className='app__specialMenu-menu_heading'>{special_dining_menu.menu1}</p>
          <div className="app__specialMenu-menu_items">
          {data.diningMenu.map( (dine, index) => {
              if (dine.category === special_dining_menu.menu1 && dine.specialMenu === 'true')
                {
                  return (
                    <MenuItem key={dine.title + index} title={dine.title} price={dine.price} tags={dine.subTags} />
                  )
                }
            } )}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.diningMenu} alt="Menu Image" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className='app__specialMenu-menu_heading'>{special_dining_menu.menu2}</p>
          <div className="app__specialMenu-menu_items">
            {data.diningMenu.map( (dine, index) => {
              if (dine.category === special_dining_menu.menu2 && dine.specialMenu === 'true')
                {
                  return (
                    <MenuItem key={dine.title + index} title={dine.title} price={dine.price} tags={dine.subTags} />
                  )
                }
            } )}
          </div>
        </div>

      </div>

      <div style={ {marginTop: '15px', textAlign: 'center'} }>
        <button type='button' className="custom__button"><a href='#complete-menu'>Explore More Cuisines</a></button>
      </div>

    </div>
  )
}

export default SpecialDiningMenu;
