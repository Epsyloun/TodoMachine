import React from 'react';
import { TodoContext } from '../../TodoContext';
import './CreateButton.css';

//Se crea el componente CreateButton
function CreateButton() {
    //Se usa el hook useContext para traer props, que vienen desde TodoContext
    const {openModal, setOpenModal} = React.useContext(TodoContext)
    //abre y cierra el modal
    const onClickButton = () =>{
        setOpenModal(!openModal)
    }
    if(openModal){
        window.onbeforeunload = function() { return '¿Quieres salir de la app?' };
    }
    return ( <div className='container'><button className={`button-circle ${openModal && 'button-red red-text'}`} onClick={onClickButton}>+</button></div>);
}

export {CreateButton};