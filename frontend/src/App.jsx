import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { LibraryProvider } from './context/Library.context.jsx';
import AppRoutes from './Routes.jsx';

function App() {
  return (
    <div className="App">
      <LibraryProvider>
        <AppRoutes />
      </LibraryProvider>
    </div>
  );
}

export default App;
