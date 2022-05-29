import React from 'react';
import './Meal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faCoffee } from '@fortawesome/free-solid-svg-icons'


const Meal = (props) => {
    console.log(props.meal)
    const {strMeal, strArea, strCategory, strMealThumb, } = props.meal
    return (
        <div className='meal-container'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <h4>Food Origin: {strArea}</h4>
            <h4>Food Category: {strCategory}</h4>
            <button><FontAwesomeIcon icon={faArrowRight}/> Instructions</button>
        </div>
    );
};

export default Meal;