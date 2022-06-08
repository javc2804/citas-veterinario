import {useState, useEffect} from 'react'
import Formulario from "./components/Formulario"
import Header from "./components/Header"
import ListadoPacientes from "./components/ListadoPacientes"
function App() {
  const [pacientes,setPacientes] = useState([])
  const [paciente,setPaciente] = useState({})

  useEffect(()=>{
    const obtenerLS = () => {
      const pacientesLS = JSON.parse(localStorage.getItem('pacientes')) ?? []
      console.log(pacientesLS)
      setPacientes(pacientesLS)
    }
    obtenerLS()
  },[])

  useEffect(()=>{
    console.log('Aui')
    localStorage.setItem('pacientes',JSON.stringify(pacientes))    
  },[pacientes])

  const eliminarPaciente = id => {
    console.log('Eliminar paciente',id)
    const pacientesActualizados = pacientes.filter(paciente => paciente.id !== id)
    setPacientes(pacientesActualizados)
  }

  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex ">
      <Formulario setPaciente={setPaciente}  setPacientes={setPacientes} pacientes={pacientes} paciente={paciente} />
      <ListadoPacientes eliminarPaciente={eliminarPaciente} pacientes={pacientes} setPaciente={setPaciente} />
      </div>
    </div>
  )
}

export default App
