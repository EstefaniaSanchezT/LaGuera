// ParaTiComponent.js
import React, { useState } from 'react';
import EncuestaComponent from './EncuestaComponent';
import ProductosComponent from './ProductosComponent';

const ParaTiComponent = () => {
  const [mostrarEncuesta, setMostrarEncuesta] = useState(true);
  const [respuestas, setRespuestas] = useState(null);

  const handleRespuestasSubmit = (respuestas) => {
    console.log('Respuestas:', respuestas);
    setRespuestas(respuestas);
    setMostrarEncuesta(false);
  };

  return (
    <div>
      {mostrarEncuesta && (
        <EncuestaComponent
          onRespuestasSubmit={handleRespuestasSubmit}
          onCerrarEncuesta={() => setMostrarEncuesta(false)}
        />
      )}

      {!mostrarEncuesta && respuestas && (
        <ProductosComponent tipoFiltro="ParaTi" respuestas={respuestas} />
      )}
      <h1>Proximamente en nuevas versiones :D</h1>
    </div>
  );
};

export default ParaTiComponent;
