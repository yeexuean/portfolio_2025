import styles from "./BackgroundBlobs.module.css";

export const BackgroundBlobs = () => {
  return (
    <div className={styles.bgBlobs}>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </div>
  );
};
