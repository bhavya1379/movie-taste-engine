import { useParams, Link } from 'react-router-dom'
import { movies } from '../data.js'
import LikeButtons from '../components/LikeButtons.jsx'

function MovieDetail() {
  const { id } = useParams()
  const movie = movies.find((m) => m.id === Number(id))

  if (!movie) {
    return (
      <div>
        <p>Movie not found.</p>
        <Link to="/">Back to home</Link>
      </div>
    )
  }

  return (
    <div className="detail">
      <Link to="/" className="back-link">← Back</Link>
      <div className="detail-body">
        <div className="detail-poster">{movie.title.charAt(0)}</div>
        <div>
          <h2>{movie.title}</h2>
          <p className="meta">{movie.year} · ⭐ {movie.rating}</p>
          <p className="genres">{movie.genres.join(', ')}</p>
          <p className="overview">{movie.overview}</p>
          <LikeButtons movieId={movie.id} />
        </div>
      </div>
    </div>
  )
}

export default MovieDetail