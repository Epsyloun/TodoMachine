import React from 'react';
import { TodoContext } from '../../TodoContext';
import './CreateButton.css';

function CreateButton() {
    const {openModal, setOpenModal} = React.useContext(TodoContext)
    const onClickButton = () =>{
        setOpenModal(!openModal)
    }
    return ( <div className='container'><button className={`button-circle ${openModal && 'button-red red-text'}`} onClick={onClickButton}>+</button></div>);
}

export {CreateButton};