import { FaGithub } from "react-icons/fa";
import { FaSquareArrowUpRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Projects = () => {
    return (
        <div id="project" className="my-16 m-2">
            <h2 className="text-center text-3xl font-bold my-5">My Projects:</h2>

            <div className="">
                <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">


                    {/* Project-1 */}
                    <div className="flex justify-center rounded-xl">
                        <div
                            className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                                <img
                                    className="h-[300px] w-full"
                                    src="https://i.postimg.cc/pVsLr1fX/Screenshot-12.png"
                                    alt="ui/ux review check" />
                            </div>
                            <div className="p-6 flex-grow">
                                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    AB Computer Center
                                </h4>
                                <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                                    This is Computer center website. You can easily any computer repair in this website.
                                </p>
                            </div>
                            <div className="flex items-center justify-start gap-2 p-6">

                                <Link to="https://computer-engineer-879da.web.app/">
                                    <button className="btn bg-pink-600 text-white ">
                                        Live demo <FaSquareArrowUpRight />
                                    </button>
                                </Link>
                                <Link to="https://github.com/abubakarseddek1999/computer-engineer-client">
                                    <button className="btn hover:bg-slate-100 bg-pink-600 text-white ">
                                        <FaGithub className="text-black text-3xl" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Project-2 */}
                    <div className="flex justify-center rounded-xl">
                        <div
                            className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                                <img
                                    className="h-[300px] w-full"
                                    src="https://i.postimg.cc/268svRMS/Screenshot-13.png"
                                    alt="ui/ux review check" />
                            </div>
                            <div className="p-6 flex-grow">
                                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    NewsBd
                                </h4>
                                <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                                    This is my NewsBD website. You can read any news in this website.There are news of different publishers here.
                                </p>
                            </div>
                            <div className="flex items-center justify-start gap-2 p-6">

                                <Link to="https://bistroboss-d9446.web.app/">
                                    <button className="btn bg-pink-600  text-white ">
                                        Live demo <FaSquareArrowUpRight />
                                    </button>
                                </Link>
                                <Link to="https://github.com/abubakarseddek1999/newspaper-client-side">
                                    <button className="btn hover:bg-slate-100 bg-pink-600 text-white ">
                                        <FaGithub className="text-black text-3xl" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                    {/* Project-3 */}
                    <div className="flex justify-center rounded-xl">
                        <div
                            className="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                            <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                                <img
                                    className="h-[300px] w-full"
                                    src="https://i.postimg.cc/vB7f9CRD/Screenshot-14.png"
                                    alt="ui/ux review check" />
                            </div>
                            <div className="p-6 flex-grow">
                                <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                    AB Mobile shop
                                </h4>
                                <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
                                    This is mobile shop website. You can buy various mobile in this website.
                                </p>
                            </div>
                            <div className="flex items-center justify-start gap-2 p-6">

                                <Link to="https://ab-tecnology-cfb34.web.app/">
                                    <button className="btn bg-pink-600 text-white ">
                                        Live demo <FaSquareArrowUpRight />
                                    </button>
                                </Link>
                                <Link to="https://github.com/abubakarseddek1999/ab-shop-client">
                                    <button className="btn hover:bg-slate-100 bg-pink-600 text-white ">
                                    <FaGithub className="text-black text-3xl" />  
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default Projects;