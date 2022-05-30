import React from 'react';
import './Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import Popup from 'reactjs-popup';

const Meal = (props) => {
    console.log(props.meal)
    const { strMeal, strArea, strCategory, strMealThumb, strInstructions } = props.meal;


    const PopupExample = () => (
        <Popup trigger={<button><FontAwesomeIcon icon={faArrowRight} /> Recipe </button>} position='top center'>
            {close => (
                <div>
                    {strInstructions}
                    <a className="close" onClick={close}>
                        &times;
                    </a>
                </div>
            )}
        </Popup>
    );


    return (
        <div className='meal-container'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <h4>Food Origin: {strArea}</h4>
            <h4>Food Category: {strCategory}</h4>
            <PopupExample />

        </div>

    );

};

export default Meal;