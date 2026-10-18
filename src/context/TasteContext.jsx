import { createContext, useContext, useEffect, useState } from 'react'

const TasteContext = createContext()

function load(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback
  } catch {
    return fallback
  }
}

export function TasteProvider({ children }) {
  const [ratings, setRatings] = useState(() => load('ratings', {}))
  const [watchlist, setWatchlist] = useState(() => load('watchlist', []))

  useEffect(() => {
    localStorage.setItem('ratings', JSON.stringify(ratings))
  }, [ratings])

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
  }, [watchlist])

  function rate(movieId, value) {
    setRatings((prev) => {
      const next = { ...prev }
      if (prev[movieId] === value) delete next[movieId]
      else next[movieId] = value
      return next
    })
  }

  function toggleWatch(movieId) {
    setWatchlist((prev) =>
      prev.includes(movieId) ? prev.filter((id) => id !== movieId) : [...prev, movieId]
    )
  }

  return (
    <TasteContext.Provider value={{ ratings, rate, watchlist, toggleWatch }}>
      {children}
    </TasteContext.Provider>
  )
}

export function useTaste() {
  return useContext(TasteContext)
}