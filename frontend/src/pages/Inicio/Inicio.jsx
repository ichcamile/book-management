import React from 'react'
import { GalleryBook } from '../../components/GalleryBook/GalleryBook.jsx';
import { Header } from '../../components/Header/Header.jsx';
import  BarraDePesquisa  from '../../components/BarraDePesquisa/BarraDePesquisa.jsx';


export const Inicio = () => {
  return (
    <div className="App">
        <Header />
        <BarraDePesquisa />
        <GalleryBook />
    </div>
  )
}
