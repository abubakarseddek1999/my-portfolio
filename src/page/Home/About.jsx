import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { MdDownloadForOffline } from "react-icons/md";
import Tsparticles from "../../components/Tsparticles";

const About = () => {
    return (
        <div id="about" className="my-12 max-w-[1300px] mx-auto ">
            <Tsparticles></Tsparticles>

            <div>

                <div>
                    <div className="flex justify-center items-center">
                        <div className="p-2">

                            <p className="text-center mb-5 text-3xl md:text-4xl lg:text-5xl font-bold"> I am <span className="text-3xl text-center text-fuchsia-600 font-bold"> Web developer</span></p>
                            <p className="md:text-xl">
                                Experienced with all stages of the development cycle for dynamic web projects. <br /> Having an in-depth knowledge including advanced HTML5, CSS3, JavaScript, react js. <br />  I have the experience of creating a few website.
                            </p>

                        </div>

                    </div>

                    <div className=" p-5">
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

                                <div className="flex md:flex-row gap-5">
                                    <div className="md:w-[300px]">
                                        <p>
                                            <span className="text-2xl font-bold">Phone:</span> <br />
                                            +8801728306504
                                        </p>
                                    </div>

                                    <div className="md:w-[300px]">
                                        <p>
                                            <span className="text-2xl font-bold">Email:</span> <br />
                                            <p className="text-sm w-[50%]">abubakarseddek1999@gmail.com</p>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="md:w-1/2">
                                <div className="flex flex-col justify-center items-center w-full ">
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
                                    <a href="https://drive.usercontent.google.com/u/0/uc?id=1OuJ2qVqwChvzHFK8F9SePoBvX7cweFrl&export=download" download="resume-abubakar.pdf">
                                        <button className=" flex items-center gap-2 bg-pink-600 btn text-white p-2 rounded-full text-lg font-semibold hover:bg-indigo-800 mt-5 hover:text-white">
                                            Get Resume <MdDownloadForOffline />
                                        </button>
                                        
                                    </a>
                                </div>
                            </div>


                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default About;
