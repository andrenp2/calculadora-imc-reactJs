import { useState } from 'react'

function App() {
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleCalcImc = () => {
    const alturaMetro = altura / 100;
    const imc = (peso / (alturaMetro * alturaMetro)).toFixed(1);

    if (imc >= 40) return setResultado(`IMC (${imc})  Obesidade tipo III`);
    if (imc >= 34.9) return setResultado(`IMC (${imc})  Obesidade tipo II`);
    if (imc >= 29.9) return setResultado(`IMC (${imc})  Obesidade tipo I`);
    if (imc >= 18.6) return setResultado(`IMC (${imc})  Acima do peso`);
    if (imc < 18.5) return setResultado(`IMC (${imc})  Abaixo do peso`);
  }

  return (
    <div className='container'>
      <div className='input'>
        <h1>Calculadora de IMC</h1>
        <input className='input-item' type="number" placeholder='Sua altura (cm)' onChange={(event) => setAltura(event.target.valueAsNumber)}  />
        <input className='input-item' type="number" placeholder='Seu peso (kg)' onChange={(event) => setPeso(event.target.valueAsNumber)}/>
        <button onClick={handleCalcImc}>Calcular</button>
        { resultado != 0 ? 
          <div className='resultado'> {resultado}</div> :
          <div className='resultado'>Insira os valores para calcular o seu IMC</div>
        }
      </div>
    </div>
  )
}

export default App
