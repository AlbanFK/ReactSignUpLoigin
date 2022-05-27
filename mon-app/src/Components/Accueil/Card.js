import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'

function Card({boisson}) {

    const [show, setShow] = useState("none")

    const cardDetails = () => {
        setShow("")
    }
    const closeDetails = () => {
        setShow("none")
    }


  return (
    // <div className='col-12 col-md-6'>
        <div className='card shadow-sm mh-auto' id='cocktailCard'>
            <div id='img-container'>
                <img src={boisson.strDrinkThumb} className="card-img-top shadow-sm" id="img-card" alt="Cocktail" onClick={cardDetails}/>
            </div>
            
            <div className='card-body' id='cocktailName'>
                <h5 className='card-title text-center'>{boisson.strDrink}</h5>
            </div>
            <div class="card-img-overlay overflow-auto" id='cocktailDetails' style={{display: `${show}`}}>
    
                <div className='d-flex justify-content-between'>
                    <h6>Ingredients :</h6>
                    <button type="button" class="btn-close" onClick={closeDetails}></button>
                </div>
                <p>
                    {boisson.strIngredient1 && boisson.strIngredient1}   {boisson.strIngredient2 && boisson.strIngredient2}   {boisson.strIngredient3 && boisson.strIngredient3}   {boisson.strIngredient4 && boisson.strIngredient5}   {boisson.strIngredient6 && boisson.strIngredient6}   {boisson.strIngredient7 && boisson.strIngredient7}   {boisson.strIngredient8 && boisson.strIngredient8}   {boisson.strIngredient9 && boisson.strIngredient9}   {boisson.strIngredient10 && boisson.strIngredient10}   {boisson.strIngredient11 && boisson.strIngredient12}   {boisson.strIngredient13 && boisson.strIngredient13}
                </p>
                <p>
                    <h6>Instructions :</h6>
                </p>
                <p>
                    {boisson.strInstructions}
                </p>
                
            </div>
        </div>
    // </div>
    
  )
}

export default Card
