import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {
  const name = 'Gian'

  return (
    <div className="App">
      <h1>Alterando o JSX</h1>
      <p>Olá, {name}</p>
      
      <HelloWorld />
    
    </div>

  );
}

export default App;
