import logo from './logo.svg';
import './App.css';
import { MiCaja } from './components/styled';
import { MiBotonLargo } from './components/styled2';

function App() {
  return (
    <div className="App">
     <div>
     <MiCaja>
        Entrar
      </MiCaja>
     </div>
        <div>
          <MiBotonLargo>
            Salir
          </MiBotonLargo>
        </div>
    </div>

  );
}

export default App;
