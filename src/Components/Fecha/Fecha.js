import React from 'react';
import './Fecha.css';

//Arreglo de meses
const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
  "Julio", "Augosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
//Arreglo de dias
const dayNames = ["Domingo","Lunes","Martes","Miercoles","Jueves", "Viernes", "Sabado"]

//Componente de fecha
function Fecha() {
    const fecha = new Date();
    const dia = dayNames[fecha.getDay()];
    const diaf = fecha.getDate()
    const mes = monthNames[fecha.getMonth()];
    const ano = fecha.getFullYear()
    return (
        <div className='fecha-bloque'>
            <span className='fecha'>{diaf}</span>
            <div className='mes-fecha'>
                <span>{mes}</span>
                <span>{ano}</span>
            </div>
            <span className='dia'>{dia}</span>
        </div>
     );
}

export {Fecha};