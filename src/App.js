import {useState} from 'react'

import './App.css';
import Saudacao from './components/Saldacao';
import SeuNome from './components/SeuNome';

function App() {

  const [nome, setNome] = useState()

  return (
    <div className="App">
      <h1>State Lisft</h1>
      <SeuNome setNome={setNome} />
      <Saudacao nome={nome} />
    </div>
  )
}

export default App;
