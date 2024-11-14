import React from 'react'
import { motion } from 'framer-motion'
const TheImpact = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='text-6xl font-semibold text-[#83BCE3] w-fit  my-2'
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                viewport={{ once: false }}
            >Lead. Sustain. Inspire.</motion.h1>
            <div className='bg-gradient-to-r from-[#114380] to-[#11817a] md:flex md:items-center md:justify-evenly relative p-6 my-5'>
                <div className='md:w-[59%]'>

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
                    <img src="./home/lsi.png" className='w-[80%] md:right-0 md:top-[50%] md:translate-y-[-50%] md:absolute' alt="" />
                </motion.div>
            </div>
            <p className='text-orange-500 font-semibold text-xl mb-2'>Leading by practice</p>
            <div className='bg-[#e6e3e3] p-4 w-fit rounded-xl mb-5'>
                <p className='text text-[#114380] border-b border-[#114380] py-4'>
                    <span className='px-2 py-1 text-white bg-[#72bf44] rounded-full mr-2'>1</span>
                    Lead and guide other industries by being a front-runner.
                </p>
                <p className='text text-[#114380] border-b border-[#114380] py-4'>
                    <span className='px-2 py-1 text-white bg-[#72bf44] rounded-full mr-2'>2</span>
                    Address global environmental and societal issues with our products and solutions.
                </p>
                <p className='text text-[#114380] py-4'>
                    <span className='px-2 py-1 text-white bg-[#72bf44] rounded-full mr-2'>2</span>
                    Support the nation’s economic and developmental aspirations
                </p>
            </div>
            <p className='mb-2'>
                India’s growth will showcase emerging leaders, and Vedanta aims to be one of them.
            </p>
            <p className='mb-2'>
                India, on its way to becoming a US
                $5-trillion economy with the largest and youngest population, has great potential to be among the leaders
                of the world. To do this, India needs
                to grow economically while keeping carbon emissions low and preserving the environment. India’s Net-Zero by 2070 commitment acts on that need.
            </p>
            <p className='text-[#72bf44] font-semibold text-2xl my-3'>Leading by practice</p>
            <p className='mb-2'>
                Vedanta as one of the world’s leading natural resources producers with majority operations in India, subscribes to and owns this commitment. Our resolve to be a responsible producer has made us early adopters of low waste, low emissions processes. India’s Net-Zero pathway will have three key drivers – extensive transitioning from thermal power to renewables leading to reduced GHG emissions; improved waste recycling, particularly through recovery and recycling of metals; and natural climate solutions for greater carbon sequestration by way of
                land reclamation and afforestation. Vedanta’s journey towards climate- neutral growth mirrors these priorities.
            </p>
            <p className='mb-2'>
                Our strong buildup of renewables capabilities, and progressive conversion to greener fuel alternatives for running our processes has led to 6 million
                tCO2e emissions reduction in just 3 years. We have committed substantial amounts to adoption of new climate solutions over the next decade, to leverage the continuous technology breakthroughs that are making both incremental and extensive changes
                in this sector. Reclaimed metal has
                a much lower carbon footprint than mining new metals and could reduce India’s emissions by 34 million tons of CO  by 2070. Our Restora brands, made from 10.17% reclaimed aluminium,
                are one of most carbon-light in the world and we are working on many more such options across our metals portfolio. Vedanta’s approach to natural climate solutions is centred on No
                Net Loss, with our restoration and preservation commitments stretching beyond the productive life of our assets. We are active participants in the World Economic Forum’s One Trillion Trees initiative, with the objective of offsetting ~50,000 tonnes of CO2 by planting and restoring 7 million trees by 2030.
            </p>
            <p className='text-[#72bf44] font-semibold text-2xl my-3'>
                Sustaining through self- reliance
            </p>
            <p className='mb-2'>
                India’s push to cut carbon emissions could be worth US$1 trillion in the next decade. Vedanta is leading this effort as the country’s top producer of key metals that support clean energy, advanced tech, and electronics. As
                we strategically expand our mining assets, extend our presence across synergistic sectors and consolidate our control over our manufacturing value chain, we are helping power India’s
                low-carbon growth through self-reliant means. This will position India as a leader, sustaining growth and keeping consumption and capital formation active. Vedanta will play a key role in India’s growth, boosting our market position and profits, and helping us maintain our global status. Domestic consumption growth is expected to converge with vastly accelerating domestic manufacturing as India manufactures for India and the World manufactures in India too. Strong core sector growth can drive higher per capita income, improve income distribution, and boost economic development in India. Vedanta benefits from this growth and is committed to supporting social upliftment. By building together, we can grow and thrive together.
            </p>
            <p className='text-[#72bf44] font-semibold text-2xl my-3'>
                Inspiring the change we desire
            </p>
            <p className='mb-2'>
                Sustainable growth needs to be inclusive. India’s long-term success depends on using economic progress to improve everyone’s lives. Vedanta believes in doing good and has focused on social responsibility
                and upliftment from the beginning.
                Our three-fold motto of Zero Harm, Build Trust and Benefit Sharing runs
                as a common thread, underlying
                every aspect of our work. Our strong connect in improving the lives of our communities through education, healthcare, skilling, employment generation, women’s empowerment and resource conservation activities demonstrates our multidimensional approach to creating long-lasting change. Our pledge of empowering 2.5 million families annually and uplifting over 100 million women and children is supported by an additional Rs 5,000 crore outlay over the next 5 years, and will add significantly to the 50 million lives that we have already touched through our community outreaches. We are proud of our social achievements and hope they inspire more Indian corporations to embrace participative social change.
            </p>
            <p className='mb-2'>
                As India embarks on rapid growth, it sets an example for the world with its nature-preserving, socially inclusive approach. While there’s still much to achieve, Vedanta is proud to be part of India’s journey. India’s rise is our rise, and it’s your rise too.
            </p>
        </div>
    )
}

export default TheImpact