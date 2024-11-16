import { FaFacebook, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa6";

const Footer = () => {
    return (
        <div>
            <hr />
            <footer className="py-12">
                <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
                    <div className="flex flex-col items-center justify-center">
                        <div className="flex space-x-4">
                            {/* Facebook Link */}
                            <a
                                href="https://www.facebook.com/mohd.addu.7127/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Facebook"
                                className="hover:scale-110 transition-transform duration-300"
                            >
                                <FaFacebook size={28} />
                            </a>
                            {/* Instagram Link */}
                            <a
                                href="https://www.instagram.com/itz_addu___01/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="hover:scale-110 transition-transform duration-300"
                            >
                                <FaInstagram size={28} />
                            </a>
                            {/* Twitter Link */}
                            <a
                                href="https://x.com/itz_addu___01"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Twitter"
                                className="hover:scale-110 transition-transform duration-300"
                            >
                                <FaTwitter size={28} />
                            </a>
                            {/* LinkedIn Link */}
                            <a
                                href="https://www.linkedin.com/in/mohd-adnan-b1540b232/"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="LinkedIn"
                                className="hover:scale-110 transition-transform duration-300"
                            >
                                <FaLinkedin size={28} />
                            </a>
                        </div>
                        <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
                            <p className="text-sm">&copy; 2024 Your Company. All rights reserved</p>
                            <p className="text-sm">Supportive Partner ❤️ Adnan</p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
