import React from "react";
import './HomeComponent.styles.scss';
import personImg from "../../assets/profile.png"
//Pagewrapper for general transactions
import PageWrapper from "../../layouts/PageWrapper/pagewrapper";

//imported components
import Navbar from "../../layouts/Navbar/navbar.component";
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Home = () => {
  return (
    <PageWrapper>
      <Navbar />
      <main className="container">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__inner">
            <div className="hero__content">
              <p className="hero__kicker">Hi, I am</p>
              <h1 id="hero-title" className="hero__title">
                Ramez Samy
              </h1>
              <p className="hero__subtitle">
                React Front-End Developer / Microsoft Automation Developer
              </p>

              <ul className="hero__social" aria-label="Social links">
                <li>
                  <a
                    href="https://github.com/ramouza"
                    aria-label="GitHub"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/ramez-samy-b399222a9/"
                    aria-label="LinkedIn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </li>
              </ul>
            </div>

            <div className="hero__visual" aria-hidden="true">
              <img
                className="hero__photo"
                src={personImg}
                alt="Ramez's Profile Picture"
              />
            </div>
          </div>
        </section>

        <section className="feature" aria-labelledby="feature-title">
          <div className="feature__inner">
            <h2 id="feature-title" className="feature__title">
              IT BERRIES
            </h2>
            <p className="feature__text">...your paragraph here...</p>
            <a className="feature__link" href="#more">
              Read more
            </a>
          </div>
        </section>
      </main>
      <footer className="site-footer">
        <small>© 2026</small>
      </footer>
    </PageWrapper>
  );
};

export default Home;
