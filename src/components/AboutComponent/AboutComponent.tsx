import React from "react";
import Navbar from "../../layouts/Navbar/navbar.component";
//Pagewrapper for general screen transitions
import PageWrapper from "../../layouts/PageWrapper/pagewrapper";
//imports data from cv and styles
import cv from "../../data/cv.json";
import "./about.styles.scss";
//icons to links
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { IconType } from "react-icons";

type CV = typeof cv;

const socialIconMap: Record<string, IconType> = {
  LinkedIn: FaLinkedin,
  GitHub: FaGithub,
};
const formatLinks = (links: CV["profile"]["links"]) => {
const items: { label: string; url?: string }[] = [
    { label: "LinkedIn", url: links.linkedin },
    { label: "GitHub", url: links.github },
  ];

  return items.filter((i) => i.url && /^https?:\/\//i.test(i.url));
};

const About = () => {

  const data = cv as CV;
  const socialLinks = formatLinks(data.profile.links);

  return (
    <PageWrapper>
      <Navbar />
      <main className="about">
        {/* Hero (same diagonal vibe as your homepage hero) */}
        <section className="about-hero">
          <div className="about-hero__inner">
            <div className="about-hero__content">
              <p className="about-hero__kicker">ABOUT ME</p>
              <h1 className="about-hero__title">{data.profile.fullName}</h1>
              <p className="about-hero__subtitle">{data.profile.title}</p>
              <p className="about-hero__summary">{data.profile.summary}</p>

              <div className="about-hero__meta">
                <span>{data.profile.location.address}</span>
                <span>{data.profile.contact.phone}</span>
                <a href="mailto:ramezsamysabet@gmail.com">{data.profile.contact.email}</a>
              </div>

              {socialLinks.length > 0 && (
                <ul className="about-hero__social" aria-label="Social links">
                  {socialLinks.map((s) => {
                    const Icon = socialIconMap[s.label];

                    if (!Icon) return null;

                    return (
                      <li key={s.label}>
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={s.label}
                          title={s.label}
                        >
                          <Icon size={18} />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>

            <div className="about-hero__card">
              <h2 className="about-hero__cardTitle">Quick Profile</h2>

              <div className="about-hero__cardGrid">
                <div className="about-hero__kv">
                  <div className="about-hero__k">Location</div>
                  <div className="about-hero__v">
                    {data.profile.location.city},{" "}
                    {data.profile.location.country}
                  </div>
                </div>

                <div className="about-hero__kv">
                  <div className="about-hero__k">Phone</div>
                  <div className="about-hero__v">
                    {data.profile.contact.phone}
                  </div>
                </div>

                <div className="about-hero__kv">
                  <div className="about-hero__k">Email</div>
                  <div className="about-hero__v">
                  <a href="mailto:ramezsamysabet@gmail.com">{data.profile.contact.email}</a>
                  </div>
                </div>
              </div>

              <div className="about-hero__note">
                Tip: Navigate to Contact Page for a connection with me!
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section className="about-section">
          <div className="about-section__inner">
            <header className="about-section__header">
              <h2 className="about-section__title">Skills</h2>
              <p className="about-section__text">
                Technologies, tools, and strengths I use to build clean and
                scalable products.
              </p>
            </header>

            <div className="about-grid">
              <div className="about-card">
                <h3 className="about-card__title">Technical</h3>
                <div className="about-chips">
                  {data.skills.technical.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="about-card">
                <h3 className="about-card__title">Tools</h3>
                <div className="about-chips">
                  {data.skills.tools.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="about-card">
                <h3 className="about-card__title">Soft Skills</h3>
                <div className="about-chips">
                  {data.skills.soft.map((s) => (
                    <span className="chip" key={s}>
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="about-section about-section--purple">
          <div className="about-section__inner">
            <header className="about-section__header about-section__header--light">
              <h2 className="about-section__title">Experience</h2>
              <p className="about-section__text" style={{ color: "#e6e6e6" }}>
                Roles where I built workflows, shipped UI features, and
                supported users and systems.
              </p>
            </header>

            <div className="about-timeline">
              {data.experience.map((job) => (
                <article
                  className="about-job"
                  key={`${job.company}-${job.role}-${job.startDate}`}
                >
                  <header className="about-job__header">
                    <div>
                      <h3 className="about-job__role">{job.role}</h3>
                      <p className="about-job__company">{job.company}</p>
                    </div>
                    <span className="about-job__date">
                      {job.startDate} — {job.endDate}
                    </span>
                  </header>

                  <ul className="about-job__bullets">
                    {job.description.map((d) => (
                      <li key={d}>{d}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Education + Languages */}
        <section className="about-section">
          <div className="about-section__inner">
            <div className="about-grid about-grid--two">
              <div className="about-card">
                <h2 className="about-card__title">Education</h2>
                <div className="about-list">
                  {data.education.map((e) => (
                    <div
                      className="about-list__item"
                      key={`${e.institution}-${e.degree}`}
                    >
                      <h3 className="about-list__title">{e.degree}</h3>
                      <p className="about-list__muted">{e.institution}</p>
                      <p className="about-list__muted">
                        {e.startYear} — {e.endYear}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="about-card">
                <h2 className="about-card__title">Languages</h2>
                <div className="about-list">
                  {data.languages.map((l) => (
                    <div className="about-list__item" key={l.language}>
                      <h3 className="about-list__title">{l.language}</h3>
                      <p className="about-list__muted">{l.level}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="about-section">
          <div className="about-section__inner">
            <header className="about-section__header">
              <h2 className="about-section__title">Certificates & Courses</h2>
              <p className="about-section__text">
                Formal tracks and certifications supporting continuous growth.
              </p>
            </header>

            <div className="about-grid about-grid--three">
              {data.certifications.map((c) => (
                <div className="about-card" key={`${c.title}-${c.date}`}>
                  <h3 className="about-card__title">{c.title}</h3>
                  <p className="about-list__muted">{c.provider}</p>
                  <span className="about-badge">{c.date}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </PageWrapper>
  );
};

export default About;
