import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <a className={styles.title} href="/">
        yee xuean
      </a>
      <div className={styles.menu}>
        <img
          className={styles.menuBtn}
          src={getImageUrl("nav/menuIcon.png")}
          alt="menu-button"
        />
        <ul className={styles.menuItems}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#myskills">My Skills</a>
          </li>
          <li>
            <a href="#mywork">My Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
