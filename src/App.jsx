import { useState } from 'react'
// import lodearriba from './top'
import './App.css'
import empleados from './empleados'




function App() {
  const [number1, setNumber1] = useState(0)
  const [number2, setNumber2] = useState(0)
  const [result, setResult] = useState(null);

    const suma = () => {
      const n1 = parseFloat(number1);
      const n2 = parseFloat(number2)
      setResult(n1+n2)
    }

    const resta = () => {
      const n1 = parseFloat(number1);
      const n2 = parseFloat(number2)
      setResult(n1-n2)
    }

    const multiplicacion = () => {
      const n1 = parseFloat(number1);
      const n2 = parseFloat(number2)
      setResult(n1*n2)
    }
    const division = () => {
      const n1 = parseFloat(number1);
      const n2 = parseFloat(number2)
      setResult(n1/n2)
    }


    
  
  
      const almacenamiento = empleados.map((empleado, i) => (
        <div key={i}>
          <p>Nombre: {empleados[i].name}</p>
          <p>Apellidos: {empleados[i].lastName}</p>
          <p>Hobbies: {empleados[i].hobbies.join(', ')}</p>
          <p>Edad: {empleados[i].age}</p>
        </div>
      ));
    
    
    
   
  return (
    // cabecera: logo
    <div className="envoltura">
      <header>
      <img src={('./assets/cocretainc.jpg')} />
      </header>
      <main>
      {almacenamiento} 

        <form onSubmit={(e) => { 
          e.preventDefault(); 
        }}>
          <input 
            type="number" 
            value={number1} 
            
            onChange={(e) => setNumber1(e.target.value)} 
            placeholder="add a number" 
            />
          <input 
            type="number" 
            value={number2} 
            onChange={(e) => setNumber2(e.target.value)} 
            placeholder="add a number" 
            />
          <button onClick={()=> suma(number1,number2)}>Add</button>
          <button onClick={()=> resta(number1,number2)}>Subtract</button>
          <button onClick={()=> multiplicacion(number1,number2)}>Multiply</button>
          <button onClick={()=> division(number1,number2)}>Divide</button>
        </form>
        <div>
          <h2>Resultado: {result}</h2>
        </div>
  

      </main>
      <footer>
        <p>Todos los derechos reservados</p>
        <p>Coquetas INC</p>
        <p>Dirección: Simancas (Madriz)</p>
        <p>Teléfono: 917335673 - 635444912</p>
        <p>Email: croquetasINC@hotmail.com</p>
      </footer> 
    </div>
  )

};


export default App
