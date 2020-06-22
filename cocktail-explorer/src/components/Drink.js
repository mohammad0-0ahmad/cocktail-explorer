import React from 'react'
import { NavLink } from 'react-router-dom';
import '../styling/Drink.css'
const Drink = ({ name, img }) => {
    return (
        <NavLink className='Drink' to={`/explore/${name}`}>
            <h2>Name: {name}</h2>
            <img src={img} alt={name} />
        </NavLink>
    )
}

export default Drink;