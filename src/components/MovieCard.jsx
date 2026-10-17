function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <div className="poster-placeholder">{movie.title.charAt(0)}</div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p className="meta">{movie.year} · ⭐ {movie.rating}</p>
        <p className="genres">{movie.genres.join(", ")}</p>
      </div>
    </div>
  )
}

export default MovieCard