const About = () => {
    return (
        <>
            <div name="About" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20">
                <div>
                    <h1 className="text-3xl font-bold mb-5">About Me</h1>
                    <p>
                        Hello, I'm Mohd Adnan, a web developer specializing in the MERN Stack. With a background in IT, I strive to create impactful and visually stunning software solutions that leave a lasting impression. I enjoy learning new technologies and tackling complex problems with creativity.
                    </p>
                    <br />

                    <h1 className="text-green-600 font-semibold text-xl mb-3">Education & Training</h1>
                    <ul className="list-disc pl-6 mb-5">
                        <li>Bachelor's Degree in Computer Science, [University Name], [Year]</li>
                        <li>Full-Stack Web Development Bootcamp, [Platform Name], [Year]</li>
                        <li>JavaScript Certification, [Institution Name], [Year]</li>
                    </ul>

                    <h1 className="text-green-600 font-semibold text-xl mb-3">Skills & Expertise</h1>
                    <ul className="list-disc pl-6 mb-5">
                        <li>Proficient in HTML, CSS, JavaScript, React, Node.js, MongoDB, Express</li>
                        <li>Experienced with Git, GitHub, REST APIs, and responsive design</li>
                        <li>Strong grasp of web development concepts such as MVC architecture, OOP, and async programming</li>
                        <li>Excellent problem-solving skills, collaboration, and communication abilities</li>
                    </ul>

                    <h1 className="text-green-600 font-semibold text-xl mb-3">Mission Statement</h1>
                    <p>
                        My mission is to leverage my skills and creativity to deliver innovative web development solutions that exceed client expectations and contribute positively to the digital landscape. I am committed to continuous learning and growth, always seeking new challenges and opportunities to expand my horizons.
                    </p>
                    <br />
                </div>
            </div>
            <hr className="w-full border-t-1 border-gray-300 my-8" />
        </>
    );
}

export default About