import React from 'react';
import { GalleryBook } from './components/GalleryBook/GalleryBook.jsx';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import BarraDePesquisa from './components/BarraDePesquisa/BarraDePesquisa.jsx';
import { Header } from './components/Header/Header.jsx';

function App() {
  return (
    <div className="App">
      <Header/>
      <BarraDePesquisa/>
      <GalleryBook />
    </div>
  );
}

export default App;
