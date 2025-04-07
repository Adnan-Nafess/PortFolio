import videoStreaming from "../assets/video-streaming.png";
import swiggyImage from "../assets/Swigy-png.png";
import BookStoreImage from "../assets/Book-Store.png";

const Projects = () => {
  const projectItems = [
    {
      id: 1,
      title: "Video Streaming",
      description: "A Video Streaming App Using React.js.",
      imageSrc: videoStreaming,
      demo: "https://video-streaming-silk.vercel.app/",
      source: "https://github.com/Adnan-Nafess/ShowCase",
    },
    {
      id: 2,
      title: "Swiggy Clone",
      description:
        "Swiggy-inspired food delivery platform with restaurant listings, menu display.",
      imageSrc: swiggyImage,
      demo: "https://swiggy-clone-tawny-seven.vercel.app/",
      source: "https://github.com/Adnan-Nafess/swiggy-clone",
    },
    {
      id: 3,
      title: "Book Store",
      description:
        "Built an e-commerce book store with user authentication, cart management, and order placement.",
      imageSrc: BookStoreImage,
      demo: "https://book-store-un74.vercel.app/",
      source: "https://github.com/Adnan-Nafess/BookStore",
    },
  ];

  return (
    <>
      <div
        name="Projects"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
      >
        <div>
          <h1 className="text-3xl font-bold mb-5">Projects</h1>
          <span className="underline font-semibold">Featured Projects</span>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mt-10">
            {projectItems.map(
              ({ id, title, description, imageSrc, demo, source }) => (
                <div
                  className="md:w-[300px] md:h-[400px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300"
                  key={id}
                >
                  <img
                    className="w-full h-[200px] object-cover p-1 rounded-lg border-[2px]"
                    src={imageSrc}
                    alt={title}
                  />
                  <div className="mt-3 px-4">
                    <h3 className="font-bold text-xl mb-2">{title}</h3>
                    <p className="text-gray-700 mb-3">{description}</p>
                  </div>
                  <div className="px-3 space-x-3 justify-around mt-1">
                    <a href={demo} target="_blank" rel="noopener noreferrer">
                      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                        Live Demo
                      </button>
                    </a>
                    <a href={source} target="_blank" rel="noopener noreferrer">
                      <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                        Source Code
                      </button>
                    </a>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
      <hr className="w-full border-t-1 border-gray-300 my-8" />
    </>
  );
};

export default Projects;
