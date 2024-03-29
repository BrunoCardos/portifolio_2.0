import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper";
import Image from "next/image";
import {FaQuoteLeft} from "react-icons/fa";

// testimonial data
const testimonialData = [
    {
        image: '/t-avt-3.jpg',
        name: 'Stefan Vitoria',
        position: 'Full Stack Developer',
        message:
            'I had the pleasure of working with Bruno Cardoso on a recent project, and I\'m genuinely impressed with ' +
            'his skills and dedication. He demonstrated a deep understanding of both front-end and back-end technologies.' +
            ' What set him apart was his ability to translate complex requirements into elegant and efficient code.',
    },
    {
        image: '/t-avt-1.png',
        name: 'Anne Smith',
        position: 'Customer',
        message:
            'In terms of collaboration, this fullstack developer was a true team player. He actively participated in discussions, shared valuable insights, and consistently met project deadlines. His communication skills were excellent, ensuring that everyone on the team was on the same page throughout the development process',
    },
    {
        image: '/t-avt-2.png',
        name: 'Jane Doe',
        position: 'Customer',
        message:
            'I highly recommend this fullstack developer for his technical expertise, professionalism, and collaborative approach. Working with him was a positive experience, and I would eagerly engage in future projects together.',
    },
];

const TestimonialSlider = () => {
    return <Swiper
        navigation={true}
        pagination={{
            clickable: true
        }}
        modules={[Navigation, Pagination]}
        className='h-[400px]'
    >
        {
            testimonialData.map((person, index) => {
                return (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center md:flex-row gap-x-8 h-full px-16">
                            {/* avatar, name, position */}
                            <div className="w-full max-w-[300px] flex flex-col xl:justify-center items-center relative
                            mx-auto xl:mx-0">
                                <div className="flex flex-col justify-center text-center">
                                    {/* avatar */}
                                    <div className="mb-2 mx-auto">
                                        <Image src={person.image} width={100} height={100} alt=""
                                               className="rounded-full"/>
                                    </div>
                                    {/* name */}
                                    <div className="text-lg">{person.name}</div>
                                    {/* position */}
                                    <div
                                        className="text-[12px] uppercase font-extralight tracking-widest">{person.position}</div>
                                </div>
                            </div>
                            {/* quote & message */}
                            <div className="flex-1 flex flex-col justify-center before:w-[1px]
                            xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[200px] relative xl:pl-20">
                                {/* quote icon*/}
                                <div className="mb-4">
                                    <FaQuoteLeft className="text-4xl xl:text-6xl text-white/20 mx-auto md:mx-0"/>
                                </div>
                                {/* message */}
                                <div className="xl:text-lg text-center md:text-left">{person.message}</div>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })
        }
    </Swiper>;
};

export default TestimonialSlider;

