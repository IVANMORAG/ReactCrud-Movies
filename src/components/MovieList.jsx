import { useMovies } from '../context/MovieContext';

export function MovieList({ setMovieToEdit }) {
  const { movies, favorites, deleteMovie, toggleFavorite } = useMovies();

  return (
    <div className="movie-list">
      <h2>Todas las Películas</h2>
      {movies.length === 0 ? (
        <p>No hay películas registradas</p>
      ) : (
        <ul>
          {movies.map((movie) => (
            <li key={movie.id} className={favorites.includes(movie.id) ? 'favorite' : ''}>
              <h3>{movie.title}</h3>
              <p>{movie.description}</p>
              <span>{movie.genre}</span>
              <div className="actions">
                <button onClick={() => setMovieToEdit(movie)}>Editar</button>
                <button onClick={() => deleteMovie(movie.id)}>Eliminar</button>
                <button onClick={() => toggleFavorite(movie.id)}>
                  {favorites.includes(movie.id) ? '★' : '☆'}
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
