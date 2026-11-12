import { useState } from 'react'

function SaveButton() {
  const [isSaved, setIsSaved] = useState(false)

  return (
    <button
      onClick={() => setIsSaved(!isSaved)}
      className="text-2xl"
    >
      {isSaved ? '❤️' : '♡'}
    </button>
  )
}

export default SaveButton