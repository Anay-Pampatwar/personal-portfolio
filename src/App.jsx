import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Contact from "./components/contact/Contact"
import Works from "./components/works/Works"
import "./app.scss"
import { useState } from "react";
import Menu from "./components/menu/Menu";


function App() {
  const [menuOpen, setMenuopen] = useState(false);//we will pass this as props to topbar element
  return (
    <div className="App">
      <Topbar menuOpen={menuOpen} setMenuopen = {setMenuopen}/>
      <Menu menuOpen={menuOpen} setMenuopen = {setMenuopen}/>
      <div className="sections">
        <Intro menuOpen={menuOpen} setMenuopen = {setMenuopen}/>
        <Portfolio />
        <Works />
        <Testimonials />
        <Contact />
      </div>
      
    </div>
  );
}

export default App;
