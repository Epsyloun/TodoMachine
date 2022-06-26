import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../../TodoContext';

//Componente para crear el form de crear Todos
function TodoForm() {
    //useState hook para el valor del input
    const [newTodoValue, setNewTodoValue] = React.useState('');
    //Se usa el hook useContext para traer props, que vienen desde TodoContext
    const {addTodo, openModal, setOpenModal} = React.useContext(TodoContext)
    //Se abre o cierra el modal
    const onClickButton = () =>{
        setOpenModal(!openModal)
    }
    //identifica si hay cambios en el textArea y los actualiza
    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    }
    //Cierra el modal
    const onCancel = () =>{
        onClickButton();
    }
    //Envia el form y hace Submit
    const onSubmit = (event) =>{
        //valida que no este vacio
        if(newTodoValue === ''){
            alert('Debe ingresar un texto en el Todo');
            //Evita que se recargue la pagina
            event.preventDefault();
        }else{
            //Evita que se recargue la pagina
            event.preventDefault();
            //añade el TODO
            addTodo(newTodoValue);
            //cierra el modal
            onClickButton();
        }
    }
    return (
        <form onSubmit={onSubmit} >
            <div className='todo-form'>
                <label>Agrege una nueva tarea</label>
                <textarea required rows="4" cols="40" value={newTodoValue} onChange={onChange} placeholder='Nueva tarea...'></textarea>

                <div className='button-container'>
                    <button className='button-cancel' type='button' onClick={onCancel}>Cancelar</button>
                    <button className='button-add' type='submit' >Añadir</button>
                </div>
            </div>
        </form>
     );
}

export {TodoForm};