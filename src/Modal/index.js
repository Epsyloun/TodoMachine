import React from 'react';
// Necesitamos ReactDOM para renderizar nuestro modal en el DOM
import ReactDOM from 'react-dom';
import './Modal.css';

function Modal({ children }) {
  //div donde se rendizara el portal del modal
  const modal = document.getElementById('modal');
  // ReactDom tiene este método para crear portales, se encia primero el componente y de segundo donde se renderizara
  return ReactDOM.createPortal(
    <div className="ModalBackground">
      {children}
    </div>,
    modal
  );
}

export { Modal };