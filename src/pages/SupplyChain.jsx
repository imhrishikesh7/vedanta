import React from 'react'
import { motion } from 'framer-motion'
const SupplyChain = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-6xl text-center pb-3 font-semibold bg-gradient-to-l from-[#0c61c8] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Supply Chain Management</motion.h1>
            <div className='border border-black rounded-2xl my-4 p-4'>
                <p className='mb-2'>
                    A resilient supply chain helps Vedanta to navigate unforeseen disruptions such as natural disasters, supplier issues, or market fluctuations. Consolidating low-risk, high value suppliers, implementing contingency plans, and fostering strong relationships with key partners enhances Vedanta’s ability to respond to challenges and maintain business continuity in a swift and agile manner.
                </p>
                <img src="./other/sc1.jpg" alt="" />
            </div>
            <p className='mb-2 text-2xl font-semibold text-[#72bf44]'>
                Strategy & management approach
            </p>
            <p className='mb-2'>
                Vedanta’s Technical Standard for Supplier and Contractor Management, which is aligned with IFC performance standards, delineates the core components of our business partner risk management procedure. This comprehensive process establishes a standardized approach for managing risks associated with suppliers
                and their performance throughout
                the organization. Our supply chain
                risk management encompasses
                the identification, assessment, and mitigation of operational and supply chain risks. This proactive strategy enables us to effectively manage risks while seizing opportunities to create value and foster innovation. Risk management plans are tailored to align with the specific level of risk involved.
                190
            </p>
            <p className='mb-2'>
                Vedanta ensures the resilience and integrity of its upstream supply chain by ensuring that its business partners adhere by sustainable business practices.
            </p>
            <p className='mb-2'><span className='font-semibold mb-2'>
                Our Supplier Code of Conduct (SCoC) </span>outlines basic ethical and responsible business practices that Vedanta expects from its business partners. SCoC covers aspects related to labour and human rights apart from Health, Safety, Environment & Sustainability and so on. </p>
            <p className='mb-2'><span className='font-semibold mb-2'>
                The Supplier Sustainability Management Policy </span>enables us to support our business partners and their employees in maintaining a safe and healthy work environment while ensuring that their actions align with our commitment to sustainability
                and environmental protection.
                By implementing this policy, we
                aim to create a responsible and environmentally conscious supply chain that prioritizes the well-being of people and the planet.</p>
            <p className='mb-2'>
                We have implemented multi-level checks, including regular inspections and cutting-edge technologies like radiological age detection, to identify and prevent risks. As we strive to make our business more resilient, we’re collaborating with key tier 1 partners to achieve long-term sustainability objectives.
            </p>
            <p className='mb-2 font-semibold text-lg'>
                Our roadmap includes specific targets for 2025 and 2030, as outlined below.
            </p>
            <img src="./other/sc2.jpg" alt="" />
            <p className='mb-2 text-2xl font-semibold text-[#72bf44]'>
                Governance
            </p>
            <p className='mb-2'>
                Our Commercial ManCom anchored by Director - Group Commercial, Marketing & Risk oversees implementation of Vedanta’s supply chain related risks and strategy. The Director Group and Chief Commercial Officers of each of the Business Units are accountable for implementation of supplier code of conduct and supply chain related strategy.
            </p>
            <p className='mb-2 text-2xl font-semibold text-[#72bf44]'>
                Supplier categorisation
            </p>
            <div className='md:flex md:items-center md:justify-between'>
                <div className='md:w-[49%]'>
                    <p className='mb-2'>
                        Vedanta's ABC Framework categorizes Business Partners as critical based on an evaluation of five key factors:
                    </p>
                    <p className='mb-2'>1. <span className='font-semibold mb-2'>
                        Business Outcome: </span> Impact on Vedanta's operations and goals</p>
                    <p className='mb-2'>2. <span className='font-semibold mb-2'>
                        Spend: </span>Value or volume of the partnership</p>
                    <p className='mb-2'>3. <span className='font-semibold mb-2'>
                        Critical Business Operation: </span>Degree of Relevance to Vedanta's core functions</p>
                    <p className='mb-2'>4. <span className='font-semibold mb-2'>
                        Sensitivity: </span>Level of risk or potential impact on reputation</p>
                    <p className='mb-2'>5. <span className='font-semibold mb-2'>
                        Substitutability: </span>Ease or difficulty of replacing the partner</p>
                    <p className='mb-2'>
                        This multi-faceted approach ensures
                        that Vedanta accurately identifies and prioritizes critical partners who meet these criteria, enabling strategic management of these relationships.
                    </p>
                </div>
                <div className='md:w-[49%] md:flex md:justify-between flex-wrap'>
                    <div className='md:w-[49%] my-4'>
                        <div className='my-4 relative pb-2 '>
                            <h1 className='text-[#72bf44] font-semibold text-3xl'>4,079 </h1>
                            <p className='text-xl'>
                                Number of Tier -1 <br />business partners
                            </p>
                            <div className="absolute bottom-0 left-0 w-[300px] h-[3px] border-b-2 border-[#72bf44]">
                                <span className="absolute bottom-[-3px] left-0 w-[40px] border-b-4 border-[#0066ab]"></span>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[49%] my-4'>
                        <div className='my-4 relative pb-2 '>
                            <h1 className='text-[#72bf44] font-semibold text-3xl'>509</h1>
                            <p className='text-xl'>
                                Category A <br />
                                (Critical business partners)
                            </p>
                            <div className="absolute bottom-0 left-0 w-[300px] h-[3px] border-b-2 border-[#72bf44]">
                                <span className="absolute bottom-[-3px] left-0 w-[40px] border-b-4 border-[#0066ab]"></span>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[49%] my-4'>
                        <div className='my-4 relative pb-2 '>
                            <h1 className='text-[#72bf44] font-semibold text-3xl'>1,001</h1>
                            <p className='text-xl'>
                                Category B
                            </p>
                            <div className="absolute bottom-0 left-0 w-[300px] h-[3px] border-b-2 border-[#72bf44]">
                                <span className="absolute bottom-[-3px] left-0 w-[40px] border-b-4 border-[#0066ab]"></span>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[49%] my-4'>
                        <div className='my-4 relative pb-2 '>
                            <h1 className='text-[#72bf44] font-semibold text-3xl'>2,569</h1>
                            <p className='text-xl'>
                                Category C
                            </p>
                            <div className="absolute bottom-0 left-0 w-[300px] h-[3px] border-b-2 border-[#72bf44]">
                                <span className="absolute bottom-[-3px] left-0 w-[40px] border-b-4 border-[#0066ab]"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-4 my-4 rounded-2xl bg-[#f4f1ef]'>
                <p className='text-2xl text-[#0066ab]'>
                    <strong>19 </strong>business partners have committed to <strong> carbon neutrality or net zero by 2050</strong> or sooner
                </p>
            </div>

            <p className='mb-3 text-2xl font-semibold text-[#72bf44]'>
                ESG INTEGRATION IN SUPPLY CHAIN
            </p>
            <p className='mb-2'>
                Vedanta pre-screens its business partners based on several parameters such as health & safety, labour laws, quality, geographical presence, sector risk, and technical expertise, ensuring only top-performing partners are selected.
            </p>
            <img src="./other/sc3.jpg" alt="" />
            <div className='md:flex md:justify-between'>
                <div className='w-[59%]'>
                    <p className='mb-2 text-xl font-semibold'>
                        B)  SUPPLIER ASSESSMENT
                    </p>
                    <p className='mb-2'>
                        Once onboarded, Vedanta conducts annual second-party desktop assessments for its critical business partners to evaluate their compliance with social and environmental regulations applicable in their respective regions. These assessments are done once in 3 years for tier-1 suppliers to identify any potential high-risk suppliers. During the year, 8 high risk suppliers were identified.
                    </p>
                    <p className='mb-2'>
                        To ensure responsible sourcing, particularly in conflict-affected and high-risk areas (CAHRA), Vedanta implements robust internal management practices for conducting due diligence. This enables the company to identify, assess, and effectively manage potential risks associated with its supply chains. Additionally, Vedanta performs third-party risk assessments to evaluate partners’ adherence to the Modern Slavery Act.
                    </p>
                    <p className='mb-2'>
                        Vedanta has established a process for identifying and reporting potential red flags, as well as the outcomes of risk assessments, to senior management. This proactive approach allows Vedanta to address risks within its supply chains promptly.
                    </p>
                    <p className='mb-2 text-xl font-semibold'>
                        C)  DUE-DILIGENCE & MONITORING
                    </p>
                    <p className='mb-2'>
                        In cases where red flags are detected, enhanced due diligence measures are undertaken to thoroughly investigate the presence of risks, including serious human rights abuses, security force-related risks, support to non-state armed groups, money laundering, tax evasion, bribery, and fraudulent misrepresentation of material origins.
                    </p>
                </div>
                <div className='w-[39%]'>
                    <img src="./other/sc4.jpg" className='rounded-2xl' alt="" />
                </div>
            </div>
            <p className='mb-3 text-2xl font-semibold text-[#72bf44]'>
                CAPACITY BUILDING
            </p>
            <p className='mb-2'>
                In line with our commitment, during the year we focussed our efforts on engaging with our business partners on two themes:
            </p>
            <p className='mb-2'>
                <strong>Safety: </strong> Critical Safety management practices were enforced through awareness sessions, safety talks, townhalls etc.
            </p>
            <p className='mb-2'>
                <strong>Regulatory Compliance:  </strong>Targeted training and awareness sessions on embedding sustainability principles, ESG target setting, ESG expectations/requirements from the suppliers, decarbonization aspirations, were conducted throughout the year by several of our businesses. Cairn Oil & Gas conducted three workshops to build awareness of business partners on the principles of the Business Responsibility and Sustainability Reporting (BRSR). HZL runs ‘Wednesday for Transition’ series to equip its business partners with critical knowledge on ESG topics, facilitating ESG risk management throughout the value chain.
            </p>
            <p className='mb-2'>
                In addition, our businesses have rolled out several initiatives to offer continuous learning opportunities to our business partners. Our Business Partner Information Portal offers extensive guidance to new & existing business partners on Code of Conduct, ESG expectations, and instructions for various processes including auctions, invoice creation, and business partners profile management. ARIBA streamlines procurement, boosting transparency, compliance, and efficiency through automated business partner management and centralized information for Vedanta’s business partners. Vendor Grievance Portal ensures grievances are promptly tracked and addressed timely.
            </p>
            <p className='mb-2 text-xl font-semibold'>
                Capacity Building Programmes
            </p>
            <div className='md:flex md:justify-between'>
                <div className='md:w-[49%]'>
                    <div className='my-4'>
                        <div className='my-4 relative pb-2 '>
                            <h1 className='text-[#72bf44] font-semibold text-3xl'>492 </h1>
                            <p className='text-xl'>
                                Suppliers trained
                            </p>
                            <div className="absolute bottom-0 left-0 w-[90%] h-[3px] border-b-2 border-[#72bf44]">
                                <span className="absolute bottom-[-3px] left-0 w-[40px] border-b-4 border-[#0066ab]"></span>
                            </div>
                        </div>
                    </div>
                    <div className='my-4'>
                        <div className='my-4 relative pb-2 '>
                            <h1 className='text-[#72bf44] font-semibold text-3xl'>24%</h1>
                            <p className='text-xl'>
                                Critical suppliers trained
                            </p>
                            <div className="absolute bottom-0 left-0 w-[90%] h-[3px] border-b-2 border-[#72bf44]">
                                <span className="absolute bottom-[-3px] left-0 w-[40px] border-b-4 border-[#0066ab]"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div lassName='md:w-[49%]'>
                    <div className='my-4 p-4 rounded-2xl bg-[#144380]'>
                        <p className='text-2xl font-semibold text-[#72bf44] mb-2 text-center'>Supplier Capacity Building Snapshot</p>
                        <p className='text-xl font-semibold text-white mb-4 text-center'>Cairn’s ESG Workshop</p>
                        <p className='text-white mb-2'>
                            1.  Cairn Oil & Gas conducts ESG Workshops for their Value Chain Partners
                        </p>
                        <p className='text-white mb-2'>
                            2.  ESG workshops acquaints the value chain partners to ESG basics and Vedanta’s pillars
                        </p>
                        <p className='text-white mb-2'>
                            3.  Provide guidance to suppliers on the Principles of BRSR and what actions they need to take to follow best practices
                        </p>
                        <p className='text-white mb-2'>
                            4.  Three ESG workshops were conducted by Cairn Oil & Gas in FY 2024
                        </p>
                    </div>
                </div>
            </div>
            <p className='my-2 '>
            HZL’S Initiatives for Responsible Sourcing
            </p>
            <img src="./other/sc5.jpg" className='rounded-2xl' alt="" />
        </div>
    )
}

export default SupplyChain