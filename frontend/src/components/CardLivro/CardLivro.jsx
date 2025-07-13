import React, { useContext } from 'react';
import './CardLivro.scss';
import { LibraryContext } from '../../context/Library.context.jsx';

const CardLivro = ({ livro }) => {
  const { livroSelecionado, setLivroSelecionado } = useContext(LibraryContext);

  const handleSelecionar = () => {
    setLivroSelecionado(livro);
  };

  return (
    <div
      className={`card-livro${livroSelecionado && livroSelecionado.id === livro.id ? ' selecionado' : ''}`}
      onClick={handleSelecionar}
      style={{ cursor: 'pointer' }}
    >
      <div className="parteSuperior">
        <img src={livro.capa} alt={`Capa de ${livro.titulo}`} />
      </div>
      <div className="parteInferior">
        <h2>{livro.titulo}</h2>
        <div className="parteInformacao">
          <p>{livro.autor}</p>
          <span> • </span>
          <p>{livro.anoPublicacao}</p>
        </div>
      </div>
    </div>
  );
};

export default CardLivro;