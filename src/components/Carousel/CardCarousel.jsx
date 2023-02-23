import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../constants/Context';
import './IntroCard.css';
import './CardCarousel.css'



const IntroCard = ( {category, description} ) => {
    return (
        <div className="app__introcard">
            <p className="cardtitle">
                {category}
            </p>
            {
                description
                &&
                <p className="cardtext">
                    {description}
                </p>
            }
        </div>
    );
};



const CardCarousel = ( {categoryType, categoryDetails} ) => {
    const [selectedCategory, setSelectedCategory] = useState("");

    const { global_action } = useContext(GlobalContext);

    const ChangeHandler = (e) => {
        setSelectedCategory(e.target.value);
        
        if (categoryType === 'dining' && e.target.value !== 'Gerícht Küche')
            {
                global_action( {complete_dining_menu: e.target.value} );
            }
        else if (categoryType === 'bar' && e.target.value !== 'Gerícht Getränke')
            {
                global_action( {complete_bar_menu: e.target.value} );
            }
        else if (categoryType === 'dessert' && e.target.value !== 'Gerícht Nachtisch')
            {
                global_action( {complete_dessert_menu: e.target.value} );
            }
    };
    
    const NavigateHandler = (category) => {
        if (categoryType === "dining" && category !== "Gerícht Küche" && category === selectedCategory)
            {
                window.location.hash = "";
                window.location.hash = "#complete-menu";
            }
        else if (categoryType === "bar" && category !== "Gerícht Getränke" && category === selectedCategory)
            {
                window.location.hash = "";
                window.location.hash = "#complete-menu";
            }
        else if (categoryType === "dessert" && category !== "Gerícht Nachtisch" && category === selectedCategory)
            {
                window.location.hash = "";
                window.location.hash = "#complete-menu";
            }
    };

    return (
        <div className="app__carousel">
            {
                categoryDetails.map( (cardDetails, index) => (
                    <input
                        key={"cardKey"+index+1}
                        type="radio"
                        name={categoryType+'Carousel'}
                        value={cardDetails.category}
                        id={categoryType+"input"+(index+1)}
                        className={"input"+(index+1)}
                        onChange={ (e) => { ChangeHandler(e) }}
                        defaultChecked={ index===0 ? true : false }
                    />
                ))
            }

            <div className="app__carousel-cards">
                {
                    categoryDetails.map( (cardDetails, index) => (
                        <label
                            key={"label"+index+1}
                            htmlFor={categoryType+"input"+(index+1)}
                            onClick={ () => { NavigateHandler(cardDetails.category) } }
                            className={"card"+(index+1)}>
                                <IntroCard
                                    key={"cardDescription"+index+1}
                                    category={cardDetails.category}
                                    description={cardDetails.description}
                                />
                        </label>
                    ))
                }
            </div>
        </div>
    );
};

export default CardCarousel;