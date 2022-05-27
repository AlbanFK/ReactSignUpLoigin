// import './App.css';
import { Routes, Route } from 'react-router-dom';
import CardLogin from './Components/CardLogin';
import CardSignUp from './Components/CardSignUp';
import PageAccueil from './Components/Accueil/PageAccueil'; 
import NavBar from './Components/Accueil/NavBar';
import './index.css';

function App() {
  
  
  return (
    
      <div className="container-fluid">
        <NavBar/>
        <Routes>
          {/* <Route path='/' element={<CardLogin/>} />
          <Route path='/SignUp' element={<CardSignUp/>} /> */}
          <Route path='/' element={<PageAccueil/>} />
        </Routes>
      </div>
    
  );
}


export default App;
