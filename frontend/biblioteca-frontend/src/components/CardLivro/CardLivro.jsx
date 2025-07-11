
import React from 'react';
import './CardLivro.scss';

const CardLivro = ({ livro }) => {
  return (
    <div className='card-livro'>
      <div className="parteSuperior">
        <img src={livro.capa} alt={`Capa de ${livro.titulo}`}/>
      </div>

      <div className="parteInferior">
        <h2>{livro.titulo}</h2>

        <div className="parteInformacao">
          <p>{livro.autor}</p>
          <span> • </span>
          <p>{livro.ano_publicacao}</p>
        </div>

      </div>

    </div>
  );
};

export default CardLivro;
