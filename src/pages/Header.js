import { Link } from "react-scroll";
import "../assets/style/header.scss";
import About from "./About";
import Skills from "./Skills";
import Project from "./Project";
import Contact from "./Contact";

const Header = () => {
  return (
    <header>
      <h1>
        <Link to="1" spy={true} smooth={true} offset={-75}>
          <em>FRONTEND</em>
          JEYOUNG HAN
        </Link>
      </h1>
      <nav>
        <li>
          <Link to="1" spy={true} smooth={true} offset={-75}>
            about
          </Link>
        </li>
        <li>
          <Link to="2" spy={true} smooth={true} offset={-75}>
            skills
          </Link>
        </li>
        <li>
          <Link to="3" spy={true} smooth={true} offset={-75}>
            project
          </Link>
        </li>
        <li>
          <Link to="4" spy={true} smooth={true} offset={-75}>
            contact
          </Link>
        </li>
      </nav>
    </header>
  );
};

export default Header;
