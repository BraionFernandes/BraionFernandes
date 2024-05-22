import React,{useState} from 'react'

export default function PesquisarTarefas(props){
    

    return(
        <>
            <div className='tarefas-pesquisar'>
              <label htmlFor="pesquisa">Pesquisa</label>
              <input type="search" name="pesquisa" id="pesquisa" placeholder='Pesquisar...' value={props.search} onInput={(e)=>props.setSearch(e.target.value)}/>
            </div>
        </>
    )
}