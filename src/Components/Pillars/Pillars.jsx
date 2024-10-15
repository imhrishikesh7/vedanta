import React from 'react'
import { motion } from 'framer-motion';

const Pillars = () => {
    const cardsData = [
        {
            title: 'Pillar 1',
            bgImage: '/home/p1.png', // Replace with your image URL
            link: '#', // Replace with your actual link
        },
        {
            title: 'Pillar 2',
            bgImage: '/home/p2.png', // Replace with your image URL
            link: '#', // Replace with your actual link
        },
        {
            title: 'Pillar 3',
            bgImage: '/home/p3.png', // Replace with your image URL
            link: '#', // Replace with your actual link
        },
    ];

    // Container variants for staggered animation
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1, // Reduced time between each card animation
                delayChildren: 0.1,   // Reduced delay before the first card animates
            },
        },
    };

    // Card animation variants
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeInOut' } },
    };

    return (
        <div className='marginal'>
            <motion.h1 
                className='md:text-6xl text-center mb-3 font-semibold bg-gradient-to-l from-[#0c61c8] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }} 
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Our Pillars
            </motion.h1>

            <motion.div 
                className="flex flex-col md:flex-row justify-center gap-6 py-8"
                initial="hidden"
                whileInView="show"  // Trigger animations when this comes into the viewport
                viewport={{ once: true }} // Ensure it animates only once per scroll
                variants={containerVariants} // Apply stagger to the container
            >
                {cardsData.map((card, index) => (
                    <motion.div 
                        key={index} 
                        className="w-full md:w-1/3"
                        variants={cardVariants} // Apply the card animation variants
                    >
                        <div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg group">
                            {/* Background image with gradient overlay */}
                            <div
                                className="absolute inset-0 bg-cover bg-center"
                                style={{ backgroundImage: `url(${card.bgImage})` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80"></div>
                            </div>

                            {/* Title Patch */}
                            <div className="absolute top-4 left-4 bg-[#72bf44] text-white py-1 px-4 rounded-lg shadow-sm font-bold text-lg">
                                {card.title}
                            </div>

                            {/* Read More Button */}
                            <div className="absolute bottom-4 left-4">
                                <a href={card.link} className="bg-[#e9eaeb] text-black py-2 px-6 rounded-lg shadow-lg transition-all duration-300 ease-in-out transform hover:bg-black hover:text-white">
                                    Read More
                                </a>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}

export default Pillars;
