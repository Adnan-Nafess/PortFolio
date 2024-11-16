import html from "../../public/html.png";
import css from "../../public/css.jpg";
import mongodb from "../../public/mongodb.jpg";
import express from "../../public/express.png";
import reactjs from "../../public/reactjs.png";
import nodejs from "../../public/node.png";
import javascript from "../../public/javascript.png";

const Experience = () => {

    const cardItems = [
        { id: 1, logo: html, name: "HTML" },
        { id: 2, logo: css, name: "CSS" },
        { id: 3, logo: javascript, name: "JAVASCRIPT" },
        { id: 4, logo: reactjs, name: "REACTJS" },
        { id: 5, logo: nodejs, name: "NODEJS" },
        { id: 6, logo: express, name: "EXPRESS" },
        { id: 7, logo: mongodb, name: "MONGODB" },
    ];

    return (
        <>
            <div name="Experience" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
                <div>
                    <h1 className="text-3xl font-bold mb-5">Experience</h1>
                    <p className="font-semibold">I'm skilled in the following technologies and continuously expanding my knowledge</p>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-20 mt-10">
                        {cardItems.map(({ id, logo, name }) => (
                            <div
                                className="mt-3 md:h-[200px] md:w-[200px] flex flex-col items-center justify-center border-[2px] rounded-full p-1 cursor-pointer hover:scale-110 transition-all duration-300"
                                key={id}>
                                <img
                                    className="w-[150px] rounded-full"
                                    src={logo}
                                    alt={name} // Added alt text for accessibility
                                />
                                <div className="mt-3 text-center font-semibold">{name}</div> {/* Added spacing and center alignment */}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr className="w-full border-t-1 border-gray-300 my-8" />
        </>
    );
};

export default Experience;
