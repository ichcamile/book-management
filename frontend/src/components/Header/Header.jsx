import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiBookmarkPlus } from "react-icons/ci";
import { TbEdit } from "react-icons/tb";
import { RiDeleteBin2Line } from "react-icons/ri";
import './Header.scss';
import { LibraryContext } from '../../context/Library.context.jsx';

export const Header = () => {
  const navigate = useNavigate();
  const { livroSelecionado, setLivroSelecionado, setLivros, livros } = useContext(LibraryContext);

  const handleInserir = () => {
    navigate('/novo-livro');
  };

  const handleEditar = () => {
    if (livroSelecionado) {
      navigate(`/editar-livro/${livroSelecionado.id}`);
    } else {
      alert('Selecione um livro para editar.');
    }
  };

  const handleApagar = async () => {
    if (!livroSelecionado) {
      alert('Selecione um livro para apagar.');
      return;
    }
    if (window.confirm(`Deseja realmente apagar o livro "${livroSelecionado.titulo}"?`)) {
      try {
        const response = await fetch(`http://localhost:8080/api/livros/${livroSelecionado.id}`, {
          method: 'DELETE'
        });
        if (response.ok) {
          // Remove o livro do array local
          setLivros(livros.filter(l => l.id !== livroSelecionado.id));
          setLivroSelecionado(null);
          window.location.reload(); // Atualiza a página
        } else {
          alert('Erro ao apagar livro.');
        }
      } catch (error) {
        alert('Erro ao conectar com o servidor.');
      }
    }
  };

  return (
    <header className="header">
      <button className="inserir" onClick={handleInserir}>
        <div className="imagem"><CiBookmarkPlus /></div>
        <p>Inserir</p>
      </button>

      <button className="editar" onClick={handleEditar}>
        <div className="imagem2"><TbEdit /></div>
        <p>Editar</p>
      </button>

      <button className="apagar" onClick={handleApagar}>
        <div className="imagem3"><RiDeleteBin2Line /></div>
        <p>Apagar</p>
      </button>
    </header>
  );
};