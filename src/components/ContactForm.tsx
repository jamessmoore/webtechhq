"use client";
import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [fields, setFields] = useState({ name: "", email: "", message: "" });

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const to = atob("d2VidGVjaGhxQGdtYWlsLmNvbQ==");
    const subject = encodeURIComponent(`[WebTechHQ] Message from ${fields.name}`);
    const body = encodeURIComponent(
      `Name: ${fields.name}\nEmail: ${fields.email}\n\n${fields.message}`
    );
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  if (sent) {
    return (
      <p className="blade-body-text text-center">
        MESSAGE RECEIVED. I WILL BE IN TOUCH.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-lg">
      <div className="flex flex-col gap-2">
        <label className="blade-field-label">NAME</label>
        <input
          name="name"
          type="text"
          required
          className="blade-input"
          autoComplete="name"
          value={fields.name}
          onChange={(e) => setFields({ ...fields, name: e.target.value })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="blade-field-label">EMAIL ADDRESS</label>
        <input
          name="email"
          type="email"
          required
          className="blade-input"
          autoComplete="email"
          value={fields.email}
          onChange={(e) => setFields({ ...fields, email: e.target.value })}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="blade-field-label">MESSAGE</label>
        <textarea
          name="message"
          required
          rows={6}
          className="blade-input blade-textarea"
          value={fields.message}
          onChange={(e) => setFields({ ...fields, message: e.target.value })}
        />
      </div>

      <button type="submit" className="blade-btn">
        TRANSMIT
      </button>
    </form>
  );
}
