// icons
import {FaCss3, FaHtml5, FaJs, FaNodeJs, FaReact,} from "react-icons/fa";
import {SiExpress, SiFramer, SiNestjs, SiNextdotjs, SiTailwindcss, SiPython, SiMysql, SiMongodb} from "react-icons/si";

import React, {useState} from "react";
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";
import {motion} from "framer-motion";
import {fadeIn} from "../../variants";


//  data
const aboutData = [
    {
        title: 'skills',
        info: [
            {
                title: 'Font-End Development',
                icons: [
                    <FaHtml5 key="html5"/>,
                    <FaCss3 key="css3"/>,
                    <FaJs key="javascript"/>,
                    <FaReact key="react"/>,
                    <SiNextdotjs key="nextjs"/>,
                    <SiFramer key="framer"/>,
                    <SiTailwindcss key="tailwind"/>,
                ],
            },
            {
                title: 'Back-End Development',
                icons: [
                    <FaNodeJs key="nodeJs"/>,
                    <SiExpress key="express"/>,
                    <SiNestjs key="nestjs"/>,
                    <SiPython key="python"/>,
                    <SiMysql key="mysql"/>,
                    <SiMongodb key="mongodb\"/>,
                ],
            }

        ],
    },

    {
        title: 'experience',
        info: [
            {
                title: 'Web Designer - Paginas Amarelas',
                stage: '12/2022 – 08/2023',
            },
            {
                title: 'Full Stack Developer - Sintaxy',
                stage: '2023',
            },
        ],
    },
   /* {
        title: 'credentials',
        info: [
            {
                title: 'Web Development - ABC University, LA, CA',
                stage: '2011',
            },
            {
                title: 'Computer Science Diploma - AV Technical Institute',
                stage: '2009',
            },
            {
                title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
                stage: '2006',
            },
        ],
    },*/
];

const About = () => {
    const [index, setIndex] = useState(0);
    return <div className='h-full bg-primary/30 py-32 text-center xl:text-left'>
        <Circles/>
        <motion.div variants={fadeIn('right', 0.2)} initial="hidden" animate="show" exit="hidden"
                    className='hidden xl:flex absolute bottom-0 -left-[370px]'>
            <Avatar/>
        </motion.div>
        <div className='container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6'>

            <div className='flex-1 flex flex-col justify-center md:mb-14 md:-mt-12'>
                <motion.h2
                    variants={fadeIn('right', 0.2)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                    className='h2'
                >Captivating <span className='text-accent'>stories</span> birth magnificent designs.
                </motion.h2>
                <motion.p
                    className='max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0'
                    variants={fadeIn('right', 0.4)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    My commitment to efficiency, coupled with a keen focus on user-centric design principles, ensures
                    the delivery of seamless digital experiences that meet and exceed client expectations
                </motion.p>
                {/* <motion.div
                    className='hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8'
                    variants={fadeIn('right', 0.6)}
                    initial="hidden"
                    animate="show"
                    exit="hidden"
                >
                    <div className='flex flex-1 xl:gap-x-6'>
                        <div
                            className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                            <div className='text-xl xl:text-4xl font-extrabold text-accent mb-2'>
                                <ContUp start={0} end={10} duration={5}/> +
                            </div>
                            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Years of
                                experience
                            </div>
                        </div>

                        <div
                            className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                            <div className='text-xl xl:text-4xl font-extrabold text-accent mb-2'>
                                <ContUp start={0} end={250} duration={5}/> +
                            </div>
                            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Satisfied
                                Clients
                            </div>
                        </div>

                        <div
                            className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                            <div className='text-xl xl:text-4xl font-extrabold text-accent mb-2'>
                                <ContUp start={0} end={650} duration={5}/> +
                            </div>
                            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Finished
                                Projects
                            </div>
                        </div>

                        <div
                            className='relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0'>
                            <div className='text-xl xl:text-4xl font-extrabold text-accent mb-2'>
                                <ContUp start={0} end={8} duration={5}/> +
                            </div>
                            <div className='text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]'>Winning
                                Awards
                            </div>
                        </div>
                    </div>
                </motion.div>*/}
            </div>

            <motion.div
                variants={fadeIn('left', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                className='flex flex-col w-full xl:max-w-[48%] h-[480px]'
            >
                <div className='flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4'>
                    {aboutData.map((item, itemIndex) => {
                        return <div
                            key={itemIndex}
                            className={`${index === itemIndex && 'text-accent after:w-[100%] after:bg-[#F13024] after:transition-all after:duration-300'} cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0 `}
                            onClick={() => setIndex(itemIndex)}
                        >
                            {item.title}
                        </div>;
                    })}
                </div>
                <div className='py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start'>
                    {aboutData[index].info.map((item, itemIndex) => {
                        return <div key={itemIndex}
                                    className='flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60'>
                            <div className='font-light mb-2 md:mb-0'>{item.title}</div>
                            <div className='hidden md:flex'>-</div>
                            <div>{item.stage}</div>
                            <div className='flex gap-x-4'>
                                {item.icons?.map((icon, index) => {
                                    return <div key={index} className='text-2xl text-white'>{icon}</div>
                                })}
                            </div>
                        </div>
                    })}
                </div>
            </motion.div>
        </div>
    </div>;
};

export default About;
