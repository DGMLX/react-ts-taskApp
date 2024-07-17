import { useEffect, useState } from "react"
import TodoForm from "./components/TodoForm"
import TodoList from "./components/TodoList"
import { Tarea } from "./interface/todo.interfaces"

interface Props {
  title:string
}


const App = ({title}:Props) =>{  
  const [tareas,setTareas] = useState<Tarea[]>([]);
  const [editMode,setEditMode] = useState<boolean>(false);
  const [tareaEdit,setTareaEdit] = useState<Tarea>();



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
          <TodoForm tareas={tareas} setTareas={setTareas} editMode={editMode} tareaEdit={tareaEdit} setEditMode={setEditMode}/>
        </div>
        <div>
          <TodoList tareas={tareas} setTareas={setTareas} setEditMode={setEditMode} setTareaEdit={setTareaEdit}/>
        </div>
      </div>
    </>
  )
}

export default App