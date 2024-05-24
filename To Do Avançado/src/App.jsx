import { useState } from 'react'
// import './App.css'
import './style.css'
import Editor from './components/editor'
import GerenciadorTarefas from './components/GerenciadorTarefas.jsx'
import PesquisarTarefas from './components/PesquisarTarefas'
import FiltrarTarefas from './components/FiltrarTarefas'
import Elemento from './components/Elemento.jsx'
import {bancoDados} from './components/bancoDados.js'
import {bancoEditor} from './components/bancoEditor.js'


function App() {

  const [dados,setDados]=bancoDados();
  const [dadosEdit,setDadosEdit]=bancoEditor();
  const [search,setSearch]=useState("");
  const [filter,setFilter]=useState("All");
  const [sort,setSort]=useState("Asc");

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
          <div className='lista-geren'>
            <h1 className='lista-titulo'>Lista de Tarefas</h1>
            <div className='lista-criador'>
              <GerenciadorTarefas dados={dados} setDados={setDados}/>
            </div>
            <div className='lista-nav'>
              <FiltrarTarefas filter={filter} setFilter={setFilter} setSort={setSort}/>
            </div>
            <div className='lista-logo'>
              <picture className='lista-logo-picture'>
              <img className='lista-logo-item' src="../img/logo/empire.png" alt="Empire Logo" />
              </picture>
            </div>
          </div>
          <div className='tarefas'>
            <div className='pesquisar'>
              <PesquisarTarefas dados={dados} search={search} setSearch={setSearch}/>
            </div>
            <div className='tarefasRegistradas'>
              {dados
                .filter((todo) => filter === "All" ? true : filter === "completed" ? todo.isCompleted : !todo.isCompleted)
                .filter((todo) => todo.text.toLowerCase().includes(search.toLowerCase()))
                .sort((a, b) => sort === "Asc" ? a.text.localeCompare(b.text) : b.text.localeCompare(a.text))
                .map((todo) =>
                <Elemento key={todo.id} todo={todo} dados={dados} setDados={setDados} dadosEdit={dadosEdit} setDadosEdit={setDadosEdit}/>
              )}
            </div>
          </div>
        </section>
      </main>
      {dadosEdit && dadosEdit.length > 0 &&(
        <div className='editor-background-div'>
          <div className='div-editor'>
            <Editor dadosEdit={dadosEdit} setDadosEdit={setDadosEdit} dados={dados} setDados={setDados}/>
          </div>
        </div>
      )}
      
    </>
  )
}

export default App
