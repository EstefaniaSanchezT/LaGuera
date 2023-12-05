// DetalleCompra.js
import React from 'react';

const DetalleCompra = ({ carrito }) => {
  // Verifica si carrito es undefined, null o no es un objeto antes de usar Object.values
  const carritoArray = carrito && typeof carrito === 'object' ? Object.values(carrito) : [];

  if (carritoArray.length === 0) {
    return <p>No hay productos en el carrito.</p>;
  }

  return (
    <div>
      <h2>Detalles de la Compra</h2>
      <ul>
        {carritoArray.map(item => (
          <li key={item.producto.id}>
            <p>Nombre: {item.producto.nombre}</p>
            <p>Precio: ${item.producto.precio}</p>
            <p>Cantidad: {item.cantidad}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetalleCompra;
