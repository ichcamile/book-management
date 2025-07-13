import React, { useState } from 'react';
import './NovoLivro.scss';
import  rotas  from '../../utils/endpoints.enum.js';

const NovoLivro = () => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [isbn, setIsbn] = useState('');
  const [capa, setCapa] = useState('');
  const [anoPublicacao, setAnoPublicacao] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const novoLivro = { titulo, autor, isbn, capa, anoPublicacao };

    try {
      const response = await fetch(rotas.criarLivro, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(novoLivro),
      });
      if (response.ok) {
        setMensagem('Livro cadastrado com sucesso!');
        setTitulo('');
        setAutor('');
        setIsbn('');
        setCapa('');
        setAnoPublicacao('');
      } else {
        setMensagem('Erro ao cadastrar livro.');
      }
    } catch (error) {
      setMensagem('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="novo-livro-container">
      <h2>Cadastrar Novo Livro</h2>
      <form className="novo-livro-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Título"
          value={titulo}
          onChange={e => setTitulo(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Autor"
          value={autor}
          onChange={e => setAutor(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="ISBN"
          value={isbn}
          onChange={e => setIsbn(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="URL da capa"
          value={capa}
          onChange={e => setCapa(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Ano de publicação"
          value={anoPublicacao}
          onChange={e => setAnoPublicacao(e.target.value)}
          required
        />
        <button type="submit">Cadastrar</button>
      </form>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
};

export default NovoLivro;