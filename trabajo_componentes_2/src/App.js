import PropTypes from 'prop-types';
import './App.css';

function App() {
  const usuario = {
    
    //nombre: "Juan",
    apellido: "Pérez",
    edad: "26",
    ciudad: "Madrid",
    genero: "Masculino"
  };

  return (
    <div>
      <div>
        <Saludo usuario={usuario}></Saludo>
      </div>
    </div>
  );
}
// Componente Saludo con reenderizado condicional
function Saludo(props) {
  return (
    <div>
      
      {props.usuario.nombre ? (
        <div>
      <h1>Hola {props.usuario.nombre} {props.usuario.apellido}</h1>
      <div>
      <h2>Datos del usuario</h2>
      <p>Edad: <strong>{props.usuario.edad}</strong></p>
      <p>Ciudad: <strong>{props.usuario.ciudad}</strong></p>
      <p>Género: <strong>{props.usuario.genero}</strong></p>
    </div>
    </div>
      ):<h1 style={{ color: 'red' }}>Nombre no disponible, datos no disponibles.</h1>}
    </div>
  )
  }


Saludo.propTypes = {
  usuario: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    edad: PropTypes.number.isRequired
  })
};

export default App;
