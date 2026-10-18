import { movies } from '../data.js'
import { useTaste } from '../context/TasteContext.jsx'

function Profile() {
  const { ratings } = useTaste()
  const counts = {}

  movies
    .filter((m) => ratings[m.id] === 'like')
    .forEach((m) => m.genres.forEach((g) => (counts[g] = (counts[g] || 0) + 1)))

  const sorted = Object.entries(counts).sort((a, b) => b[1] - a[1])
  const max = sorted.length ? sorted[0][1] : 1

  return (
    <div>
      <h2>Your Taste Profile</h2>
      {sorted.length === 0 && <p className="empty">Like some movies to see your favourite genres.</p>}
      {sorted.map(([genre, count]) => (
        <div key={genre} className="bar-row">
          <span className="bar-label">{genre}</span>
          <div className="bar" style={{ width: `${(count / max) * 100}%` }}>{count}</div>
        </div>
      ))}
    </div>
  )
}

export default Profile