import React from 'react';
import './BarraDePesquisa.scss';

const BarraDePesquisa = ({ busca, setBusca }) => {
  return (
    <input
      type="text"
      placeholder="Buscar por título ou autor..."
      value={busca}
      onChange={(e) => setBusca(e.target.value)}
      className="barra-de-pesquisa"
    />
  );
};

export default BarraDePesquisa;