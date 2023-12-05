import React, { useEffect } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';

const Carrito = ({ carrito, onEliminarProducto, onRealizarCompra }) => {
  useEffect(() => {
    console.log('Carrito.js se ha renderizado');
    return () => {
      console.log('Carrito.js se ha desmontado');
    };
  }, []);

  const calcularPrecioTotal = () => {
    return carrito.reduce((total, item) => total + item.producto.precio * item.cantidad, 0);
  };

  const onSuccessHandler = (paymentDetails, data) => {
    console.log('Pago realizado con éxito', paymentDetails, data);
    onRealizarCompra();
  };

  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', position: 'absolute', right: '10px', top: '60px', background: '#fff' }}>
      <h3>Carrito de Compras</h3>
      <ul>
        {carrito.map((item, index) => (
          <li key={index}>
            <p>Nombre: {item.producto.nombre}</p>
            <p>Precio: ${item.producto.precio}</p>
            <p>Cantidad: {item.cantidad}</p>
            <button onClick={() => onEliminarProducto(item.producto.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Precio Total: ${calcularPrecioTotal().toFixed(2)}</p>
      <PayPalButton
        amount={calcularPrecioTotal()}
        onSuccess={onSuccessHandler}
        options={{
          clientId: 'AULeMaaVtfWDZjVmRHj7Kc6KrDCf0u-tAJLc1SSbioNZDrVZXxqIj_ObUK-jdbiumxUmaQ0LWk6bNKaj',
        }}
      />
    </div>
  );
};

export default Carrito;