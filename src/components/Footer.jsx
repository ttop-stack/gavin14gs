import React from "react";

export default function Footer() {
  return (
    <footer style={{
      background: "#111",
      color: "#bbb",
      textAlign: "center",
      padding: "24px 0 12px 0",
      marginTop: 48,
      fontSize: "0.95em"
    }}>
      &copy; {new Date().getFullYear()} Gavin14gs. All rights reserved.
    </footer>
  );
}
