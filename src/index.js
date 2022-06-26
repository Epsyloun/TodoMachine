import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App/App';

//Div donde se monta toda la app
const root = ReactDOM.createRoot(document.getElementById('root'));
//Componente principal donde se renderizara la app
root.render(
    <App/>
);
