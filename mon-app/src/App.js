// import './App.css';
import { Routes, Route } from 'react-router-dom';
import CardLogin from './Components/CardLogin';
import CardSignUp from './Components/CardSignUp';
import './index.css';

function App() {
  
  
  return (
    
      <div className="App row justify-content-center align-items-center">
        <Routes>
          <Route path='/' element={<CardLogin/>} />
          <Route path='/SignUp' element={<CardSignUp/>} />
        </Routes>
        
      </div>
    
  );
}


export default App;
