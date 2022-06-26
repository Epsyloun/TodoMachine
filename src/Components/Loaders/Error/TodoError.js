import React from 'react';
import './TodoError.css';

//Componente para mostrar si no hay errror
function TodoError() {
    return (
        <div className='error'>
            <h2>Ocurrio un errror :c</h2>
            <h2>Por favor, recarga la pagina</h2>
        </div>
     );
}

export {TodoError};