"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  projects_data,
  experiences_data,
  documentation_data,
  contact_data,
  testimonial_data,
  skills_data,
} from "./component/data";
import ContactModal from "../app/component/contact";
import SiteNavbar from "../app/component/navbar";
import Hero from "../app/component/hero";

export default function Home() {
  const [expanded, setExpanded] = useState<number[]>([]);

  const toggleExpand = (index: number) => {
    setExpanded((prevExpanded) =>
      prevExpanded.includes(index)
        ? prevExpanded.filter((i) => i !== index)
        : [...prevExpanded, index]
    );
  };

  return (
    <div>
      <SiteNavbar />

      <Hero />

      {/* PROJECTS SECTION */}
      <section id="projects" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Projects I&apos;d Worked On</h2>
          </div>

          {projects_data.map((project, idx) => {
            const isReversed = idx % 2 === 1;
            const variant = isReversed ? "light" : "dark";

            return (
              <div
                key={idx}
                className={`project-row ${isReversed ? "reversed" : ""}`}
              >
                <div className={`project-card variant-${variant}`}>
                  <small className="project-eyebrow">Project</small>

                  <h3 className="card-title">{project.title}</h3>

                  <p className="card-text">{project.description}</p>

                  <div className="tech-pills">
                    {project.technology.split(" | ").map((tech, techIdx) => (
                      <span key={techIdx} className="tech-pill">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {project.href &&
                    (project.href.startsWith("/") ? (
                      <Link href={project.href} className="project-btn">
                        Read Case Study
                      </Link>
                    ) : (
                      <a
                        href={project.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-btn"
                      >
                        View Details
                      </a>
                    ))}
                </div>

                {project.projectImages[0] && (
                  <div className="project-media">
                    <div className="project-image-frame">
                      <Image
                        src={`/assets/projects/${project.projectImages[0]}`}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 40vw"
                        style={{
                          objectFit: "cover",
                          objectPosition: project.imagePosition ?? "center",
                        }}
                      />
                    </div>
                    <div className="project-caption">
                      <small className="project-caption-kicker">
                        {project.subsubtitle}
                      </small>
                      <div className="text-muted-small">{project.subtitle}</div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Experience</h2>
          </div>

          <div className="timeline">
            <div className="timeline-rail"></div>

            {experiences_data.map((exp, idx) => (
              <div key={idx} className="timeline-item">
                <div className="timeline-dot"></div>

                <div className="surface-card hoverable timeline-card">
                  <div className="timeline-body">
                    <h3 className="timeline-place">{exp.place}</h3>
                    <div className="timeline-position">{exp.position}</div>
                    <div className="timeline-date text-muted-small">{exp.date}</div>
                    <p className="card-text">{exp.job_description}</p>
                    {exp.highlights && (
                      <ul className="timeline-highlights">
                        {exp.highlights.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {exp.banner[0] && (
                    <a
                      href={exp.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="timeline-banner-link"
                    >
                      <div className="timeline-banner-frame">
                        <Image
                          src={`/assets/banner/${exp.banner[0]}`}
                          alt={exp.place}
                          fill
                          sizes="220px"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Skills &amp; Tools</h2>
          </div>

          <div className="surface-card skills-board">
            {skills_data.map((skill, idx) => (
              <div key={idx} className="skills-col">
                <h3 className="skills-group">{skill.group}</h3>
                <ul className="skills-list">
                  {skill.items.map((item, i) => (
                    <li key={i}>
                      {item.icon ? (
                        <svg
                          className="skill-icon"
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          focusable="false"
                        >
                          <path d={item.icon.path} />
                        </svg>
                      ) : (
                        <span className="skill-icon" aria-hidden="true" />
                      )}
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DOCUMENTATION SECTION */}
      <section id="documentation" className="section section-alt">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Documentation</h2>
          </div>

          {documentation_data.map((doc, idx) => (
            <div key={idx} className="doc-group">
              <h3 className="card-title doc-title">{doc.title}</h3>

              <div className="doc-grid">
                {doc.img1.map((img, i) => (
                  <div key={i} className="surface-card hoverable doc-card">
                    <div className="doc-card-image">
                      <Image
                        src={`/assets/documentation/${doc.folder}/${img}`}
                        alt={`${doc.title} ${i + 1}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="doc-caption">{doc.caption[i]}</div>
                  </div>
                ))}
              </div>

              <div className="doc-credits text-muted-small">{doc.credits}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section id="testimonials" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-heading">Testimonials</h2>
          </div>

          <div className="testimonial-grid">
            {testimonial_data.map((test, idx) => (
              <div key={idx} className="surface-card hoverable testimonial-card">
                <div className="testimonial-quote-wrap">
                  <p
                    className={`testimonial-quote ${
                      expanded.includes(idx) ? "" : "clamped"
                    }`}
                  >
                    {test.testimony}
                  </p>

                  {!expanded.includes(idx) && <div className="testimonial-fade" />}
                </div>

                <button
                  type="button"
                  onClick={() => toggleExpand(idx)}
                  className="read-more-btn"
                >
                  {expanded.includes(idx) ? "Read Less" : "Read More"}
                </button>

                <div className="testimonial-author">
                  <div className="testimonial-avatar">{test.name.charAt(0)}</div>
                  <div>
                    <div className="testimonial-name">{test.name}</div>
                    <div className="text-muted-small">{test.position}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GET IN TOUCH SECTION */}
      <section id="contact" className="section section-alt">
        <div className="container">
          <div className="contact-intro">
            <h1 className="contact-eyebrow">Get in Touch</h1>
            <h2 className="section-heading">Let&apos;s Work Together</h2>
            <p className="section-subtext">
              I&apos;m open to new opportunities involving software
              engineering: mobile and web, UI/UX, project management, and
              development.
            </p>
            <div className="cta-row">
              <a href="/assets/Pajarilla_resume.pdf" download className="btn-glee-primary">
                Download CV
              </a>
              <ContactModal />
            </div>
          </div>

          <div className="contact-links">
            {contact_data.map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <div className="contact-icon-badge">
                  <div style={{ position: "relative", width: 22, height: 22 }}>
                    <Image
                      src={`/assets/contact/${contact.image[0]}`}
                      alt={contact.type}
                      fill
                      sizes="22px"
                      style={{ objectFit: "contain" }}
                    />
                  </div>
                </div>
                <div className="contact-icon-label">{contact.type}</div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="glee-footer">
        <div className="container">
          © {new Date().getFullYear()} Gliezel Ann Pajarilla.
        </div>
      </footer>
    </div>
  );
}
