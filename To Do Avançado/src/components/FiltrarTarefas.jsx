import React,{useState} from 'react'

export default function FiltrarTarefas(props){
    return(
        <>
            <div className='lista-nav-tipo'>
              <p>Filtrar:</p>
              <div>
                <button className='btnFiltro'>Todas</button>
                <button className='btnFiltro'>Completo</button>
                <button className='btnFiltro'>BtnAFazer</button>
              </div>
            </div>
        </>
    )
}