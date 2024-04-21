import { MdDownloadForOffline } from "react-icons/md";
import Tsparticles from "../../components/Tsparticles";
import banner from "../../assets/Image/banner.jpg";



const Banner = () => {
    return (
        <div className="card">
            <Tsparticles></Tsparticles>

            <div style={{
                backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),  url(${banner})`,
                backgroundPosition:"center",
                backgroundSize:"cover",
                // opacity: 0.8,
                
            }}  className="h-96 md:h-full">

                {/* Banner Content */}
                <div className=" flex gap-2 items-center justify-center">
                    <div className="text-center text-white">

                        <div className="mt-20 md:mt-0">
                            <h1 className="font-bold mb-4">
                                <span className="text-xl md:text-2xl"> Hello! My name is</span> <br /> <span className="text-2xl md:text-3xl">Abu Bakar</span> <br />
                                <span className="
                            text-2xl md:text-3xl"> I am front-end developer</span>
                            </h1>

                            <a href="https://drive.usercontent.google.com/u/0/uc?id=1OuJ2qVqwChvzHFK8F9SePoBvX7cweFrl&export=download" download>
                                <button className="bg-pink-600 btn text-white py-2 px-6 rounded-full text-lg font-semibold hover:bg-indigo-800 hover:text-white">
                                    Get Resume <MdDownloadForOffline />
                                </button>
                            </a>
                        </div>

                    </div>
                    <div className="hidden justify-center items-end md:flex">
                        <img className="object-center mt-10 h-[400px] max-w-full" src="https://i.postimg.cc/BbdT4vt5/IMG-20240112-101143-removebg-preview.png" alt="" />
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Banner;

