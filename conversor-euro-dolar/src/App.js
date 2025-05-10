import './App.css';
import React , { useRef, useState, useEffect } from 'react';

function App() {
  const [valorCambio, setValorCambio] = useState(null);
  const [moneda, setMoneda] = useState(); // Estado para la moneda seleccionada
  const eurosRef = useRef();
  const resultadoRef = useRef();

  useEffect(() => {
    const llamarApi = async () => {
      try {
        const respuesta = await fetch("https://v6.exchangerate-api.com/v6/29490ce94bc0fb843f91e512/latest/EUR");
        const datos = await respuesta.json();
        console.log(datos);
        switch (moneda) {
          case "USD":
            setValorCambio(datos.conversion_rates.USD);
            break;
          case "LBP":
            setValorCambio(datos.conversion_rates.LBP);
            break;
          case "TRY":
            setValorCambio(datos.conversion_rates.TRY);
            break;
          case "JPY":
            setValorCambio(datos.conversion_rates.JPY);
            break;
          case "KRW":
            setValorCambio(datos.conversion_rates.KRW);
            break;
          case "MXN":
            setValorCambio(datos.conversion_rates.MXN);
            break;
          case "IRN":
            setValorCambio(datos.conversion_rates.INR);
            break;
          default:
            console.error("Moneda no válida");
            break;
        }
      } catch (error) {
        console.error("Error al llamar a la API: ", error);
      }
    };

    llamarApi();
  }, [moneda]); // Se ejecuta cada vez que cambia la moneda seleccionada

  const calcular = () => {
    const eurosValor = parseFloat(eurosRef.current.value);
    if (isNaN(eurosValor) || eurosValor <= 0) {
      resultadoRef.current.innerHTML = "Please introduce a valid value.";
      return;
    }

    const resultado = eurosValor * valorCambio;
    resultadoRef.current.innerHTML = resultado.toFixed(2) + " " + moneda; // Cambiar el texto a la moneda seleccionada
  };

  return (
    <div>
      <h1 className="centrarElementos">CONVERT EUROS IN OTHER THINGS.</h1>
      <div>
        <label className="centrarElementos">EUR VALUE:</label>
        <input className="centrarElementos" type="number" ref={eurosRef} />
        <label className="centrarElementos">SELECT A COIN TO CONVERT:</label>
        <select
          className="centrarElementos"
          value={moneda}
          onChange={(e) => setMoneda(e.target.value)} // Cambia el estado de moneda al valor seleccionado
        >
          <option value="USD">Dollar</option>
          <option value="LBP">Libanese Pound</option>
          <option value="TRY">Turkish Lira</option>
          <option value="JPY">Yen</option>
          <option value="KRW">Won</option>
          <option value="MXN">Peso</option>
          <option value="IRP">Rupee</option>
        </select>
      </div>
      <button className="centrarElementos" onClick={calcular}>
        CHANGE COIN
      </button>
      <h2 className="centrarElementos resultado">
        TOTAL: <span className="centrarElementos" ref={resultadoRef}></span>
      </h2>
    </div>
  );
}

export default App;
