import React from 'react'
import Card from './Card';

function SearchView({resultat}) {
    console.log(resultat);
    if (resultat) {
        return (
            <div className='container shadow-lg' id='search-page'>
                <div className='row text-center'>
                    <span className='display-4'>RESULTS :</span>
                </div>
                <div className='row d-flex justify-content-around align-content-center view'>
                    {
                        resultat.map( param => {
                            return (<div className='col-10 col-md-3'> <Card boisson={param}/> </div>)
                        })
                    }
                </div>
            </div>
            
          )
    }else {
        return (
            <div className='display-3 view text-center'>
                AUCUN RESULTAT
            </div>
        )
    }
  
}

export default SearchView
