import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Componenets/Footer/Footer";
import Navbar from "./Componenets/Navbar/Navbar";
import Header from "./Componenets/Header/Header"
import Services from "./Componenets/Services/Services";
import Works from "./Componenets/Projects/Works";
import About from "./Componenets/Pages/About";
import Portfolio from "./Componenets/Pages/Portfolio";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<> <Header /> <Services /> <Works /> </>} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div >
  );
}

export default App;
