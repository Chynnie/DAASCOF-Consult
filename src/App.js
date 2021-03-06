// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Particles from "react-particles-js";
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import ContactUs from './components/ContactUs';

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
      <NavBar />,
      <Home />,
      <About />,
      <Services />,
      <Projects />,
      <ContactUs />
    </div>
  );
}

export default App;
