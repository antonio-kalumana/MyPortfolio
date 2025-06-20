import "./Home.scss";
import Header from "./Header/Header.jsx";
import Profile from "./Profile/Profile.jsx";
import About from "../About/About.jsx";
import ScrollDown from "./ScrollDown.jsx";
import Skills from "../Skills/Skills.jsx";
import Services from "../Services/Services.jsx";
import Contact from "../Contact/Contact.jsx";

export default function Home() {
  return (
    <section id="home" className="home-container">
      <Header/>
      <Profile/>
      <ScrollDown/> 
      <About/>
      <Skills/>
      <Services/>
      <Contact/>
    </section>
  );
}
