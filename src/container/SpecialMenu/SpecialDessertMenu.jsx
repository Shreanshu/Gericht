import React, { useContext } from 'react';
import { SubHeading, MenuItem } from '../../components/index';
import { images, data } from '../../constants/index';
import { GlobalContext } from '../../constants/Context';
import './SpecialMenu.css';



const SpecialDessertMenu = () => {
  const {global_state: {special_dessert_menu}} = useContext(GlobalContext);

  return (
    <div className="app__specialMenu Flex__center section__padding" id="special-menu">
      
      <div className="app__specialMenu-title">
        <SubHeading title="Sweetened with the flavors of love" />
        <h1 className="headtext__cormorant">Konditor Specials</h1>
      </div>

      <div className="app__specialMenu-menu">

        <div className="app__specialMenu-menu_wine flex__center">
          <p className='app__specialMenu-menu_heading'>{special_dessert_menu.menu1}</p>
          <div className="app__specialMenu-menu_items">
          {data.dessertMenu.map( (dessert, index) => {
              if (dessert.category === special_dessert_menu.menu1 && dessert.specialMenu === 'true')
                {
                  return (
                    <MenuItem key={dessert.title + index} title={dessert.title} price={dessert.price} tags={dessert.subTags} />
                  )
                }
            } )}
          </div>
        </div>

        <div className="app__specialMenu-menu_img">
          <img src={images.dessertMenu} alt="Menu Image" />
        </div>

        <div className="app__specialMenu-menu_cocktails flex__center">
          <p className='app__specialMenu-menu_heading'>{special_dessert_menu.menu2}</p>
          <div className="app__specialMenu-menu_items">
            {data.dessertMenu.map( (dessert, index) => {
              if (dessert.category === special_dessert_menu.menu2 && dessert.specialMenu === 'true')
                {
                  return (
                    <MenuItem key={dessert.title + index} title={dessert.title} price={dessert.price} tags={dessert.subTags} />
                  )
                }
            } )}
          </div>
        </div>

      </div>

      <div style={ {marginTop: '15px', textAlign: 'center'} }>
        <button type='button' className="custom__button"><a href='#complete-menu'>Explore More Desserts</a></button>
      </div>

    </div>
  );
};

export default SpecialDessertMenu;
