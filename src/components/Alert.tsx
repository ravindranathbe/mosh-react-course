import styles from "./Alert.module.css";
import type { ReactNode } from "react";

interface Props {
  onClose: () => void;
  children: ReactNode;
}

const Alert = ({ children, onClose }: Props) => {
  return (
    <div className="alert alert-danger alert-dismissible fade show">
      {children}{" "}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}
      ></button>
    </div>
  );
};

export default Alert;
