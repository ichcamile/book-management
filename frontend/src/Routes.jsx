import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Inicio } from './pages/Inicio/Inicio.jsx';
import NovoLivro from './pages/NovoLivro/NovoLivro.jsx';
import EditarLivro from './pages/EditarLivro/EditarLivro.jsx';

const AppRoutes = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/novo-livro" element={<NovoLivro />} />
      <Route path="/editar-livro/:id" element={<EditarLivro />} />
    </Routes>
  </BrowserRouter>
);

export default AppRoutes;