import React from "react";

export default function ClothingItem({ item, showPrice }) {
  return (
    <div style={{
      background: "#111",
      color: "#fff",
      borderRadius: "8px",
      padding: "16px",
      margin: "8px",
      minWidth: "250px",
      maxWidth: "350px",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
      textAlign: "left"
    }}>
      <img src={item.image} alt={item.name} style={{ width: "100%", borderRadius: "8px", marginBottom: "8px" }} />
      
      {/* Additional images if available */}
      {item.additionalImages && (
        <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
          {item.additionalImages.map((img, idx) => (
            <img key={idx} src={img} alt={`${item.name} ${idx + 2}`} 
                 style={{ width: "30%", borderRadius: "4px", cursor: "pointer" }} />
          ))}
        </div>
      )}
      
      <h3 style={{ margin: "0 0 8px 0", fontSize: "1.1em" }}>{item.name}</h3>
      
      {item.size && (
        <div style={{ fontSize: "0.9em", color: "#ccc", marginBottom: "4px" }}>
          Size: {item.size}
        </div>
      )}
      
      {item.condition && (
        <div style={{ fontSize: "0.9em", color: "#ccc", marginBottom: "8px" }}>
          Condition: {item.condition}
        </div>
      )}
      
      <p style={{ fontSize: "0.85em", color: "#bbb", lineHeight: "1.4", marginBottom: "12px" }}>
        {item.description.length > 150 ? item.description.substring(0, 150) + "..." : item.description}
      </p>
      
      {showPrice && item.price && (
        <div style={{ marginTop: "8px", fontWeight: "bold", fontSize: "1.2em", color: "#fff" }}>
          ${item.price}
        </div>
      )}
    </div>
  );
}
