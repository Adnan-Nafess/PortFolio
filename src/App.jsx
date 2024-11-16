import { Toaster } from "react-hot-toast"
import About from "./components/About"
import Contact from "./components/Contact"
import Experience from "./components/Experience"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
// import ResumeUpload from "./components/ResumeUpload"

const App = () => {
  return (
    <>
     <div>
        <Navbar />
        <Home />
        {/* <ResumeUpload /> */}
        <About />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
     </div>
     <Toaster />
    </>
  )
}

export default App