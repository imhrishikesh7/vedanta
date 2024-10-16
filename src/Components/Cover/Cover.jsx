import React from 'react'

const Cover = () => {
  return (
    <div>
      <video autoPlay muted loop
        style={{
          width: "100%",
        }}
      >
        <source src='./home/V1.webm' />
      </video>
    </div>
  )
}

export default Cover