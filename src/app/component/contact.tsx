"use client";
import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

export default function ContactModal() {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <>
      {/* Button that opens the modal */}
      {/* <Button variant="outline-primary" onClick={handleShow}>
        Contact Me
      </Button> */}
      <button type="button" className="btn btn-success" onClick={handleShow}>Contact Me</button>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Send a Message</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form action="https://formspree.io/f/xqakzdqa" method="POST">
            <Form.Group className="mb-3">
              <Form.Label>Your Name</Form.Label>
              <Form.Control type="text" name="name" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Your Email</Form.Label>
              <Form.Control type="email" name="email" required />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={4} name="message" required />
            </Form.Group>

            <Button variant="primary" type="submit" className="w-100">
              Send Message
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}
