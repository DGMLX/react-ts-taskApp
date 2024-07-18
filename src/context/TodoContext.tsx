import {createContext} from "react";
import { Tarea } from "../interface/todo.interfaces";

interface ContextData {
    tareas:Tarea[]
    setTareas:React.Dispatch<React.SetStateAction<Tarea[]>>
    editMode:boolean
    setEditMode:React.Dispatch<React.SetStateAction<boolean>>
    tareaEdit:Tarea
    setTareaEdit:React.Dispatch<React.SetStateAction<Tarea | undefined>>
}

export const TodoContext = createContext<ContextData>({} as ContextData)