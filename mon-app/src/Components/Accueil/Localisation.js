import React from 'react'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { AiFillEnvironment } from "react-icons/ai";

function Localisation() {

    //creating IP state
  const [pays, setPays] = useState('');
  const [region, setRegion] = useState('')
  const [ville, setVille] = useState('')

  //creating function to load ip address from the API
  const getData = async () => {
    const res = await axios.get('https://geolocation-db.com/json/')
    console.log(res.data);
    setPays(res.data.country_name)
    setRegion(res.data.state)
    setVille(res.data.city)
  }
  
  useEffect( () => {
    //passing getData method to the lifecycle method
    getData()

  }, [])

  

  return (  
    <div className='text-center'>
       <AiFillEnvironment color='#fdb924'/> <strong>{(ville !== null) ? ville : ''}</strong>  {/* {(pays !== null) ? `${pays},` : ''} {(region !== null) ? region : ''}  */}
    </div>
  )
}

export default Localisation
