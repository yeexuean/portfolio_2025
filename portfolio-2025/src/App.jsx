import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Project } from "./components/Project/Project";
import { Footer } from "./components/Footer/Footer";
import { BackgroundBlobs } from "./components/BackgroundBlobs/BackgroundBlobs";

function App() {
  return (
    <div className={styles.App}>
      <BackgroundBlobs />
      <div className={styles.appContent}>
        <Navbar />;
        <Hero />
        <About />
        <Skills />
        <Project />
        <Footer />
      </div>
    </div>
  );
}

export default App;
