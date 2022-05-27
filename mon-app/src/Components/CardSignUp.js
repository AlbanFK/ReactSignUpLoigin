import React from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import {useState} from 'react'
import validator from 'validator'

function CardSignUp() {

  const [msgEmailForm, setmsgEmailForm] = useState('')
  const [msgPwdForm, setmsgPwdForm] = useState('')
  const [msgPwdConfirm, setmsgPwdConfirm] = useState('')
  const [submitOk, setsubmitOk] = useState(false)
  const [emailOk, setemailOk] = useState(false)
  const [passwordOk, setpasswordOk] = useState(false)
  const [pwdConfirmOk, setpwdConfirmOk] = useState(false)
  const navigate = useNavigate()
  // const [msgPwdForm, setmsgPwdForm] = useState('')
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    username: '',
    datenais: '',
    email: '', 
    password: ''
})

  const handleEmail = e => {
    const expressionReguliere = /^(([^<>()[]\.,;:s@]+(.[^<>()[]\.,;:s@]+)*)|(.+))@(([[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}.[0-9]{1,3}])|(([a-zA-Z-0-9]+.)+[a-zA-Z]{2,}))$/;
    const email = e.target.value
    if(expressionReguliere.test(email)) {
      setmsgEmailForm(null) 
      setemailOk(true)
    } else {
      setmsgEmailForm("Votre email doit être au format xxxxxx@xxxx.xxx")
      setemailOk(false)
    }
    handleChange (e)
  }

  const handlePassword = e => {
    const password = e.target.value 
    if (validator.isStrongPassword(password, {
      minLength: 8, minLowerCase: 1, minUpperCase: 1,
      minnumbers: 1, minSymbols: 1
    })) {
      setmsgPwdForm(null)
      setpasswordOk(true)
    } else {
      setmsgPwdForm('Votre mot de passe doit avoir au moins 8 caractères, une majuscule, une minuscule et un symbole')
      setpasswordOk(false)
    }
    handleChange (e)
  }

  const handleConfirmPwd = e => {
    const confimPwd = e.target.value
    if ((formData.password !== null) && (formData.password !== confimPwd)) {
      setmsgPwdConfirm('Le mot de passe ne correspond pas')
      setpwdConfirmOk(false)
    } else {
      setmsgPwdConfirm(null)
      setpwdConfirmOk(true)
    }
  }

  const signUpErrorMsg = infosLogin => {
    console.log(infosLogin);
    if (infosLogin === 'Email already exists') {
      setemailOk(false)
      setmsgEmailForm('Cet email est déja utilisée, veuillez la changer')
      console.log(`email: ${emailOk}`)
    } else {
      setsubmitOk(true)
    }
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (passwordOk && emailOk && pwdConfirmOk) {
      fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {'Content-Type' : 'application/json'},
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(data => signUpErrorMsg(data))
      
    }
    console.log(submitOk);
  }

  const handleChange = e => {
    setFormData({...formData, [e.target.name] : e.target.value})
  }
  return (

    <div className='App row justify-content-center align-items-center'>
      <div className='col-9 col-md-3 text-center shadow' id='signup'>
        
        <form class="needs-validation">
          <div id='titleSignUp'>INSCRPTION</div>
          <input 
          type='text' 
          name='nom'
          placeholder='Votre nom' 
          className='form-control'
          id='name'
          value={formData.nom}
          onChange={handleChange}
          required
          />
          
          <input 
          type='text' 
          name='prenom'
          placeholder='Votre prenom' 
          className='form-control'
          id='prenom'
          value={formData.prenom}
          onChange={handleChange}
          required
          >
          </input>
          <input 
          type='text' 
          name='username'
          placeholder='USERNAME' 
          className='form-control'
          id='username'
          value={formData.username}
          onChange={handleChange}
          >
          </input>
          <input 
          type='date' 
          name='datenais'
          placeholder='Date de Naissance' 
          className='form-control'
          id='datenais'
          value={formData.datenais}
          onChange={handleChange}
          >
          </input>
          <input 
          type='email' 
          name='email'
          placeholder='EMAIL' 
          className='form-control'
          id='email'
          // value={formData.email}
          onChange={handleEmail}
          >
          </input>
          { msgEmailForm && <div className='formCondition'> {msgEmailForm}</div> }
          <input 
          type='password'
          name='password' 
          placeholder='PASSWORD' 
          className='form-control'
          id='pwd'
          // value={formData.password}
          // onChange={handleChange}
          onChange={handlePassword}
          >
          </input>
          { msgPwdForm && <div className='formCondition'> {msgPwdForm}</div> }
          <input 
          type='password' 
          placeholder='CONFIRM PASSWORD' 
          className='form-control'
          id='repwd'
          onChange={handleConfirmPwd}
          >
          </input>
          { msgPwdConfirm && <div className='formCondition'> {msgPwdConfirm}</div> }
          <button 
          type='submit'
          id='btnSignUp2'
          className='form-control'
          onClick={handleSubmit}
          // className='btn btn-primary'
          >
            SIGN UP
          </button>
          <Link to='/'
          id="btnLogin2"
          >
            SIGN IN 
          </Link>
        </form>
        {submitOk && navigate('/')}
      </div>
    </div>
    
    
  )
}

export default CardSignUp