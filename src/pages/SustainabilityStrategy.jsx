import React from 'react'
import { motion } from 'framer-motion'
const SustainabilityStrategy = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-6xl text-2xl text-center pb-3 font-semibold bg-gradient-to-l from-[#0c61c8] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Sustainability Strategy</motion.h1>
            <p className='text-lg font-[600] text-[#0066ab] mb-3'>
                Vedanta’s products are essential in daily life, used globally in industries from construction to entertainment. From greener buildings to cleaner cars, and from small items to large, our products touch billions of lives. This highlights the vast scope of our impact and supports our vision of sustainability leadership.
            </p>
            <p className='mb-2'>
                At Vedanta, our products help customers maximize the value of their products, accelerate their environmental, social, and governance (ESG) transformation, and promote energy and resource efficiency. Additionally, our business fosters social growth by creating job opportunities, developing in-demand skills, and providing financial support to communities, ultimately contributing to the greater good of all.
            </p>
            <p className='mb-2'>
                All this begins by being a better business ourselves. When we improve the impact of our own operations, we gain the knowledge and credibility to help our society improve theirs. And by building a culture of belonging where all employees have equitable opportunities to succeed and contribute, together we thrive. This is our opportunity and this is our time.
            </p>
            <div className='md:flex md:justify-between my-4'>
                <div className='w-[32%]'>
                    <img src="./other/st1.png" className='rounded-2xl' alt="" />
                </div>
                <div className='w-[66%]'>
                    <p className='mb-2 text-2xl font-semibold text-[#72bf44]'>
                        Strategy to Drive Impact
                    </p>
                    <p className='mb-2'>
                        Our three-pronged Sustainability strategy launched in 2022 translates into action our holistic view of how environment, business and society should interact.  The three pillars
                        of Transforming Communities, Transforming the Planet and Transforming the Workplace define our social, environmental, and employee- oriented priorities and set specific goals and targets to achieve progress in support of these priorities. The Vedanta
                    </p>
                    <p className='mb-2'>
                        Group has a very diverse set of businesses, with different operational constraints and varied external situations. Yet the Group’s common and unified Sustainability strategy helps to address challenges and build fundamental strengths that can make the whole organization, and each of its constituent entities, much stronger.
                    </p>
                    <p className='mb-2'>
                        The change is yielding results. The international accolades Vedanta and its entities have received this year demonstrate that our efforts are successful and the benefits of years of hard work are now making a difference. The multitude of areas that we work in – community health, education, skilling, and empowerment; human rights, diversity, equity and inclusion, fair pay, and fair representation; management of GHG emissions, air emissions, water, biodiversity, circularity – demonstrates how we have been able to participate and cogenerate social change, environmental conservation, and stakeholder growth to thrive
                        and grow.
                    </p>
                </div>
            </div>

            <div className='md:flex md:justify-between'>
                <div className='w-[30%]'>
                    <img src="./other/Transforming Communities@2x.png" className='w-full' alt="" />
                </div>
                <div className='w-[30%]'>
                    <img src="./other/Transforming the planet@2x.png" className='w-full' alt="" />
                </div>
                <div className='w-[30%]'>
                    <img src="./other/Transforming the workplace@2x.png" className='w-full' alt="" />
                </div>
            </div>
        </div>
    )
}

export default SustainabilityStrategy