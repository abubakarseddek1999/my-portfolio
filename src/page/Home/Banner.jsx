import { MdDownloadForOffline } from "react-icons/md";
import Tsparticles from "../../components/Tsparticles";
import banner from "../../assets/Image/banner.jpg";



const Banner = () => {
    return (
        <div className="card">
            <Tsparticles></Tsparticles>

            <div className=" relative card">
                {/* Banner Image */}

                <img
                    className="w-full h-64 object-cover object-center md:h-96 lg:h-full"
                    src={banner}
                    alt="Banner"
                />


                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-50"></div>

                {/* Banner Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white">

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
            </div>

        </div>
    );
};

export default Banner;

