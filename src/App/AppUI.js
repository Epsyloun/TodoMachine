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

function AppUI(){
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
        <React.Fragment>
            <Fecha/>
            <TodoCounter/>
            <TodoSearch/>
                <TodoList>
                    {error && <TodoError/>}
                    {loading && <TodoLoading/>}
                    {(!loading && !searchedTodos.length) && <TodoEmpty/>}
                    {searchedTodos.map((todos) =>
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