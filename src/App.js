import { About } from "./components/About/About";
import { Achievements } from "./components/Achievements/Achievements";
import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";
import { RespNav } from "./components/RespNav/RespNav";
import { Skills } from "./components/Skills/Skills";
function App() {
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
