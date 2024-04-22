import { useState } from 'react'
import './App.css'
import Editor from './components/editor'

function App() {

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
          <div className='lista-add'>
            <label htmlFor="tarefaNome">Adicione sua tarefa</label>
            <input type="text"  name='tarefaNome' required placeholder='Nome da nova tarefa...'/>
            <input type="submit" value="+" />
          </div>
          <div className='lista-nav'>
            <div className='lista-nav-pesquisa'>
              <label htmlFor="">Pesquisa</label>
              <input type="search" name="pesquisa" placeholder='Pesquisar...'/>
            </div>
            <div className='lista-nav-tipo'>
              <p>Filtrar:</p>
              <div>
                <button className='btnFiltro selecionado'>Todas</button>
                <button className='btnFiltro'>Completo</button>
                <button className='btnFiltro'>A Fazer</button>
              </div>
            </div>
          </div>
          <div className='tarefasRegistradas'>

          </div>
        </section>
      </main>
    </>
  )
}

export default App
