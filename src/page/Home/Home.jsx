import Navbar from "../../components/Navbar";
import Footer from "../../components/footer";
import About from "./About";
import Banner from "./Banner";
import Contact from "./Contact";
import Projects from "./Projects";
import Skills from "./Skills";


const Home = () => {
    return (
        <div id="home" className="max-w-[1300px] mx-auto">
            <Navbar></Navbar>
            <Banner></Banner>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            <Footer></Footer>
            
        </div>
    );
};

export default Home;