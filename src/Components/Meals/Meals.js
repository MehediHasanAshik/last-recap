import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';
import './Meals.css'

const Meals = () => {

    const [meals, setMeals] = useState([]);

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])

    return (
        <div>
            <h2>Meals! Starts with - "A"</h2>
            <div className='meals-container'>
                {
                    meals.map(meal => <Meal key={meal.idMeal} meal={meal} />)
                }
            </div>
        </div>
    );
};

export default Meals;