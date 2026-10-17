import { useTaste } from '../context/TasteContext.jsx'

function LikeButtons({ movieId }) {
  const { ratings, rate } = useTaste()
  const current = ratings[movieId]

  function handleClick(e, value) {
    e.preventDefault()
    e.stopPropagation()
    rate(movieId, value)
  }

  return (
    <div className="like-buttons">
      <button
        className={current === 'like' ? 'active like' : ''}
        onClick={(e) => handleClick(e, 'like')}
      >
        👍
      </button>
      <button
        className={current === 'dislike' ? 'active dislike' : ''}
        onClick={(e) => handleClick(e, 'dislike')}
      >
        👎
      </button>
    </div>
  )
}

export default LikeButtons