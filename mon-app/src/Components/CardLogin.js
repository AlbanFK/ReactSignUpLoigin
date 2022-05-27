import React from 'react'
import { Link } from "react-router-dom";
import {useState} from 'react'
import { useNavigate } from 'react-router-dom';


function CardLogin() {

  const [msgError, setmsgError] = useState('')
  const [spinner, setSpinner] = useState(false)
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
  } else if(infosLogin.user.email === loginData.email) {
    setSpinner(true)
    navigate('/Accueil') 
    setloginData({
      email: '',
    password: ''
    })
  }
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

    <div className='App row justify-content-center align-items-center'>
      <div className='col-9 col-md-3 text-center shadow' id='login'>
    
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
          className='form-control'
          onClick={handleSubmit}
          // className='btn btn-primary'
          >
            SIGN IN
          </button>
          <Link to='/SignUp'
          id="btnSignUp"
          >
            SIGN UP
          </Link>
          { spinner && <div class="spinner-border text-success"></div> }
            
        </form>
  
      </div>
    </div>

    
  )
}

export default CardLogin