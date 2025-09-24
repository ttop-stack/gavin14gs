import React, { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";
import ClothingList from "../components/ClothingList.jsx";
import clothesForSaleData from "../data/clothesForSale.json";

export default function Sell() {
  const [forSale, setForSale] = useState([]);

  useEffect(() => {
    setForSale(clothesForSaleData);
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
