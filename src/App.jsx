import { movies } from './data.js'
import MovieCard from './components/MovieCard.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <h1>Movie Taste Engine</h1>
      <p className="tagline">Like movies. Get recommendations.</p>

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default App