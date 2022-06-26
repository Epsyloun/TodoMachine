import React from "react";
import { TodoContext } from "../../TodoContext";
import './TodoCounter.css';

//Componente para mostrar el numero de TODOs
function TodoCounter(){
    //Se usa el hook useContext para traer props, que vienen desde TodoContext
    const {totalTodos, completedTodos} = React.useContext(TodoContext);
    return(
        <h2 className="titulo-counter">{completedTodos}/{totalTodos} TODOs</h2>
    );
}
 export {TodoCounter};