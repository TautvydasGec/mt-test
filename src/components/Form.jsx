import React, { useRef, useState } from 'react'

const Form = ({ onSubmit }) => {
  const nameRef = useRef()
  const scoreRef = useRef()
  const [disclaimer, setDisclaimer] = useState("")

  const handleSubmit = () => {
    //innitially submit is set to succsseed
    setDisclaimer("")

    const name = nameRef.current.value
    const score = scoreRef.current.value
    if (!name || !score) return setDisclaimer('Please input both fields')
    if (score < 0) return setDisclaimer('Select a positive value for score')

    onSubmit(name, score)
  }

  return (
    <div className="form-wrapper">
      {/* Instead of using refs form can be implemented using Formik */}
      <label>Name</label>
      <input
        ref={nameRef}
        type="text"
        placeholder="Name"
      />

      <label>Score</label>
      <input
        ref={scoreRef}
        type="number"
        placeholder="Score"
        min="0"
        step="1"
      />

      <button onClick={handleSubmit}>
        Submit
      </button>

      {disclaimer
        ? <div className="disclaimer">
          {disclaimer}
        </div>
        : null}

    </div>
  )
}

export default Form
