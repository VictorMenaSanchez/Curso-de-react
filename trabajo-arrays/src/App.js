import logo from './logo.svg';
import './App.css';

function App() {

const miArray =() => {
  const numerosArray = [
    {id:1, numero: 1},
    {id:2, numero: 2},
    {id:3, numero: 3},
    {id:4, numero: 4},
    {id:5, numero: 5},
    {id:6, numero: 6},
    {id:7, numero: 7},
    {id:8, numero: 8},
    {id:9, numero: 9},
    {id:10, numero: 10},
  ];

  return(
    <p>
      {numerosArray.map((item)=>{
        return <span key={item.id}>{item.id}&nbsp;{item.numero}&nbsp;</span>
      })}
    </p>
  )
}

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Números del array</h1>
        {miArray()}
      </header>
    </div>
  );
}

export default App;
