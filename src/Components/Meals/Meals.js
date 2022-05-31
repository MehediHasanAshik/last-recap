import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])


    return (
        <div>
            <div className='banner'>
                <h1 className='first-h1'>Welcome to</h1>
                <h1 className='second-h1'>Food Paradise</h1>
                <h3>Food Recipes from All Around the world.<br /> Search your favourite recipes and learn <br /> how to cook them by reading and watching.</h3>
            </div>
            <div>
                <input id='search-input' type="text" placeholder='Search Your Favourite Food' />
                <button id='search-btn'>Search</button>
            </div>

            <div className='meals-container'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal} />)
                }
            </div>
        </div>
    );
};

export default Meals;