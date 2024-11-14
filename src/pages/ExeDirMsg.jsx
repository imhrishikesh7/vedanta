import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
const ExeDirMsg = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-6xl text-center pb-3 font-semibold bg-gradient-to-l from-[#0c61c8] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Executive Director's Message</motion.h1>
            <div className='md:flex md:items-center md:justify-between mb-[2%]'>
                <img src="./other/exe-dir.png" className='md:w-[59%]' alt="" />
                <div className='md:w-[39%] mt-4 md:mt-0'>

                    <p className='text-lg font-[600] text-[#0066ab]'>
                        India is on a high growth run over the next decade or more as the world’s fastest growing economy. As an essential part of most industrial value chains, metals and oil and gas are likely to see sustained demand, signifying robust growth for Vedanta. The challenge remains to achieve this growth with minimal adverse environmental impact, and without compromising on our competitive strengths.
                    </p>
                </div>
            </div>
            <p className='my-4'>
                In FY 2024, Vedanta delivered strong performances across several of its verticals.
                This was against the backdrop of soft global commodity prices and erratic international demand that was countered by buoyant domestic demand. Many of our marquee verticals clocked record-breaking production numbers as they fulfilled domestic requirements. This scenario most likely presages what the future will hold. Weak European industrial demand, opportunistic offtake by China and geopolitical pressures are likely to persist in the near term, shifting the spotlight squarely onto India as an island of stable economic growth.
            </p>
            <p className='my-4'>
                We are fortunate to have our base in India and
                to be the nation’s largest natural resources company partnering in its economic development and energy transformation journey. To be a successful partner, it is important that we remain financially and operationally high-performing while continuing to act responsibly towards our employees, the environment and society at large. The high growth situation gives us the opportunity to create new paradigms in corporate citizenry and we are working at achieving that.
            </p>
            <p className='text-[#72bf44] font-semibold text-2xl my-4'>
                Sustainability as a reliable business driver
            </p>
            <p className='mb-2'>
                This year has been truly remarkable for the way in which our businesses have successfully managed operational costs while navigating price volatility. Low-cost production led by operational excellence remains our competitive differentiator in the industry and we are constantly consolidating this strength across our large product portfolio. Strong downstream integration, continuous optimisation of production processes, use of leading-edge technologies to improve productivity, strategic sourcing, sustained quarter-on-quarter cost reduction, debottlenecking of existing assets are the many ways
                in which we have driven down costs relentlessly. Our decarbonization strategy, which lies at the centre of Vedanta’s sustainability journey, has
                a critical role to play in our future cost management gameplan. As Vedanta ramps up capacities across our different BUs, our GHG emissions are expected to peak around FY 2027. In preparation, we have been gradually increasing our RE-RTC capabilities, with another 47 MW worth of Power Delivery Agreements (PDAs) signed in FY 2024. This takes our RE-RTC capacities to 835 GW in FY 2024, nearly one-third of the way closer to our 2030 goal of 2.5 GW (2,500 MW). Switching to greener biofuels is also underway at a steady pace and this year we used 66,551 tonnes of biomass, a marginal decline from last year, due to supply-chain constraints.
            </p>
            <p className='mb-2'>
                Strong backward and forward integration, from mine to metal and beyond, particularly for our flagship metal businesses, is an indirect outcome of the cost advantage
                that our traditional fossil fuel-based captives have provided so far. This cost supremacy has helped us overreach and build capabilities at nearly 30% lower CAPEX than peers, while also expanding into adjacent businesses and developing strong value-added capabilities thereby fortifying our market position. As we gradually transform to clean energy sources like RE-RTC, CCUS, hydrogen fuel over several years, we are strengthening
                the foundations of our operational excellence even more. This will safeguard us from transition risks till such time when the lower operating costs of clean energy would start to accrue.
            </p>
            <p className='mb-2'>
                For a natural resources conglomerate, conserving resources is a means of ensuring business continuity. Inputs like water and mineral and non-
                mineral wastes are resources that we continually optimize as we progress and evolve on our Sustainability journey. This year, with four of our operational sites becoming fully water positive we reached a water positivity ratio of 0.71. With regular increase in our recycling capacities, increased
                the amount of recycled water from 78 million m3 in FY 2023 to 85 million m3 in FY 2024.
            </p>
            <p className='my-4'>
                As we work at making our operations greener, we are tackling the issue of legacy waste aggressively. An effective way of doing this is by minimizing the year-on-year waste that we generate and this year we successfully utilized 107% of the fly ash that we generated at our power plants. Further, the audit of all our Tailings dams was completed, with the finalization of subsequent actions to be taken and monitoring measures also rolled out. The safe management of our Tailings dams is a highly material issue and a key aspect of our legacy waste management.
                This status marks the conclusion
                of a crucial target for us with 76% compliance successfully achieved against GISTM standards.
            </p>
            <p className='text-[#72bf44] font-semibold text-2xl my-4'>
                Safety first, people first
            </p>
            <p className='mb-2'>
                As an industry leader, we have always felt the need to establish benchmarks in the ways we work. The safety of
                our people is of primary importance and this year we implemented the Critical Risk Management (CRM) framework across all our operations. This framework identifies 13 critical risks and follows a 9-step methodology developed by the International Council on Mining and Metals (ICMM). To ensure efficient implementation, we are instituting a strong governance and accountability mechanism as a part of which CEOs will be taking ownership of specific critical risks.
            </p>
            <p className='text-[#0066ab] font-[500] text-2xl my-4'>
                <img src="./other/q1.svg" className='inline-block mt-[-1%] mr-2 w-[35px]' alt="" />
                This year, with four of
                our operational sites becoming fully water positive we reached
                a water positive ratio
                of 0.71. With regular increase in our recycling capacities, increased
                the amount of recycled water from 78 million m3 in FY 2023 to 85 million m3 in FY 2024.
                <img src="./other/q2.svg" className='inline-block mb-[-1%] ml-2 w-[27px]' alt="" />
            </p>
            <p className='mb-2'>
                Regrettably, this year we lost three
                of our colleagues at our FACOR and Jharsuguda facilities. In keeping
                with our Zero Harm approach, the circumstances and cause of these accidents have been analyzed in
                detail by multiple functional heads
                and permanent corrective actions like equipment modification, checking of raw material quality and compulsory wearing of full-body safety equipment, have been mandated. It is also our constant endeavor to ingrain the Safety- first work culture on our employees,
                so that they remain ever alert and proactive in ensuring their own and others’ safety. Across Vedanta, our workforce received more than 2 million hours of safety training this year. Comprehensive safety governance practices are diligently pursued across our varied businesses, with our Safety CoP and the Vedanta Sustainability Assurance Process (VSAP) auditing our entire operations, across geographies, against 17 safety and 20 health and safety standards.
            </p>
            <p className='mb-2'>
                This rigorous approach has helped us greatly reduce the number of fatalities yearly even as we grow.
            </p>
            <p className='text-[#72bf44] font-semibold text-2xl my-4'>
                Digitalization ushers in a new era of analytics-driven decision making
            </p>
            <p className='mb-2'>
                This year we launched our integrated sutainability management portal Enablon that allows us to monitor
                data from all operating sites and to proactively identify potential threats and risk incidents. Initially rolled out for the Health, Safety and Environment functions, the portal already connects more than 63,000 users, with more than 80,000 action plans deployed and over 300,000 observations recorded. The software is expected to bring a sea change to the way we operate, with its capabilities for data analysis, automated follow-ups and alerts for task management and overall transparency.
            </p>
            <p className='text-[#72bf44] font-semibold text-2xl my-4'>
                Pathbreaking gender affirmation policy expands our DEI scope
            </p>
            <p className='mb-2'>
                Continuing with our efforts to build
                a new Vedanta that understands the expectations of its employees, we have been expanding the scope of our DEI policies. This year, Vedanta broke new ground in the manufacturing industry by launching the one-of-a- kind ‘Gender Reaffirmation Leaves and Compensation Policy’ for LGBTQIA+ employees in support of their gender reassignment surgery. Our comprehensive parenthood policy, also launched this year, is similarly pathbreaking. Offering a 12-month sabbatical for new mothers, the
                policy offers several flex work options without compromising on career growth. Through such progressive moves, we not only wish to make the workplace more relevant and amenable to the needs and wants of the newer generation of our employees, we also hope to bring in a wave of change within the industry which is often perceived as being traditional. A more open and diverse organization will enrich our talent quality greatly, bringing in people with uncommon and untapped knowledge and life skills.
            </p>
            <p className='mb-2'>
                With the intent of fostering skill diversity, this year Hindustan Zinc constituted India’s first all women mine rescue team, thereby changing perceptions about bringing women into frontline and shopfloor roles.
            </p>
            <p className='mb-2'>
                Vedanta also continues to promote
                a culture of innovation and experimentation within our several businesses. Our different programmes like the Moonshot Project and
                V-Desire capture such kernels of ideas from different employee groups at different levels, and with different work experiences to forge together homegrown innovations that can open new horizons for the company.
            </p>
            <p className='mb-4'>
                As we prepare for high-growth times                                                          ahead, we are marshalling together the power and drive of our business strengths and synergies to spearhead progress that benefits our nation,
                its people and our employees and associates.
            </p>
            <p className='mb-2'>Regards,</p>
            <p className='text-[#0066ab] font-[600] text-xl'>Arun Misra</p>
            <p className='font-[600] text-lg'>Executive Director</p>
        </div>
    )
}

export default ExeDirMsg