import { useState } from 'react'
import { movies } from '../data.js'

function Compare() {
  const [aId, setAId] = useState(movies[0].id)
  const [bId, setBId] = useState(movies[1].id)
  const a = movies.find((m) => m.id === Number(aId))
  const b = movies.find((m) => m.id === Number(bId))

  const picker = (value, setter) => (
    <select value={value} onChange={(e) => setter(e.target.value)}>
      {movies.map((m) => (
        <option key={m.id} value={m.id}>{m.title}</option>
      ))}
    </select>
  )

  return (
    <div>
      <h2>Compare Movies</h2>
      <div className="compare-grid">
        <div>
          {picker(aId, setAId)}
          <h3>{a.title}</h3>
          <p>Year: {a.year}</p>
          <p>Rating: ⭐ {a.rating}</p>
          <p>Genres: {a.genres.join(', ')}</p>
          <p>{a.overview}</p>
        </div>
        <div>
          {picker(bId, setBId)}
          <h3>{b.title}</h3>
          <p>Year: {b.year}</p>
          <p>Rating: ⭐ {b.rating}</p>
          <p>Genres: {b.genres.join(', ')}</p>
          <p>{b.overview}</p>
        </div>
      </div>
    </div>
  )
}

export default Compare