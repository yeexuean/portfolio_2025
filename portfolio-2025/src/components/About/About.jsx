import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.content}>
        <h1>
          hello! <span>I&apos;m Yee Xuean</span>
        </h1>
        <p className={styles.about}>
          I am a second year student studying Interactive Media and Web
          Technologies, where I combine design and development to create
          intuitive digital experiences. I enjoy building responsive,
          interactive websites that focus on both functionality and aesthetics.
          Always eager to learn and improve, I stay up to date with web trends
          and enjoy refining my skills through hands-on projects.
        </p>
        <div className={styles.blur} />
      </div>
    </section>
  );
};
