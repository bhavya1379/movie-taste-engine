import { createContext, useContext, useEffect, useState } from 'react'

const TasteContext = createContext()

export function TasteProvider({ children }) {
  const [ratings, setRatings] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem('ratings')) || {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem('ratings', JSON.stringify(ratings))
  }, [ratings])

  function rate(movieId, value) {
    setRatings((prev) => {
      const next = { ...prev }
      if (prev[movieId] === value) {
        delete next[movieId]
      } else {
        next[movieId] = value
      }
      return next
    })
  }

  return (
    <TasteContext.Provider value={{ ratings, rate }}>
      {children}
    </TasteContext.Provider>
  )
}

export function useTaste() {
  return useContext(TasteContext)
}