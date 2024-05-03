import React,{useState} from 'react'

export default function FiltrarTarefas(props){
    return(
        <>
            <div className='lista-nav-tipo'>
                <p>Filtrar:</p>
              <div className='filtro'>
                <div className='filtro-status'>
                  <p>Status:</p>
                  <select value={props.filter} onChange={(e)=> props.setFilter(e.target.value)}>
                    <option value='All'>Todas</option>
                    <option value='completed'>Completo</option>
                    <option value='Incomplete'>Incompletas</option>
                  </select>
                </div>
                <div className='filtro-ordem'>
                  <p>Ordem Alfabética:</p>
                  <button onClick={()=> props.setSort("Asc")}>Asc</button>
                  <button onClick={()=> props.setSort("Desc")}>Desc</button>
                </div>
              </div>
            </div>
        </>
    )
}