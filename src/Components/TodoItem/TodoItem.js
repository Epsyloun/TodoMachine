import React from 'react';
import './TodoItem.css';

function TodoItem(props) {
    return (
        <li className='item-todo'>
            <span
            className={`check ${props.complete && 'checked'}`}
            onClick = {props.onComplete}
            >✓</span>

            <p className={`${props.complete && 'checked-word'}`}>{props.text}</p>
            <span
            className={`delete ${props.complete && 'deletechecked'}`}
            onClick = {props.onDelete}
            >X</span>
        </li>
     );
}

export {TodoItem};