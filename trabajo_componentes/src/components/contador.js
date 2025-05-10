import React, {useState} from 'react';

const Contador = () => {
  const [cuenta, setCuenta] = useState(0); 
  const incrementar = () => {
    setCuenta(cuenta + 1);
  }
  const decrementar = () => {
    setCuenta(cuenta - 1);
  }

  return(
    <div>
      <h1>Contador Fail´s counter.</h1>
      <button onClick={decrementar}>That time doesn't count</button>
      <input type="text" value={cuenta} readOnly size={3} style={{textAlign:"center"}}/>
      <button onClick={incrementar}>What the fuck has he done now?</button>
    </div>
  );
}

export default Contador;