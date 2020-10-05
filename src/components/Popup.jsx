import React from 'react'

const Popup = ({ data }) => {
  console.log(data)
  return (
    <div>
      {data.map((item, index) => (
        <div key={index + item}>
          {item}
        </div>
      ))}
    </div>
  )
}

export default Popup
