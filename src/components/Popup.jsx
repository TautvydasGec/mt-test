import React from 'react'

const Popup = ({ data, handleClose }) => {
  console.log(data)
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
