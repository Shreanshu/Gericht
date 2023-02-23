import React, { useState } from 'react';
import { SubHeading, MenuItem } from '../../components';
import { data } from '../../constants';
import { images } from '../../constants';
import './StarterMenu.css';



const StarterMenu = () => {
    const [category1, category2] = data.starterCategory.map( (item) => item.category );

    const [toggle, setToggle] = useState(false);

    const ChangeToggle = () => {
        setToggle(!toggle);
    }

    return (
        <div className="app__startermenu section__padding app__bg">

            <div className="app__startermenu-title">
                <SubHeading title="Flavors to fulfill your food cravings" margin='3rem' />
                <h1 className="headtext__cormorant">Gerícht Starters</h1>
            </div>

            {
                window.innerWidth > 1150
                &&
                <div className="app__startermenu-togglemenu">
                    <label htmlFor="toggle" className="p__cormorant">{category2}</label>
                    <input type="checkbox" name='toggle' id='toggle' checked={ toggle } onChange={ ChangeToggle } />
                    <label htmlFor="toggle" className="p__cormorant">{category1}</label>
                </div>
            }

            <div className="app__startermenu-menu_wrapper">
                <div className="app__startermenu-menu" style={ window.innerWidth > 1150 ? toggle ? {marginLeft: '0'} : {marginLeft: '-50%'} : {marginLeft: '0'} }>

                    <div className="app__startermenu-menu_menuitem category1">
                        {
                            window.innerWidth < 1150
                            &&
                            <p className="app__startermenu-menu_menuitem-heading">{category1}</p>
                        }

                        {
                            data.starterMenu.map( (menuitem, index) => {
                                if (menuitem.category === category1)
                                    {
                                        return (
                                            <MenuItem key={category1 + "starter-menu" + index} title={menuitem.title} price={menuitem.price} />
                                        );
                                    }
                            })
                        }
                    </div>

                    <div className="app__startermenu-menu_img">
                        <img src={images.starterMenu} alt="Starter Menu" />
                    </div>

                    <div className="app__startermenu-menu_menuitem category2">
                        {
                            window.innerWidth < 1150
                            &&
                            <p className="app__startermenu-menu_menuitem-heading">{category2}</p>
                        }

                        {
                            data.starterMenu.map( (menuitem, index) => {
                                if (menuitem.category === category2)
                                    {
                                        return (
                                            <MenuItem key={category2 + "starter-menu" + index} title={menuitem.title} price={menuitem.price} />
                                        );
                                    }
                            })
                        }
                    </div>

                </div>
            </div>

        </div>
    );
};

export default StarterMenu;