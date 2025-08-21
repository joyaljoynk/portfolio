
import Main from './components/about';
import Contact from './components/contact';
import Header from './components/header';
import Project from './components/porject';
import Skills from './components/skills';
export default function App() {
  return (
    <div>
      <Header />
      <h1 className="heh">YEAH YOU FOUND ME !!!!</h1>
      <section id="about">
        <Main />
      </section>
      <section id="project">
        <Project />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>

    </div>
  );
}   