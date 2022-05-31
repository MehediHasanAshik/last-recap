import React from 'react';
import './Meal.css'
import Popup from 'reactjs-popup';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';


const Meal = (props) => {
    console.log(props.meal)
    const { strMeal, strArea, strCategory, strMealThumb, strInstructions, strYoutube } = props.meal;
    let foods = props.meal

    const ingredients = () => {
        const keys = Object.keys(foods)
        const ingredient = [];
        for (const key of keys) {
            if (key.includes('strIngredient')) {
                ingredient.push(key)
            }
        }
        return ingredient;

    }
    const ing = ingredients()

    const PopupExample = () => (
        <Popup trigger={<button> Recipe </button>} position='top center'>
            {close => (
                <div className='link'>
                    {strInstructions}
                    <br />
                    <a href={strYoutube} target='_blank'>Watch on Youtube</a>
                </div>
            )}
        </Popup>
    );

    const AccordionExample = () => (
        <Accordion allowZeroExpanded  allowMultipleExpanded={false} >
            <AccordionItem>
                <AccordionItemHeading>
                    <AccordionItemButton className='accord-btn'>
                        <b>Ingrediets</b>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    {
                        ing?.map(i => (i && i !== "") && <p>{foods[i]}</p>)

                    }
                </AccordionItemPanel>
            </AccordionItem>
        </Accordion>
    )


    return (
        <div className='meal-container'>
            <img src={strMealThumb} alt="" />
            <h2>{strMeal}</h2>
            <h4>Food Origin: {strArea}</h4>
            <h4>Food Category: {strCategory}</h4>
            <AccordionExample />
            <PopupExample />
        </div>
    );

};

export default Meal;