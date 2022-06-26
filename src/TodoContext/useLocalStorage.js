import React from 'react';

//Creacion de un custom hook para guardar datos en el LocalStorage
function useLocalStorage(itemName, initialValue){
    //useState hook para manejo del error
    const [error, setError] = React.useState(false)
    //useState hook para manejo de si esta cargando
    const [loading, setLoading] = React.useState(true)
    //useState hook para obtener los TODOs almacenados
    const [item, setItem] = React.useState(initialValue)

    //Hook para realizar este efecto solo cuando se carga la pagina la ptimera vez, ya que el segundo argumento es []
    React.useEffect(() => {
      try {
        //TimeOut para simular tiempo de respuesta de una API
        setTimeout(() =>{

          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;

          if(!localStorageItem){
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          }else{
            parsedItem = JSON.parse(localStorageItem)
          }
          setItem(parsedItem)
          setLoading(false);
        }, 1000)
      } catch (error) {
          setError(error);
      }
    },[] /*Este argumento*/);

    //Funcion para guardar un nuevo TODO en Local Storage y despues actualizarlo en la lista de Todos con setItem
    const saveItem = (newItem) => {
      try {
        const stringifiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifiedItem);
        setItem(newItem);
      } catch (error) {
        setError(error);
      }
    };
    /*
    -devolvemos los valores necesarios de esta funcion
    -item que que son los datos que hay en el local storage
    -saveItem para añadir items en LocalStorage y actualizar la lista
    -loading para decirle que deje de cagar
    -error por si muestra algun errror
    */
    return {
      item,
      saveItem,
      loading,
      error
    }
  }

  export {useLocalStorage};