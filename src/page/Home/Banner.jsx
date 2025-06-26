import { MdDownloadForOffline } from "react-icons/md";
import Tsparticles from "../../components/Tsparticles";
import banner from "../../assets/Image/banner.jpg";



const Banner = () => {
    return (
        <div className="card">
            {/* <Tsparticles></Tsparticles> */}

            <div style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),  url(${banner})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                // opacity: 0.8,

            }} className="h-96 md:h-full ">

                {/* Banner Content */}
                <div className=" flex gap-10 items-center justify-center md:justify-between lg:h-[700px] max-w-[1300px] mx-auto">
                    <div className="text-center text-white mt-24 flex justify-center items-center">

                        <div className=" ml-5">
                            <h1 className="font-bold mb-4 ">
                                <h2 className="text-xl md:text-2xl lg:text-4xl mb-2 lg:mb-5"> Hello! My name is</h2>
                                <p className="text-2xl md:text-3xl lg:text-5xl">Abu Bakar</p>
                                <p className="
                            text-2xl md:text-3xl lg:text-5xl whitespace-nowrap"> I am front-end developer</p>
                            </h1>

                            <a href="https://drive.usercontent.google.com/u/0/uc?id=1OuJ2qVqwChvzHFK8F9SePoBvX7cweFrl&export=download" download>
                                <button className="bg-pink-600 btn text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-indigo-800 hover:text-white mt-8">
                                    Get Resume <MdDownloadForOffline />
                                </button>
                            </a>
                        </div>

                    </div>
                    <div className="hidden lg:h-[700px] justify-center items-end md:flex">
                        <img className="object-cover object-center mt-10 md:h-[600px] lg:h-[600px] max-w-full" src="https://i.postimg.cc/BbdT4vt5/IMG-20240112-101143-removebg-preview.png" alt="" />
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Banner;

