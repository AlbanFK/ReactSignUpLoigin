import React from 'react'
import { Link } from "react-router-dom";
import {useState} from 'react'

function CardSignUp() {

  const [msgEmailForm, setmsgEmailForm] = useState('')
  const [msgPwdForm, setmsgPwdForm] = useState('')

  const handleEmail = e => {
    const expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    const email = e.target.value
    if(expressionReguliere.test(email)) {
      setmsgEmailForm(null) 
    } else {
      setmsgEmailForm("Votre email doit être au format xxxxxx@xxxx.xxx")
    }
  }

  // const handlePassword = e => {
  //   const caractereRegulier = ;
  //   const email = e.target.value
  //   if(expressionReguliere.test(email)) {
  //     setmsgEmailForm(null) 
  //   } else {
  //     setmsgEmailForm("Votre email doit être au format xxxxxx@xxxx.xxx")
  //   }
  // }
  return (
    <div className='col-9 col-md-3 text-center' id='signup'>
        
          <form>
              <div id='titleSignUp'>INSCRPTION</div>
              <input 
              type='text' 
              placeholder='Votre nom' 
              className='form-control'
              id='name'
              >
              </input>
              <input 
              type='text' 
              placeholder='Votre prenom' 
              className='form-control'
              id='prenom'
              >
              </input>
              <input 
              type='text' 
              placeholder='USERNAME' 
              className='form-control'
              id='username'
              >
              </input>
              <input 
              type='date' 
              placeholder='Date de Naissance' 
              className='form-control'
              id='datenais'
              >
              </input>
              <input 
              type='email' 
              placeholder='EMAIL' 
              className='form-control'
              id='email'
              onChange={handleEmail}
              >
              </input>
              { msgEmailForm && <div className='formCondition'> {msgEmailForm}</div> }
              <input 
              type='password' 
              placeholder='PASSWORD' 
              className='form-control'
              id='pwd'
              // onChange={handlePassword}
              >
              </input>
              <input 
              type='password' 
              placeholder='CONFIRM PASSWORD' 
              className='form-control'
              id='repwd'
              // onChange={handlePassword}
              >
              </input>
              <button 
              id='btnSignUp2'
              // className='btn btn-primary'
              >
                S'INSCRIRE
              </button>
              <Link to='/'
              id="btnLogin2"
              >
                LOGIN
              </Link>
          </form>
       
    </div>
  )
}

export default CardSignUp