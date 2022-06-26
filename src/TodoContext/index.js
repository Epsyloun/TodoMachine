import React from 'react';
import { useLocalStorage } from './useLocalStorage';

//Se crea el react context
const TodoContext = React.createContext();
    //Se crea el componente TodoProvider que recibira las props desde useLocalStorage
    function TodoProvider(props){
    //Se definen las variables que se guardaran en el custom hook local storage
    const {
        item: todos,//se renombra item a todos
        saveItem: saveTodos,//se renombra saveItem a saveTodos
        loading,
        error
      } = useLocalStorage('TODOS_V2', []);

      //useState hook para manejo de apartura del modal
      const [openModal, setOpenModal] = React.useState(false)
      //useState hook para manejo de input de busqueda
      const [searchValue, setSearchValue] = React.useState("")

      //funcioon para contar TODOs terminados
      const completedTodos = todos.filter(todo => !!todo.completed).length;
      //funcioon para contar TODOs
      const totalTodos = todos.length;
      //Arreglo para mostrar los TODOs
      let searchedTodos = [];

      //Si el buscador esta vacio muestra todos los TODOs
      if(!searchValue.length >= 1){
        searchedTodos  = todos;
      }else{
      //Si no busca TODOs
        searchedTodos = todos.filter(todo =>{
          //Pasa todos los TODOs a minusculas
          const todoText = todo.text.toLowerCase();
          //Pasa el buscador de TODOs a minusculas
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText)
        })
      }
      //Funcion para añadir TODOs
      const addTodo = (text) =>{
        const newTodos = [...todos];
        newTodos.push({
          completed:false,
          text:text
        });
        saveTodos(newTodos) //Se utiliza saveTodos para añadir el Todo en LocalStorage y actualizar la lista;
      }
      //Funcion para completar TODOs
      const completeTodo = (text) =>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        if(newTodos[todoIndex].completed === true){
          newTodos[todoIndex].completed = false;
        }else{
          newTodos[todoIndex].completed = true;
        }
        saveTodos(newTodos) //Se utiliza saveTodos para añadir el Todo en LocalStorage y actualizar la lista;
      }
      //Funcion para eliminar TODOs
      const deleteTodo = (text) =>{
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [...todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos) //Se utiliza saveTodos para añadir el Todo en LocalStorage y actualizar la lista;
      }
      //Se agrega un objetos en el value de todos las props que se almacenaran en los porviders y al final se envia propos.children
    return(
        <TodoContext.Provider value={{
        loading,
        error,
        totalTodos,
        completedTodos,
        searchValue,
        setSearchValue,
        searchedTodos,
        addTodo,
        completeTodo,
        deleteTodo,
        openModal,
        setOpenModal
        }}>
            {props.children}
        </TodoContext.Provider>
    );
}

export {TodoContext, TodoProvider};