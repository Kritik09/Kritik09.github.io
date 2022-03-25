import React,{useEffect} from "react";
import { About } from "./components/About/About";
import { Achievements } from "./components/Achievements/Achievements";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";
import { RespNav } from "./components/RespNav/RespNav";
import { Skills } from "./components/Skills/Skills";
import scrollreveal from "scrollreveal";
function App() {
  useEffect(()=>{
    const sr=scrollreveal({
      origin:"top",
      distance:"80px",
      duration:2000,
      reset:true,
    });
    sr.reveal(
      `
      #home,
      #about,
      #achievements,
      #skills,
      #projects,
      #contact,
      #footer
      `,
      {
        opacity:0,
        interval:300,
      }
    );
  },[]);
  return (
    <div>
        <Header/>
        <>
          <RespNav/>
          <About/>
          <Achievements/>
          <Skills/>
          <Projects/>
          <Contact/>
          <Footer/>
        </>
    </div>
  );
}

export default App;
