import React from 'react'
import { motion } from 'framer-motion'

const ProductionP = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-6xl text-center py-3 font-semibold bg-gradient-to-l from-[#0c61c8] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Our production portfolio</motion.h1>
            <div className='md:flex md:items-start md:justify-between flex-wrap my-4'>
                <div className='md:w-[24%] mb-4'>
                    <img src="./other/Col1@2x.png" alt="" />
                </div>
                <div className='md:w-[24%] mb-4'>
                    <img src="./other/Col2@2x.png" alt="" />
                </div>
                <div className='md:w-[24%] mb-4'>
                    <img src="./other/Col3@2x.png" alt="" />
                </div>
                <div className='md:w-[24%] mb-4'>
                    <img src="./other/Col4@2x.png" alt="" />
                </div>
                <div className='md:w-[24%] mb-4'>
                    <img src="./other/Col5@2x.png" alt="" />
                </div>
                <div className='md:w-[24%] mb-4'>
                    <img src="./other/Col6@2x.png" alt="" />
                </div>
                <div className='md:w-[24%] mb-4'>
                    <img src="./other/Col7@2x.png" alt="" />
                </div>
                <div className='md:w-[24%] mb-4'>
                    <img src="./other/Col8@2x.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default ProductionP