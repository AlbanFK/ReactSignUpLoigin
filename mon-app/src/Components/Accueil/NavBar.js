import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import SearchView from './SearchView';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SearchSpinner from '../Spinners/SearchSpinner';
import Localisation from './Localisation';
import { AiOutlineSearch } from "react-icons/ai";
import Card from './Card';
import ResultList from './ResultList';



function NavBar() {

  const [itemSearch, setitemSearch] = useState('');
  const [result, setresult] = useState([]);
  const navigate = useNavigate()
  const [isLoading, setIsLoading] = useState(false);
  
  const handleChange = (e) => {
    setitemSearch(e.target.value)
    
  //  console.log(searchBar.getBoundingClientRect().top);
  }
 

  const getData = async () => {
    setIsLoading(true);
    axios
            .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${itemSearch}`)
            .then((response) => {
            const res = response.data.drinks;
            setresult(res)
            setIsLoading(false)
            console.log(res);
        })
        // .catch((error) => {
        //     dispatch(fetchCocktailFail(error));
        // })
        
    // const res = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${itemSearch}`)
    //                         .then()
    // console.log(res.data.drinks[2].strCategory);
    
    
  }

  

  const handleSearch = (e) => {
    e.preventDefault()
   
    if (itemSearch) {
      getData()
    }
    navigate('/search') 
    
  }
  // useEffect( () => {
  //   //passing getData method to the lifecycle method
  //     getData()

  // }, [])
  
  

  const renderUser = (
    <>
  
      <div className='row fixed-top' style={{backgroundColor: 'white'}}>
        <nav className="navbar navbar-expand-sm">
          <div className="row container-fluid">
            <div className='col-4'>
              <a className="navbar-brand" href="/">ACCUEIL</a>
            </div>
            <div className='col-4'>
              <Localisation/>
            </div>
            <div className='col-4'>
              {/* <form className="d-flex">
                <input className="form-control me-2" type="text" placeholder="Find a cocktail" id='search' onChange={handleChange}/>
                <button id='buttonSearch' type="submit" onClick={handleSearch}>Search</button>
              </form> */}
            </div>
          </div>
        </nav>
        
      </div>
      <div className='row sticky-top d-flex justify-content-center' id='search-bar'>
          <div className='row d-flex justify-content-center'>
            <form className='col-10 col-md-6'>
              <div className="input-group mb-3">
                <input className="form-control form-control-lg me-2 shadow" type="text" placeholder="Find a cocktail" aria-label="Find a cocktail" aria-describedby="buttonSearch" id='search' onChange={handleChange}/>
                <button className='btn btn-outline-secondary' id='buttonSearch' type="submit" onClick={handleSearch}><AiOutlineSearch fontSize={30}/></button>
              </div>
            </form>
          </div>
          
              
      </div>
      
      <Routes>
        <Route path='/search' element={<SearchView resultat={result}/>} />
      </Routes>
      
    </>
  )
  return (
    <>
        {isLoading ? <SearchSpinner /> : renderUser}
    </>
  )
}

export default NavBar
