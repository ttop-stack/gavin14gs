import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClothingList from "../components/ClothingList";

export default function Archive() {
  const [archive, setArchive] = useState([]);

  useEffect(() => {
    fetch("/src/data/clothesArchive.json")
      .then(res => res.json())
      .then(setArchive);
  }, []);

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Header />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
        <h2 style={{ color: "#fff", marginBottom: 16 }}>Archive</h2>
        <ClothingList items={archive} showPrice={false} />
      </main>
      <Footer />
    </div>
  );
}
