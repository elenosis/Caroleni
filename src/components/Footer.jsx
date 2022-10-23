import "./Footer.css";
import { useContext } from "react";
import ThemeContext from "../Contexts/ColorContext";

const Footer = () => {
  const [theme] = useContext(ThemeContext);

  return (
    <div className="containerFooter" style={{ color: theme }}>
      <p>Made with passion ❤️ by Eleni Orfanou & Carola Zapp, © 2022</p>
    </div>
  );
};

export default Footer;

/* <div class="footerLinks">
<p>
  <a href="https:/xing.com" target="_blank">
    <i class="fa-brands fa-xing"></i>
  </a>
</p>
<p>
  <a href="">
    <i class="fa-brands fa-linkedin-in"></i>
  </a>
</p>
<p>
  <a href="">
    <i class="fa-brands fa-github"></i>
  </a>
</p>
</div> */
