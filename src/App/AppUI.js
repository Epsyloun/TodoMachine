import React from 'react';
import { TodoContext } from '../TodoContext';
import {Fecha} from '../Components/Fecha/Fecha';
import {TodoCounter} from '../Components/TodoCounter/TodoCounter';
import {TodoSearch} from '../Components/TodoSearch/TodoSearch';
import {TodoList} from '../Components/TodoList/TodoList';
import {TodoItem} from '../Components/TodoItem/TodoItem';
import {CreateButton} from '../Components/CreateButton/CreateButton';
import {Modal} from '../Modal';
import { TodoForm } from '../Components/TodoForm';
//Loaders
import {TodoEmpty} from '../Components/Loaders/Empty/TodoEmpty';
import {TodoError} from '../Components/Loaders/Error/TodoError';
import {TodoLoading} from '../Components/Loaders/Load/TodoLoading';

//Componente del UI de la app
function AppUI(){
    //Recibe los props desde useContext TodoContext
    const {
        error,
        loading,
        searchedTodos,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
    } = React.useContext(TodoContext);
    return (
        //se envuelve en un React.Fragment para no crear etiquetas inecesarias, y se declaran todos los componentes
        <React.Fragment>
            <Fecha/>
            <TodoCounter/>
            <TodoSearch/>
                <TodoList>
                    {error && <TodoError/> /*Se muestra este componente si la app da error*/}
                    {loading && <TodoLoading/> /*Se muestra este componente mientras la app esta cargando*/}
                    {(!loading && !searchedTodos.length) && <TodoEmpty/> /*Se muestra este componente si la app no tienen info de Todos que mostrar*/}
                    {//Se muestran todos los Todos buscados desde SearchedTodos si no tiene nada se muestra toda la lista
                    searchedTodos.map((todos) =>
                    <TodoItem
                    text={todos.text}
                    key={todos.text}
                    complete={todos.completed}
                    onComplete = {() => completeTodo(todos.text)}
                    onDelete = {() => deleteTodo(todos.text)}/>
                    )}
                </TodoList>
            <CreateButton
                setOpenModal={setOpenModal}
            />
                {!!openModal && (
                    <Modal>
                        <TodoForm/>
                    </Modal>
                )}
        </React.Fragment>
     );
}

export {AppUI};