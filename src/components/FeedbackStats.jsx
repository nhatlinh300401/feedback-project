import React from 'react'

export default function FeedbackStats({ feedbacks }) {
  let average = feedbacks.reduce((accVal, curVal) => {
    return accVal + curVal.rating
  }, 0) / feedbacks.length

  average = average.toFixed(1).replace(/[.,]0$/, '')

  return (
    <div className='feedback-stats'>
      <h4>{feedbacks.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}
