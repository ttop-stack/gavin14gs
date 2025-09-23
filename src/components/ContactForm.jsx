import React, { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [lastSubmitTime, setLastSubmitTime] = useState(0);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  // Simple validation and rate limiting
  function validateForm() {
    if (!form.name.trim() || form.name.length < 2 || form.name.length > 50) {
      alert("Name must be between 2-50 characters");
      return false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      alert("Please enter a valid email address");
      return false;
    }
    
    if (!form.message.trim() || form.message.length < 10 || form.message.length > 500) {
      alert("Message must be between 10-500 characters");
      return false;
    }
    
    // Rate limiting: 1 message per minute
    const now = Date.now();
    if (now - lastSubmitTime < 60000) {
      alert("Please wait 1 minute between submissions");
      return false;
    }
    
    return true;
  }

  async function handleSubmit(e) {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Store webhook URL (in production, consider using environment variables)
      const webhookUrl = "https://discord.com/api/webhooks/1420067973078581339/ZU-y99JPLhP-ijsTNzHGKdf_FzG2KR61AcS1PISrG3yD460nSMYAl4A5NVsq17cJiBYB";
      
      const payload = {
        embeds: [{
          title: "New Contact Form Submission - Gavin14gs",
          color: 0x000000,
          fields: [
            {
              name: "Name",
              value: form.name.trim(),
              inline: true
            },
            {
              name: "Email",
              value: form.email.trim(),
              inline: true
            },
            {
              name: "Message",
              value: form.message.trim(),
              inline: false
            },
            {
              name: "Source",
              value: "Website Contact Form",
              inline: true
            }
          ],
          timestamp: new Date().toISOString(),
          footer: {
            text: "Gavin14gs Website"
          }
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
        setLastSubmitTime(Date.now());
        setForm({ name: "", email: "", message: "" });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending to Discord:', error);
      alert('Failed to send message. Please try again later.');
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
        placeholder="Your Name (2-50 characters)"
        value={form.name}
        onChange={handleChange}
        maxLength={50}
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
        placeholder="Message (10-500 characters)"
        value={form.message}
        onChange={handleChange}
        maxLength={500}
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
