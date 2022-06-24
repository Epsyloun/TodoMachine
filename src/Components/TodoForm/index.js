import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../../TodoContext';

function TodoForm() {
    const [newTodoValue, setNewTodoValue] = React.useState('');
    const {addTodo, openModal, setOpenModal} = React.useContext(TodoContext)
    const onClickButton = () =>{
        setOpenModal(!openModal)
    }

    const onChange = (event) =>{
        setNewTodoValue(event.target.value)
    }
    const onCancel = () =>{
        onClickButton();
    }
    const onSubmit = (event) =>{
        if(newTodoValue === ''){
            alert('Debe ingresar un texto en el Todo');
            event.preventDefault();
        }else{
            event.preventDefault();
            addTodo(newTodoValue);
            onClickButton();
        }
    }
    return (
        <form onSubmit={onSubmit} >
            <div className='todo-form'>
                <label>Agrege una nueva tarea</label>
                <textarea required rows="4" cols="40"value={newTodoValue} onChange={onChange} placeholder='Nueva tarea...'></textarea>

                <div className='button-container'>
                    <button className='button-cancel' type='button' onClick={onCancel}>Cancelar</button>
                    <button className='button-add' type='submit' >Añadir</button>
                </div>
            </div>
        </form>
     );
}

export {TodoForm};