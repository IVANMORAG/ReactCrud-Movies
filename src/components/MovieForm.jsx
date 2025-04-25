import { useState, useContext } from 'react';
import { useMovies } from '../context/MovieContext';

export function MovieForm({ movieToEdit, setMovieToEdit }) {
  const { addMovie, updateMovie } = useMovies();
  const [movie, setMovie] = useState(movieToEdit || { title: '', description: '', genre: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (movieToEdit) {
      updateMovie(movieToEdit.id, movie);
      setMovieToEdit(null);
    } else {
      addMovie(movie);
    }
    setMovie({ title: '', description: '', genre: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="movie-form">
      <h2>{movieToEdit ? 'Editar Película' : 'Agregar Película'}</h2>
      <input
        type="text"
        placeholder="Título"
        value={movie.title}
        onChange={(e) => setMovie({ ...movie, title: e.target.value })}
        required
      />
      <textarea
        placeholder="Descripción"
        value={movie.description}
        onChange={(e) => setMovie({ ...movie, description: e.target.value })}
        required
      />
      <select
        value={movie.genre}
        onChange={(e) => setMovie({ ...movie, genre: e.target.value })}
        required
      >
        <option value="">Selecciona un género</option>
        <option value="Acción">Acción</option>
        <option value="Comedia">Comedia</option>
        <option value="Drama">Drama</option>
        <option value="Terror">Terror</option>
        <option value="Ciencia Ficción">Ciencia Ficción</option>
      </select>
      <button type="submit">{movieToEdit ? 'Actualizar' : 'Agregar'}</button>
      {movieToEdit && (
        <button type="button" onClick={() => setMovieToEdit(null)}>
          Cancelar
        </button>
      )}
    </form>
  );
}
