import { Tarea } from "../interface/todo.interfaces"
import Todo from "./Todo"

interface Props {
    setTareas:React.Dispatch<React.SetStateAction<Tarea[]>>
    tareas:Tarea[]
    setEditMode:React.Dispatch<React.SetStateAction<boolean>>
    setTareaEdit:React.Dispatch<React.SetStateAction<Tarea | undefined>>
}

const TodoList = ({tareas,setTareas,setEditMode,setTareaEdit}:Props) =>{
    return(
        <>
            <h1 className="text-center text-xl font-medium mb-5">Lista de tareas</h1>
            <div className="flex flex-wrap justify-center">
                {tareas.map(tarea=>(
                    <Todo key={tarea.id} tarea={tarea} tareas={tareas} setTareas={setTareas} setEditMode={setEditMode} setTareaEdit={setTareaEdit}/>
                ))}
            </div>
        </>
    )
}

export default TodoList