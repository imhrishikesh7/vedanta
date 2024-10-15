import React from 'react'

const Cover = () => {
  return (
    <div>
        {/* <div className='w-full h-[70vh] bg-[#898989] flex items-center'>
            <p className='text-4xl text-white w-fit m-auto'>Cover Video :-\</p>
        </div> */}
        <video autoPlay muted loop
          style={{width:"100%",
          }}
        >
            <source src='./home/Comp 1 (2).mp4' />
        </video>
    </div>
  )
}

export default Cover