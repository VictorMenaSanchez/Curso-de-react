import phases from './data/fases.json';
import './App.css';
import { useState, useEffect } from 'react';
import {row, Btn} from './styled.js';


function App() {
  const[currentPhase, setCurrentPhase] = useState(0);

  /*useEffect(() => {
    console.log(`You are in the phase: ${currentPhase + 1 }` );
    
  },[currentPhase])*/

  useEffect(() => {

    const colorAleatorio = `rgb(${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)}, 
                                ${Math.floor(Math.random() * 256)})`;

    document.body.style.backgroundColor = colorAleatorio;
    /*if (currentPhase === 0) {
      document.body.style.backgroundColor = 'red';
    }
    if (currentPhase === 1) {
      document.body.style.backgroundColor = 'blue';
    }
    if (currentPhase === 2) {
      document.body.style.backgroundColor = 'green';
    }
    if (currentPhase === 3) {
      document.body.style.backgroundColor = 'yellow';
    }*/
  },[currentPhase])

  const nextPhase = () => {
    if (currentPhase !== phases.length - 1) setCurrentPhase(currentPhase +1);
  
  }
  const previousPhase = () => {
    if (currentPhase !== 0) setCurrentPhase(currentPhase - 1);
    
  }
  return (
<div>
    <div>
      <h1>40k 10th edition Phase counter.</h1>
    </div>
    <div>
      <p>{phases[currentPhase]}</p>
      <row>
        <Btn onClick={previousPhase}>Previous</Btn>
        <Btn onClick={nextPhase}>Next</Btn>
      </row>
    </div>
</div>
  );
}

export default App;
