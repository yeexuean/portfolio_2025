import { getImageUrl } from "../../utils";
import styles from "./Project.module.css";
import { ProjectPanel } from "./ProjectPanel";

export const Project = () => {
  const projects = [
    {
      id: 1,
      coverImage: getImageUrl("work/dolla.svg"),
      title: "Zoo Kiosk UX/UI",
      skills: ["Figma", "Illustrator"],
      gridArea: "big",
      link: "https://www.behance.net/gallery/84201999/KAMPUNG-LORONG-BUANGKOK",
    },
    {
      id: 2,
      coverImage: getImageUrl("work/dolla.svg"),
      title: "Dolla: Budget Tracket App UI/UX",
      skills: ["Figma"],
      gridArea: "small",
      link: "https://www.figma.com/proto/6YL0hXlwi1EHwTLPYPbrkb/Dolla?page-id=0%3A1&node-id=9-187&p=f&viewport=51%2C-6926%2C0.95&t=gttXXCLSkkoXWkrv-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=3%3A2",
    },
    {
      id: 3,
      coverImage: getImageUrl("work/dolla.svg"),
      title: "Storyhub: Online Bookstore",
      skills: ["Figma", "Illustrator"],
      gridArea: "small",
      link: "https://www.blabla.com",
    },
    {
      id: 4,
      coverImage: getImageUrl("work/dolla.svg"),
      title: "Storyhub: Online Bookstore",
      skills: ["Figma", "Illustrator"],
      gridArea: "small",
      link: "https://www.blabla.com",
    },
    {
      id: 5,
      coverImage: getImageUrl("work/dolla.svg"),
      title: "Storyhub: Online Bookstore",
      skills: ["Figma", "Illustrator"],
      gridArea: "small",
      link: "https://www.blabla.com",
    },
  ];
  return (
    <section id="mywork" className={styles.projectSection}>
      <h1>
        my! <span>work</span>
      </h1>

      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <ProjectPanel key={project.id} project={project} />
        ))}
      </div>

      <a href="https://github.com/yeexuean">
        <button className={styles.githubLink}>check my github!</button>
      </a>
    </section>
  );
};
