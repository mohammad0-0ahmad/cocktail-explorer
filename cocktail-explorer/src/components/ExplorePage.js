import React, { useState } from 'react'
import '../styling/ExplorePage.css'
import data from '../data/drinks.json'
import Drink from './Drink';

const DRINKS = data.cocktails;

const ExplorePage = () => {
    const [serachText, setSearchText] = useState('');
    const [shownDrinks, setShownDrinks] = useState('');

    const handleSearch = () => {
        let result = DRINKS.filter((drink) => drink.name.toLowerCase().includes(serachText.toLowerCase()))
        setShownDrinks(result.map((drink) => <Drink name={drink.name} img={drink.image} />))
    }
    return (
        <div id='ExplorePage'>
            <h1>
                Find your favourite drink!
            </h1>
            <div id='search-bar'>
                <input type='text' value={serachText} onChange={(e) => setSearchText(e.target.value)} />
                <button type='button' onClick={handleSearch}>
                    Search
                </button>
            </div>
            <div id='search-result'>
                {shownDrinks}
            </div>
        </div>
    )
}

export default ExplorePage;