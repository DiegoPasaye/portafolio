import Image from "next/image";
import styles from "./page.module.css";
import NavBar from './components/navBar/NavBar'
import Presentation from "./components/presentation/Presentation";
import AboutMe from "./components/aboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import Experience from "./components/Experience/Experience";
import Contact from "./components/Contact/Contact";

export default function Home() {
  return (
    <main className={styles.page}>
      <nav className={styles.navBar}>
        <NavBar />
        <div className={styles.divisor}></div>
      </nav>


      <section className={styles.pageBody}>
        <Presentation />
        <AboutMe />
        <Projects />
        <Experience />
        <Contact />

      </section>
    </main>
  );
}
