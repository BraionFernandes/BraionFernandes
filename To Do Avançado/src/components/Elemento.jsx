import React,{useState} from 'react'

export default function Elemento(props){
    return(
        <>
            <div className='tarefa'>
                <div>
                    <p>{props.todo.text}</p>
                </div>
                <div>
                    <button id="btnConcluir" className="material-symbols-outlined">done</button>
                    <button id="btnEditar" className="material-symbols-outlined">edit</button>
                    <button id="btnExcluir" className="material-symbols-outlined">close</button>
                </div>
            </div>
        </>
    )
}