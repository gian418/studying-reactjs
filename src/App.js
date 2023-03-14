import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {

  const nome = "Maria"

  return (
    <div className="App">

      <Frase />
      <Frase />



      <SayMyName nome="Gian" />
      <SayMyName nome="Haack" />
      <SayMyName nome={nome} />

      <Pessoa nome="Rodrigo" 
              idade="28" 
              profissao="Programador"
              foto="https://via.placeholder.com/150" />

    </div>
  )
}

export default App;
