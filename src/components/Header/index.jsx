import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./Header.scss";
import { List } from "@phosphor-icons/react";
import { useState } from "react";

export const Header = ({ isAuthenticated, setIsAuthenticated }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <nav>
        <Link to="/" className="logo">
          <img src={logo} alt="logo verdio" />
        </Link>

        <button
          className="nav-toggle"
          aria-label="Ouvrir le menu"
          onClick={() => setIsOpen(!isOpen)}
        >
          <List size={28} />
        </button>

        {!isAuthenticated ? (
          <ul className={`nav-links ${isOpen ? "nav-links--open" : ""}`}>
            <li>
              <Link to="/login">Se connecter</Link>
            </li>
            <li>
              <Link to="/register">S'inscrire</Link>
            </li>
            <li>
              {/* Test: forcer connecté */}
              <button onClick={() => setIsAuthenticated(true)}>
                Test login
              </button>
            </li>
          </ul>
        ) : (
          <ul className={`nav-links ${isOpen ? "nav-links--open" : ""}`}>
            <li>
              <Link to="/challenges">Challenges</Link>
            </li>
            <li>
              <Link to="/profile">Profil</Link>
            </li>
            <li>
              <Link to="/articles">Articles</Link>
            </li>
            <li>
              {/* Test: forcer déconnecté */}
              <button onClick={() => setIsAuthenticated(false)}>
                Test logout
              </button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};
