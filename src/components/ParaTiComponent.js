// ParaTiComponent.js
import React, { useState, useEffect } from 'react';
import EncuestaComponent from './EncuestaComponent';

const ParaTiComponent = () => {
  const [mostrarEncuesta, setMostrarEncuesta] = useState(true);


  useEffect(() => {
    const encuestaYaMostrada = localStorage.getItem('encuestaMostrada');
    if (encuestaYaMostrada) {
      setMostrarEncuesta(false);
    }
  }, []);

  const handleRespuestasSubmit = (respuestas) => {

    console.log('Respuestas:', respuestas);

  };

  return (
    <div>

      <h2>Bienvenido a la sección "Para Ti"</h2>

      {mostrarEncuesta && <EncuestaComponent onRespuestasSubmit={handleRespuestasSubmit} onCerrarEncuesta={() => setMostrarEncuesta(false)} />}
    </div>
  );
};

export default ParaTiComponent;
