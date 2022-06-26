import React from "react";
import {AppUI} from './AppUI';
import {TodoProvider} from '../TodoContext/index';

function App() {
//Componente App, envuelto en TodoProvider para enviarle el TodoContenxt
  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
