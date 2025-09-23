import React from "react";

export default function ClothingItem({ item, showPrice }) {
  return (
    <div style={{
      background: "#111",
      color: "#fff",
      borderRadius: "8px",
      padding: "16px",
      margin: "8px",
      minWidth: "200px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      textAlign: "center"
    }}>
      <img src={item.image} alt={item.name} style={{ width: "100%", borderRadius: "8px" }} />
      <h3 style={{ margin: "12px 0 4px 0" }}>{item.name}</h3>
      <p style={{ fontSize: "0.95em", color: "#bbb" }}>{item.description}</p>
      {showPrice && item.price && (
        <div style={{ marginTop: "8px", fontWeight: "bold" }}>${item.price}</div>
      )}
    </div>
  );
}
