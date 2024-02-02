import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

const Navbar = ({ onCarritoClick, cantidadEnCarrito, onBuscarChange }) => {
  const [busqueda, setBusqueda] = useState('');
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '10px' }}>
      <h3>La guera</h3>
        <div className='borderXwidth'>
        <Link to="/">Inicio</Link>
        <Link to="/tipo/Licuado">Licuados</Link>
        <Link to="/tipo/Jugo">Jugos</Link>
        <Link to="/tipo/Snack">Snacks</Link>
        <Link to="/para-ti">Para ti</Link>

        </div>
      <div>
        <input
          type="text"
          placeholder="Buscar productos..."
          value={busqueda}
          onChange={(e) => {
            setBusqueda(e.target.value);
            onBuscarChange(e.target.value);
          }}
        />
        <div>
        <span role="img" aria-label="Carrito de Compras" onClick={onCarritoClick}>
          🛒 {cantidadEnCarrito > 0 && `(${cantidadEnCarrito})`}
        </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
