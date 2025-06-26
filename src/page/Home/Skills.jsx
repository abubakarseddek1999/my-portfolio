import { IoLogoHtml5 } from "react-icons/io";
import { FaReact, FaCss3, FaBootstrap, FaGitAlt, FaGithub } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiTailwindcss, SiFirebase, SiMongodb } from "react-icons/si";
import { SiNextdotjs } from "react-icons/si";
import { SiRedux } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { TbBrandVscode } from "react-icons/tb";
import { LuFigma } from "react-icons/lu";

const Skills = () => {
    return (
        <div id="skills" className="my-16 max-w-[1300px] mx-auto">
            <h2 className="text-center mb-5 text-3xl md:text-4xl lg:text-5xl font-bold mt-16">My Skills:</h2>
            <div className="flex flex-col md:flex-row md:justify-between">

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="relative flex  m-2 flex-col mt-6  bg-[#0e1421] text-white shadow-md border border-fuchsia-500  rounded-xl md:w-1/3 max-w-[24rem] min-h-[500px]">

                    <p className=" text-center text-2xl font-bold my-5 mb-10 ">Frontend</p>

                    <div className="p-5 pt-0">

                        <div className="flex flex-wrap gap-3">

                            <div className="border text-center rounded-md p-3 text-xl font-semibold">
                                <div className="flex items-center gap-1">
                                    <IoLogoHtml5 className="text-2xl text-orange-500" /> HTML
                                </div>

                            </div>
                            <div className="border text-center rounded-md p-3 text-xl font-semibold">
                                <div className="flex items-center gap-1">
                                    <SiTailwindcss className="text-2xl text-blue-600" /> Tailwind
                                </div>

                            </div>

                            <div className="border text-center rounded-md p-3 text-xl font-semibold">
                                <div className="flex items-center gap-1">
                                    <FaReact className="text-2xl text-blue-600" /> React Js
                                </div>

                            </div>
                            <div className="border text-center rounded-md p-3 text-xl font-semibold">
                                <div className="flex items-center gap-1">
                                    <SiRedux  className="text-2xl text-blue-600" /> Redux
                                </div>

                            </div>
                            <div className="border text-center rounded-md p-3 text-xl font-semibold">
                                <div className="flex items-center gap-1">
                                    <RiJavascriptFill className="text-2xl text-yellow-400" /> JavaScript
                                </div>

                            </div>
                            <div className="border text-center rounded-md p-3 text-xl font-semibold">
                                <div className="flex items-center gap-1">
                                    <RiTypeScriptFill className="text-2xl text-yellow-400" /> TypeScript
                                </div>

                            </div>
                            <div className="border text-center rounded-md p-5 text-xl font-semibold">
                                <div className="flex items-center gap-1">
                                    <FaCss3 className="text-2xl text-blue-600" /> CSS
                                </div>

                            </div>
                            <div className="border text-center rounded-md p-3 text-xl font-semibold">
                                <div className="flex items-center gap-1">
                                    <SiNextdotjs className="text-2xl" /> Next JS
                                </div>

                            </div>
                           
                            <div className="border text-center rounded-md p-3 text-xl font-semibold">
                                <div className="flex items-center gap-1">
                                    <FaBootstrap className="text-2xl text-indigo-600" /> Bootstrap
                                </div>

                            </div>



                        </div>

                    </div>
                </div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="relative flex m-2 flex-col mt-6  bg-[#0e1421] text-white shadow-md border border-fuchsia-500  rounded-xl md:w-1/3 max-w-[24rem]">
                    <p className=" text-center text-2xl font-bold my-5 mb-10  ">Backend</p>

                    <div className="p-5 pt-0">

                        <div className="flex flex-wrap gap-3">

                            <div className="border text-center rounded-md p-3 text-xl font-semibold">
                                <div className="flex items-center gap-1">
                                    <SiFirebase className="text-2xl text-orange-400" /> Firebase
                                </div>

                            </div>

                            <div className="border text-center rounded-md p-3 text-xl font-semibold">
                                <div className="flex items-center gap-1">
                                    <SiMongodb className="text-2xl text-green-600" /> MongoDB
                                </div>

                            </div>
                            <div className="border text-center rounded-md p-3 text-xl font-semibold">
                                <div className="flex items-center gap-1">
                                    <DiNodejs className="text-4xl text-green-600" /> Node Js
                                </div>

                            </div>




                        </div>

                    </div>
                </div>

                <div data-aos="flip-left"
                    data-aos-easing="ease-out-cubic"
                    data-aos-duration="2000" className="relative flex m-2 flex-col mt-6  bg-[#0e1421] text-white  border border-fuchsia-500 shadow-2xl rounded-xl md:w-1/3 max-w-[24rem]">
                    <p className=" text-center text-2xl font-bold my-5 mb-10 ">Others</p>

                    <div className="p-5 pt-0">

                        <div className="flex flex-wrap gap-3">

                            <div className="border text-center rounded-md p-3 text-xl font-semibold">
                                <div className="flex items-center gap-1">
                                    <FaGitAlt className="text-2xl text-orange-600" /> Git
                                </div>

                            </div>

                            <div className="border text-center rounded-md p-3 text-xl font-semibold">
                                <div className="flex items-center gap-1">
                                    <FaGithub className="text-2xl text-white" /> GitHub
                                </div>

                            </div>
                            <div className="border text-center rounded-md p-3 text-xl font-semibold">
                                <div className="flex items-center gap-1">
                                    <LuFigma className="text-4xl text-white" /> Figma
                                </div>

                            </div>
                            <div className="border text-center rounded-md p-3 text-xl font-semibold">
                                <div className="flex items-center gap-1">
                                    <TbBrandVscode className="text-4xl text-blue-600" /> VS Code
                                </div>

                            </div>




                        </div>

                    </div>
                </div>



            </div>

        </div>
    );
};

export default Skills;