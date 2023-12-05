// Navbar.js
// Navbar.js
import React from 'react';

const Navbar = ({ onCarritoClick, cantidadEnCarrito}) => {

  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <div>
        <h3>La Guera</h3>
        <span role="img" aria-label="Carrito de Compras" onClick={onCarritoClick}>
          🛒 {cantidadEnCarrito > 0 && `(${cantidadEnCarrito})`}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;
