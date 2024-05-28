import React,{useState} from 'react'

export default function FiltrarTarefas(props){
    return(
        <>
          <div className='filtro'>
            <p>Filtrar</p>
            <div className='filtro-status'>
              <p>Status:</p>
              <select value={props.filter} onChange={(e)=> props.setFilter(e.target.value)}>
                <option value='All'>Todas</option>
                <option value='completed'>Completo</option>
                <option value='Incomplete'>Incompletas</option>
              </select>
            </div>
            <div className='filtro-ordem'>
              <p>Ordem de Exibição:</p>
              <div className='filtro-ordem-buttons'>
                <button onClick={()=> props.setSort("Asc")}>A - Z</button>
                <button onClick={()=> props.setSort("Desc")}>Z - A</button>
              </div>
            </div>
          </div>
        </>
    )
}