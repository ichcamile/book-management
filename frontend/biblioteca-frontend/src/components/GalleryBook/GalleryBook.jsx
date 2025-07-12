import React from 'react';
import CardLivro from '../CardLivro/CardLivro.jsx';
import './GalleryBook.scss';
import Slider from "react-slick";

const livrosMock = [
  {
    id: 1,
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    isbn: '9788594318602',
    ano_publicacao: 1899,
    capa: 'https://m.media-amazon.com/images/I/61Z2bMhGicL.jpg',
  },
  {
    id: 2,
    titulo: 'O Cortiço',
    autor: 'Aluísio Azevedo',
    isbn: '9788573261586',
    ano_publicacao: 1890,
    capa: 'https://m.media-amazon.com/images/I/61hI7QLrTkL.jpg',
  },
  {
    id: 3,
    titulo: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    isbn: '9788582850506',
    ano_publicacao: 1881,
    capa: 'https://m.media-amazon.com/images/I/71OL9RU2tJL._UF1000,1000_QL80_.jpg',
  },
  {
    id: 4,
    titulo: 'A Moreninha',
    autor: 'Joaquim Manuel de Macedo',
    isbn: '9788534903151',
    ano_publicacao: 1844,
    capa: 'https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1483087223i/334246.jpg',
  },
  {
    id: 5,
    titulo: 'Senhora',
    autor: 'José de Alencar',
    isbn: '9788578883295',
    ano_publicacao: 1875,
    capa: 'https://m.media-amazon.com/images/I/711tJRe6LML.jpg',
  },
  {
    id: 6,
    titulo: 'Iracema',
    autor: 'José de Alencar',
    isbn: '9788594318619',
    ano_publicacao: 1865,
    capa: 'https://m.media-amazon.com/images/I/81dQ4061MaL.jpg',
  },
  {
    id: 7,
    titulo: 'Lucíola',
    autor: 'José de Alencar',
    isbn: '9788578883097',
    ano_publicacao: 1862,
    capa: 'https://m.media-amazon.com/images/I/617wC0u9UjL._UF1000,1000_QL80_.jpg',
  },
  {
    id: 8,
    titulo: 'O Guarani',
    autor: 'José de Alencar',
    isbn: '9788534903106',
    ano_publicacao: 1857,
    capa: 'https://m.media-amazon.com/images/I/61j+vysPQLL._UF1000,1000_QL80_.jpg',
  },
  {
    id: 9,
    titulo: 'Vidas Secas',
    autor: 'Graciliano Ramos',
    isbn: '9788503010704',
    ano_publicacao: 1938,
    capa: 'https://m.media-amazon.com/images/I/618-b9Im6dL._UF1000,1000_QL80_.jpg',
  },
  {
    id: 10,
    titulo: 'São Bernardo',
    autor: 'Graciliano Ramos',
    isbn: '9788503010711',
    ano_publicacao: 1934,
    capa: 'https://m.media-amazon.com/images/I/71utqM0TO1L.jpg',
  },
];

export const GalleryBook = ({ livros = livrosMock }) => {
  const settings = {
    dots: true,
    infinite: true,
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
        {livros.map((livro) => (
          <CardLivro key={livro.id} livro={livro} />
        ))}
      </Slider>
    </div>
  );
};