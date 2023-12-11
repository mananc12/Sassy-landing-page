import About from "./components/About";
import Blogs from "./components/Blogs";
import Clients from "./components/Clients";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Pricing from "./components/Pricing";
import Team from "./components/Team";
import Run from "./components/running-words/Run";
import ArtisticGrid from "./components/ArtisticGrid";

function App() {
  return (
    <div className="App">
      <Nav/>
      <Home/>
      <ArtisticGrid/>
      <Run/>
      <div className="flex flex-col justify-center items-center w-full">
      <div className="w-[90%] ">
      <About/>
      <Features/>
      <Clients/>
      <Pricing/>
      <Team/>
      <Blogs/>
      <Contact/>
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
