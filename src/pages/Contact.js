import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";

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
