import styles from "./ProjectPanel.module.css";
import PropTypes from "prop-types";

export const ProjectPanel = ({ project }) => {
  return (
    <div className={`${styles.projectPanel} ${styles[project.size]}`}>
      <div className={styles.panelImageContainer}>
        <img
          src={project.coverImage}
          alt={project.title}
          className={styles.panelImage}
        />
      </div>

      <div className={styles.panelContent}>
        <h3 className={styles.projectTitle}>{project.title}</h3>
        <ul className={styles.projectSkills}>
          {project.skills.map((skill, id) => {
            return <li key={id}>{skill}</li>;
          })}
        </ul>
        {project.link && (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.panelLink}
          >
            view project
          </a>
        )}
      </div>
    </div>
  );
};

ProjectPanel.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    size: PropTypes.oneOf(["big", "small"]).isRequired,
    skills: PropTypes.arrayOf(PropTypes.string).isRequired,
    coverImage: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    link: PropTypes.string,
    gridArea: PropTypes.string,
  }).isRequired,
};
