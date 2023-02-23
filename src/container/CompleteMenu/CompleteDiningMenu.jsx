import React, { useContext, useEffect, useRef, useState } from 'react';
import { SubHeading } from '../../components/index';
import { MenuItem } from '../../components/index';
import { data } from '../../constants/index';
import { FaChevronLeft } from "react-icons/fa";
import { GlobalContext } from '../../constants/Context';
import './CompleteMenu.css';



const CompleteDiningMenu = () => {
  const [classname, setClassname] = useState("");
  const [hideMenu, setHideMenu] = useState("none")

  const completeMenu = useRef(null);
  const navigationMenu = useRef(null);
  const menuList = useRef(null);

  window.onscroll = () => {
    if (window.innerWidth > 650 && window.innerWidth < 1150)
      {
        if (menuList.current.getBoundingClientRect().top > 64)
          {
            setClassname("");
          }
        else if (menuList.current.getBoundingClientRect().top <= 64 && completeMenu.current.getBoundingClientRect().bottom >= window.innerHeight)
          {
            setClassname(" fixed");
          }
        else if (completeMenu.current.getBoundingClientRect().bottom <= window.innerHeight)
          {
            setClassname("-unstick");
          }
      }
    else if (window.innerWidth < 650)
      {
        setClassname(" fixed");

        if (completeMenu.current.getBoundingClientRect().top >= window.innerHeight * 0.4
            ||
            completeMenu.current.getBoundingClientRect().bottom <= window.innerHeight * 0.6)
          {
            setToggleMenu(false);
            setHideMenu("none");
          }
        else if (completeMenu.current.getBoundingClientRect().top <= window.innerHeight * 0.4
                 &&
                 completeMenu.current.getBoundingClientRect().bottom >= window.innerHeight * 0.6)
          {
            setHideMenu("block");
          }
      }
  }

  const { global_state: {complete_dining_menu} } = useContext(GlobalContext);
  useEffect( () => {
    setSelectedMenu(complete_dining_menu);
  }, [complete_dining_menu]);

  const category = new Map();

  for (let item of data.diningMenu)
    {
      category.set(item.category, null);
    }

  let menuCategory = Array.from(category.keys());

  const [selectedMenu, setSelectedMenu] = useState(complete_dining_menu);

  const [toggleMenu, setToggleMenu] = useState(false);
  const buttonStyle = {
    style: window.innerWidth < 650 ?
    {
      left: toggleMenu ? '50%' : '0',
      display: hideMenu
    }
    :
    {}
  }
  const menuStyle = {
    style: window.innerWidth < 650 ?
    {
      left: toggleMenu ? '0' : '-50%'
    }
    :
    {}
  }

  return (
    <div className="app__completeMenu-wrapper">
      <div className="app__completeMenu flex__center section__padding app__bg-bar" id="complete-menu" ref={completeMenu}>

        <div className="app__completeMenu_title">
          <SubHeading title="True ingredients, true flavors, true passion!" font="3rem" margin="2rem" />
          <h1 className="headtext__cormorant" id='menu'>Our finest selection of Cuisines</h1>
        </div>

        <div className={`app__completeMenu_navbar${classname}`} id='complete-menu-title' style={ menuStyle.style } ref={navigationMenu}>
          <ul className="app__completeMenu_navbar-links">
            { menuCategory.map( (item, index) => {
                if (item === selectedMenu)
                  {
                    return <li key={"Category" + index+1 + "selected"} className="p__opensans" style={ {backgroundColor: 'var(--color-golden)', color: 'var(--color-black)'} } onClick={ () => { setSelectedMenu(item); setToggleMenu(false) } }>{window.innerWidth > 1150 ? <a href='#complete-menu-title'>{item}</a> : <a href='#menu'>{item}</a>}</li>
                  }
                else
                  {
                    return <li key={"Category" + index+1} className="p__opensans" onClick={ () => { setSelectedMenu(item); setToggleMenu(false) } }>{window.innerWidth > 1150 ? <a href='#complete-menu-title'>{item}</a> : <a href='#menu'>{item}</a>}</li>
                  }
              } )
            }
          </ul>
        </div>

        <button type='button' className="menu__smallscreen" style={ buttonStyle.style } onClick={ () => { setToggleMenu(!toggleMenu) } } ><p>{toggleMenu ? <FaChevronLeft className='closeMenu__smallscreen'/> : `MENU`}</p></button>

        <div className="app__completeMenu_menu flex__center" id='complete-menu-item' ref={menuList}>
            {data.diningMenu.map( (dine, index) => {
                if (dine.category === selectedMenu)
                  {
                    return (
                      <div key={dine.category + index} className="app__completeMenu_menu-items">
                        <MenuItem key={dine.category + dine.title + index} title={dine.title} price={dine.price} tags={dine.tags} />
                      </div>
                    )
                  }
              } )}
        </div>

      </div>
    </div>
  )
}

export default CompleteDiningMenu;