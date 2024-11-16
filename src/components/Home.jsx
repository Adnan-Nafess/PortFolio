import { FaFacebook, FaInstagram, FaLinkedin, FaNodeJs, FaReact, FaTwitter } from "react-icons/fa6";
import { SiExpress, SiMongodb } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from "../../public/photo.avif";
import pdf from "../assets/resume.pdf";  // Resume ka path

const Home = () => {
    return (
        <>
            <div name="Home" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mb-4">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
                        <span className="text-xl">Welcome In My Feed</span>
                        <div className="flex space-x-1 text-2xl md:text-4xl">
                            <h1>Hello, I'm a</h1>
                            <ReactTyped
                                className="text-red-700 font-bold"
                                strings={["Developer", "Coder", "Programmer"]}
                                typeSpeed={40}
                                backSpeed={50}
                                loop={true}
                            />
                        </div>
                        <br />
                        <p className="text-sm md:text-md text-justify">
                            This is a dynamic MERN stack portfolio showcasing my skills in MongoDB,
                            Express.js, React, and Node.js. It highlights my proficiency in full-stack development
                            through interactive projects, responsive design, and efficient data handling.
                            Explore my work, experience, and projects to see how I can bring creative solutions to life.
                        </p>
                        <br />

                        <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
                            <div className="space-y-2">
                                <h1 className="font-bold">Available on</h1>
                                <nav aria-label="Social Media Links">
                                    <ul className="flex space-x-5">
                                        <li>
                                            <a href="https://www.facebook.com/mohd.addu.7127/" target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile">
                                                <FaFacebook size={24} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.linkedin.com/in/mohd-adnan-b1540b232/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile">
                                                <FaLinkedin size={24} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.instagram.com/itz_addu___01/" target="_blank" rel="noopener noreferrer" aria-label="Instagram Profile">
                                                <FaInstagram size={24} />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://x.com/itz_addu___01" target="_blank" rel="noopener noreferrer" aria-label="Twitter Profile">
                                                <FaTwitter size={24} />
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            <div className="space-y-2">
                                <h1 className="font-bold">Currently working on</h1>
                                <div className="flex space-x-5">
                                    <SiMongodb className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                                    <SiExpress className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                                    <FaReact className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                                    <FaNodeJs className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                                </div>
                            </div>
                        </div>

                        {/* Resume Download Section - Now styled as a button */}
                        <a
                            href={pdf}
                            download="Mohd-Adnan-Resume.pdf"
                            className="flex justify-center items-center  md:inline-block bg-blue-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 transition duration-300 mt-6 text-center"
                        >
                            Download Resume
                        </a>

                    </div>

                    <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
                        <img
                            className="rounded-full md:w-[450px] md:h-[450px]"
                            src={pic} alt="Profile picture of Mohd Adnan"
                        />
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
}

export default Home;
