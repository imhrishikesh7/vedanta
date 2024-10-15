import React from 'react'
import { motion } from 'framer-motion'
const ValueChain = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-6xl text-center py-3 font-semibold bg-gradient-to-l from-[#0c61c8] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Value Chain</motion.h1>
                <p className='text-lg font-[600] text-[#0066ab] mb-3'>
                    Vedanta provides essential resources in metals, minerals, and oil & gas to support economic development. We also contribute to the power sector, including thermal and renewable energy. Our top-quality assets and synergies make us a low-cost, scalable provider.
                </p>
                <p className='mb-2'>
                    We manage the entire value chain
                    in minerals, metals, and oil & gas,
                    from exploration and development to extraction and processing. We produce raw materials for other industries and offer customized products for various secondary industries. Our skilled teams use advanced technology and strict processes to manage each stage of production and ensure the best results.
                </p>
                <p className='mb-2'>
                    We invest in high-quality assets with long mine lives to ensure resource security and better cost management. We have expanded into related businesses by acquiring valuable assets that enhance our existing ones and open up high-growth opportunities.
                </p>
                <div className='md:flex md:justify-center md:items-center my-4'>
                    <img src="./other/vc1.jpg" className='md:w-[50%]' alt="" />
                    <img src="./other/vc2.jpg" className='md:w-[50%]' alt="" />
                </div>
        </div>
    )
}

export default ValueChain