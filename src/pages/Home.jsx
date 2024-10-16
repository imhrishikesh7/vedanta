import React from 'react'
import Cover from '../Components/Cover/Cover'
import About from '../Components/About/About'
import Impact from '../Components/Impact/Impact'
import Messages from '../Components/Messages/Messages'
import { EcommerceCard } from '../Components/Products/Products'
// import Pillars from '../Components/Pillars/Pillars'

const Home = () => {
  return (
    <div>
        <Cover/>
        <About/>
        <Impact/>
        <Messages/>
        <EcommerceCard/>
        {/* <Pillars/> */}
    </div>
  )
}

export default Home