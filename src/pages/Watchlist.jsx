import { movies } from '../data.js'
import { useTaste } from '../context/TasteContext.jsx'
import MovieCard from '../components/MovieCard.jsx'

function Watchlist() {
  const { watchlist } = useTaste()
  const saved = movies.filter((m) => watchlist.includes(m.id))

  return (
    <div>
      <h2>Watchlist</h2>
      {saved.length === 0 && <p className="empty">Tap 🔖 on a movie to save it here.</p>}
      <div className="movie-grid">
        {saved.map((m) => (
          <MovieCard key={m.id} movie={m} />
        ))}
      </div>
    </div>
  )
}

export default Watchlist