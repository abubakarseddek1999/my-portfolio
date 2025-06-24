/* eslint-disable react/no-unescaped-entities */

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Navigation, Pagination, A11y } from 'swiper/modules';
// import SwiperNavButton from "./SwiperNavButton/SwiperNavButton";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdKeyboardArrowRight } from 'react-icons/md';
import { useEffect } from 'react';

const Certificate = () => {

    useEffect(() => {
        const handleCloseModalOutside = (event) => {
            const modals = document.querySelectorAll('.modal');
            modals.forEach(modal => {
                if (event.target === modal) {
                    modal.close(); // Close the modal
                }
            });
        };

        window.addEventListener('click', handleCloseModalOutside);

        return () => {
            window.removeEventListener('click', handleCloseModalOutside);
        };
    }, []);

    const certificates = [

        {
            id: 1,
            img: "https://i.postimg.cc/N0jjZM7R/certificate-1-1.png",
            imageName: "certificate-1-1.png",
            courseName: "MERN Stack Development",
            organization: "Programming Hero",
            credentialId: "WEB8-2772",
            skills: "MERN Stack Development",
        },

        {
            id: 2,
            img: "https://i.postimg.cc/gkh4QyYb/Communication-Hacks.jpg",
            imageName: "Communication-Hacks.jpg",
            courseName: "Communication Hacks",
            organization: "10 Minute School",
            credentialId: "661277056bfdc",
            skills: "Communication Hacks",
        },
        {
            id: 3,
            img: "https://i.postimg.cc/9MdRhfNb/CV-writing.jpg",
            imageName: "CV-writing.jpg",
            courseName: "CV Writing & Interview",
            organization: "10 Minute School",
            credentialId: "6612e708bf017",
            skills: "CV Writing & Interview",
        },
        {
            id: 4,
            img: "https://i.postimg.cc/fWfgRjG7/Presentation-and-public-speeking.jpg",
            imageName: "Presentation-and-public-speeking.jpg",
            courseName: "Presentation & Public Speaking",
            organization: "10 Minute School",
            credentialId: "65d8929531534",
            skills: "Presentation & Public Speaking",
        }
    ];


    return (
        <div className="max-w-[1300px] mx-auto md:py-32">
            <div className=" flex flex-col lg:flex-row max-w-7xl m-5 gap-10 ">

                <div>
                    <h1 style={{ letterSpacing: '0.2em' }} className='text-white text-2xl xs:text-2xl semi-sm:text-3xl md:text-4xl font-poppins font-bold mb-3'>Check Out</h1>
                    <h1 className='text-white xs:text-2xl semi-sm:text-3xl md:text-4xl font-poppins font-bold mb-7'>My Certificate</h1>
                    <p className='text-white font-lora text-base md:w-96'>I have done programmimg courses to increase my programming skills and i'm also done communication and presentation courses,i am sharing few of them</p>

                    <div className='flex items-center mt-10'>
                        <button className="xs:px-3 p-2 xs:py-1 sm:px-5 sm:py-2 semi-sm:px-7 semi-sm:py-3 bg-[#f343a4] flex items-center font-lora  text-white hover:bg-[#070707] hover:text-white font-medium gap-1 rounded-lg" style={{ whiteSpace: "nowrap" }}><span className="text-base">Know More</span> <span><MdKeyboardArrowRight className="text-base" /></span></button>
                    </div>
                </div>

                <div className="lg:w-3/5 w-full  md:px-2 lg:px-0">

                    <Swiper
                        modules={[Navigation, Pagination, A11y]}
                        spaceBetween={30}
                        slidesPerView="3"
                        className=" w-full"
                        speed={2000}
                        breakpoints={{
                            // when window width is >= 1024px
                            1024: {
                                slidesPerView: 3,
                            },
                            // when window width is >= 768px
                            768: {
                                slidesPerView: 3,
                            },
                            // when window width is >= 425px
                            425: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 375px
                            375: {
                                slidesPerView: 1,
                            },
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 1,
                            },
                        }}
                    >
                        {/* 1st Certificate */}
                        {certificates.map((certificate) => (

                            <SwiperSlide key={certificate.id} onClick={() => document.getElementById(`my_modal_${certificate.id}`).showModal()}>
                                <img className='border rounded-md overflow-hidden cursor-pointer object-cover object-center h-[400px]  md:h-[200px] lg:h-[200px]' src={certificate?.img} alt="" />

                                <h3 className='text-white font-lora font-semibold text-lg mt-4 text-center cursor-pointer'>{certificate?.courseName}</h3>
                                <h5 className='text-white font-lora font-semibold text-base mt-4 text-center cursor-pointer'>{certificate?.organization}</h5>
                                <dialog id={`my_modal_${certificate.id}`} className="modal">

                                    <div className="modal-box w-11/12 max-w-5xl modal-container">

                                        <div className="">
                                            <h3 className="font-bold text-lg">Certifate Details</h3>
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn btn-sm btn-circle border border-black btn-ghost absolute right-6 top-5">✕</button>
                                            </form>
                                        </div>
                                        <hr className="mt-3 mb-3" />
                                        <div>
                                            <div>
                                                {/* <img className='rounded-md object-cover' src={certificate?.img} alt="" /> */}
                                            </div>
                                            <hr className="mt-1 mb-5" />
                                            <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 ml-2 lg:ml-4'><span className='font-poppins font-bold'>Course Name :</span> {certificate?.courseName}</h1>
                                            <h1 className='text-base sm:text-lg semi-sm:text-xl md:text-2xl font-lora font-medium mt-2 ml-2 lg:ml-4'><span className='font-poppins font-bold'>Issuing organization :</span> {certificate?.organization}</h1>
                                            <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 ml-2 lg:ml-4'><span className='font-poppins font-bold'>Credential ID :</span> {certificate?.credentialId}</h4>
                                            <h4 className='text-base semi-sm:text-lg md:text-xl font-lora font-medium mt-2 ml-2 lg:ml-4'><span className='font-poppins font-bold'>Skills :</span> {certificate?.skills}</h4>
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