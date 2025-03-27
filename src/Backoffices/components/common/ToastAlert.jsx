import { useEffect } from "react";
import "../../styles/common/ToastAlert.css";

const ToastAlert = ({ type = "success", message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 4000); // Duración en ms

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`toast-alert ${type}`}>
      {message}
    </div>
  );
};

export default ToastAlert;
