import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const Footer = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <div className="containerFooter" style={{ color: theme }}>
      <p>Made with passion and ❤️ by Eleni Orfanou & Carola Zapp, © 2022</p>
    </div>
  );
};

export default Footer;
