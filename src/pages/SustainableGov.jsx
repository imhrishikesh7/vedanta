import React from 'react'
import { motion } from 'framer-motion'
const SustainableGov = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-6xl text-3xl text-2xl text-center pb-3 font-semibold bg-gradient-to-l from-[#0c61c8] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Sustainability Governance</motion.h1>
            <p className='text-lg font-[600] text-[#0066ab] mb-3'>
                For a diverse and distributed organisation like Vedanta, effective ESG implementation demands a well-entrenched and performance-based execution mechanism. Our Board ESG Committee, drives the Group’s ESG agenda and monitors implementation of strategies at the Group level. The strategic output of this Committee is contained in the policies of the Vedanta Sustainability Framework (VSF), while the evaluation of Group-wide/BU-specific ESG performance is done through the Vedanta Sustainability Assurance Process (VSAP).
            </p>
            <p className='mb-2'>
                The Group ESG team, which is a
                part of the Executive Committee, anchors the effort of drawing up the overall ESG strategy by involving both internal and external stakeholders. The Executive Committee, along with ESG ManComm, and internal management teams comprising functional leaders and BU level ESG teams are tasked with ensuring individual BU-level conformance with standard practices. These committees are also the custodian of the Group level ESG roadmap. In this way, both a top down and bottoms-up approach is integrated.
            </p>
            <p className='mb-2'>
                At the Business Unit level, each business has separate ESG teams responsible for implementing their respective ESG strategy. Further,
                to drive consistent adoption of strategies, concentrate grassroots- level innovation efforts, drive progress on the aims, and integrate ESG practices across all functions, Vedanta has developed function-specific “Communities of Practice” (CoPs). There are 13 (CoPs) and they exist at the Strategic Business Unit (SBU/ site), Business Unit and Group level. The flowchart given below shows how the different layers interact and work together.
            </p>
            <img src="./other/sg1.png" className='rounded-2xl md:w-[80%] mx-auto my-4' alt="" />
            <p className='mb-2'>
                The Board ESG Committee meets twice in a year and charts the course for turning key material issues into executive action. This Committee also remains vigilant about keeping Vedanta’s ESG strategy in sync with global and industry developments and in ensuring that we stay ahead and competitive. During this financial year, the Board’s ESG Committee focused on the following material issues:
            </p>
            <img src="./other/sg2.jpg" className='my-4' alt="" />

            <p className='mb-2 text-2xl font-semibold text-[#72bf44]'>
                Vedanta Sustainability Assurance Process
            </p>
            <p className='mb-2'>
                Vedanta’s Sustainability Assurance Process (VSAP) serves as a performance monitoring tool for evaluating the adherence
                of all business units to the Vedanta Sustainability Framework. This process ensures that sustainability considerations are thoroughly integrated into all organizational decision-making processes and actions. Its primary objective is to drive continuous improvement and accountability in sustainability practices across the company.
            </p>
            <p className='mb-2'>
                We are committed to nurturing a culture that upholds world-class standards in safety, environmental stewardship, and sustainability. To strengthen this commitment, ESG criteria have been integrated as mandatory Key Performance Indicators (KPIs) for leadership during annual performance appraisals and increment cycles. Our organization adopts a formal scorecard- based performance management approach that offers a unified experience for all full-time employees.
            </p>
            <div className='md:flex md:justify-between'>
                <div className='md:w-[44%]'>
                    <p className='mb-2 text-2xl font-semibold text-[#72bf44]'>
                        Vedanta Sustainability
                        Framework
                    </p>
                    <p className='mb-2'>
                        The Vedanta Sustainability Framework (VSF) serves as a comprehensive guide, ensuring
                        the integration of sustainability throughout our business operations and decision-making processes. This framework is structured to address critical ESG issues, aiming to generate positive impacts across our entire value chain. It aligns closely with global standards set
                        by international bodies such as the International Council on Mining and Metals (ICMM), International Finance Corporation (IFC), Organisation
                        for Economic Co-operation and Development (OECD), United Nations Global Compact (UNGC), and Sustainable Development Goals (SDGs).
                    </p>
                    <img src="./other/sg4.jpg" className='w-[55%] my-2' alt="" />
                </div>
                <div className='md:w-[54%]'>
                    <img src="./other/sg3.jpg" alt="" />
                </div>
            </div>
            <p className='mb-2 text-2xl font-semibold text-[#72bf44]'>
            Sustainability Linked Compensation
            </p>
            <p className='mb-2'>
            Leaders guiding the ESG agenda within the Group play a significant role in these assessments, influencing elements of the compensation structure such as fixed pay, benefits, annual bonuses, the Long-Term Incentive Plan (LTIP), and aspects that prioritize holistic employee development and well-being.
            </p>
            <img src="./other/sg5.jpg" alt="" />
        </div>
    )
}

export default SustainableGov