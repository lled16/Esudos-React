import './App.css';
import React from 'react';
import SayMyName from './Components/SayMyName';
import HelloWord from './Components/HelloWord';
import Pessoa from './Components/Pessoa';
import Frase from './Components/Frase';
import List from './Components/List';
import Eventos from './Components/Eventos';
import Form from './Components/Form';
import Condicional from './Components/Condicional';
import OutraLista from './Components/outraLista';
import { useState } from 'react';
import SeuNome from './Components/SeuNome';
import Saudacao from './Components/Saudacao';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import Navbar from './Components/Layout/Navbar';
import Footer from './Components/Layout/Footer';




function App() {

  const name = 'João';
  const newName = name.toUpperCase();

  function sum(a, b) {
    return a + b;
  }

  const url = "https://via.placeholder.com/150";
  const nome = "Moog";

  const meusItens = ['react', 'vue', 'angular']


  const [nm, setNome] = useState()

  return (
    <Router>

    <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />

        <Route path='/empresa' element={<Empresa />} />

        <Route path='/contato' element={<Contato />} />
      </Routes>



      <div className="App">
        <h1>Olá Mundo !</h1>
        <p>Meu Primeiro APP</p>
        <p>Olá, {name} , {newName}</p>
        <p>Soma : {2 + 2}</p>
        <p>Chamando a função: {sum(2, 2)}</p>
        <img src={url} alt="Minha Imagem" />

        < HelloWord />

        <SayMyName nome="João" />
        <SayMyName nome="Milene" />
        <SayMyName nome={nome} />

        <Pessoa nome="João" idade="22" profissao="Programador" foto="https://via.placeholder.com/150" />

        <Frase />

        <List />

        <Eventos numero="1" />
        <Eventos numero="2" />

        <Form />


        <h1>Renderização Condicional</h1>
        <Condicional />


        <h1>Renderização de Listas</h1>
        <OutraLista item={meusItens} />
        <OutraLista item={[]} />


        <h1>State Lift</h1>
        <SeuNome setNome={setNome} />
        <Saudacao nome={nm} />

      </div>
      <Footer />
    </Router>
  );
}

export default App;
