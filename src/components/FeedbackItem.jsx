import { useState } from 'react'

function FeedbackItem() {
  const [rating, setRating] = useState(6)
  const [text, setText] = useState(" This is an example feedback item")

  const handleClick = () => {
    setRating((prev) => {
        return prev + 1
    })

    setText("An actual feedback text")
  }

  return (
    <div className='card'>
        <div className='num-display'>
            {rating}
        </div>
        <div className='text-display'>
           {text}
        </div>
        <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default FeedbackItem