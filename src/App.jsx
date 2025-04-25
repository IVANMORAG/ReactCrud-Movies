import { useState } from 'react';
import { MovieProvider } from './context/MovieContext';
import { MovieForm } from './components/MovieForm';
import { MovieList } from './components/MovieList';
import { Favorites } from './components/Favorites';
import { MovieFilters } from './components/MovieFilters';
import './App.css';

function App() {
  const [movieToEdit, setMovieToEdit] = useState(null);

  return (
    <MovieProvider>
      <div className="app">
        <h1>Gestor de Películas</h1>
        <div className="main-content">
          <div className="left-panel">
            <MovieForm movieToEdit={movieToEdit} setMovieToEdit={setMovieToEdit} />
            <Favorites />
          </div>
          <div className="right-panel">
            <MovieFilters />
            <MovieList setMovieToEdit={setMovieToEdit} />
          </div>
        </div>
      </div>
    </MovieProvider>
  );
}

export default App;
