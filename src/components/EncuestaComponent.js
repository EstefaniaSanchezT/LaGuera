// EncuestaComponent.js
import React, { useState } from 'react';

const EncuestaComponent = ({ onRespuestasSubmit, onCerrarEncuesta }) => {
  const [respuestas, setRespuestas] = useState({
    plátano: false,
    espinacas: false,
    piña: false,
    mango: false,
    naranja: false,
    fresa: false,
    yogurNatural: false,
    miel: false,
    leche: false,
    pepino: false,
  });
  
  const handleRespuestaToggle = (ingrediente) => {
    // Lógica para alternar el valor del ingrediente en el estado
    setRespuestas((prevRespuestas) => ({
      ...prevRespuestas,
      [ingrediente]: !prevRespuestas[ingrediente],
    }));
  };

  const handleRespuestasSubmit = () => {
    // Lógica para procesar las respuestas y enviarlas al componente principal
    onRespuestasSubmit(respuestas);
    // Cerrar la ventana emergente (modal)
    onCerrarEncuesta();
    // Marcar que la encuesta ha sido completada
    localStorage.setItem('encuestaCompletada', 'true');
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Encuesta para Recomendaciones</h2>
        <p>¿Qué ingredientes te gustan más?</p>
        <div>
        <label>
          <input
            type="checkbox"
            checked={respuestas.plátano}
            onChange={() => handleRespuestaToggle('plátano')}
          />
          Plátano
        </label>
        <label>
          <input
            type="checkbox"
            checked={respuestas.espinacas}
            onChange={() => handleRespuestaToggle('espinacas')}
          />
          Espinacas
        </label>
        <label>
          <input
            type="checkbox"
            checked={respuestas.piña}
            onChange={() => handleRespuestaToggle('piña')}
          />
          Piña
        </label>
        <label>
          <input
            type="checkbox"
            checked={respuestas.mango}
            onChange={() => handleRespuestaToggle('mango')}
          />
          Mango
        </label>
        <label>
          <input
            type="checkbox"
            checked={respuestas.naranja}
            onChange={() => handleRespuestaToggle('naranja')}
          />
          Naranja
        </label>
        <label>
          <input
            type="checkbox"
            checked={respuestas.fresa}
            onChange={() => handleRespuestaToggle('fresa')}
          />
          Fresa
        </label>
        <label>
          <input
            type="checkbox"
            checked={respuestas.yogurNatural}
            onChange={() => handleRespuestaToggle('yogurNatural')}
          />
          Yogur Natural
        </label>
        <label>
          <input
            type="checkbox"
            checked={respuestas.miel}
            onChange={() => handleRespuestaToggle('miel')}
          />
          Miel
        </label>
        <label>
          <input
            type="checkbox"
            checked={respuestas.leche}
            onChange={() => handleRespuestaToggle('leche')}
          />
          Leche
        </label>
        <label>
          <input
            type="checkbox"
            checked={respuestas.pepino}
            onChange={() => handleRespuestaToggle('pepino')}
          />
          Pepino
        </label>
        </div>
        <button onClick={handleRespuestasSubmit}>Enviar Respuestas</button>
      </div>
    </div>
  );
};

export default EncuestaComponent;