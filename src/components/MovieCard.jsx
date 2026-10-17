import { Link } from 'react-router-dom'
import LikeButtons from './LikeButtons.jsx'

function MovieCard({ movie }) {
  return (
    <Link to={`/movie/${movie.id}`} className="movie-card">
      <div className="poster-placeholder">{movie.title.charAt(0)}</div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="meta">{movie.year} · ⭐ {movie.rating}</p>
        <p className="genres">{movie.genres.join(', ')}</p>
        <LikeButtons movieId={movie.id} />
      </div>
    </Link>
  )
}

export default MovieCard