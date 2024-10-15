import React from 'react'
import { motion } from 'framer-motion'

const AboutVedanta = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-6xl text-center pb-3 font-semibold bg-gradient-to-l from-[#0c61c8] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                About Vedanta</motion.h1>
            <div className='md:flex md:justify-between md:items-start my-4'>
                <div className='md:w-[49%]'>
                    <p className='text-lg font-[600] text-[#0066ab] mb-2'>
                        Vedanta is ₹ 1, 450 billion global natural resources conglomerate helping drive India’s economic growth. As one of the largest natural resources companies, we operate across four continents, with interests in zinc, lead, silver, copper, iron ore, steel, aluminum, nickel, glass substrates, power, and oil & gas, meeting global energy, communications, electronics, and consumption needs.
                    </p>
                    <p className='mb-2'>
                        We operate an end-to-end value
                        chain, which gives us leverage to
                        be a leader in both scale and cost.
                        We deploy the latest technologies
                        and create incremental process efficiencies to deliver greater value to our stakeholders. Our large portfolio of transformative metals is supporting to bridge the green energy transition.
                    </p>
                    <p className='mb-2'>
                        Vedanta believes the natural resources industry will shape the future. To harness this growth, we are expanding into new businesses, acquiring assets, exploring new regions, and improving existing capacities. Our focus is on using our strong market position to unlock and fully develop potential. Our recent ventures into semiconductors, ferrochrome, renewables, and display glass reflect this commitment.
                    </p>
                    <p className=''>
                        We prioritize sustainability, low carbon emissions, and social impact. Vedanta practices responsible business by minimizing effects on soil, water, air, and biodiversity, supporting local communities, and fostering a safe, inclusive workplace. Our strong governance ensures we meet our sustainability goals effectively
                    </p>
                    <div className=' my-4'>
                        <div className='p-4 bg-[#e7f6fd] my-[4%] rounded-2xl md:flex flex-wrap md:justify-start '>
                            <div className='md:w-[50%] my-4'>
                                <div className='my-4 relative pb-2'>
                                    <h1 className='text-[#72bf44] font-semibold text-3xl'>1965</h1>
                                    <p className='text-xl'>
                                        Year Incorporated
                                    </p>
                                    <div className="absolute bottom-0 left-0 w-[80%] h-[3px] border-b-2 border-[#72bf44]">
                                        <span className="absolute bottom-[-3px] left-0 w-[40px] border-b-4 border-[#0066ab]"></span>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-[50%] my-4'>
                                <div className='my-4 relative pb-2 '>
                                    <h1 className='text-[#72bf44] font-semibold text-3xl'>₹ 1,437.27 billion</h1>
                                    <p className='text-xl'>
                                        Revenue
                                    </p>
                                    <div className="absolute bottom-0 left-0 w-[80%] h-[3px] border-b-2 border-[#72bf44]">
                                        <span className="absolute bottom-[-3px] left-0 w-[40px] border-b-4 border-[#0066ab]"></span>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-[50%] my-4'>
                                <div className='my-4 relative pb-2 '>
                                    <h1 className='text-[#72bf44] font-semibold text-3xl'> 648.72 million GJ</h1>
                                    <p className='text-xl'>
                                        Energy Consumed
                                    </p>
                                    <div className="absolute bottom-0 left-0 w-[80%] h-[3px] border-b-2 border-[#72bf44]">
                                        <span className="absolute bottom-[-3px] left-0 w-[40px] border-b-4 border-[#0066ab]"></span>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-[50%] my-4'>
                                <div className='my-4 relative pb-2 '>
                                    <h1 className='text-[#72bf44] font-semibold text-3xl'>97,015</h1>
                                    <p className='text-xl'>
                                        Total Workforce**
                                    </p>
                                    <div className="absolute bottom-0 left-0 w-[80%] h-[3px] border-b-2 border-[#72bf44]">
                                        <span className="absolute bottom-[-3px] left-0 w-[40px] border-b-4 border-[#0066ab]"></span>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-[50%] my-4'>
                                <div className='my-4 relative pb-2 '>
                                    <h1 className='text-[#72bf44] font-semibold text-3xl'>131 countries</h1>
                                    <p className='text-xl'>
                                        Products sold in
                                    </p>
                                    <div className="absolute bottom-0 left-0 w-[80%] h-[3px] border-b-2 border-[#72bf44]">
                                        <span className="absolute bottom-[-3px] left-0 w-[40px] border-b-4 border-[#0066ab]"></span>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-[50%] my-4'>
                                <div className='my-4 relative pb-2 '>
                                    <div>
                                        <h1 className='text-[#72bf44] font-semibold text-3xl inline-block'>108 </h1><span className='text-xl'> National and</span>
                                    </div>
                                    <div>
                                        <h1 className='text-[#72bf44] font-semibold text-3xl inline-block'>24 </h1><span className='text-xl'> International</span>
                                    </div>
                                    <p className='text-xl'>
                                        plants and offices*
                                    </p>
                                    <div className="absolute bottom-0 left-0 w-[80%] h-[3px] border-b-2 border-[#72bf44]">
                                        <span className="absolute bottom-[-3px] left-0 w-[40px] border-b-4 border-[#0066ab]"></span>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-[50%] my-4'>
                                <div className='my-4 relative pb-2 '>
                                    <h1 className='text-[#72bf44] font-semibold text-3xl'>Mumbai, India</h1>
                                    <p className='text-xl'>
                                        Headquarters
                                    </p>
                                    <div className="absolute bottom-0 left-0 w-[80%] h-[3px] border-b-2 border-[#72bf44]">
                                        <span className="absolute bottom-[-3px] left-0 w-[40px] border-b-4 border-[#0066ab]"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='bg-[#e6e3e3] p-4 rounded-xl mb-5'>
                            <p className='text-lg font-[600] text-[#0066ab] mb-2'>
                                At Vedanta, our growth ambitions are balanced by our mission to make lives better, help the earth heal faster and create perpetual value for our stakeholders.
                            </p>
                        </div>
                        <p className='text-[#72bf44] font-semibold text-2xl my-4'>
                            Our Core Purpose
                        </p>
                        <p className='mb-2'>
                            Our goal is to create long-term value for all our stakeholders through research, discovery, acquisition, sustainable development, and utilisation of diversified natural resources.
                        </p>
                        <p className='text-[#72bf44] font-semibold text-2xl my-4'>
                        Our Core Values
                        </p>
                        <p className='mb-2'>
                        Our core values underpin everything we do 
                        at Vedanta. These universal values guide our behaviour, as we expand into new markets and countries. 
                        </p>
                    </div>
                </div>
                <div className='md:w-[49%] rounded-2xl'>
                    <img src="./other/about-v.png" className='rounded-2xl' alt="" />
                    <img src="./other/about-v2.jpg" className='md:w-[80%] my-[4%]' alt="" />
                </div>
            </div>
            <p className='mt-5 text-xs'>* This number does not include warehouses operated by Vedanta and its business entities
            </p>
            <p className='mt-1 text-xs'>** 13,045 - Employees; 83,970 - Workers
            </p>
        </div>
    )
}

export default AboutVedanta