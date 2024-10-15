import React from 'react'
import { motion } from 'framer-motion'
const Impact = () => {
    return (
        <div className='marginal'>
            <div className='bg-gradient-to-r from-[#114380] to-[#11817a] md:flex md:items-center md:justify-evenly relative p-6'>
                <div className='md:w-[59%]'>
                    <motion.h1 className='text-6xl font-semibold bg-gradient-to-r from-[#A9FF76] to-[#83BCE3] w-fit text-transparent inline-block bg-clip-text md:mr-4'
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        viewport={{ once: false }}
                    >
                        Lead.
                    </motion.h1>
                    <motion.h1 className='text-6xl font-semibold bg-gradient-to-r from-[#A9FF76] to-[#83BCE3] w-fit text-transparent inline-block bg-clip-text md:mr-4'
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
                        viewport={{ once: false }}
                    >
                        Sustain.
                    </motion.h1>
                    <motion.h1 className='text-6xl font-semibold bg-gradient-to-r from-[#A9FF76] to-[#83BCE3] w-fit text-transparent inline-block bg-clip-text'
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        Inspire.
                    </motion.h1>
                    <motion.p className='text-[#74E530] text-xl font-semibold my-4'
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut", delay: 0.4 }}
                        viewport={{ once: false }}
                    >
                        Vedanta for the future,<br />scripted today
                    </motion.p>
                    <motion.p className='text-white text-lg md:text-3xl'
                        initial={{ opacity: 0, x: -70 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
                        viewport={{ once: false }}
                    >
                        Managing the multiple facets of Environment, Social and Governance is critical for our commercial well- being and operational performance, and will help to preserve Vedanta's enterprise value and ensure business continuity and longevity.
                    </motion.p>
                </div>
                <motion.div className='md:w-[39%] md:h-[500px] md:relative flex md:justify-end'
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: false }}>
                    <img src="./home/lsi.png" className='w-[90%] md:right-0 md:top-[50%] md:translate-y-[-50%] md:absolute' alt="" />
                </motion.div>
            </div>
        </div >
    )
}

export default Impact