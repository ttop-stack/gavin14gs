import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Send to Discord webhook
      const webhookUrl = "https://discord.com/api/webhooks/1420067973078581339/ZU-y99JPLhP-ijsTNzHGKdf_FzG2KR61AcS1PISrG3yD460nSMYAl4A5NVsq17cJiBYB";
      
      const payload = {
        embeds: [{
          title: "New Contact Form Submission - Gavin14gs",
          color: 0x000000, // Black color to match the theme
          fields: [
            {
              name: "Name",
              value: form.name,
              inline: true
            },
            {
              name: "Email",
              value: form.email,
              inline: true
            },
            {
              name: "Message",
              value: form.message,
              inline: false
            }
          ],
          timestamp: new Date().toISOString()
        }]
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending to Discord:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
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
      <button type="submit" disabled={isSubmitting} style={{ 
        background: isSubmitting ? "#666" : "#fff", 
        color: "#111", 
        padding: "8px 16px", 
        border: "none", 
        borderRadius: 4, 
        cursor: isSubmitting ? "not-allowed" : "pointer" 
      }}>
        {isSubmitting ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
