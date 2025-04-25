import { useMovies } from '../context/MovieContext';

export function MovieFilters() {
  const { setFilter } = useMovies();

  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Filtrar por título"
        onChange={(e) => setFilter(prev => ({ ...prev, title: e.target.value }))}
      />
      <select
        onChange={(e) => setFilter(prev => ({ ...prev, genre: e.target.value }))}
      >
        <option value="">Todos los géneros</option>
        <option value="Acción">Acción</option>
        <option value="Comedia">Comedia</option>
        <option value="Drama">Drama</option>
        <option value="Terror">Terror</option>
        <option value="Ciencia Ficción">Ciencia Ficción</option>
      </select>
    </div>
  );
}
