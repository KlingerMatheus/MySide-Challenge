import styles from "./styles.module.css";

export const LoadingSpinner = () => {
  return (
    <div className={styles["spinner-multi"]}>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
      <div className={styles.circle}></div>
    </div>
  );
};
