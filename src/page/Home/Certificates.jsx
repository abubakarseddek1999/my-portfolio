/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { MdKeyboardArrowRight } from 'react-icons/md';
import { Award } from 'lucide-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Certificate = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    useEffect(() => {
        const handleCloseModalOutside = (event) => {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (event.target === modal) {
                    (modal).close();
                }
            });
        };

        window.addEventListener('click', handleCloseModalOutside);
        return () => window.removeEventListener('click', handleCloseModalOutside);
    }, []);

    const certificates = [
        {
            id: 1,
            img: "https://i.postimg.cc/N0jjZM7R/certificate-1-1.png",
            courseName: "MERN Stack Development",
            organization: "Programming Hero",
            credentialId: "WEB8-2772",
            skills: "MERN Stack Development",
        },
        {
            id: 2,
            img: "https://i.postimg.cc/gkh4QyYb/Communication-Hacks.jpg",
            courseName: "Communication Hacks",
            organization: "10 Minute School",
            credentialId: "661277056bfdc",
            skills: "Communication Hacks",
        },
        {
            id: 3,
            img: "https://i.postimg.cc/9MdRhfNb/CV-writing.jpg",
            courseName: "CV Writing & Interview",
            organization: "10 Minute School",
            credentialId: "6612e708bf017",
            skills: "CV Writing & Interview",
        },
        {
            id: 4,
            img: "https://i.postimg.cc/fWfgRjG7/Presentation-and-public-speeking.jpg",
            courseName: "Presentation & Public Speaking",
            organization: "10 Minute School",
            credentialId: "65d8929531534",
            skills: "Presentation & Public Speaking",
        },
    ];

    return (
        <div className="max-w-[1300px] mx-auto md:py-32">
            <div className="flex flex-col lg:flex-row max-w-7xl m-5 gap-10">
                <div>
                    <div className='flex items-center mb-2'>
                        <Award className="w-4 h-4 mr-2 text-amber-500" />
                        Certifications
                    </div>

                    <h1 className='text-2xl semi-sm:text-3xl md:text-4xl font-poppins font-bold'>Check Out</h1>
                    <h1 className='semi-sm:text-3xl md:text-4xl font-poppins font-bold mb-7'>My Certificate</h1>
                    <p className='font-lora text-base md:w-96'>
                        I have done programming courses to increase my skills and also completed communication and presentation training. I'm sharing a few here.
                    </p>

                    <div className='flex items-center mt-10'>
                        <button className="xs:px-3 p-2 xs:py-1 sm:px-5 sm:py-2 semi-sm:px-7 semi-sm:py-3 bg-[#f343a4] flex items-center font-lora text-white hover:bg-[#070707] font-medium gap-1 rounded-lg" style={{ whiteSpace: "nowrap" }}>
                            <span className="text-base">Know More</span>
                            <MdKeyboardArrowRight className="text-base" />
                        </button>
                    </div>
                </div>

                <div className="lg:w-3/5 w-full md:px-2 lg:px-0 relative">
                    <div className="absolute -left-14 top-1/2 -translate-y-1/2 z-10">
                        <button
                            ref={prevRef}
                            className="h-12 w-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="absolute -right-14 top-1/2 -translate-y-1/2 z-10">
                        <button
                            ref={nextRef}
                            className="h-12 w-12 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        onInit={(swiper) => {
                            // @ts-ignore
                            swiper.params.navigation.prevEl = prevRef.current;
                            // @ts-ignore
                            swiper.params.navigation.nextEl = nextRef.current;
                            swiper.navigation.init();
                            swiper.navigation.update();
                        }}
                        pagination={{
                            clickable: true,
                            bulletClass: "swiper-pagination-bullet !bg-blue-600",
                            bulletActiveClass: "swiper-pagination-bullet-active !bg-blue-600",
                        }}
                        spaceBetween={30}
                        slidesPerView={1}
                        breakpoints={{
                            1024: { slidesPerView: 3 },
                            768: { slidesPerView: 3 },
                            425: { slidesPerView: 1 },
                            375: { slidesPerView: 1 },
                            320: { slidesPerView: 1 },
                        }}
                        className="w-full certificate-swiper"
                        speed={800}
                    >
                        {certificates.map((certificate) => (
                            <SwiperSlide key={certificate.id} onClick={() => document.getElementById(`my_modal_${certificate.id}`)?.showModal()}>
                                <img className='border rounded-md overflow-hidden cursor-pointer object-cover object-center h-[400px] md:h-[200px] lg:h-[200px]' src={certificate.img} alt={certificate.courseName} />
                                <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>{certificate.courseName}</h3>
                                <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>{certificate.organization}</h5>

                                <dialog id={`my_modal_${certificate.id}`} className="modal">
                                    <div className="modal-box w-11/12 max-w-5xl modal-container">
                                        <div className="relative">
                                            <h3 className="font-bold text-lg">Certificate Details</h3>
                                            <form method="dialog">
                                                <button className="btn btn-sm btn-circle border border-black btn-ghost absolute right-6 top-5">✕</button>
                                            </form>
                                        </div>
                                        <hr className="mt-3 mb-3" />
                                        <div>
                                            <h1 className='text-base md:text-2xl font-lora font-medium mt-2 ml-2 lg:ml-4'><span className='font-poppins font-bold'>Course Name :</span> {certificate.courseName}</h1>
                                            <h1 className='text-base md:text-2xl font-lora font-medium mt-2 ml-2 lg:ml-4'><span className='font-poppins font-bold'>Issuing organization :</span> {certificate.organization}</h1>
                                            <h4 className='text-base md:text-xl font-lora font-medium mt-2 ml-2 lg:ml-4'><span className='font-poppins font-bold'>Credential ID :</span> {certificate.credentialId}</h4>
                                            <h4 className='text-base md:text-xl font-lora font-medium mt-2 ml-2 lg:ml-4'><span className='font-poppins font-bold'>Skills :</span> {certificate.skills}</h4>
                                        </div>
                                        <hr className="mt-5 mb-2" />
                                    </div>
                                </dialog>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Certificate;
