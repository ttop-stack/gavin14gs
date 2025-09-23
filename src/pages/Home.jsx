import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClothingList from "../components/ClothingList.jsx";
import ContactForm from "../components/ContactForm";

export default function Home() {
  const [forSale, setForSale] = useState([]);
  const [archive, setArchive] = useState([]);

  useEffect(() => {
    fetch("/src/data/clothesForSale.json")
      .then(res => res.json())
      .then(setForSale);
    fetch("/src/data/clothesArchive.json")
      .then(res => res.json())
      .then(setArchive);
  }, []);

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Header />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
        <h2 style={{ color: "#fff", marginBottom: 16 }}>Clothes For Sale</h2>
        <ClothingList items={forSale} showPrice={true} />
        <h2 style={{ color: "#fff", margin: "40px 0 16px 0" }}>Archive</h2>
        <ClothingList items={archive} showPrice={false} />
        <div style={{ marginTop: 48 }}>
          <ContactForm />
        </div>
      </main>
      <Footer />
    </div>
  );
}
