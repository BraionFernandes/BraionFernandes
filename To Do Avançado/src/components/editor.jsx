import React,{useState} from 'react'

export default function Editor(props){
    return(
        <>
            <div className='editor'>
                <div className='tarefaEditar'>

                </div>
                <div className='editar'>
                    <label htmlFor="novoNome">Novo Nome:</label>
                    <input type="text" name='novoNome' className='editorBtn' placeholder='Novo Texto'/>
                    <input type="submit" className='editorSubmit' value="+" />
                </div>
            </div>
        </>
    )
}