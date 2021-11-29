import react from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Footer from "./Components/Footer/Footer.js";
import Navbar from "./Components/Navbar/Navbar.js";
import Collaborators from "./Components/Collaborators/Collaborators.js";
import Details from "./Components/Details/Details.js";
import Pricing from "./Components/Pricing/Pricing.js";
import MintNFT from "./Components/MintNFT/MintNFT.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Collaborators />} />
          <Route path="/details" element={<Details />} />
          <Route path="/mintnft" element={<MintNFT />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
