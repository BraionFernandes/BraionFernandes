import React,{useState} from 'react'

export default function Editor(props){
    const [valor, setValor] = useState('')

    const addElemento=(text)=>{
        const newDados=[
            ...props.dados,
            {
                id: Date.now(),
                text,
                isCompleted: false,
            },
        ];
        props.setDados(newDados);
        props.setDadosEdit("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!valor) return;
        addElemento(valor);
        setValor("");
    }

    if(props.dadosEdit.length > 0){
        return(
            <>
                <div className='editor'>
                    <div className='tarefaEditar'>
                        <p>{props.dadosEdit[0].text}</p>
                    </div>
                    <form onSubmit={handleSubmit} className='editar'>
                        <label htmlFor="novoNome">Novo Nome:</label>
                        <input type="text" name='novoNome' className='editorBtn' placeholder='Novo Texto' value={valor} required onChange={(e)=>setValor(e.target.value)}/>
                        <input type="submit" className='editorSubmit' value="+" />
                    </form>
                </div>
            </>
        )
    }
    
}