// CarritoComponent.js
import React, { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';

const CarritoComponent = () => {
  const [carrito, setCarrito] = useState([]);
  const [total, setTotal] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [productosEnCarrito, setProductosEnCarrito] = useState([]);

  useEffect(() => {
    fetchProductos();
  }, []);

  const fetchProductos = async () => {
    try {
      const productosSnapshot = await getDocs(collection(db, 'Productos'));
      const productos = productosSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCarrito(productos);
    } catch (error) {
      console.error('Error al obtener productos:', error.message);
    }
  };

  const agregarAlCarrito = (productoId) => {
    const productoSeleccionado = carrito.find(producto => producto.id === productoId);
    setProductosEnCarrito(prevProductos => [...prevProductos, productoSeleccionado]);
  };

  const quitarDelCarrito = (productoId) => {
    setProductosEnCarrito(prevProductos => prevProductos.filter(producto => producto.id !== productoId));
  };

  useEffect(() => {
    const nuevoTotal = productosEnCarrito.reduce((acc, producto) => {
      return acc + producto.precio;
    }, 0);
    setTotal(nuevoTotal);
  }, [productosEnCarrito]);

  const mostrarModal = () => {
    setModalVisible(true);
  };

  const cerrarModal = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <div style={{ float: 'right', marginRight: '20px', cursor: 'pointer' }}>
        <img src="/carrito-icon.png" alt="Carrito" onClick={mostrarModal} />
      </div>
      {modalVisible && (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '20px', backgroundColor: '#fff', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px' }}>
          <h3>Carrito de Compras</h3>
          {productosEnCarrito.map(producto => (
            <div key={producto.id}>
              <span>{producto.nombre}</span>
              <span>Precio: ${producto.precio.toFixed(2)}</span>
              <button onClick={() => quitarDelCarrito(producto.id)}>Quitar del Carrito</button>
            </div>
          ))}
          <p>Total: ${total.toFixed(2)}</p>
          <button onClick={cerrarModal}>Cerrar</button>
        </div>
      )}
    </div>
  );
};

export default CarritoComponent;
