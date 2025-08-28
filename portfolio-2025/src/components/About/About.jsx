import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h1>
          hello! <span> I&apos;m Yee Xuean</span>
        </h1>
        <p className={styles.about}>
          I am a second year student studying
          <span>Interactive Media and Web Technologies</span>, where I combine
          design and development to
          <span>create intuitive digital experiences.</span> I enjoy building
          responsive, interactive websites that focus on both{" "}
          <span>functionality and aesthetics.</span> Always eager to learn and
          improve, I stay up to date with web trends and enjoy refining my
          skills through hands-on projects.
        </p>
        <div className={styles.blur} />
      </div>
    </section>
  );
};
