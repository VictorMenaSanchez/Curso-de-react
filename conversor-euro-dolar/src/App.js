import './App.css';
import React , { useRef, useState, useEffect } from 'react';
//import React , { useState } from 'react';

function App() {
  const [valorCambio, setValorCambio] = useState(null);
//Cuando se haga referencia los euros se almacena en eurosRef.
  const eurosRef = useRef();
//Tanto los euros como el resutaldo se almacenan en el useRef porque deben actualizarse
  const resultadoRef = useRef();

  useEffect(()=>{
    const llamarApi = async () => {
      try {
        const respuesta = await fetch("https://v6.exchangerate-api.com/v6/29490ce94bc0fb843f91e512/latest/EUR");
        const datos = await respuesta.json();
        console.log(datos);
        setValorCambio(datos.conversion_rates.LBP);
        //Llamar a la API de cambio de divisas
      } catch (error){
        console.error("Error al llamar a la API: ", error);
      }
    }

    llamarApi();
  }, []

  );

  const calcular = () => {
    const eurosValor = parseFloat(eurosRef.current.value);

    const dolares = eurosValor * valorCambio;
    resultadoRef.current.innerHTML= dolares.toFixed(2) + " LBP";
  }
  return <div>
    <h1 className='centrarElementos'>Conversor de Euros a Libras Libanesas</h1>
    <div>
      <label className='centrarElementos'>Euros:</label>
      
      <input className='centrarElementos' type="number" ref={eurosRef} />
    </div>
    <button className='centrarElementos' onClick={calcular}>Convertir</button>
    <h2 className='centrarElementos resultado'>Resultado: <span className='centrarElementos' ref={resultadoRef}></span></h2>
  </div>
    
}

export default App;
