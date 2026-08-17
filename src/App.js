import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import logo from './logo.svg';
import Destinations from "./components/destinations";
import './App.css';

function App() {
  return (
<div className="App">
  <Navbar />
      <Hero />
      <Destinations />
</div>
  );
}

export default App;
