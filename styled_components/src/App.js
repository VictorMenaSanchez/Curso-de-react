import logo from './logo.svg';
import './App.css';
import { MiCaja } from './components/styled';
import { MiBotonLargo } from './components/styled2';

function App() {
  return (
    <div className="App">
     <div>
     <MiCaja entrar = {true}>
        Entrar
      </MiCaja>
     </div>
     <div>
     <MiCaja entrar = {false}>
        Salir
      </MiCaja>
     </div>
    </div>

  );
}

export default App;
