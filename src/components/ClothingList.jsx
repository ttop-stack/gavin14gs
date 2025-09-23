import React from "react";
import ClothingItem from "./ClothingItem.jsx";

export default function ClothingList({ items, showPrice }) {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      gap: "24px",
      justifyContent: "center",
      margin: "32px 0"
    }}>
      {items.map(item => (
        <ClothingItem key={item.id} item={item} showPrice={showPrice} />
      ))}
    </div>
  );
}
