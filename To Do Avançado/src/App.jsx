import { useState } from 'react'
import './App.css'
import Editor from './components/editor'
import CriadorTarefas from './components/CriadorTarefas'
import PesquisarTarefas from './components/PesquisarTarefas'
import FiltrarTarefas from './components/FiltrarTarefas'
import Elemento from './components/Elemento.jsx'
import {bancoDados} from './components/bancoDados.js'

function App() {
  const [dados,setDados]=bancoDados();

  return (
    <>
      <header className='header'>
        <picture className='header-logo'>
          <img className='header-logo-item' src="../img/logo/empire.png" alt="Empire Logo" />
        </picture>
        <nav className='header-nav'>
          <ul className='header-nav-lista'>
            <li className='header-nav-lista-item'><a href="#">Home</a></li>
            <li className='header-nav-lista-item'><a href="#">Empire</a></li>
            <li className='header-nav-lista-item'><a href="#">Serviços</a></li>
            <li className='header-nav-lista-item'><a href="#">Suporte</a></li>
          </ul>
        </nav>
      </header>
      <main className='main'>
        <section className='lista'>
          <h1 className='lista-titulo'>Lista de Tarefas</h1>
          <CriadorTarefas dados={dados} setDados={setDados}/>
          <div className='lista-nav'>
            <PesquisarTarefas/>
            <FiltrarTarefas/>
          </div>
          <div className='tarefasRegistradas'>
            {dados.map((todo) =>
              <Elemento key={todo.id} todo={todo}/>
            )}
          </div>
        </section>
      </main>
    </>
  )
}

export default App
