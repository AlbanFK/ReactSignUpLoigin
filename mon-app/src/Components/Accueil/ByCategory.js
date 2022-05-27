import React from 'react'

import Cocktail from './Cocktail';
import { AiOutlineRight } from "react-icons/ai";

function ByCategory({catName}) {

    
        

  return (
    <div className='card' id='cardcat'>
        <div id='cat-title-container' className='d-flex justify-content-between'>
          <div>
            <h3 className='card-title' id='cat-title'> {catName} </h3>
            <hr/>
          </div>
          
          <div>
            <h5 id='see-all'>See all <AiOutlineRight/> </h5>
          </div>
          
        </div>
        
        
        <div className='row card-body d-flex'>
           <Cocktail nomCat={catName}/>
        </div>
    </div>
  )
}

export default ByCategory
