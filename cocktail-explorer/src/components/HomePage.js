import React from 'react'
import bgImg from '../data/homeBg.jpg'
import '../styling/HomePage.css'

const HomePage = () => {
    return (
        <div id='HomePage'>
            <h1>
                Welcome to The Cocktail Explorer!
            </h1>
            <img src={bgImg} alt='DrinksImg' />
        </div>
    )
}

export default HomePage;