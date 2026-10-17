import { useState } from 'react'
import { movies } from '../data.js'
import MovieCard from '../components/MovieCard.jsx'

const allGenres = ['All', ...new Set(movies.flatMap((m) => m.genres))]

function Home() {
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('All')

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title.toLowerCase().includes(search.toLowerCase())
    const matchesGenre = genre === 'All' || movie.genres.includes(genre)
    return matchesSearch && matchesGenre
  })

  return (
    <div>
      <p className="tagline">Like movies. Get recommendations.</p>

      <div className="controls">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          {allGenres.map((g) => (
            <option key={g} value={g}>{g}</option>
          ))}
        </select>
      </div>

      {filteredMovies.length === 0 && <p className="empty">No movies found.</p>}

      <div className="movie-grid">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Home