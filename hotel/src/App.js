import React , { useState } from 'react';
import './App.css';
import ComponenteMultiple from './components/componenteMultiple.js';

function App() {
 const [dias, setDias] = useState(0);

 const [opcion, setOpcion] = useState("Hotel");

 const selector = (e) => {
  setOpcion(e.target.value);
 };
 return <div>
  <select onChange={selector}>
    <option value="Hotel">Hotel</option>
    <option value="Coche">Coche</option>
  </select>
  <input type="text" placeholder="Cantidad de días" onChange={e => setDias(e.target.value)}></input>
  {opcion === "Hotel" && <ComponenteMultiple opcion={1} dias={dias}/>}
  {opcion === "Coche" && <ComponenteMultiple opcion={2} dias={dias}/>}
 </div>
}
export default App;
