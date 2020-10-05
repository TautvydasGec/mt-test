import React from 'react'

const Popup = ({ data, handleClose }) => {
  return (
    <div>
      <button onClick={handleClose}>Close</button>
      {data.map((item, index) => (
        <div key={index + item}>
          {item}
        </div>
      ))}
    </div>
  )
}

export default Popup
