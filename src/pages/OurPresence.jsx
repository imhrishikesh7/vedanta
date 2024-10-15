import React from 'react'
import { motion } from 'framer-motion'
const OurPresence = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-6xl text-center pb-3 font-semibold bg-gradient-to-l from-[#0c61c8] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Our Presence </motion.h1>
            <div className='md:flex md:items-start md:justify-center'>
                <div className='md:w-[58.3%]'>
                    <img src="./other/Map1.png" className='md:rounded-tl-3xl' alt="" />
                </div>
                <div className='md:w-[41.8%]'>
                    <img src="./other/Map 2.png" className='md:rounded-tr-3xl' alt="" />
                </div>
            </div>
        </div>
    )
}

export default OurPresence