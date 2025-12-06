"use client";

import React from "react";
import Image from "next/image";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { projects_data, experiences_data, contact_data} from "./component/data";
import ContactModal from "../app/component/contact";


export default function Home() {
  return (
    <div>
      {/* HEADER SECTION */}
      <section className="py-3 mb-5" style={{ marginTop: "10vh" }}>
        <Container fluid style={{ maxWidth: "82%" }}>
          <Row className="w-100 mb-4">
            {/* PROFILE */}
            <Col md={4}>
              <Card
                className="shadow-sm text-center"
                style={{ backgroundColor: "#f0f0f0", borderRadius: "8px" }}
              >
                <Card.Body>
                  {/* Profile Image */}
                  <div className="mb-3">
                    <Image
                      src="/assets/CS16.jpg"
                      width={200}
                      height={200}
                      alt="Profile"
                      className="img-fluid rounded shadow"
                      style={{ objectFit: "cover" }}
                    />
                  </div>

                  {/* Name */}
                  <Card.Title className="fw-bold mb-2.5">
                    Pajarilla, Gliezel Ann
                  </Card.Title>
                  <Card.Text className="mb-1" style={{ lineHeight: "1px" }}>
                    BS Computer Science
                  </Card.Text>
                  <Card.Text className="mb-1">Iloilo, Philippines</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* INTRO TEXT */}
            <Col
              md={8}
              className="mb-5"
              style={{ paddingLeft: "50px", paddingTop: "50px" }}
            >
              <h1 className="fw-bold" style={{ fontSize: "2.5rem" }}>
                Research-driven projects are the building blocks of our society
              </h1>
              <p className="fst-normal" style={{ fontSize: "1.5rem" }}>
                Extracting meaning and insights from data, creating projects
                that are building blocks to something that creates impacts are
                my inspiration. I am enthusiastic in working with projects that
                promote welfare and development.
              </p>

              <div className="d-flex justify-content-center gap-2 mb-3">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/assets/Pajarilla_resume.pdf";
                    link.setAttribute("download", "Pajarilla_resume.pdf");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Download CV
                </button>
                {/* <Button as="a" href="mailto:pajarilla.gliezelann@gmail.com" className="btn btn-success">Contact Me</Button> */}
                <ContactModal />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* PROJECTS SECTION */}
      <section className="py-5">
        <Container>
          <h1 className="fw-bold mb-4 text-center">Projects I'd Worked On</h1>
          

          {/* LOOP THROUGH ALL PROJECTS */}
          {projects_data.map((project, idx) => {
            const isReversed = idx % 2 === 1; // alternating layout

            return (
              <div key={idx} className="mb-5">
                <Row className="align-items-center">
                  {/* IMAGE LEFT IF REVERSED */}
                  {isReversed && project.projectImages[0] && (
                    <Col md={4}>
                      <div className="text-center">
                        <Image
                          src={`/assets/projects/${project.projectImages[0]}`}
                          width={300}
                          height={200}
                          alt={project.title}
                          className="img-fluid rounded shadow"
                          style={{ objectFit: "cover" }}
                        />
                        <div className="mt-2">
                          <small className="text-uppercase fw-bold">
                            {project.subsubtitle}
                          </small>
                          <div className="text-muted">{project.subtitle}</div>
                        </div>
                      </div>
                    </Col>
                  )}

                  {/* DESCRIPTION */}
                  <Col md={8}>
                    <div
                      className="p-4"
                      style={{
                        backgroundColor: isReversed ? "#f8f9fa" : "#2c3e50",
                        color: isReversed ? "black" : "white",
                        borderRadius: "8px",
                        border: isReversed ? "1px solid #dee2e6" : "none",
                      }}
                    >
                      <small
                        className={`text-uppercase fw-bold mb-2 d-block ${
                          isReversed ? "text-primary" : "text-warning"
                        }`}
                      >
                        Project
                      </small>

                      <h3 className="fw-bold mb-3">{project.title}</h3>

                      <p className="mb-3">{project.description}</p>

                      {/* TECHNOLOGY TAGS */}
                      <div className="d-flex flex-wrap gap-2 mb-3">
                        {project.technology
                          .split(" | ")
                          .map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className={`px-3 py-1 rounded-pill ${
                                isReversed
                                  ? "bg-primary text-white"
                                  : "bg-light text-dark"
                              }`}
                              style={{
                                fontSize: "0.85rem",
                                fontWeight: 500,
                                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                      </div>

                      <Button
                        variant={
                          isReversed ? "outline-primary" : "outline-light"
                        }
                        size="sm"
                      >
                        VIEW DETAILS
                      </Button>
                    </div>
                  </Col>

                  {/* IMAGE RIGHT IF NOT REVERSED */}
                  {!isReversed && project.projectImages[0] && (
                    <Col md={4}>
                      <div className="text-center">
                        <Image
                          src={`/assets/projects/${project.projectImages[0]}`}
                          width={300}
                          height={200}
                          alt={project.title}
                          className="img-fluid rounded shadow"
                          style={{ objectFit: "cover" }}
                        />
                        <div className="mt-2">
                          <small className="text-uppercase fw-bold">
                            {project.subsubtitle}
                          </small>
                          <div className="text-muted">{project.subtitle}</div>
                        </div>
                      </div>
                    </Col>
                  )}
                </Row>
              </div>
            );
          })}
        </Container>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="py-5">
        <div className="container">
          <h1 className="fw-bold mb-5 text-center">Experiences</h1>

          <div className="position-relative">
            <div
              className="position-absolute top-0 start-0"
              style={{
                width: "4px",
                height: "100%",
                backgroundColor: "#5e5d5cff",
              }}
            ></div>

            <div className="timeline">
              {experiences_data.map((exp, idx) => (
                <div
                  key={idx}
                  className="d-flex mb-5 position-relative align-items-start"
                >
                  {/* Dot */}
                  <div
                    className="rounded-circle bg-warning position-absolute"
                    style={{
                      width: "16px",
                      height: "16px",
                      left: "-6px",
                      top: "10px",
                    }}
                  ></div>

                  {/* Content and Image inline */}
                  <div className="ms-5 d-flex w-100 gap-4 align-items-stretch">
                    {/* Text content */}
                    <div className="flex-grow-1 p-4 bg-white rounded shadow">
                      <small className="text-warning text-uppercase fw-bold mb-1 d-block">
                        Experience
                      </small>
                      <h3 className="fw-bold mb-1">{exp.place}</h3>
                      <div className="mb-1">{exp.position}</div>
                      <div className="mb-2 text-muted">{exp.date}</div>
                      <p className="mb-0">{exp.job_description}</p>
                    </div>

                    {/* Image */}
                    {exp.banner[0] && (
                      <div className="flex-shrink-0 d-flex">
                        <Image
                          src={`/assets/banner/${exp.banner[0]}`}
                          alt={exp.place}
                          width={300}
                          height={200}
                          className="img-fluid rounded shadow"
                          style={{ objectFit: "cover", height: "100%" }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* GET IN TOUCH SECTION */}
      <section className="py-5 mt-10" style={{ minHeight: "85vh" }}>
        <Container>
          {/* Centered Heading and Text */}
          <Row className="justify-content-center text-center mb-5">
            <Col md={8}>
              <h1 className="mb-3" style={{ fontSize: "1.5rem" }}>
                Get in Touch
              </h1>
              <h2 className="fw-bold mb-3" style={{ fontSize: "2.5rem" }}>
                Let's Work Together
              </h2>
              <p>
                I'm open to new opportunities involving software engineering:
                mobile and web, UI/UX, project management, and development.
              </p>
              <div className="d-flex justify-content-center gap-2 mb-3">
                <button
                  className="btn btn-primary"
                  onClick={() => {
                    const link = document.createElement("a");
                    link.href = "/assets/Pajarilla_resume.pdf";
                    link.setAttribute("download", "Pajarilla_resume.pdf");
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  }}
                >
                  Download CV
                </button>
                <ContactModal />
              </div>
            </Col>
          </Row>

          <Row>
            <Col className="d-flex justify-content-end gap-2">
              {contact_data.map((contact, idx) => (
                <div key={idx} className="text-end">
                  <a
                    href={contact.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={`/assets/contact/${contact.image[0]}`}
                      width={30}
                      height={40}
                      alt={contact.type}
                      className="img-fluid rounded shadow"
                      style={{ objectFit: "cover" }}
                    />
                  </a>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}
