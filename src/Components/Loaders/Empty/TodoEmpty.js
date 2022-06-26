import React from 'react';
import './TodoEmpty.css';

//Componente para mostrar si no hay ningun todo
function TodoEmpty() {
    return (
        <div className='empty'>
            <h2>-No hay TODOs-</h2>
        </div>
     );
}

export {TodoEmpty};