import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { useContext} from "react"
import { TodoContext } from "./context/TodoContext"

interface Props {
  title:string
}


const App = ({title}:Props) =>{   

  const {tareas} = useContext(TodoContext)

  return(
    <>
      <h1 className="text-center mt-10 mb-10 text-3xl font-medium">{title}</h1>
      <div className="my-5">
      { 
        tareas.length>0 ? <p className="text-xl font-thin text-center">Tareas pendientes : {tareas.length}</p>: <p className="text-xl mb-10 font-thin text-center">No hay tareas, agrega para visualizarlas</p>
        
      }
      </div>
      <div className="flex justify-around">
        <div>
          <TodoForm/>
        </div>
        <div>
          <TodoList/>
        </div>
      </div>
    </>
  )
}

export default App