import React from 'react';
import './TodoItem.css';

//Crea el componente que mostrara cada TODO
function TodoItem(props) {
    return (
        <li className='item-todo'>
            <span
            className={`check ${props.complete && 'checked'}` /*Agrega una clase y si una prop es verdadera agrega otra*/}
            onClick = {props.onComplete}
            >✓</span>

            <p className={`${props.complete && 'checked-word'}` /*Agrega una clase y si una prop es verdadera agrega otra*/}>{props.text}</p>
            <span
            className={`delete ${props.complete && 'deletechecked'}`}
            onClick = {props.onDelete}
            >X</span>
        </li>
     );
}

export {TodoItem};