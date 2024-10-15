import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const ChairmanMsg = () => {
  return (
    <div className='marginal'>
      <motion.h1 className='md:text-6xl text-center pb-3 font-semibold bg-gradient-to-l from-[#0c61c8] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        viewport={{ once: false }}
      >
        Chairman’s Message</motion.h1>
      <div className='md:flex md:items-center md:justify-between mb-[2%]'>
        <img src="./other/chairman.png" className='md:w-[59%]' alt="" />
        <div className='md:w-[39%] mt-4 md:mt-0'>
          <p className='text-lg font-semibold mb-3'>
            Dear Stakeholders,
          </p>
          <p className='text-lg font-[600] text-[#0066ab]'>
            Today, we are the citizens of the world’s fifth largest economy. We are in the company of countries that have seen a great many decades of development. Where they are today, we are on the path to reaching. India’s per capita GDP is less than one-fifth that of China’s and close to one-tenth of USA’s – the top two rank holders in the cluster of the world’s biggest economies. That shows the scale of India’s potential, it demonstrates how
            much farther we can go.
          </p>
        </div>
      </div>
      <p className='text-[#72bf44] font-semibold text-2xl my-4'>
        India’s demand potential
      </p>
      <p className='mb-2'>
        Everything about India’s demand potential is huge. Favourable demographics, rising per capita incomes, strong public investment has ensured that India’s demand remains self- driven.  As the country rapidly industrializes and urbanizes, its landscapes are changing, getting dotted with roads, highways, subways, bridges and buildings. Buying patterns are changing as technology and electronics enter almost every home. In every such change, a billion times over, there is an opportunity for Vedanta.
      </p>
      <p className='mb-2'>
        As India’s largest, most diversified, best integrated, low-cost minerals, metals and oil
        & gas producer, Vedanta is uniquely placed
        to maximize the opportunities that our nation offers today.
      </p>
      <p className='mb-2'>
        India’s commitment to Net Carbon Zero by 2070 and the energy transition that is already underway will shape a large portion of the country’s demand trajectory. Vedanta’s portfolio of seven transition metals and oil & gas underpins every industry that will contribute towards this growth potential getting realized – from infrastructure to agriculture, renewables to electronics, automobiles to semiconductors, we are there, and we will be there to an even greater degree.
      </p>
      <p className='text-[#72bf44] font-semibold text-2xl my-4'>
        Helping to make India self sufficient through import substitution
      </p>
      <p className='mb-2'>
        India’s annual imports total more than US$ 700 billion, out of which natural resources constitute more than 50%.  Further, the domestic demand for metals needed in energy transition
        – like copper, aluminium, zinc – is expected to surge and grow in double digits. Vedanta sees a huge opportunity in import substitution and in making the nation self-reliant. Conducive government policies like the Production Linked Incentive (PLI) schemes for manufacturing are increasing the ambit of industries that are now focusing
        on Make in India and China Plus One. Across automobiles, semiconductors, renewables and batteries, the shift in manufacturing is opening up a huge domestic market for minerals and metals, with interlinked synergies
        in supply chain and go-to-market logistics and costs. In response, we have been expanding our metals and product portfolios, going for greater value additions, investing significantly in capacity additions and focusing
        on becoming better integrated, both upstream and downstream.
      </p>
      <p className='text-[#72bf44] font-semibold text-2xl my-4'>
        Powering growth by optimizing production and asset expansion
      </p>
      <p className='mb-2'>
        India’s has huge natural resources reserves, of which less than 20% have been currently extracted.
      </p>
      <p className='mb-2'>
        From FY 2024 onwards, we are investing US$ 1.9 billion as growth CAPEX across our businesses, we have been steadily augmenting our
        R&R across each of our verticals, with an asset base spread across four continents. The average life of our mine assets is 25+ years and coupled with use of the most modern extraction and production techniques, we are well equipped to fulfill India’s growth ambitions and to assure raw material security in support of indigenous manufacturing.
      </p>
      <p className='text-[#0066ab] font-[500] text-2xl my-4'>
        <img src="./other/q1.svg" className='inline-block mt-[-1%] mr-2 w-[35px]' alt="" />
        As we pass through
        the transition phase,
        we are focusing on consolidating and strengthening our asset base to emerge as world leaders in each of our verticals. Our entry into adjacent, high-growth businesses is similarly inspired.
        <img src="./other/q2.svg" className='inline-block mb-[-1%] ml-2 w-[27px]' alt="" />
      </p>
      <p className='mb-2'>
        Our expansionary moves are
        aligned with our business model transformation. The upcoming demerger of our diverse verticals that represent more than 15 commodities, will see us progress from being asset managers to asset owners. As we pass through the transition phase,
        we are focusing on consolidating
        and strengthening our asset base to emerge as world leaders in each of our verticals. Our entry into adjacent, high-growth businesses is similarly inspired. Our foray into renewables through Serentica Renewables marks our presence in two different energy worlds. Our significant thermal power lineup continues to witness high growth rates and healthy profits, with new assets still getting added.  This strong base in thermal generation provides us with a stable runway for the eventual energy transitioning of our businesses.
      </p>
      <p className='text-[#72bf44] font-semibold text-2xl my-4'>
        Embedding sustainability for business security
      </p>
      <p className='mb-2'>
        Accelerating climate change continues to be the wild card for future business planning. Vedanta has long embraced a sustainable growth path, following
        a well-entrenched, target-oriented sustainability strategy to mitigate
        our negative impacts and build adequate safeguards against risks and uncertainties. Our sustainability journey has seen us progress
        from Transforming Elements to Transforming for Good to now emerge as a Sustainability Leader. This year has been remarkable for the international acclaim that we have received as a sustainable producer across different fora. Vedanta Aluminium has been named the world’s most sustainable aluminium producer, Hindustan Zinc has been crowned as the world’s most sustainable zinc producer and Vedanta Ltd has emerged in the top 99th percentile at the S&P Global Corporate Sustainability Assessment awards for 2023. Leading the ranks from amongst 238 of our global industry peers is indeed an honour and a validation of our sustainability strategy.
      </p>
      <p className='mb-2'>
        Decarbonization is a critical priority for Vedanta. Given the energy intensive nature of our industry, our focus on decarbonization across, multiple levers, demonstrates our commitment to leading by example. This year we have achieved significant wins in GHG emissions intensity reduction with six of our BUs going beyond their annual targets. The convergence of process and technology improvements are proving effective, and we are well
        on target to reach our goal of 20% reduction in GHG emissions intensity by FY 2025. On the RE RTC capacity addition front, construction work is underway to add 835 MW of RE RTC across our businesses, which keeps us aligned with our FY 2030 goal of 2.5 GW of operational RE-RTC. Our production volumes will be significantly enhanced over successive years as we rapidly scale up across verticals, with an accompanying increase in emissions. However, as per our plans, our progressive RE-RTC additions
        will gradually offset the emissions increase while also transitioning the company towards clean energy use. In fact, aluminium, our most emissions intensive business which contributes more than 64% of our total GHG emissions, will be witnessing the largest deployment of RE-RTC facilities. This will be supported by accelerating switches to cleaner alternate fuels and the deployment of carbon-light process technologies. On reaching our FY 2030 clean energy targets we would have achieved GHG emissions reduction of 17 million tCO<sub>2</sub>e underlining the importance of striving for carbon- neutral growth and the huge difference that we can make.
      </p>
      <p className='text-[#0066ab] font-[500] text-2xl my-4'>
        <img src="./other/q1.svg" className='inline-block mt-[-1%] mr-2 w-[35px]' alt="" />
        Vedanta’s portfolio
        of seven transition metals and oil &
        gas underpins every industry that will contribute towards this growth potential getting realized –
        from infrastructure to agriculture, renewables to electronics, automobiles to semiconductors, we are there, and we will be there to an even greater degree.
        <img src="./other/q2.svg" className='inline-block mb-[-1%] ml-2 w-[27px]' alt="" />
      </p>
      <p className='mb-2'>
        Our business ethic of being a responsible user of scarce natural resources is reflected in our water
        and waste management performance too. This year, our water positivity
        ratio has increased to 0.71 as an outcome of several ongoing and recently introduced recycling, reuse and harvesting programmes. This year, we have also significantly improved our CDP Water rating from B to A- which is well above the international industry average rating of C. In terms of waste recycling, we fully utilized our fly ash production this year, along with a near 93% reuse of our HVLT waste, indicating the maturing of our waste-
        to-wealth programmes across the organization.
      </p>
      <p className='mb-2'>
        Our evolution as a sustainable business enhances both our cost advantage
        and the acceptability and demand
        for our products across the globe,
        as varying international legislations converge towards endorsing green manufacturing and value chains.
      </p>
      <p className='text-[#72bf44] font-semibold text-2xl my-4'>
        Championing social change, assuring employee welfare
      </p>
      <p className='mb-2'>
        Vedanta has always taken the safety of its people very seriously, putting
        in place the latest technologies and strong monitoring and review systems to ensure that our operations follow the best safety practices consistently. As a preventative mechanism, this year, a group-wide Critical Risk Management (CRM) programme was introduced, in conjunction with the rollout of our fully digital, integrated HSES platform Enablon. This is an enormous step ahead on our Safety Transformation journey. The CRM programme is founded on our past learnings that show that a majority of fatalities result from 13 critical risks. We are now using real-time technology to actively monitor these critical risks better. Enablon is integrated with more than 60 systems, including alignment with risk management software and produces 80+ dashboards, leading to more granular level understanding of health and safety anomalies and better data-based decision making. This is an industry-leading move that places us a step ahead of our peers, in India and abroad, and is in keeping with safety improvements recommended by ICMM.
      </p>
      <p>
        Building better lives and livelihoods
        for India’s marginalized people and contributing towards social upliftment, financial inclusion, and nation building, are aims that we have pursued with painstaking effort. The results have been overwhelmingly positive. Today, through our Nand Ghar, and other
        CSR initiatives, the lives of more than
        13.3 million women and children have been changed – with better access to basic healthcare, education, sanitation and hygiene, and the creation of employment opportunities too. In addition to the Nand Ghar model of outreach and social change, each of our BUs work with their host communities to address our social goals and by FY 2024 we would have made a difference in the lives of 50 million community members, across different geographies. Motivated by our successes, we have been steadily enhancing our social impact budgets and ambitions, and over the next five years the Group will be spending ₹ 50 billion in this area.
      </p>
      <p className='text-[#0066ab] font-[500] text-2xl my-4'>
        <img src="./other/q1.svg" className='inline-block mt-[-1%] mr-2 w-[35px]' alt="" />
        As we pass through the transition phase, we are focusing on consolidating and strengthening our asset base to emerge as world leaders in each of our verticals. Our entry into adjacent, high-growth businesses is similarly inspired.
        <img src="./other/q2.svg" className='inline-block mb-[-1%] ml-2 w-[27px]' alt="" />
      </p>
      <p className='mb-2'>
        We continue to push forward on our diversity and inclusion agenda, and this year we saw our workplaces becoming even more open and heterogeneous with 20% of our full-time-employees now being women. A larger number
        of women are now moving into decision-making roles, with our female employees rising through the ranks as their potential gets recognized. Currently, our leadership diversity score stands at 27%, which is significantly better
        than our domestic peers and compares favorably with international industry averages.
      </p>
      <p className='text-[#0066ab] font-[500] text-2xl my-4'>
        <img src="./other/q1.svg" className='inline-block mt-[-1%] mr-2 w-[35px]' alt="" />
        Our journey began 25 years back and has been one of constant evolution and adaptation, to deliver what is best for our planet, our customers and our stakeholders.
        <img src="./other/q2.svg" className='inline-block mb-[-1%] ml-2 w-[27px]' alt="" />
      </p>
      <p className='text-[#72bf44] font-semibold text-2xl my-4'>
        On a mission for successful decarbonization
      </p>
      <p className='mb-4'>
        The twenty first century will be a defining period in the history of the human civilization as the full impact of climate change gets unleashed. Many actions are already underway to deter and diminish that impact, and at Vedanta, we are fortunate
        to be active agents in the world’s decarbonization. We are fully conscious of the importance of our role and are striving to do the most, for the most – by growing our metals and minerals portfolio, harnessing
        the best technologies and offering
        the lowest cost options for the transition. Simultaneously, we are also participating in India’s economic and social resurgence and collaborating
        in creating both empowerment and employment. Our journey began
        25 years back and has been one of constant evolution and adaptation, to deliver what is best for our planet, our customers and our stakeholders. By doing so, we create considerable value for our stakeholders and keep Vedanta at the heart of the action.
      </p>
      <p className='mb-2'>Regards,</p>
      <p className='text-[#0066ab] font-[600] text-xl'>Anil Agarwal</p>
      <p className='font-[600] text-lg'>Chairman</p>

      <p className='mt-5 text-xs'>1 Forbes India: <Link to="https://www.forbesindia.com/article/explainers/top-10-largest-economies-in-the-world/86159/1#:~:text=The%20United%20States%20 of,magnitude%20of%20a%20nation’s%20economy." target='_blank'>https://www.forbesindia.com/article/explainers/top-10-largest-economies-in-the-world/86159/1#:~:text=The%20United%20States%20 of,magnitude%20of%20a%20nation’s%20economy.</Link>
      </p>
    </div>
  )
}

export default ChairmanMsg