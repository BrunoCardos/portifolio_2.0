import Link from "next/link";
import {RiFacebookFill, RiInstagramLine, RiLinkedinBoxFill} from "react-icons/ri";
import {IoLogoGithub} from "react-icons/io";

const Socials = () => {
    return <div className='flex items-center gap-x-5 text-[25px] md:text-lg z-80'>
        <Link href={'https://www.linkedin.com/in/bruno-cardoso-481b81211/'}
              className='hover:text-accent transition-all duration-300'>
            <RiLinkedinBoxFill/>
        </Link>
        <Link href={'https://www.instagram.com/bruno.m.cardoso/'} className='hover:text-accent transition-all duration-300'>
            <RiInstagramLine/>
        </Link>
        <Link href={''} className='hover:text-accent transition-all duration-300'>
            <RiFacebookFill/>
        </Link>
        <Link href={'https://github.com/BrunoCardos'} className='hover:text-accent transition-all duration-300'>
            <IoLogoGithub/>
        </Link>
    </div>;
};

export default Socials;
