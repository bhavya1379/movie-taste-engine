import { movies } from '../data.js'
import { useTaste } from '../context/TasteContext.jsx'
import MovieCard from '../components/MovieCard.jsx'

function ForYou() {
  const { ratings } = useTaste()
  const genreScore = {}

  movies.forEach((m) => {
    const r = ratings[m.id]
    if (!r) return
    m.genres.forEach((g) => {
      genreScore[g] = (genreScore[g] || 0) + (r === 'like' ? 2 : -1)
    })
  })

  const scored = movies
    .filter((m) => !ratings[m.id])
    .map((m) => ({
      movie: m,
      score: m.genres.reduce((sum, g) => sum + (genreScore[g] || 0), 0),
    }))
    .sort((a, b) => b.score - a.score)

  return (
    <div>
      <h2>For You</h2>
      {Object.keys(ratings).length === 0 && <p className="empty">Like or dislike some movies first.</p>}
      <div className="movie-grid">
        {scored.map(({ movie, score }) => (
          <div key={movie.id}>
            <div className="score-badge">Score: {score}</div>
            <MovieCard movie={movie} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ForYou