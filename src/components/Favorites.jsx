import { useMovies } from '../context/MovieContext';

export function Favorites() {
  const { movies, favorites } = useMovies();

  const favoriteMovies = movies.filter(movie => favorites.includes(movie.id));

  return (
    <div className="favorites">
      <h2>Películas Favoritas</h2>
      {favoriteMovies.length === 0 ? (
        <p>No hay películas favoritas</p>
      ) : (
        <ul>
          {favoriteMovies.map((movie) => (
            <li key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.genre}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
