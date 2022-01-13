// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Particles from "react-particles-js";
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <div>
      {/* <Particles
        params={{
          particles: {
            line_linked: {
              shadow: {
                enable: true,
                color: "#0a0a0a",
                blur: 5
            }
          },
        },
      }}
     /> */}
      <NavBar />
      <Home />
      <About />
    </div>
  );
}

export default App;
