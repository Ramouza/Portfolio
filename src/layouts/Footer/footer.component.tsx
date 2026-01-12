import { NavLink } from "react-router-dom";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./footer.styles.scss";
import cv from "../../data/cv.json";

type FooterProps = {
  brand?: string;
  email?: string;
  linkedinUrl?: string;
  githubUrl?: string;
};

export default function Footer() {
  const { fullName, links, contact } = cv.profile;

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <div className="site-footer__brand">
          <div className="site-footer__logo">Ramouza</div>
          <p className="site-footer__tagline">
            Front-End Developer focused on clean UI and scalable systems.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <h4 className="site-footer__title">Pages</h4>
          <ul className="site-footer__links">
            <li>
              <NavLink to="/" end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
          </ul>
        </nav>

        <div className="site-footer__social">
          <h4 className="site-footer__title">Connect</h4>

          <div className="site-footer__icons">
            {contact.email && (
              <a
                href={`mailto:${contact.email}`}
                aria-label="Email"
                title="Email"
              >
                <FaEnvelope size={18} />
              </a>
            )}

            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin size={18} />
              </a>
            )}

            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub size={18} />
              </a>
            )}
          </div>
        </div>
      </div>

      <div className="site-footer__bottom">
        <span>
          © {new Date().getFullYear()} {fullName}. All rights reserved.
        </span>
      </div>
    </footer>
  );
}