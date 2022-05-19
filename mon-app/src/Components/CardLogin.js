import React from 'react'
import { Link } from "react-router-dom";


function CardLogin() {
  return (

    <div className='col-9 col-md-3 text-center' id='login'>
        
          <form>
              <div id='titleLogin'>WELCOME !</div>
              <input 
              type='text' 
              placeholder='USERNAME' 
              className='form-control'
              id='username'
              >
              </input>
              <input 
              type='password' 
              placeholder='PASSWORD' 
              className='form-control'
              id='pwd'
              >
              </input>
              <button 
              id='btnLogin'
              // className='btn btn-primary'
              >
                LOGIN
              </button>
              <Link to='/SignUp'
              id="btnSignUp"
              >
                SIGN UP
              </Link>
              
          </form>
       
    </div>
  )
}

export default CardLogin