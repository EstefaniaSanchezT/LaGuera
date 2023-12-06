// App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductosComponent from './components/ProductosComponent';
import InicioComponent from './components/InicioComponent';
import ParaTiComponent from './components/ParaTiComponent';
import Navbar from './components/Navbar'; 




const App = () => {

  return (
    <Router>
      <Routes>
      <Route
          path="/"
          element={
            <React.Fragment>
              <Navbar />
              <InicioComponent />
            </React.Fragment>
          }
        />
        <Route path="/para-ti" element={<ParaTiComponent />} />
        <Route path="/tipo/licuado" element={<ProductosComponent tipoFiltro="Licuado" />} />
        <Route path="/tipo/jugo" element={<ProductosComponent tipoFiltro="Jugo" />} />
        <Route path="/tipo/snack" element={<ProductosComponent tipoFiltro="Snack" />} />
      </Routes>
    </Router>
  );
};

export default App;
