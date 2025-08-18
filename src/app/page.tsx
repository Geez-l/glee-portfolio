"use client";
import Image from "next/image";
import styles from "./page.module.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Card from "react-bootstrap/Card";
import Navbar from "react-bootstrap/Navbar";
import {Row, Col, Container} from "react-bootstrap";
import  Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";


export default function Home() {
  return (
    <div>
      <section>
        {/* NAVBAR */}
        <Navbar bg="light" expand="lg" className="mb-3">
          <Container>
            {/* <Navbar.Brand href="#home">Portfolio</Navbar.Brand> */}
            <Nav className="ms-auto">
              <Button variant="outline-sucess">Download CV</Button>
            </Nav>
          </Container>
        </Navbar>

        {/* FIRST PART OF CV */}
        <Container fluid>
          <Row className="w-100 mb-2">
            {/* PROFILE */}
            <Col md={4}>
              <Card>
                <Image
                  src="/assets/CS16.jpg"
                  width={300}
                  height={400}
                  alt="Profile"
                />
                <Card.Body>
                  <Card.Title>Pajarilla, Gliezel Ann </Card.Title>
                  <Card.Text>BS Computer Science</Card.Text>
                  <Card.Text>Iloilo, Philippines</Card.Text>
                </Card.Body>
              </Card>
            </Col>

            {/* Intro Text */}
            <Col md={4}>
              <h1 className="fw-bold">
                Research-driven projects are the building blocks of our society
              </h1>
              <p className="fst-normal">
                Extracting meaning and insights from data, creating projects
                that are building blocks to something that creates impacts are
                my inspiration. I am enthusiastic in working with projects that
                promotes welfare and development.
              </p>

              <div className="d-flex gap-2 mb-3">
                <Button variant="outline-primary">Download CV</Button>
                <Button variant="outline-primary">Contact Me</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <h1 className="fw-fold">Projects I'd Worked On</h1>
        <div className="container">
          <h5 className="fs-6">Featured Project</h5>
          <h2 className="fw-fold">The Philippine Sponge Guide</h2>
          <div className="container-text">
            <h5 className="fs-6">
              The Philippine Sponge Guide is a searchable database of
              information on marine sponges in the Philippines as collected by
              the Marine Science Institute of the University of the Philippines
              Diliman (UP MSI).</h5>
          </div>
          <div className="container-bottom">
            
          </div>
        </div>
      </section>
    </div>
  );
}
