import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import logo from './logo.svg';
import Destinations from "./components/destinations";
import About from "./components/about";
import Services from "./components/services";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import './App.css';

function App() {
  return (
<div className="App">
  <Navbar />
      <Hero />
      <About />
      <Services />
      <Destinations />
      <Contact />
      <Footer />
    
</div>
  );
}

export default App;
