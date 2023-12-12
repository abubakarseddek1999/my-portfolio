import { MdDownloadForOffline } from "react-icons/md";

const Banner = () => {
    return (
        <div>
            <div className="relative bg-indigo-600">
                {/* Banner Image */}
                <img
                    className="w-full h-64 object-cover object-center md:h-96 lg:h-full"
                    src="https://i.postimg.cc/tgqkPZhF/240-F-612191697-o3xv1-GFAI24-Sz6-Cu0-Zfv-YXO9bz2-Et-Xq6.jpg"
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
                       
                       <a href="/src/resume/text.pdf" download>
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

