import React, { useContext, useEffect, useState } from 'react';
import CardLivro from '../CardLivro/CardLivro.jsx';
import './GalleryBook.scss';
import Slider from "react-slick";
import { LibraryContext } from '../../context/Library.context.jsx';
import  rotas  from '../../utils/endpoints.enum.js';

export const GalleryBook = () => {
  const { livros, setLivros, busca, filtrados } = useContext(LibraryContext);

  // Função para buscar todos os livros do banco de dados
  const fetchLivros = async () => {
    try {
      const response = await fetch(rotas.todosLivros);
      if (response.ok) {
        const data = await response.json();
        setLivros(data);
        console.log('Livros adicionados ao context:', data);
      }
    } catch (error) {
      console.error('Erro ao buscar livros:', error);
    }
  };

  useEffect(() => {
    fetchLivros();
  }, [busca]);

  useEffect(() => {
    console.log('Livros atuais no context:', livros);
  }, [livros]);

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <div className="GalleryBook">
      <h2>Livros Populares</h2>
      <Slider {...settings}>
        {(filtrados.length > 0 ? filtrados : livros).map((livro) => (
          <CardLivro key={livro.id} livro={livro} />
        ))}
      </Slider>
    </div>
  )
}