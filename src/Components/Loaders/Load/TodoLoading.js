import React from 'react';
import './TodoLoading.css';

//Componente para mostrar si esta cargando la informacion
function TodoLoading() {

    return (
      <div>
        <div className='item-todo-load'>
        <span
        className='check-load'
        ></span>
        <span className='text-load'></span>
        <span
        className='delete-load'
        ></span>
      </div>
      <div className='item-todo-load'>
        <span
        className='check-load'
        ></span>
        <span className='text-load'></span>
        <span
        className='delete-load'
        ></span>
      </div>
      <div className='item-todo-load'>
        <span
        className='check-load'
        ></span>
        <span className='text-load'></span>
        <span
        className='delete-load'
        ></span>
      </div>
      </div>
     );
}

export {TodoLoading};