import React from 'react'
import { Link, Navigate } from "react-router-dom";
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';


function CardLogin() {

  const [msgError, setmsgError] = useState('')
  const [loginData, setloginData] = useState({
    email: '',
    password: ''
})
const navigate = useNavigate()
const handleChange = e => {
  setloginData({...loginData, [e.target.name] : e.target.value})
}
const loginErrorMsg = infosLogin => {
  if (infosLogin === 'Email format is invalid') {
    setmsgError('Adresse mail invalide')
  } else if(infosLogin === 'Cannot find user'){
    setmsgError('Utilisateur non reconnu')
  } else if(infosLogin === 'Incorrect password'){
    setmsgError('mot de passe incorrect')
  } else {
    navigate('/Accueil')
  }
  console.log(infosLogin);
}

const handleSubmit = e => {
  e.preventDefault()
  fetch('http://localhost:3000/login', {
          method: 'POST',
          headers: {'Content-Type' : 'application/json'},
          body: JSON.stringify(loginData)
      })
      .then(res => res.json())
      .then(data => loginErrorMsg(data))
}

  return (

    <div className='col-9 col-md-3 text-center' id='login'>
        
          <form>
              <div id='titleLogin'>CONNEXION</div>
              { msgError && <div className='alert alert-danger form-control'> {msgError}</div> }
              <input 
              type='text' 
              placeholder='EMAIL' 
              className='form-control'
              id='email'
              name='email'
              value={loginData.email}
              onChange={handleChange}
              >
              </input>
              <input 
              type='password' 
              placeholder='PASSWORD' 
              className='form-control'
              id='pwd'
              name='password'
              value={loginData.password}
              onChange={handleChange}
              >
              </input>
              <button 
              type='submit'
              id='btnLogin'
              onClick={handleSubmit}
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