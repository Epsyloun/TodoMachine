import React from 'react';
import './TodoList.css';

//Crea el componente de la lista que contendra los TODOs, ademas el props.children maqueta todo lo que venga adentro de las props
function TodoList(props) {
    return (
        <section>
            <ul>
                {props.children}
            </ul>
        </section>
     );
}

export {TodoList};