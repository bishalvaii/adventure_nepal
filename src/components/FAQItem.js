import React, { useState } from 'react'

const FAQItem = ({question, answer}) => {
    const [showAnswer, setShowAnswer] = useState(false)

    const toggleAnswer = () => {
        setShowAnswer(!showAnswer)
    }
  return (
    <div onClick={toggleAnswer}>
        <h3>{question}</h3>
        {showAnswer && <p>{answer}</p>}
    </div>

  )
}

export default FAQItem