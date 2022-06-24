import React, { useContext } from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoSearch.css';

function TodoSearch() {
    const {searchValue, setSearchValue} = useContext(TodoContext)
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
