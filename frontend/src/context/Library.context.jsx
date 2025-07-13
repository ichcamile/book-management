import React, { createContext, useState } from 'react';

export const LibraryContext = createContext();

export const LibraryProvider = ({ children }) => {
  const [livros, setLivros] = useState([]);
  const [filtrados, setFiltrados] = useState([]);
  const [busca, setBusca] = useState('');
  const [livroSelecionado, setLivroSelecionado] = useState(null);

  return (
    <LibraryContext.Provider value={{
      livros,
      setLivros,
      filtrados,
      setFiltrados,
      busca,
      setBusca,
      livroSelecionado,
      setLivroSelecionado
    }}>
      {children}
    </LibraryContext.Provider>
  );
};