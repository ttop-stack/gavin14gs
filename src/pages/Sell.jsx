import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ClothingList from "../components/ClothingList.jsx";

export default function Sell() {
  const [forSale, setForSale] = useState([]);

  useEffect(() => {
    fetch("/src/data/clothesForSale.json")
      .then(res => res.json())
      .then(setForSale);
  }, []);

  return (
    <div style={{ background: "#000", minHeight: "100vh" }}>
      <Header />
      <main style={{ maxWidth: 900, margin: "0 auto", padding: "32px 16px" }}>
        <h2 style={{ color: "#fff", marginBottom: 16 }}>Clothes For Sale</h2>
        <ClothingList items={forSale} showPrice={true} />
      </main>
      <Footer />
    </div>
  );
}
