import React from 'react';
import { GalleryBook } from './components/GalleryBook/GalleryBook.jsx'; // caminho correto

const livrosMock = [ /* seus dados aqui */ ];

function App() {
  return (
    <div className="App">
      <GalleryBook livros={livrosMock} />
    </div>
  );
}

export default App;
