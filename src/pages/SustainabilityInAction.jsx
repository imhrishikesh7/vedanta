import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const SustainabilityInAction = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-6xl text-2xl text-center pb-3 font-semibold bg-gradient-to-l from-[#0c61c8] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Sustainability in Action, <br /> Progress in Motion</motion.h1>

            <div className='sus-table my-5'>
                <div className='bg-[#72bf44] md:flex md:items-stretch md:justify-center rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl rounded-br-2xl mb-1'>
                    <div className='bg-[#72bf44] p-4 md:rounded-tl-2xl md:rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl flex flex-col justify-between items-center md:w-[17%]'>
                        <div className='m-4'>
                            <p className='text-white font-semibold mb-2'>
                                Setting the tone
                            </p>
                            <span className='bg-[#2366ab] py-1 px-4 text-white '>(2009-2014)</span>
                        </div>
                    </div>
                    <div className='bg-[#f4f1ef] p-4 md:rounded-tl-2xl md:rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl rounded-br-2xl  flex-grow text-[15px] md:flex md:justify-between md:w-[82%]'>
                        <div className='md:w-[19%]'>
                            <p className='mb-2'>
                                First sustainable development strategy formed which identifies three areas of focus:
                            </p>
                            <ul className=''>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Inclusive growth for our people and communities
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Environmental management
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Sustainable economic growth
                                </li>
                            </ul>
                        </div>
                        <div className='md:w-[19%]'>
                            <ul className=''>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Establishment of Sustainable Development Governance
                                </li>
                            </ul>
                        </div>

                        <div className='md:w-[19%]'>
                            <ul className=''>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Establishment
                                    of sustainable development framework comprising of
                                    policies and technical environmental, social Standards
                                </li>
                            </ul>
                        </div>

                        <div className='md:w-[19%]'>
                            <ul className=''>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Establishment of Vedanta Sustainability Assurance Programme (VSAP)
                                </li>
                            </ul>
                        </div>

                        <div className='md:w-[19%]'>
                            <ul className=''>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Fulfilment of sustainable development KPIs linked with executive remuneration
                                    of Sustainability Committee and terms of reference
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className='bg-[#2366ab] md:flex md:items-stretch md:justify-center rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl rounded-br-2xl mb-1'>
                    <div className='bg-[#2366ab] p-4 md:rounded-tl-2xl md:rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl flex flex-col justify-between items-center md:w-[17%]'>
                        <div className='m-4'>
                            <p className='text-white font-semibold mb-2'>
                                Reinforcement
                            </p>
                            <span className='bg-[#72bf44] py-1 px-4 text-white '>(2015-2020)</span>
                        </div>
                    </div>
                    <div className='bg-[#e9f7fe] p-4 md:rounded-tl-2xl md:rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl rounded-br-2xl  flex-grow text-[15px] md:flex md:justify-between md:w-[82%]'>
                        <div className='md:w-[19%]'>
                            <p className='mb-2 text-lg'>
                                Roll out of VSF continues
                            </p>
                            <ul className=''>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Safety performance standards, formal
                                    safety risk assessment, industrial hygiene baseline assessment and safety leadership coaching introduced
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Focus on Zero Harm Strategy
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Targets achieved of water & energy saving ahead of time
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Lisheen mine closure with adoption of consultative worldclass rehabilitation process
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Sustainability Committee of the Board established
                                </li>
                            </ul>
                        </div>
                        <div className='md:w-[19%]'>
                            <ul className=''>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Pledged to participate
                                    in and lead the United Nations’ ‘Planet 50-50 by 2030’ vision
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Launch of Zero Harm, Zero Waste, Zero Discharge Strategy
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    One Vedanta vision built around transforming elements and transforming lives
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Initiated a US$ 30 million investment fund for in- house R&D, supporting our wealth of knowledge and spirit of innovation with meaningful resources.
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Launch of “Eureka”
                                    web-based technology platform for Innovation and R&D efforts.
                                </li>
                            </ul>
                        </div>

                        <div className='md:w-[19%]'>
                            <ul className=''>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    ‘Green road’ made using fly ash as the primary component at Vedanta Jharsuguda
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    <div>
                                        Rankings in the metals & mining sector moved up to the 17<sup>th</sup> and 11<sup>th</sup> place respectively
                                        in the Dow Jones Sustainability Index
                                    </div>
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    <div>
                                        Conserved 2.6 million GJ of energy against
                                        a target of 1.39 million GJ and 4.1 million m3 of water  against a target of 2.2 million m<sup>3</sup>
                                    </div>
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    100% of Vedanta’s businesses get aligned with a collective carbon strategy
                                </li>
                            </ul>
                        </div>

                        <div className='md:w-[19%]'>
                            <ul className=''>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Launch of a Group-wide programme on tailings dams management
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Drive effective implementation of provisions of the Modern Slavery Act across our businesses
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Re-evaluation of our social performance standards to enhance our Social License to Operate
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Strategy rolled out to increase leadership engagement in workplace safety
                                </li>
                            </ul>
                        </div>

                        <div className='md:w-[19%]'>
                            <ul className=''>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    To improve our Social License to Operate,
                                    a series of activities begin – perception surveys, materiality assessment, social performance review, FPIC requirements review
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Carbon Forum reconstituted
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    COVID-19-
                                    led extensive outreaches for safe workplaces, business continuity planning, and philanthropic assistance to communities
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>

                <div className='bg-[#72bf44] md:flex md:items-stretch md:justify-center rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl rounded-br-2xl mb-1'>
                    <div className='bg-[#72bf44] p-4 md:rounded-tl-2xl md:rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl flex flex-col justify-between items-center md:w-[17%]'>
                        <div className='m-4'>
                            <p className='text-white font-semibold mb-2'>
                                Reform and Transform
                            </p>
                            <span className='bg-[#2366ab] py-1 px-2 text-white '>(2021-onwards)</span>
                        </div>
                    </div>
                    <div className='bg-[#f4f1ef] p-4 md:rounded-tl-2xl md:rounded-bl-2xl rounded-tl-2xl rounded-tr-2xl rounded-br-2xl  flex-grow text-[15px] md:flex md:justify-between md:w-[82%]'>
                        <div className='md:w-[19%]'>
                            <ul className=''>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Launch of updated Sustainability Strategy ‘Transforming for Good’ with nine ESG aims aligned to Community, Planet, and Workplace
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Committed to becoming a Net Zero carbon business by 2050
                                </li>
                            </ul>
                        </div>
                        <div className='md:w-[19%]'>
                            <ul className=''>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Increased focus on Diversity and inclusion, launch of Group Diversity, Equity & Inclusion Council
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Committed to spend US$5 billion over
                                    the next 10 years to accelerate our transition to Net Zero Carbon
                                </li>
                            </ul>
                        </div>

                        <div className='md:w-[19%]'>
                            <ul className=''>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Ranked 3rd in S&P Global Corporate Sustainability Assessment in the metals and mining sector – alongside 1st rank for Hindustan Zinc and Vedanta Aluminium (aluminium sector)
                                </li>
                            </ul>
                        </div>

                        <div className='md:w-[19%]'>
                            <ul className=''>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    India CSR Leadership Award 2023
                                </li>
                            </ul>
                            <li className='mb-2 flex items-start'>
                                <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                Kincentric Best Employer Award – India 2023
                            </li>
                        </div>

                        <div className='md:w-[19%]'>
                            <ul className=''>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Established US$ 15/
                                    tCO2e as Internal Carbon Price
                                </li>
                                <li className='mb-2 flex items-start'>
                                    <img src='./home/leaf2.svg' className='mr-2 w-4 h-4' alt='bullet' />
                                    Introduction of EV purchase policy for employees.
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>

            <div>
                <h2 className='font-bold text-3xl md:text-4xl mb-4'>Where sustainability meets success</h2>

                <p className='text-[#72bf44] font-semibold mb-2'>Rapid growth drives responsible action and Sustainability Leadership</p>
                <p className='mb-2'>
                    Rapid urbanization, industrialization, and increasing consumer demand, along with the shift to green energy, are driving up the need for metals. With the global population expected to reach 9.8 billion by 2050, metals usage will rise significantly, creating great growth opportunities for Vedanta.
                </p>
                <p className='mb-2'>
                    We must drive positive change
                    by improving our operations and governance for better environmental management, creating low-carbon products, and including local and marginalized communities for greater equity. Vedanta is taking
                    a comprehensive approach to sustainability, evolving from ‘Transforming Elements’ to ‘Transforming for Good’ to achieve strong sustainability leadership.  We are building our sustainability leadership strengths along these five tracks:
                </p>
                <div className='md:flex md:justify-between my-4'>
                    <div className='md:w-[49%]'>
                        <img src="./other/sus1.png" className='rounded-2xl' alt="" />

                        <div className='rounded-2xl bg-[#f4f1ef] text-[#2266ab] text-2xl my-4 p-4'>
                            <p>
                                <strong>19%</strong> production increase
                                Y-o-Y, driven by improvement in process efficiency
                            </p>
                        </div>

                        <div className='md:flex md:justify-between'>
                            <div className='md:w-[50%] my-4'>
                                <div className='my-4 relative pb-2 '>
                                    <h1 className='text-[#72bf44] font-semibold text-3xl'>14.22 MMT</h1>
                                    <p className='text-xl'>
                                        Total Production of Transition <br /> Metals
                                    </p>
                                    <div className="absolute bottom-0 left-0 w-[80%] h-[3px] border-b-2 border-[#72bf44]">
                                        <span className="absolute bottom-[-3px] left-0 w-[40px] border-b-4 border-[#0066ab]"></span>
                                    </div>
                                </div>
                            </div>
                            <div className='md:w-[50%] my-4'>
                                <div className='my-4 relative pb-2 '>
                                    <h1 className='text-[#72bf44] font-semibold text-3xl'>1,182 billion</h1>
                                    <p className='text-xl'>
                                        Revenue from Transition <br /> Metals
                                    </p>
                                    <div className="absolute bottom-0 left-0 w-[80%] h-[3px] border-b-2 border-[#72bf44]">
                                        <span className="absolute bottom-[-3px] left-0 w-[40px] border-b-4 border-[#0066ab]"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='md:w-[49%]'>
                        <p className="text-xl font-semibold mb-2">
                            <span className="text-white bg-[#72bf44] py-1 px-2 rounded-full">1</span> Largest portfolio of transition metals meets a spectrum of green economy needs
                        </p>
                        <p className='mb-2'>
                            Vedanta’s business portfolio is built
                            on metals which are crucial for global energy transition. This opens a vista of opportunities, both for the country and Vedanta. With our base in the world’s fastest growing economy, which is stepping onto the ‘atmanirbhar’ or
                            self-reliant path to growth with a
                            focus on low carbon development,
                            the next decade and more, will clearly be transformational. India will be
                            one of the largest markets for green products and services, and a leader
                            in renewable batteries and green hydrogen. The domestic availability
                            of transition metals like aluminium, copper, zinc, silver, nickel at globally competitive prices will enable India
                            to do more with less, as it pivots
                            to a greener economy, scaling its renewables infrastructure, expanding its electronics manufacturing capabilities and building carbon-
                            light public infrastructure. We are aggressively scaling up our capacities to meet this imminent demand and expanding our operations globally, in response. Both aluminium and zinc – two critical metals fueling green power expansion – are undergoing significant capacity additions; and we are parallelly boosting existing production capabilities with US$ 1.2 billion invested in FY 2023, and US$ 1.4 billion spent in FY 2024. Our focus on volume augmentation, cost reduction or creating value added products are key guiding principles that would enable us to cater to the rapidly growing domestic demand from sunrise sectors such as EVs, Renewable Power, Defence & Aerospace. In addition, our industry- first launch of green copper and green alumina answers the market need for products with lower carbon trails, and we are working on similar products for other metal verticals.
                        </p>
                        <div className='w-full my-4'>
                            <img src="./other/sus2.png" className='rounded-2xl' alt="" />
                            <p className='text-xs pt-1 mt-4 border-t border-black'>3 <Link to="https://www.unep.org/news-and-stories/story/how-minerals-and-metals-companies-can-help-achieve-2030-agenda-sustainable" target='_blank'>https://www.unep.org/news-and-stories/story/how-minerals-and-metals-companies-can-help-achieve-2030-agenda-sustainable</Link></p>
                        </div>
                    </div>
                </div>
                <p className="text-xl font-semibold mt-4 mb-2">
                    <span className="text-white bg-[#72bf44] py-1 px-2 rounded-full">2</span> Decarbonization, optimized resource management set industry precedents
                </p>
                <p className='mb-2'>
                    At Vedanta we realized early that
                    to sustain our progress, our impact had to be sustainable. Thus, early
                    on our journey of growth we shifted gears from linear process flows to more regenerative ones, and some of our marquee businesses pioneered sustainable processes in India like
                    the treatment and recycling of urban wastewater. With the formalization of our Sustainability strategy, we rolled
                    out a multipronged approach that worked through decarbonization, improved operations, better resource management, to achieve reduced long- term impact on natural ecosystems.
                </p>
                <p className='mb-2'>
                    Our decarbonization route is a novel one, as we address the complementary goals of reducing GHG emissions
                    and optimizing costs. Our twin decarbonization targets of net-zero carbon emissions by 2050 or earlier and 25% absolute reduction in GHG emissions by 2030, are being met through the four levers of renewable energy scaleup, fuel switch, energy and process efficiency, and carbon offsets.
                </p>
                <p className='mb-2'>
                    Alongside, we continue to acquire thermal power generation capabilities to control our production costs as we expand our renewables backbone and gain scale and assured output through these. We are also extending the productive life of such coal-based plants to focus on the long-term security of coal supply at competitive prices. This will help us in reducing and delinking production cost from external volatility through achieving full backwards vertical integration.
                </p>
                <p className='mb-2'>
                    We have entered into power delivery agreements for approximately 1,826 MW of Renewable Energy with Serentica Renewables. As we prepare for the commissioning of the inaugural phase in the first quarter of FY 2025, this initiative underscores our concerted efforts to increase the renewable energy mix, achieve our sustainability goals, and direct investments towards procuring renewable power with long-term captive renewable energy power delivery plans.
                </p>
                <p className='mb-2'>
                    Resource efficiency is the key to resource security in the future. For
                    a world that is grappling to tackle
                    the imbalance between burgeoning populations and dwindling natural resources, every bit saved is an investment for the future. Our production philosophy is founded on this simple fact, and we follow the principles of minimization, optimization, and circularity to generate lower volumes of waste or reduce toxicity and create low-waste trails that require lower interventions. We have also
                    been steadily increasing our recycling capabilities for high volume-low toxicity waste with our waste byproducts like fly ash, red mud, jarosite, slag forming inputs for other industries or being used in our own operations. This has made significant monetary difference, either as a revenue source or in terms of reduced input costs. The cumulative impact of more circular production processes is game-changing for us as a metals and minerals conglomerate, as it is helping us move away from a net negative impact scenario and taking the conflict out of development, towards a more co-existential path.
                </p>
                <div className='md:flex md:items-center md:justify-between'>
                    <div className='rounded-2xl bg-[#f4f1ef] text-[#2266ab] text-2xl my-4 p-4 md:w-[32%] md:h-[250px]'>
                        <p>
                            <strong>₹ 4.8 billion</strong> invested
                            in Optionally
                            Convertible
                            Redeemable
                            Preference shares
                            (OCRPS) of
                            Serentica group against 26% equity
                            stake.
                        </p>
                    </div>
                    <div className='rounded-2xl bg-[#f4f1ef] text-[#2266ab] text-2xl my-4 p-4 md:w-[32%] md:h-[250px]'>
                        <p>
                            <strong>12%</strong> cumulative drop in metals emissions intensity <br />
                            (Base year FY 2021)
                        </p>
                    </div>
                    <div className='my-4 md:w-[32%]'>
                        <img src="./other/sus3.png" className='rounded-2xl' alt="" />
                    </div>
                </div>

                <p className="text-xl font-semibold mt-4 mb-2">
                    <span className="text-white bg-[#72bf44] py-1 px-2 rounded-full">3</span> Sharing the fruits of prosperity through inclusion and development
                </p>
                <div className='md:flex md:justify-between items-center my-4'>
                    <div className='md:w-[20%] mb-2'>
                        <img src="./other/sus4.png" className='rounded-2xl' alt="" />
                    </div>
                    <div className='md:w-[78%]'>
                        <p className='mb-2'>
                            The metals and mining industry works closest to the people of the soil. This creates immense scope for leaving a lasting impact in terms of social change, poverty alleviation, income redistribution among communities at the grassroots level. But the conduits of making this impact lie through local employment and empowerment, the reason why Vedanta’s community engagement and development initiatives have almost exclusively focused on these aspects.
                        </p>
                        <p className='mb-2'>
                            Our goal to promote diversity, equality, and inclusivity, very clearly identify the outcomes that we are seeking – to empower over 2.5 million families annually with enhanced skill sets
                            and annually with essential skills training, uplift over 100 million women and children and invest in people development. We empower people
                            to think independently, creatively, and
                            innovatively.
                        </p>
                        <p className='mb-2'>
                            Our initiatives to generate local employment, with the trained youth finding jobs at our production sites or
                            at neighbouring facilities or in nearby towns. It has also helped to kickstart local economies, with Vedanta providing microfinance opportunities in many cases. Such grassroots-level economic regeneration has also helped to create local procurement opportunities for Vedanta, and currently we procure goods and services, leading to income generation for these local economies. Grassroots level development has enormous multiplier benefits in terms of perpetuating local economies, arresting urban migration, reducing income inequalities, alleviating poverty, and ensuring a better quality of life.
                        </p>
                    </div>
                </div>
                <p className='mb-2'>
                    Our initiatives to train youth and enable them to find jobs at our production sites or at neighbouring facilities or in nearby towns, helped us to kickstart generate local employment opportunities.  Vedanta is also boosting local economies by providing microfinance opportunities to women through structured federations. Such grassroots-level economic regeneration not only helps to create local procurement opportunities for Vedanta, but also lead to overall economic development for these local economies. Grassroots level development has enormous multiplier benefits in terms of perpetuating local economies, arresting urban migration, reducing income inequalities, alleviating poverty, and ensuring a better quality of life.
                </p>
                <p className='mb-2'>
                    Our aim which focuses on women and child health and well-being is a very important social inclusion goal that helps to raise the quality of human capital amongst groups that have been traditionally overlooked. The scale of the impact that we have made underscores the powerful agency that we carry just by virtue of being present in some of the remotest parts of India and Africa. Communities here crave the benefits that we bring to them, and our intent and resolve has helped to revolutionize their lives and futures.
                </p>
                <p className='mb-2'>
                    Vedanta’s emphasis on gender and inclusion has enabled the integration of diverse perspectives into our business processes and decision-making, yielding significant benefits. This progress is accelerated by targeted policy interventions, infrastructure enhancements, and the elimination of biases.
                </p>
                <div className='md:flex md:items-center md:justify-between'>

                    <div className='rounded-2xl bg-[#f4f1ef] text-[#2266ab] text-2xl my-4 p-4 md:w-[22%]'>
                        <p>
                            Perspective shift from <strong>gender-based hiring</strong> to women in STEM roles to now broader diversity & inclusion.
                        </p>
                    </div>
                    <div className='rounded-2xl bg-[#f4f1ef] text-[#2266ab] text-2xl my-4 p-4 md:w-[77%]'>
                        <p className='mb-3'>
                            <strong>0.4 million</strong> people trained
                        </p>
                        <p className='mb-3'>
                            <strong>50 + million</strong> people impacted
                        </p>
                        <p className='mb-3'>
                            <strong>20% </strong> women in decision making positions
                        </p>
                        <p className=''>
                            Commitment
                            to invest <strong>₹ 50 billion  </strong> investment commitment in developmental
                            activities
                        </p>
                    </div>
                </div>
            </div>
            <p className="text-xl font-semibold mt-4 mb-2">
                <span className="text-white bg-[#72bf44] py-1 px-2 rounded-full">4</span> Strong governance helps translate intent into action
            </p>
            <p className='mb-2'>
                Our ESG policies and actions are bound within a tight framework of governance; regular monitoring; meticulous audit, review, and feedback; performance linkages and calibrated target setting. The whole process is 360-degree in nature and is benchmarked against
                the best international standards. A
                well-developed governance framework plays an integral role in delivering resilience and operational transparency. With a diligently focused governance philosophy.
            </p>
            <div className='md:flex md:justify-between'>
                <div className='md:w-[65%]'>
                    <p className='mb-2'>
                        Vedanta works within a highly regulated operating architecture wherein
                        almost every critical aspect, carrying the potential to impact business
                        and future goals, is well defined and monitored. Our three-tier Sustainability governance structure connects the Board with the functional-level staff, decentralizing decision-making across different levels. Complementarily, the implementing framework consisting
                        of the Group Leadership and the
                        BU-level leadership, bring in internal focus, deciding on the means and consequences of implementation, modifying course, or pushing the pedal, as needed. This structure ensures that the organization benefits both from
                        a mature understanding of how it needs to prepare for the future, with a balanced weighing in of what is suitable and useful for specific BU-related environments.
                    </p>
                    <p className='mb-2'>
                        Theme wise implementation bodies
                        (‘Communities of Practice’) take ownership for the implementation
                        of specific ESG Key Performance Indicators (KPIs) that are of high material significance to the company. They bring in specialized understanding and provide unrelenting focus, making it easier to implement detailed plans and achieve ambitious goals. Aspects like workplace health and safety; supply chain sustainability; water, waste, biodiversity, and air quality management etc are handled by these Communities of Practice (CoPs).
                    </p>
                    <p className='mb-2'>
                        This detailed operating and oversight architecture, is the key to the success of our ESG programmes conducted across different BUs in diverse geographies,
                        as it helps to bring in uniformity in the pursuit of common goals. The strong governance backbone also helps to consistently drive a culture of ESG transformation, with employees at all levels getting involved in addressing routine ESG parameters through the initiatives that are underway. This involvement raises awareness, and strong governance transforms process to consistent action. Our transparent audit and reporting methodologies help to demonstrate how and where impact is happening. The practitioners therefore clearly realize the fruits of their efforts, further driving adoption, acceptance, and advocacy.
                    </p>
                    <div className='rounded-2xl bg-[#f4f1ef] text-[#2266ab] text-2xl my-4 p-4'>
                        <p>
                            <strong>13 CoPs 250+ BU/SBU</strong> level Community members
                        </p>
                    </div>
                </div>
                <div className='md:w-[33%]'>
                    <img src="./other/sus5.png" className='rounded-2xl' alt="" />
                </div>
            </div>

            <p className="text-xl font-semibold mt-4 mb-2">
                <span className="text-white bg-[#72bf44] py-1 px-2 rounded-full">5</span> Spearheading water management for long-term sustainability of adjacent communities and our business
            </p>
            <p className='mb-2'>
                For the mining industry, water is crucial for operations like mineral processing, dust control, and slurry transport. We also recognize the decreasing availability of fresh water and its importance to other sectors and communities. At Vedanta, we adopted a science-based water management approach from the start. This involves regularly assessing water conditions at our sites, forecasting future scenarios, and taking steps to conserve and manage this resource for long-term stability.
            </p>
            <div className='md:flex md:justify-between'>
                <div className='md:w-[53%]'>
                    <p className='mb-2'>
                        Our approach has evolved over the years from focus on water efficiency to water resiliency to water positivity going forward.
                    </p>
                    <p className='mb-2'>
                        We are protecting our interests in two ways – by building self-reliance in water through reduce, reuse and extensive water harvesting, as well as, by proactively replenishing common water sources and ensure water availability for other sectors and the communities. Vedanta actively engages with its surrounding communities, acting
                        as a mentor and steward for social development. Our water stewardship reflects this commitment, ensuring that our water resources are well-managed and that clean water is always available. We believe that working together to address issues and improving the
                        lives of those around us helps ensure business continuity and a brighter future for all.
                    </p>
                    <p className='mb-2'>
                        Our style of Sustainability leadership, as would be evident by now, combines empirical understanding and fact-based vision with a preference for financial prudence and strong governance. We also carry the dream of being a catalyst in the process of “Rising India, Atmanirbhar Bharat” close to our hearts, and have long been channelizing our financial gains for grassroots level socio-economic change both through our contributions to the national exchequer and through direct involvement. We have contributed H 544.02 billion to the public exchequer of the various countries where we operate in FY 2024.
                    </p>
                    <p className='mb-2'>
                        When the future looks as exciting as it does today, it is tempting to compromise. Our view of Sustainability Leadership is unique from this perspective – as we believe that our calling lies in conducting sustainable operations at scale, with consistency and by accommodating incremental increases. As India’s growth trajectory will demand just this.
                    </p>
                </div>
                <div className='md:w-[45%]'>
                    <img src="./other/sus6.png" className='rounded-2xl' alt="" />
                </div>
            </div>
            <div className='rounded-2xl bg-[#f4f1ef] text-[#2266ab] text-2xl my-4 p-4'>
                <p className='mb-3'>
                    <strong>5 businesses</strong> are water positive
                </p>
                <p className='mb-3'>
                    <strong>4.5 million</strong> m<sup>3</sup> of freshwater saved since FY 2021
                </p>
            </div>
        </div>
    )
}

export default SustainabilityInAction