import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import RecentWork from "./components/RecentWork";
import Contact from "./components/Contact";
// import Footer from "./components/Footer";

function App() {
  return (
    <div
      className="min-h-screen bg-portfolio-bg text-white"
      data-theme="portfolio"
    >
      <Header />
      <Hero />
      <About />
      <RecentWork />
      <Contact />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
