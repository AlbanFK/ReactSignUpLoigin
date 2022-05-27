import React from 'react'
import Card from './Card'
import {useState,useEffect} from 'react'
import axios from 'axios'


function Cocktail({nomCat}) {
  
    const [catCocktail, setcatCocktail] = useState([]);

    const getData = async () => {
        const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${nomCat}`)
        // console.log(res.data.drinks[2]);
        if (res) {
          const infos1 = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${res.data.drinks[0].idDrink}`)
          const infos2 = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${res.data.drinks[1].idDrink}`)
          const infos3 = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${res.data.drinks[2].idDrink}`)
          const infos4 = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${res.data.drinks[3].idDrink}`)
          setcatCocktail([infos1.data.drinks[0], infos2.data.drinks[0], infos3.data.drinks[0], infos4.data.drinks[0]])
        }
        

    }

    
    console.log(catCocktail);

    useEffect( () => {
        //passing getData method to the lifecycle method
          getData()
    
      }, [])

  return (
    <>
      
        {
          catCocktail.map(param => {
            return (<div className='col-12 col-md-3'><Card boisson={param}/></div>)
          })
        }
      
        
        
    </>
  )
}

export default Cocktail
