import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const NonExeDirMsg = () => {
    return (
        <div className='marginal'>
            <motion.h1 className='md:text-6xl text-center pb-3 font-semibold bg-gradient-to-l from-[#0c61c8] to-[#06a499] w-fit m-auto text-transparent bg-clip-text'
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                Non-Executive Director's Message</motion.h1>
            <div className='md:flex md:items-center md:justify-between mb-[2%]'>
                <img src="./other/non-exe-dir.png" className='md:w-[59%]' alt="" />
                <div className='md:w-[39%] mt-4 md:mt-0'>
                    <p className='text-lg font-[600] text-[#0066ab]'>
                        At Vedanta, we are driven by a relentless pursuit of progress and innovation. Our aspirations are limitless, always reaching beyond the present towards a future filled with greater possibilities and achievements. We believe in continuously advancing, evolving, and setting new benchmarks in
                        everything we do.
                    </p>
                </div>
            </div>
            <p className='my-4'>
                As we strive to explore infinite possibilities, we remain deeply aware that we are both the beneficiaries
                and stewards of the resources we utilize. While business depends on nature, nature does not depend on business. In the coming decade, Vedanta will undergo a transformation, becoming an organization that exceeds its current potential and reaches
                new heights of excellence. As the Indian economy expands, so too will Vedanta, extending our reach across the globe with innovative products and expanded operations. However, this growth will be guided by a new vision—one that diverges from the past by forging fresh pathways and connections,
                all while aligning with the imperatives of a climate- conscious world undergoing transformation.
            </p>
            <p className='text-[#72bf44] font-semibold text-2xl my-4'>
                The cleaner way to grow
            </p>
            <p className='mb-2'>
                Decarbonization and Net-Zero growth are central to our strategic roadmap over the mid- to long-term
                as we realign our businesses for a carbon-neutral future. There is no shying away or going slow on the Net Zero journey as climate change continues to accelerate. We have, in fact, stepped up the pace and are working aggressively across our three primary decarbonization levers of transitioning to RE-RTC, fuel switch and reduction in emissions intensity to keep our emissions in check. Our businesses have achieved significant energy savings by leveraging advanced technologies, reimagining processes,
                and meticulously monitoring for inefficiencies and excesses. In doing so, we have successfully reduced GHG emissions intensity by an impressive 12% from the 2021 baseline, achieving a rate of 5.66 TCO2e/ Mt Metal. Additionally, six of our business units have surpassed their annual targets.
            </p>
            <p className='mb-2'>
                In preparation of our GHG emissions peaking till FY 2027 due to ongoing expansions in our aluminum, steel businesses and at HZL, VZI and FACOR,
                we have been gradually increasing our RE-RTC capabilities. A total of 788 MW in Power Delivery Agreements (PDAs) were signed this year, expanding our renewable energy portfolio to 835 MW, which
                is nearly one-third of our 2.5 GW target for 2030.
            </p>
            <p className='mb-2'>
                Switching to greener biofuels is also underway at a steady pace and this year we used 66,551 tonnes of biomass vis-à-vis the FY 2025 target of 1,25,000 tonnes of biomass consumption.
            </p>
            <p className='mb-2'>
                Strong backward and forward integration, extending from mine to metal and beyond, particularly in our flagship metal businesses, has indirectly benefited from the cost advantages provided by our traditional fossil
                fuel-based assets. We continue to acquire thermal assets with remaining productive life to consolidate our cost leadership, while gradually transitioning to clean energy sources such as RE- RTC, CCUS, and hydrogen fuel over the coming years. This strategy will protect us from transition risks until the lower operating costs of clean energy begin to positively impact our bottom line.
            </p>
            <p className='text-[#72bf44] font-semibold text-2xl my-4'>
                Emerging talent pools infuse Vedanta’s workplaces with diversity and distinctiveness, enriching our organizational culture
            </p>
            <p className='mb-2'>
                We take a multidimensional approach to diversity while staying true to our fundamental goals of recruiting based on merit and without any discrimination. As an intergenerational company that welcomes more than 1500 young recruits from campuses every year, it is important that we remain relevant and contemporary. The future will embrace very diverse talent pools, including those talent communities that have traditionally been ignored. This year, we have introduced several progressive talent policies to enhance diversity.
                We are actively working to include more women, transgender individuals, LGBTQIA+ community, and persons with disabilities, as well as geographic, cultural, and linguistic minorities from across regions to better tap into previously unexplored resources. We are also making work conditions more conducive and accommodating special needs communities by building ramps and other regular use infrastructure, progressively, across all our facilities. This year, we recruited 36 LGBTQI+ individuals slowly widening the base of our workforce demographics. Reflecting social realignments, such inclusivity and diversity will ensure that Vedanta remains sustainable and well-positioned to channel its productive energies toward organizational progress.
            </p>
            <div className='my-4 border-b-2 border-[#72bf44] pb-2 w-fit'>
                <h1 className='text-[#72bf44] font-semibold text-4xl'>36</h1>
                <p>
                    LGBTQIA+ candidates, slowly <br /> widening the base of our <br /> <span className='w-[25px] border-b-4 border-[#0066ab] pb-2'>work</span>force demographics
                </p>
            </div>
            <p className='mb-2'>
                We are dedicated to achieving a workforce that is 30% women by 2030. To realize this goal, we have been actively recruiting women across all levels, with
                a significant focus on bringing in young women at the entry level. This year,
                our campus recruits has 40% gender diversity. We have also instituted other changes to ensure that women gain a prominent place in our workforce. As
                a first for the manufacturing sector in India, we have created STEM-oriented roles, shopfloor and mining-focused roles where we are recruiting women. This achievement is now within reach thanks to a profound shift in societal and employee attitudes, where nothing is deemed impossible. Further, the use of modern technology has also eased certain physical barriers that earlier existed, and Vedanta has been at the forefront of adopting such technologies to ensure a modern and safe workplace and a level playing field. Hindustan Zinc recently launched India’s first All Women Mine Rescue Team, comprising of 7 women who underwent rigorous training to make themselves skilled on the job.
            </p>
            <p className='mb-2'>
                We have always believed in organic leadership and are taking the same route to develop more women leaders across the ranks. Our “Emerging Women Leaders Programme” exclusively fosters high-potential women in mid and senior roles to take on greater responsibilities and reach professional milestones. This year, more than 70+ high-potential women and programme alumni, were promoted to higher positions of responsibility, across various business units. Further, our unique innovation-ideation-stewardship platform V-Desire saw 700 leaders from across geographies, functions and roles come forward with projects that they were passionate about, of which 117 leaders were finally selected, out of which 30% were women. Through initiatives like these, we are helping
                our women employees get involved in every aspect of business, and catalyzing their talent, skill and passion to achieve greater heights for themselves and the organization.
            </p>
            <p className='mb-2'>
                Our enabling policies are helping us create a work environment that is supportive of the new age woman. This year we launched our game- changing parenthood policy, which includes a 12-month sabbatical for new mothers. The policy provides options for working from home or flexible hours after maternity leave. It also supports career growth during maternity leave, thus transforming the maternity
                work break from an interruption into
                a career phase, with continuity. We
                are also offering job security to those new mothers who want to take some time off after childbirth. In these
                ways, we are demonstrating to our women employees that our support is unwavering, and we are committed to empowering their success.
            </p>
            <p className='mb-2'>
                Our pathbreaking initiatives in favour of equity and diversity in an industry that has been fairly tradition-ridden, have been recognized and applauded. This year, once again, Kincentric recognized us as a Best Employer India 2023, while a clutch of our business units – BALCO, ESL, TSPL, HZL, Cairn, and Sesa Goa, as well as the Vedanta Group, were feted as the Top 10 Happiest Workplaces in India by Economic Times HR World, from among over 100 nominations.
            </p>
            <p className='text-[#72bf44] font-semibold text-2xl my-4'>
                Preparing talent that will lead us into the future
            </p>
            <p className='mb-2'>
                At Vedanta, our explosive growth has been internally driven. Today, as we look to the exciting future ahead, we rely on our many leadership and talent development programmes to mould and shape those who will lead us into that future.
            </p>
            <p className='mb-2'>
                Building and maintaining a strong leadership pipeline is critical for our sustained growth and the Vedanta Leadership Development Programme (VLDP) is one of our most effective leadership incubation mechanisms and under its aegis top talent from leading technical and business management institutions are regularly trained and fostered. Other programmes like
                the Comprehensive Development Programme helps to provide multi- functional exposure, with mentorship from CXOs and fast-track growth opportunities. The elite Chairman’s Young Leader Programme is offered
                to a very gifted and exclusive few who are selected from VLDP participants to be directly mentored by the Chairman for a short period. Through a range
                of innovative talent management initiatives, we aim to address the challenges of being a rapidly expanding global corporation. Our goal is to stay dynamic, vigilant, and well-prepared to capitalize on emerging opportunities while advancing sustainably.
            </p>
            <p className='text-[#72bf44] font-semibold text-2xl my-4'>
                Preserving the preserver:
                Strengthening Our Biodiversity Management
                Strategies
            </p>
            <p className='mb-2'>
                The impact of our growth on biodiversity is undeniable and we are taking pragmatic, science-based steps to minimize, mitigate and restore Nature in harmony with the principles of No Net Loss. Our mitigation approach follows the mitigation hierarchy for prioritization of activities. We utilize tools like IBAT or STAR to expand our risk assessment and control zones well beyond our site boundaries and cover all ecologically sensitive areas like bird areas, key biodiversity hot spots that maybe in proximity to our sites. Biodiversity screening has been completed for 100% of our 52 operational assets and we have successfully established a biodiversity baseline, with the processes being in alignment with the most recent biodiversity and nature-related frameworks like Taskforce on Nature- related Financial Disclosures (TNFD). Consequently, our biodiversity impact assessments concur with global policy goals and common governmental priorities across the world, while also integrating considerations of biodiversity, climate change and human rights impacts. This effort is enhancing the robustness, resilience, and comprehensiveness of our biodiversity risk management, conservation, and restoration initiatives.
            </p>
            <p className='mb-2'>
                Human ingenuity has enabled us to thrive amidst the toughest challenges, and the climate crisis represents one
                of the most formidable tests humanity has ever faced. Future businesses
                must adhere to a carbon-neutral
                growth trajectory while meticulously preserving natural ecosystems. For the first time in industrial history, we must deeply understand the interconnected, symbiotic processes of Nature to ensure our survival and the continuity of the modern world. Social change is another critical factor we must navigate to
                grow and prosper. Embracing open and adaptable social systems is essential for progress Vedanta’s three strategic pillars of Transforming Communities, Transforming the Planet and Transforming the Workplace reflects our collective mindset of adaptability in the face of unpredictability and change. Our clear emphasis on carbon-neutral growth, responsible business practices, participative social engagement
                and dynamic workplaces is evident in the long-terms goals that we are systematically working on. In this way, together we are helping to transform Vedanta towards a future of continuous growth.
            </p>
            <p className='text-[#0066ab] font-[500] text-2xl my-4'>
                <img src="./other/q1.svg" className='inline-block mt-[-1%] mr-2 w-[35px]' alt="" />
                Biodiversity screening has been completed for 100% of our 52 operational assets and we have successfully established a biodiversity baseline.
                <img src="./other/q2.svg" className='inline-block mb-[-1%] ml-2 w-[27px]' alt="" />
            </p>
            <p className='mb-2'>
                To foster a more conscientious organization that prioritizes conservation, we are continuously engaging employees through awareness initiatives on various sustainability issues and implementing modern, well-defined, and comprehensive policies, guidelines, and processes
            </p>
            <p className='mb-2'>Regards,</p>
            <p className='text-[#0066ab] font-[600] text-xl'>Priya Agarwal Hebbar</p>
            <p className='font-[600] text-lg'>Non-Executive Director</p>

            <p className='mt-5 text-xs'>2 Priya Agarwal Hebbar in <Link to="https://www.fortuneindia.com/long-reads/vedanta-swears-by-women-power/116282" target='_blank'>https://www.fortuneindia.com/long-reads/vedanta-swears-by-women-power/116282</Link>
            </p>
        </div>
    )
}

export default NonExeDirMsg