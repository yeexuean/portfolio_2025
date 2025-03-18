import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Work.module.css";

export const Work = () => {
  return (
    <section className={styles.container}>
      <h1>
        my! <span>Work</span>
      </h1>

      <div className="{styles.work}">
        <div className="{styles.rowFull}">
          <img src={getImageUrl("work/logo.svg")} alt="storyhub cover image">
            {/* <a href="/"></a> */}
          </img>
          <button>Storyhub</button>
        </div>

        <div className="{styles.rowHalf}">
          <div className="{styles.rowHalfCard}">
            <a href="/"></a>
            <button>Zoo Kiosk: UI/UX</button>
          </div>

          <div>
            <a href="/"></a>
            <button>Dolla: Budget Tracker App UI/UX</button>
          </div>
        </div>
      </div>
    </section>
  );
};
