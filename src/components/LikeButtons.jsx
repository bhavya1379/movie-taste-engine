import { useTaste } from '../context/TasteContext.jsx'

function LikeButtons({ movieId }) {
  const { ratings, rate, watchlist, toggleWatch } = useTaste()
  const current = ratings[movieId]
  const saved = watchlist.includes(movieId)

  function handle(e, action) {
    e.preventDefault()
    e.stopPropagation()
    action()
  }

  return (
    <div className="like-buttons">
      <button className={current === 'like' ? 'active like' : ''} onClick={(e) => handle(e, () => rate(movieId, 'like'))}>👍</button>
      <button className={current === 'dislike' ? 'active dislike' : ''} onClick={(e) => handle(e, () => rate(movieId, 'dislike'))}>👎</button>
      <button className={saved ? 'active like' : ''} onClick={(e) => handle(e, () => toggleWatch(movieId))}>🔖</button>
    </div>
  )
}

export default LikeButtons