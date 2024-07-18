import { useContext } from "react"
import { TodoContext } from "../context/TodoContext"

import Todo from "./Todo"

const TodoList = () =>{

    const {tareas} = useContext(TodoContext)

    return(
        <>
            <h1 className="text-center text-xl font-medium mb-5">Lista de tareas</h1>
            <div className="flex flex-wrap justify-center">
                {tareas.map(tarea=>(
                    <Todo key={tarea.id} tarea={tarea}/>
                ))}
            </div>
        </>
    )
}

export default TodoList