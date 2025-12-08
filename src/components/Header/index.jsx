import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./Header.scss";


export const Header = () => {
  return (
    <header>
      <nav>
        <Link to="/">
            <img src={logo} alt="logo verdio" className="logo" />
        </Link>
        {/* <div class="logo"><img src={logo} alt="Logo Verdio"/></div> */}
        <ul className="nav-links">
          <li></li>
          <li>
            <Link to="/challenges">Challenges</Link>
          </li>
          <li>
            <Link to="/profile">Profil</Link>
          </li>
          <li>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
