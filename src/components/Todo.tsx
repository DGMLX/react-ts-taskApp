import Swal from "sweetalert2"
import { Tarea } from "../interface/todo.interfaces"

interface Props {
    setTareas:React.Dispatch<React.SetStateAction<Tarea[]>>
    tarea:Tarea
    setEditMode:React.Dispatch<React.SetStateAction<boolean>>
    setTareaEdit:React.Dispatch<React.SetStateAction<Tarea | undefined>>
    tareas:Tarea[]
}

const Todo = ({setTareas,tarea,setEditMode,setTareaEdit,tareas}:Props) =>{

    

    const eliminarTarea = (id : number) =>{
        setTareas(prevData=>prevData.filter(data=>data.id !== id))
        Swal.fire({
            title: "Tarea eliminada",
            text: "La tarea se elimino correctamente",
            icon: "success"
          });
    }

    const editarTarea = (id:number)=>{
        setEditMode(true)
        const tareaEncontrada = tareas.filter(t=>t.id == id)
        setTareaEdit(tareaEncontrada[0])
    }
    return(
        <div className="m-5 border-2 p-5 rounded-xl w-52">
            <h3 className="font-medium">{tarea.titulo}</h3>
            <p className="font-thin">{tarea.descripcion}</p>
            <div className="flex justify-around mt-3">
                <button className="w-50 bg-yellow-500 py-1 px-2 rounded-xl text-white" onClick={()=>editarTarea(tarea.id)}>Editar</button>
                <button className="w-50 bg-red-400 py-1 px-2 rounded-xl text-white" onClick={()=>eliminarTarea(tarea.id)}>Eliminar</button>
            </div>
        </div>
    )
}

export default Todo