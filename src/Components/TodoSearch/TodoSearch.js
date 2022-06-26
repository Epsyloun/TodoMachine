import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoSearch.css';

//Crea el componente para buscars TODOs
function TodoSearch() {
    //Se usa el hook useContext para traer props, que vienen desde TodoContext
    const {searchValue, setSearchValue} = useContext(TodoContext)
    //actualiza el valor del input del buscador
    const onSearchValueChange = (event)=>{
        setSearchValue(event.target.value);
    };
    return (
        <input type="text"
            value={searchValue}
            onChange={onSearchValueChange}
            placeholder="Buscar tarea..."/>
     );
}

export {TodoSearch};
