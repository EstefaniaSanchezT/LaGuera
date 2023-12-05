// App.js
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Asegúrate de importar 'Routes' en lugar de 'Switch'
import AuthComponent from './components/AuthComponent';
import ProductosComponent from './components/ProductosComponent';



const App = () => {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductosComponent />} />
        <Route path="/auth" element={<AuthComponent />} />
        </Routes>
    </Router>
  );
};

export default App;
