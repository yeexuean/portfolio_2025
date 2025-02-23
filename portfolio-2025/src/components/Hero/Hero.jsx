import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        {/* profile picture  */}
        <img
          className={styles.profilePic}
          src={getImageUrl("hero/profilePic.png")}
          alt="profile picture"
        />
        {/* scroll animation */}
        <div className={styles.scrollContainer}>
          <p className={styles.scrollText}>Scroll</p>
          <div className={styles.mouseAnimation}></div>
        </div>

        <div className={styles.topBlur} />
        <div className={styles.bottomBlur} />
      </div>
    </section>
  );
};
