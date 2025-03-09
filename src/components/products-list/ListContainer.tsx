import { FC, PropsWithChildren } from "react";
import styles from "./styles.module.css";

const ListContainer: FC<PropsWithChildren> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ListContainer;
