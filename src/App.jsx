import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import MovieDetail from './pages/MovieDetail.jsx'
import Profile from './pages/Profile.jsx'
import ForYou from './pages/ForYou.jsx'
import Watchlist from './pages/Watchlist.jsx'
import Compare from './pages/Compare.jsx'
import './App.css'

function App() {
  return (
    <div className="app">
      <header>
        <Link to="/" className="logo">Movie Taste Engine</Link>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/for-you">For You</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/watchlist">Watchlist</Link>
          <Link to="/compare">Compare</Link>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/for-you" element={<ForYou />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/compare" element={<Compare />} />
      </Routes>
    </div>
  )
}

export default App