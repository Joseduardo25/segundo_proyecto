import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
    const carros = [
      {
        marca: 'toyota',
        modelo: 'yaris',
        logo: 'https://1000marcas.net/wp-content/uploads/2019/12/Toyota-logo.png'
      }
    ]
     const[valueInput, setValueInput] = useState('')
     const[vehiculos, setVehiculos] = useState(carros)
     function add(e){
       setValueInput(e.target.value)
     }
     function entrada(){
       const array_vehiculos = [...vehiculos]
       array_vehiculos.push({
        marca: valueInput,
        modelo: 'yaris',
        logo: 'https://1000marcas.net/wp-content/uploads/2019/12/Toyota-logo.png'
      })
       setVehiculos(array_vehiculos)
       setValueInput('')

     }
  
  return(
    <div>
      <div>
        {vehiculos.map((e)=>(
        <div>
          {e.marca}
        </div>))}
      </div>
      <div>
        <input onChange={add} value={valueInput}/>
        <button onClick={entrada}>Agregar</button>
      </div>
    </div>  
 )  
}

export default App;
