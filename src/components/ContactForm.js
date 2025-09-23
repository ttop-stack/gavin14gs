import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // In production, send to backend or email service
  }

  if (submitted) {
    return <div style={{ color: "#fff", marginTop: 16 }}>Thank you for contacting us!</div>;
  }

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 400, margin: "0 auto", color: "#fff" }}>
      <h2 style={{ color: "#fff" }}>Contact</h2>
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        value={form.name}
        onChange={handleChange}
        style={{ width: "100%", padding: 8, marginBottom: 8, background: "#222", color: "#fff", border: "none", borderRadius: 4 }}
        required
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        value={form.email}
        onChange={handleChange}
        style={{ width: "100%", padding: 8, marginBottom: 8, background: "#222", color: "#fff", border: "none", borderRadius: 4 }}
        required
      />
      <textarea
        name="message"
        placeholder="Message"
        value={form.message}
        onChange={handleChange}
        style={{ width: "100%", padding: 8, marginBottom: 8, background: "#222", color: "#fff", border: "none", borderRadius: 4, minHeight: 80 }}
        required
      />
      <button type="submit" style={{ background: "#fff", color: "#111", padding: "8px 16px", border: "none", borderRadius: 4, cursor: "pointer" }}>
        Send
      </button>
    </form>
  );
}
