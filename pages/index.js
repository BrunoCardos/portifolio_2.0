import ProjectsBtn from "../components/ProjectsBtn";
import {motion} from "framer-motion";
import {fadeIn} from "../variants";
import {Cursor, useTypewriter} from "react-simple-typewriter";

const Home = () => {

    const [text] = useTypewriter({
        words: [
            'Interactive Realities.',
            'Stunning Websites.',
            'Digital Experiences.',
            'Creative Solutions.'],
        loop: {},
        typeSpeed: 140,
        deleteSpeed: 50,
    });


    return (
        <div className='bg-primary/60 h-full text-center'>
            <div className='w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10'>
                <div
                    className='text-center md:text-center flex flex-col justify-center xl:pt-40 h-full container mx-auto pt-5'>
                    <motion.h1 variants={fadeIn('down', 0.2)} initial="hidden" animate="show" exit="hidden"
                               className='h1 md:mb-30'>
                        Code, Creativity, and Beyond. <br/> Transforming Ideas Into:<br/>
                        <span className='text-accent'>{text}<Cursor cursorStyle='|' cursorColor='#ccc'/></span>
                    </motion.h1>
                    <motion.p variants={fadeIn('up', 0.3)} initial="hidden" animate="show" exit="hidden"
                              className='  mx-auto xl:mx-0 mb-10 xl:mb-16 md:mt-10 text-[18px]'>
                        Versatile Full-Stack Developer Proficient in Front-End and Back-End Technologies, Dedicated to
                        Delivering Robust Web Applications with Efficiency and a Strong Emphasis on User-Centric Design.
                    </motion.p>
                    <div className='flex justify-center xl:hidden relative'>
                        <ProjectsBtn/>
                    </div>
                    <motion.div variants={fadeIn('up', 0.4)} initial="hidden" animate="show" exit="hidden"
                                className='hidden xl:flex justify-center md:mt-10'>
                        <ProjectsBtn/>
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default Home;
