// ProductosComponent.js
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import Navbar from './Navbar';
import Carrito from './Carrito';
import '../styles/ProductosComponent.css'

const ProductosComponent = ({ tipoFiltro }) => {
  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState({});
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = productos.filter((producto) => {
    const nombreLowerCase = producto.nombre ? producto.nombre.toLowerCase() : '';
    return (
      (!tipoFiltro || producto.tipo.toLowerCase() === tipoFiltro.toLowerCase()) &&
      nombreLowerCase.includes(busqueda.toLowerCase())
    );
  });
  const obtenerProductoEnCarrito = (idProducto) => {
    return carrito[idProducto];
  };

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  const agregarAlCarrito = (producto) => {
    const idProducto = producto.id;
    const productoEnCarrito = obtenerProductoEnCarrito(idProducto);

    if (productoEnCarrito) {
      // El producto ya está en el carrito, aumenta el contador
      const nuevoCarrito = {
        ...carrito,
        [idProducto]: {
          producto: productoEnCarrito.producto,
          cantidad: productoEnCarrito.cantidad + 1,
        },
      };
      setCarrito(nuevoCarrito);
    } else {
      // El producto no está en el carrito, agrégalo con un contador de 1
      const nuevoCarrito = {
        ...carrito,
        [idProducto]: {
          producto: producto,
          cantidad: 1,
        },
      };
      setCarrito(nuevoCarrito);
    }
  };

  const eliminarDelCarrito = (idProducto) => {
    const productoEnCarrito = obtenerProductoEnCarrito(idProducto);

    if (productoEnCarrito) {
      // Disminuir el contador y eliminar si llega a cero
      const nuevoCarrito = {
        ...carrito,
        [idProducto]: {
          producto: productoEnCarrito.producto,
          cantidad: Math.max(0, productoEnCarrito.cantidad - 1),
        },
      };

      if (nuevoCarrito[idProducto].cantidad === 0) {
        // Eliminar si el contador llega a cero
        delete nuevoCarrito[idProducto];
      }

      setCarrito(nuevoCarrito);
    }
  };

  useEffect(() => {
    const obtenerProductos = async () => {
      const productosCollection = collection(db, 'Productos');
      const snackCollection = collection(db, 'snack');

      try {
        const productosSnapshot = await getDocs(productosCollection);
        const snackSnapshot = await getDocs(snackCollection);

        const nuevosProductos = productosSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const nuevosSnacks = snackSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProductos([...nuevosProductos, ...nuevosSnacks]);
      } catch (error) {
        console.error('Error al obtener productos:', error);
      }
    };

    obtenerProductos();
  }, []);

  return (
    <div>
      <Navbar
        onCarritoClick={toggleCarrito}
        cantidadEnCarrito={Object.values(carrito).reduce((total, item) => total + item.cantidad, 0)}
        onBuscarChange={(valor) => setBusqueda(valor)}
      />
      <h2 className='listaProductos'>Lista de Productos</h2>
      <ul className='principal'>
        {productosFiltrados.map((producto) => (
          
          <li key={producto.id} className='Card'>
    
            <p className='tituloTarjeta'>{producto.nombre}</p>
            <p className='textoTarjeta'>Precio: {producto.precio}</p>
            <p className='textoTarjeta'>Tamaño: {producto.tamano}</p>
            <p className='textoTarjeta'>Tipo: {producto.tipo}</p>
            <p className='textoTarjeta' id="ingredientes">Ingredientes: {producto.ingredientes}</p>
            <div className='container'>
            <img className='imagen' src={producto.img} alt={`Imagen de ${producto.nombre}`} />
            <button onClick={() => agregarAlCarrito(producto)} className='Button'>Agregar al Carrito</button>
            </div>
          </li>
        ))}
      </ul>
      {mostrarCarrito && <Carrito carrito={Object.values(carrito)} onEliminarProducto={eliminarDelCarrito} />}
    </div>
  );
};

export default ProductosComponent;