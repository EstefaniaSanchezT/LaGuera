// InicioComponent.js
import React from 'react';
import '../styles/Inicio.css'

const InicioComponent = () => {
  return (
    <div className="bod">
      <div className="title">
        <h2 className="Title2">¡Descubre frescura y sabor en nuestro rincón de jugos y licuados!</h2>
        <p className="bienvenida">Explora combinaciones naturales, desde tropicales hasta 
            batidos energizantes. Cada sorbo es una experiencia única.
            En nuestro menú, encuentras mezclas clásicas y creaciones 
            innovadoras. ¡Bienvenido a la revolución de los sabores! 
        </p>
      </div>
      <div className="Title3">
        <h4 className="bienvenida2">
          En nuestro menú, encontrarás mezclas cuidadosamente
          elaboradas para satisfacer todos los gustos 
          y necesidades. Desde los clásicos que te harán 
          sonreír de nostalgia hasta innovadoras 
          creaciones que desafiarán tus papilas gustativas.
        </h4>
      </div>
      <div className="gallery">
        <div className="img-container"><img src='https://images.pexels.com/photos/3780469/pexels-photo-3780469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt="Image 1" /></div>
        <div className="img-container"><img src="https://images.pexels.com/photos/3622478/pexels-photo-3622478.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 2" /></div>
        <div className="img-container"><img src="https://images.pexels.com/photos/19202780/pexels-photo-19202780/free-photo-of-frutas-postre-delicioso-fotografia-de-comida.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 3" /></div>
        <div className="img-container"><img src="https://images.pexels.com/photos/7004909/pexels-photo-7004909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 4" /></div>
        <div className="img-container"><img src="https://images.pexels.com/photos/1200348/pexels-photo-1200348.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 5" /></div>
        <div className="img-container"><img src="https://images.pexels.com/photos/326179/pexels-photo-326179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Image 6" /></div>
      </div>
    </div>
  );
};

export default InicioComponent;
