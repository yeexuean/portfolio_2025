import styles from "./App.module.css";
import { Navbar } from "./components/Navbar/Navbar";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Skills } from "./components/Skills/Skills";
import { Work } from "./components//Work/Work";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />;
      <Hero />
      <About />
      <Skills />
      <Work />
    </div>
  );
}

export default App;
