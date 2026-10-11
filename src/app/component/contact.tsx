"use client";
import { useRef } from "react";

export default function ContactModal() {
  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleShow = () => dialogRef.current?.showModal();
  const handleClose = () => dialogRef.current?.close();

  return (
    <>
      <button type="button" className="btn-glee-outline" onClick={handleShow}>
        Contact Me
      </button>

      <dialog
        ref={dialogRef}
        className="glee-modal"
        aria-labelledby="contact-modal-title"
        onClick={(e) => {
          // Clicks on the backdrop target the <dialog> itself
          if (e.target === e.currentTarget) handleClose();
        }}
      >
        <div className="glee-modal-header">
          <h2 id="contact-modal-title" className="glee-modal-title">
            Send a Message
          </h2>
          <button
            type="button"
            className="glee-modal-close"
            aria-label="Close"
            onClick={handleClose}
          >
            &times;
          </button>
        </div>

        <div className="glee-modal-body">
          <form action="https://formspree.io/f/xqakzdqa" method="POST">
            <div className="form-group">
              <label htmlFor="contact-name" className="form-label">Your Name</label>
              <input id="contact-name" className="form-control" type="text" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="contact-email" className="form-label">Your Email</label>
              <input id="contact-email" className="form-control" type="email" name="email" required />
            </div>

            <div className="form-group form-group-last">
              <label htmlFor="contact-message" className="form-label">Message</label>
              <textarea id="contact-message" className="form-control" rows={4} name="message" required />
            </div>

            <button type="submit" className="btn-glee-primary btn-block">
              Send Message
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
