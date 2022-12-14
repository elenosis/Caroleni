import { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const Modal = ({ children }) => {
  const [theme] = useContext(ThemeContext);
  const divRef = useRef(null);

  if (!divRef.current) {
    divRef.current = document.createElement("div");
    divRef.current.style.backgroundColor = `${theme}`;
  }

  useEffect(() => {
    const modalRoot = document.querySelector("#modal");
    modalRoot.append(divRef.current);

    return () => divRef.current.remove();
  }, []);

  return createPortal(children, divRef.current);
};

export default Modal;
