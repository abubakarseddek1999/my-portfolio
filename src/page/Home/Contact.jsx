import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { useRef } from "react";

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_y9ie19r', 'template_06scc5b', form.current, 'LTu1g8i9IIhfTU9qv')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div id="contact" className="card max-w-[1300px] mx-auto mt-10">
            {/* section title */}

            <h2 className="text-center mb-5 text-3xl md:text-4xl lg:text-5xl font-bold">Contact me</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
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

            <div className="md:p-5 m-2 md:m-8 rounded-xl bg-slate-800  flex flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <img className="" src="https://i.postimg.cc/FFZQSYWj/12982910-5124556-removebg-preview.png" alt="" />
                    <div className="text-center">
                        <p className="text-xl md:text-4xl lg:text-5xl font-bold text-white">Abu bakar</p>
                        <p className="text-xl text-white font-bold">MERN Stack Developer</p>
                    </div>
                </div>
                <div className="w-full md:w-1/2">
                    <form ref={form} className="card-body" onSubmit={sendEmail}>
                        <div className="flex flex-col lg:flex-row justify-between gap-5">
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Name</span>
                                </label>
                                <input type="text" placeholder="Your name" name="from_name" className="input border input-bordered" required />
                            </div>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text font-bold text-white">Email</span>
                                </label>
                                <input type="email" placeholder="Your email" name="from_email" className="input input-bordered" required />
                            </div>

                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold text-white">Message</span>
                            </label>
                            {/* <textarea className="border rounded" name="message" /> */}
                            <textarea className="border rounded" name="" id="" cols="30" rows="10"></textarea>


                            <input className="btn mt-5 uppercase font-bold text-xl" type="submit" value="Send" />
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;