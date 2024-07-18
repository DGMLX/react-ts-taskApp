import { useState } from "react";
import { TodoContext } from "./TodoContext"
import { Tarea } from "../interface/todo.interfaces";

interface Props{
    children: JSX.Element | JSX.Element[]
}

export const TodoProvider = ({children}:Props) =>{

    const [tareas,setTareas] = useState<Tarea[]>([]);
    const [editMode,setEditMode] = useState<boolean>(false);
    const [tareaEdit,setTareaEdit] = useState<Tarea>();




    return(
        <TodoContext.Provider value={{tareas,setTareas,editMode,setEditMode,tareaEdit,setTareaEdit}}>
            {children}
        </TodoContext.Provider>
    )
}