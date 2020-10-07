import React from 'react'

const Popup = ({ name, scores, handleClose }) => {
  return (
    <div className="popup-wrapper">
      <h3>All the scores for {name}</h3>

      {scores.map((item, index) => (
        <div key={index}>{item}</div>
      ))}

      <button onClick={handleClose}>Close</button>
    </div>
  )
}

export default Popup
