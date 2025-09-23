import React from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ContactForm from "../components/ContactForm.jsx";

export default function Contact() {
  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Header />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
