import { FC, ReactNode } from "react";
import styles from "./primary-button.module.css";

interface PrimaryButtonProps {
  variant?: "addToCart";
  isExistingProduct?: boolean;
  onHoverOverlay?: ReactNode;
  label: ReactNode;
  onClick: VoidFunction;
}

export const PrimaryButton: FC<PrimaryButtonProps> = ({
  isExistingProduct,
  onHoverOverlay,
  label,
  variant,
  onClick,
}) => {
  const backgroundColor =
    variant === "addToCart"
      ? isExistingProduct
        ? "#eb4848"
        : "#48eb50"
      : "#eee";

  return (
    <button
      className={styles["button-container"]}
      onClick={onClick}
      style={{ background: backgroundColor }}
    >
      <div className={styles["button-label"]}>{label}</div>

      <span className={styles["button-overlay"]}>{onHoverOverlay}</span>
    </button>
  );
};
