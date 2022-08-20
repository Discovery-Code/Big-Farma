import { createPortal } from "react-dom";

export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  const styles = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.6)",
    zIndex: 20,
  };
  //   if (typeof window !== "undefined") {
  return createPortal(
    <>
      <div style={styles} onClick={onClose} />
      {children}
    </>,
    document.getElementById("modal")
  );
  //   }
}
