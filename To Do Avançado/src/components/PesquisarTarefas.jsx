import React,{useState} from 'react'

export default function PesquisarTarefas(props){
    return(
        <>
            <div className='lista-nav-pesquisa'>
              <label htmlFor="pesquisa">Pesquisa:</label>
              <input type="search" name="pesquisa" id="pesquisa" placeholder='Pesquisar...' />
            </div>
        </>
    )
}