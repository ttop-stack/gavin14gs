import React from "react";

export default function Header() {
  return (
    <header style={{
      background: "#111",
      color: "#fff",
      padding: "24px 0 8px 0",
      textAlign: "center",
      borderBottom: "1px solid #222"
    }}>
      <h1 style={{ fontWeight: 700, fontSize: "2.2em", letterSpacing: "2px" }}>Minimalist Black Clothing</h1>
      <nav style={{ marginTop: 12 }}>
        <a href="/" style={{ color: "#fff", margin: "0 16px", textDecoration: "none" }}>Home</a>
        <a href="/sell" style={{ color: "#fff", margin: "0 16px", textDecoration: "none" }}>Sell</a>
        <a href="/archive" style={{ color: "#fff", margin: "0 16px", textDecoration: "none" }}>Archive</a>
        <a href="/contact" style={{ color: "#fff", margin: "0 16px", textDecoration: "none" }}>Contact</a>
      </nav>
    </header>
  );
}
