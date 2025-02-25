import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Skills.module.css";

export const Skills = () => {
  return (
    <section className={styles.container}>
      <h1>
        my! <span>skills</span>
      </h1>

      <div className={styles.skillJob}>
        {/* graphic design */}
        <div className={styles.skills}>
          <h3>Graphic Design</h3>
          <ul className={styles.skillJobList}>
            <li>
              <img
                src={getImageUrl("skills/arrow.png")}
                alt="arrow bullet point"
              />
              Branding & Visual Identity Creation
            </li>

            <li>
              <img
                src={getImageUrl("skills/arrow.png")}
                alt="arrow bullet point"
              />
              Proficient in Adobe Creative Suites
            </li>

            <li>
              <img
                src={getImageUrl("skills/arrow.png")}
                alt="arrow bullet point"
              />
              Social Media & Marketing graphics
            </li>

            <li>
              <img
                src={getImageUrl("skills/arrow.png")}
                alt="arrow bullet point"
              />
              Print & Digital Media Design
            </li>
          </ul>
        </div>

        {/* web development */}
        <div className={styles.skills}>
          <h3>Web Development</h3>
          <ul className={styles.skillJobList}>
            <li>
              <img
                src={getImageUrl("skills/arrow.png")}
                alt="arrow bullet point"
              />
              Creation of Responsive Websites
            </li>

            <li>
              <img
                src={getImageUrl("skills/arrow.png")}
                alt="arrow bullet point"
              />
              Front-end Development (HTML,CSS, JavaScript, and React)
            </li>

            <li>
              <img
                src={getImageUrl("skills/arrow.png")}
                alt="arrow bullet point"
              />
              Clean, Maintainable, and Scalable Code
            </li>

            <li>
              <img
                src={getImageUrl("skills/arrow.png")}
                alt="arrow bullet point"
              />
              Database Management Using MySQL
            </li>
          </ul>
        </div>

        {/* ui/ux */}
        <div className={styles.skills}>
          <h3>UI/UX</h3>
          <ul className={styles.skillJobList}>
            <li>
              <img
                src={getImageUrl("skills/arrow.png")}
                alt="arrow bullet point"
              />
              User-Centred Interface Design
            </li>

            <li>
              <img
                src={getImageUrl("skills/arrow.png")}
                alt="arrow bullet point"
              />
              Wireframing & Prototyping
            </li>

            <li>
              <img
                src={getImageUrl("skills/arrow.png")}
                alt="arrow bullet point"
              />
              Usability Testing & Research
            </li>

            <li>
              <img
                src={getImageUrl("skills/arrow.png")}
                alt="arrow bullet point"
              />
              Interactive & Accessible Design Principles
            </li>
          </ul>
        </div>
      </div>

      <div className={styles.skillApp}>
        <ul className={styles.skillAppList}>
          <li>
            <button className={styles.listButton}>
              <img src={getImageUrl("skills/html-logo.png")} />
            </button>
            <p>HTML</p>
          </li>

          <li>
            <button className={styles.listButton}>
              <img src={getImageUrl("skills/css-logo.png")} />
            </button>
            <p>CSS</p>
          </li>

          <li>
            <button className={styles.listButton}>
              <img src={getImageUrl("skills/js-logo.png")} />
            </button>
            <p>JavaScript</p>
          </li>

          <li>
            <button className={styles.listButton}>
              <img src={getImageUrl("skills/react-logo.png")} />
            </button>
            <p>React</p>
          </li>

          <li>
            <button className={styles.listButton}>
              <img src={getImageUrl("skills/figma-logo.png")} />
            </button>
            <p>Figma</p>
          </li>

          <li>
            <button className={styles.listButton}>
              <img src={getImageUrl("skills/ai-logo.png")} />
            </button>
            <p>Illustrator</p>
          </li>

          <li>
            <button className={styles.listButton}>
              <img src={getImageUrl("skills/ps-logo.png")} />
            </button>
            <p>Photoshop</p>
          </li>

          <li>
            <button className={styles.listButton}>
              <img src={getImageUrl("skills/ae-logo.png")} />
            </button>
            <p>After Effects</p>
          </li>

          <li>
            <button className={styles.listButton}>
              <img src={getImageUrl("skills/html-logo.png")} />
            </button>
            <p>InDesign</p>
          </li>
        </ul>
      </div>
    </section>
  );
};
