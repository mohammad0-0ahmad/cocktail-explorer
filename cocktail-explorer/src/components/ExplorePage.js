import React, { useState, useEffect } from 'react'
import '../styling/ExplorePage.css'
import data from '../data/drinks.json'
import Drink from './Drink';

const DRINKS = data.cocktails;

const ExplorePage = () => {
    const [serachText, setSearchText] = useState('');
    const [shownDrinks, setShownDrinks] = useState('');
    const [isResult, setIsResult] = useState(true);

    const handleSearch = () => {
        if (serachText) {
            let result = DRINKS.filter((drink) => drink.name.toLowerCase().includes(serachText.trim().toLowerCase()));
            if (result.length) {
                setShownDrinks(result.map((drink, i) => <Drink key={i} name={drink.name} img={drink.image} />));
                setIsResult(true);
            } else {
                setShownDrinks('');
                setIsResult(false);
            }
        } else {
            setShownDrinks('');
        }
    }
    useEffect(() => {
        setIsResult(true);
    }, [serachText])
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
            {isResult &&
                <div id='search-result'>
                    {shownDrinks}
                </div>
            }
            {!isResult &&
                <h2>
                    Could not find a related drink try again :)
                </h2>
            }
        </div>
    )
}

export default ExplorePage;