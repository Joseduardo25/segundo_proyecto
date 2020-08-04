import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
   const[luz, setLuz] = useState(false)
   function onOff(){
     setLuz(!luz)
   }
  
  return(
    <div>
     <div>
        <img src={luz ? 'https://www.definicionabc.com/wp-content/uploads/2013/05/Foco.jpg' : 'https://promart.vteximg.com.br/arquivos/ids/253113-700-700/115271.jpg?v=636703713955570000'}/>
        <button onClick={onOff}>{luz ? 'Apagar' : 'Encender'}</button>
     </div>
    </div>  
 )  
}

export default App;
