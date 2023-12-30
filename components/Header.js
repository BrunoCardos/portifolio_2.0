import Link from 'next/link';
import Socials from '../components/Socials';

const Header = () => {
    return <header className='absolute z-9 w-full flex items-center px-16 xl:px-16 xl:h-[90px]'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-y-2 md:gap-y-6 py-8'>
                <Link href={'/'}>
                    <div className="text-[20px] font-bold md:text-[35px]">bruno <span className="font-light">cardoso</span><span
                        className="text-accent">.</span></div>
                </Link>
                <Socials/>

            </div>
        </div>
    </header>;
};

export default Header;
