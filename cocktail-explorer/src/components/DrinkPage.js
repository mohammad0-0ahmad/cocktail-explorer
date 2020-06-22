import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../data/drinks.json'
import '../styling/DrinkPage.css'

const DRINKS = data.cocktails;

const DrinkPage = ({ history }) => {
    const name = useParams('name').name;
    const [drink, setDrink] = useState();

    useEffect(() => {
        const result = DRINKS.filter((drink) => drink.name === name);
        if (!result.length) {
            history.push('/');
        } else {
            setDrink(result[0]);
        }
    }, []);

    return (
        <div id='DrinkPage'>
            {drink &&
                <>
                    <h3>{drink.name}</h3>
                    <p>{drink.preparation}</p>
                    <img src={drink.image} alt={`${drink.name} drink.`} />
                </>
            }
        </div>
    )
}

export default DrinkPage;