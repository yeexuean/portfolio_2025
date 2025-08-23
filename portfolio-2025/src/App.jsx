import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Project } from "./components/Project/Project";
import { Footer } from "./components/Footer/Footer";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />;
      <Hero />
      <About />
      <Skills />
      <Project />
      <Footer />
    </div>
  );
}

export default App;
