import React from 'react'
import { motion } from 'framer-motion';
import Marquee from 'react-fast-marquee';

const About = () => {
    const data = [
        {
            img: "/home/ac1.png",
            text: "Global Reporting Initiative (GRI) Standards",
        },
        {
            img: "/home/ac2.png",
            text: "United Nations Sustainable Development Goals (UNSDGs)",
        },
        {
            img: "/home/ac3.png",
            text: "United Nations Global Compact Principles (UNGC)",
        },
        {
            img: "/home/ac4.png",
            text: "National Voluntary Guidelines on Social, Environmental and Economic Responsibilities of Business (NVG- SEE), BRSR and BRSR Core",
        },
        {
            img: "/home/ac5.png",
            text: "Task Force on Climate change related Financial Disclosures (TCFD)",
        },
        {
            img: "/home/ac6.png",
            text: "International Integrated Reporting Council (IIRC)",
        },
    ]
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-6xl text-center mb-3 font-semibold bg-gradient-to-l from-[#0c61c8] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }} 
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: false }}
            >About the Report</motion.h1>
            <motion.p className='text-[#2366ab] text-base text-center font-semibold mb-5'
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: false }}
            >
                In this report we present Vedanta’s endeavours to make our business more sustainable and socially impactful. The Vedanta Limited Sustainability Report FY 2024 showcases the progress that we have made on our sustainability goals; the many ways in which we are integrating sustainable practices into our processes and rooting it in our work culture and ethics; and how we are adapting ourselves to changes in the external environment and derisking critical activities.
            </motion.p>
            <div className='md:flex md:justify-betwen md:items-center'>
                <div className='md:w-full pr-4 my-4'>
                    <motion.img src="./home/leaf2.svg" className='m-auto' alt="" 
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }} 
                    transition={{ duration: 0.7, ease: "easeOut", delay: 0.4 }}
                    viewport={{ once: false }}
                    />

                    <p className='text-[#72bf44] text-2xl font-semibold my-1 text-center'>Frameworks used and referenced</p>
                    <div className="p-6 ">
                        <Marquee speed={50} gradient={false}>
                            <div className="flex space-x-8 px-4">
                                {data.map((item, index) => (
                                    <div
                                        key={index}
                                        className="flex flex-col items-center w-[330px] space-y-0 rounded-lg border-2 border-[#dee4eb] bg-white p-4"
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.text}
                                            className="w-[180px] h-[130px] object-contain"
                                        />
                                        <p className="text-lg text-center font-medium">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </Marquee>

                    </div>
                </div>

                {/* <div className='md:w-[49%]'>
                    <img src="./home/leafs.png" alt="" />
                </div> */}
            </div>
        </div>
    )
}

export default About