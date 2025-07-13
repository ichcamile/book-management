import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './EditarLivro.scss';

const EditarLivro = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [livro, setLivro] = useState({
    titulo: '',
    autor: '',
    isbn: '',
    capa: '',
    anoPublicacao: ''
  });
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    // Busca o livro pelo id
    fetch(`http://localhost:8080/api/livros/${id}`)
      .then(res => res.json())
      .then(data => setLivro(data))
      .catch(() => setMensagem('Erro ao carregar livro.'));
  }, [id]);

  const handleChange = (e) => {
    setLivro({ ...livro, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:8080/api/livros/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(livro),
      });
      if (response.ok) {
        setMensagem('Livro atualizado com sucesso!');
        setTimeout(() => navigate('/'), 1500);
      } else {
        setMensagem('Erro ao atualizar livro.');
      }
    } catch (error) {
      setMensagem('Erro ao conectar com o servidor.');
    }
  };

  return (
    <div className="editar-livro-container">
      <h2>Editar Livro</h2>
      <form className="editar-livro-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          value={livro.titulo}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="autor"
          placeholder="Autor"
          value={livro.autor}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="isbn"
          placeholder="ISBN"
          value={livro.isbn}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="capa"
          placeholder="URL da capa"
          value={livro.capa}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="anoPublicacao"
          placeholder="Ano de publicação"
          value={livro.anoPublicacao}
          onChange={handleChange}
          required
        />
        <button type="submit">Salvar</button>
      </form>
      {mensagem && <p className="mensagem">{mensagem}</p>}
    </div>
  );
};

export default EditarLivro;