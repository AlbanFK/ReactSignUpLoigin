import React from 'react'
import Card from './Card'

function ResultList(item) {
    console.log(item);
  return (
    <div className='col-12 col-md-4'>
        <Card boisson={item}/>
    </div>
  )
}

export default ResultList
