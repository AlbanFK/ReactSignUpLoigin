import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import ByCategory from './ByCategory';
import CatListSpinner from '../Spinners/CatListSpinner';


function ByCategoryList() {

    const [category, setcategory] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const getData = async () => {
      setIsLoading(true);
      axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`)
      .then((response) => {
      const res = response.data.drinks;
      setcategory(res)
      setIsLoading(false)
      console.log(res);
      })

        // const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
        // // console.log(res.data.drinks[2].strCategory);
        // setcategory(res.data.drinks)
        // console.log(res.data.drinks);
    }
    console.log(category);

    useEffect( () => {
        //passing getData method to the lifecycle method
          getData()
    
      }, [])
  
      const renderUser = (
        <div className='row d-flex align-content-center shadow-lg' id='cardcat-container'>
         {
            category.map( (param) => {
                return (<ByCategory catName={param.strCategory}/>)
            } )
         }
    </div>
      )

  return (
    <>
        {isLoading ? <CatListSpinner /> : renderUser}
    </>
  )
}

export default ByCategoryList
