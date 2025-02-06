import { BrowserRouter } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import Navbar from "./components/Header/Navbar";
import HeroSection from "./components/Herosection/HeroSection";
import Preloader from "./components/Preloader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <BrowserRouter>
      {isLoading ? (
        <Preloader onComplete={() => setIsLoading(false)} />
      ) : (
        <>
          <Navbar />
          <HeroSection  />
        </>
      )}
    </BrowserRouter>
  );
}

export default App;