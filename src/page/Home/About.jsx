import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdDownloadForOffline } from "react-icons/md";

const About = () => {
    return (
        <div id="about" className="my-20">

            <div>

                <div>
                    <div className="flex justify-center items-center">
                        <div className="p-2">

                            <p className="text-center text-3xl font-bold"> I am <span className="text-3xl text-center text-fuchsia-600 font-bold"> Web developer</span></p>
                            <p>
                                Experienced with all stages of the development cycle for dynamic web projects. <br /> Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, jQuery, Angular JS. <br />  I have the experience of creating a few website.
                            </p>

                        </div>

                    </div>

                    <div className="flex p-5">
                        <div className="flex flex-col md:flex-row gap-10 ">

                            <div>
                                <div className="flex gap-16 md:gap-5 ">
                                    <div className="md:w-[300px]">
                                        <p>
                                            <span className="text-2xl font-bold">Country:</span> <br />
                                            Bangladesh
                                            <div className="divider divider-secondary "></div>
                                        </p>
                                    </div>
                                    <div className="md:w-[300px]">
                                        <p>
                                            <span className="text-2xl font-bold">City:</span> <br />
                                            Brahmanbaria
                                            <div className="divider divider-secondary "></div>
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-5">
                                    <div className="md:w-[300px]">
                                        <p>
                                            <span className="text-2xl font-bold">Phone:</span> <br />
                                            +8801728306504
                                        </p>
                                    </div>

                                    <div className="md:w-[300px]">
                                        <p>
                                            <span className="text-2xl font-bold">Email:</span> <br />
                                            <span className="text-sm">abubakarseddek1999@gmail.com</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-col justify-center items-center">
                                <div className="flex gap-8 justify-center items-center ">
                                    <Link to="https://www.facebook.com/abubakarwell">
                                        <FaFacebook className="text-3xl bg-pink-500 rounded-full"></FaFacebook>
                                    </Link>
                                    <Link to="https://github.com/abubakarseddek1999">
                                        <FaGithub className="text-3xl bg-pink-500 rounded-full"></FaGithub>
                                    </Link>
                                    <Link to="#">
                                        <FaLinkedin className="text-3xl bg-pink-500 rounded-full"></FaLinkedin>
                                    </Link>
                                </div>
                                <a href="/src/resume/text.pdf" download>
                                    <button className="bg-pink-600 btn text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-indigo-800 mt-5 hover:text-white">
                                        Get Resume <MdDownloadForOffline />
                                    </button>
                                </a>
                            </div>


                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;