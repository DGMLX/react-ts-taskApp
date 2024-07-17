import { ChangeEvent, MouseEvent, useEffect, useState } from "react"
import { Tarea } from "../interface/todo.interfaces"    
import Swal from "sweetalert2"

interface Props {
    setTareas:React.Dispatch<React.SetStateAction<Tarea[]>>
    editMode:boolean
    tareaEdit:Tarea | undefined
    tareas:Tarea[]
    setEditMode:React.Dispatch<React.SetStateAction<boolean>>
}

interface DataForm {
    titulo?:string
    descripcion?:string
    completada:boolean,
    id:number
}

const TodoForm = ({setTareas,editMode,tareaEdit,tareas,setEditMode}:Props) =>{

    const [dataForm,setDataForm] = useState<DataForm>();


    const handleChange = ({target}:ChangeEvent<HTMLInputElement>) =>{
        const {name,value} = target
        setDataForm(prevInput=>({
            ...prevInput,
            [name]:value,
            completada:false,
            id:new Date().getTime()
        }))

    }

    useEffect(()=>{
        if(editMode && tareaEdit){
            setDataForm({
                titulo:tareaEdit.titulo,
                descripcion:tareaEdit.descripcion,
                completada:tareaEdit.completada,
                id:tareaEdit.id
            })
        }
    },[editMode])

    const agregarTarea = (e:MouseEvent<HTMLButtonElement>) =>{
        e.preventDefault()  
        if(editMode && tareaEdit){
            setDataForm({
                titulo:tareaEdit.titulo,
                descripcion:tareaEdit.descripcion,
                completada:tareaEdit.completada,
                id:tareaEdit.id
            })
            if(dataForm?.titulo  && dataForm?.descripcion){
                const actualizarTarea =  tareas.map(t=>{
                    if(t.id == tareaEdit?.id){
                        return {
                            titulo:dataForm?.titulo,
                            descripcion:dataForm?.descripcion,
                            completada:t.completada,
                            id:t.id
                        }
                    }
                    return t
                })
                
                setTareas(actualizarTarea)
                setEditMode(false)
                setDataForm({
                    titulo:"",
                    descripcion:"",
                    completada:false,
                    id:0
                })
                Swal.fire({
                    title: "Tarea modificada",
                    text: "La tarea se modifico correctamente",
                    icon: "success"
                });
            }else{
                Swal.fire({
                    title: "No se pudo editar la tarea",
                    text: "Ambos campos son obligatorios",
                    icon: "error"
                });
            }
        }else{
            if(dataForm?.titulo  && dataForm?.descripcion){
                setTareas(prevInfo=>([
                    ...prevInfo,
                    dataForm
                ]))
             
                setDataForm({
                    titulo:"",
                    descripcion:"",
                    completada:false,
                    id:0
                })
                Swal.fire({
                    title: "Tarea agregada",
                    text: "La tarea se agrego correctamente",
                    icon: "success"
                });
                
            }else{ 
                
                Swal.fire({
                    title: "No se pudo agregar la tarea",
                    text: "Ambos campos son obligatorios",
                    icon: "error"
                });
            }
        }
    }
    return(
        <>
            <div className="border-2 p-5 rounded-xl">
                <h2 className="text-center font-medium text-xl mb-5">{editMode ? 'Modificar Tarea' :'Agrega una tarea'}</h2>
                <form>
                    <label className="block mb-2">Titulo</label>
                    <input name="titulo" type="text" placeholder="Pasear al perro..."  className="border-2 py-1 px-2 rounded-md"
                    value={dataForm?.titulo} onChange={(e)=>handleChange(e)}/>

                    <label className="block mt-3 mb-2">Descripcion</label>
                    <input name="descripcion" type="text" placeholder="Agrega una descripcion" className="block border-2 rounded-md py-1 px-2" value={dataForm?.descripcion} onChange={(e)=>handleChange(e)}/>

                    <button className=" mt-5 w-full bg-cyan-950 text-white text-center py-1 rounded-xl" onClick={e=>agregarTarea(e)}>{editMode ? 'Modificar' : 'Agregar'}</button>
                </form>
            </div>
        </>
    )
}

export default TodoForm