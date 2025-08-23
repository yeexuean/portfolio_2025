import { getImageUrl } from "../../utils";
import styles from "./Skills.module.css";
import { skillIcons, skillSections } from "../../data/skills";

export const Skills = () => {
  return (
    <section className={styles.container} id="myskills">
      <h1>
        my! <span>skills</span>
      </h1>

      <div className={styles.skillJob}>
        {skillSections.map((section) => (
          <div key={section.title} className={styles.skills}>
            <h3>{section.title}</h3>
            <ul className={styles.skillJobList}>
              {section.points.map((point, index) => (
                <li key={index}>
                  <img
                    src={getImageUrl("skills/arrow.png")}
                    alt="arrow bullet point"
                  />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.skillApp}>
        <ul className={styles.skillAppList}>
          {skillIcons.map(({ name, img }) => (
            <li key={name}>
              <button className={styles.listButton}>
                <img src={getImageUrl(img)} alt={`${name} icon`} />
              </button>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
