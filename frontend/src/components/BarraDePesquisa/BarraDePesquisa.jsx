import React, { useContext } from 'react';
import './BarraDePesquisa.scss';
import { LibraryContext } from '../../context/Library.context.jsx';

const BarraDePesquisa = () => {
  const { livros, setFiltrados, busca } = useContext(LibraryContext);

  // Filtra os livros já carregados no context
  const handleChange = (e) => {
    const valorBusca = e.target.value;

    if (!valorBusca) {
      setFiltrados([]);
      return;
    }

    const filtradosLivros = livros.filter(livro =>
      Object.values(livro).some(
        campo =>
          typeof campo === 'string' &&
          campo.toLowerCase().includes(valorBusca.toLowerCase())
      )
    );
    setFiltrados(filtradosLivros);
    console.log('Livros filtrados no context:', filtradosLivros);
  };

  return (
    <input
      type="text"
      placeholder="Buscar por qualquer informação..."
      value={busca}
      onChange={handleChange}
      className="barra-de-pesquisa"
    />
  );
};

export default BarraDePesquisa;