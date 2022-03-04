import axios from 'axios';
import React, { useEffect, useState } from 'react'

const colors = ['#008dff', '#00b4ff', '#13dfff', '#90ffff', '#d6ffff'];
const numberRandom = () => (Math.random() * (4 - 0) + 0).toFixed(0);  
 
const CocktailCard = () => {

    
    const [cocktail, setCocktail] = useState({});
    const [background, setBackground] = useState(colors[numberRandom()]);

    
    const handleNext = () =>{
        setBackground(colors[numberRandom()])
    }


    useEffect(() => {
        axios.get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
            .then(resp => setCocktail(resp.data.drinks[0]));
    }, [ background ]);

    console.log(background);

  

    return (
        <article className='coctailCard__card' style={{backgroundColor: background}}>
            <h1>{cocktail.strDrink}</h1>
            <img src={cocktail.strDrinkThumb} alt="" />
            <div className='mb-1'>
                <p>{cocktail.strInstructions}</p>
                <h2>Ingredientes</h2>
                <ul>
                    <li>{cocktail.strIngredient1}</li>
                    <li>{cocktail.strIngredient2}</li>
                    <li>{cocktail.strIngredient3 || 'No existe este ingrediente...'}</li>
                </ul>
            </div>  
            <button className='btn btn-primary btn-block' onClick={handleNext}>
                Next
            </button>
        </article>
    )
}

export default CocktailCard