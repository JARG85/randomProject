import React from 'react';
import  GraficoCircular  from './GraficoCircular';
import GraficoDeBarras from './GraficoDeBarras';
import './styleGrafico.css';
import TarjetasDeActividad from './TarjetasDeActividad';

export default function Graficos() {
  return (
    <>
    <h1>Dashboard</h1>
      <div className='contenedor' >
        
        <div className='graficoCirculo'>
          <h3>Rendimiento general</h3>
          <p>Este grafico mostrara un promedio
            del tu desempeño en las actividades
            que has realizado
          </p>
          <div className="sizeShape">
              <GraficoCircular/>  
            </div>
          </div>
          <div className="sizeShape2">
            <h3>Actividad semanal</h3>
            <p>Este grafico representa la constancia
              con la cual ingresas a la pagina
            </p>
            <GraficoDeBarras/>  
          </div>
        <div className='graficoBarras'>
          <div>
            <TarjetasDeActividad/>
          </div>
        </div>
      </div>
    </>
  )
}
