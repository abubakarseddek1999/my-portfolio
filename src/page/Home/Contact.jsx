import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";

const Contact = () => {
    return (
        <div id="contact" className="my-20">
            <h2 className="text-2xl md:text-3xl font-bold text-center my-10">Contact me</h2>
            <div className="flex flex-col md:flex-row justify-center gap-10">
                <div className=" text-center">
                    <div className="text-3xl text-pink-600 flex justify-center"><IoCall /></div>
                    <p className="text-2xl font-bold">Call</p>
                    +8801728306504

                </div>

                <div className=" text-center">
                    <div className="text-3xl flex justify-center text-pink-600"><MdEmail /></div>
                    <p className="text-2xl font-bold">Email</p>
                    <p>abubakarseddek1999@gmail.com</p>

                </div>
                <div className=" text-center">
                    <div className="text-3xl text-center text-pink-600 flex justify-center"> <FaLocationDot /></div>
                    <p className="text-2xl font-bold">Location</p>
                    <p>Brahmanbaria,Bangladesh</p>

                </div>
            </div>

        </div>
    );
};

export default Contact;