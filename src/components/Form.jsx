import React, { useRef, useState } from 'react'

const Form = ({ onSubmit }) => {
  const nameRef = useRef()
  const scoreRef = useRef()
  const [showDisclaimer, setShowDisclaimer] = useState(true)
  const handleSubmit = () => {
    setShowDisclaimer(true)
    const name = nameRef.current.value
    const score = scoreRef.current.value
    if (!name || !score) return setShowDisclaimer(false)
    onSubmit(name, score)

  }

  return (
    <div>
      <input ref={nameRef} type="text" />
      <input ref={scoreRef} type="number" />
      <button onClick={handleSubmit}>Submit</button>
      {!showDisclaimer
        ? <div style={{ color: 'red' }}>
          Please enter both of the inputs
        </div>
        : null}
    </div>
  )
}

export default Form
