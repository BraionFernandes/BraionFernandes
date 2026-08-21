import './App.css'

function App() {

  return (
    <div className='w-screen h-screen bg-neutral-950'>
      <div>
        <h1 className='text-white p-8 text-center text-3xl font-bold'>
          Calculador de Investimentos
        </h1>
      </div>
      <hr className='text-neutral-700'/>
      <div>
        <form className='m-20 flex flex-col justify-center items-center'>
          <div className='p-5'>
            <p className='text-white text-xl font-semibold pb-4'>Renda Principal Bruta</p>
            <label className='text-white' htmlFor="RendaP">Renda Principal: </label>
            <input className='text-white border-2 border-neutral-500 p-0.5 rounded-md outline-none' type="number" name="RendaP" id="RendaP"/>
          </div>
          <div className='p-5'>
            <p className='text-white text-xl font-semibold pb-4'></p>
            <label className='text-white' htmlFor="RendaS">Renda Secundária: </label>
            <input className='text-white border-2 border-neutral-500 p-0.5 rounded-md outline-none' type="number" name="RendaS" id="RendaS"/>
          </div>
        </form>
      </div>
    </div>
  )
}

export default App
