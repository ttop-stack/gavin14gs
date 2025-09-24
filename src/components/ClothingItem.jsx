import React, { useState } from "react";

export default function ClothingItem({ item, showPrice }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const allImages = [item.image, ...(item.additionalImages || [])];

  return (
    <>
      <div style={{
        background: "#111",
        color: "#fff",
        borderRadius: "8px",
        padding: "16px",
        margin: "8px",
        minWidth: "250px",
        maxWidth: "350px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
        textAlign: "left",
        cursor: "pointer",
        transition: "transform 0.2s, box-shadow 0.2s",
        transform: isExpanded ? "scale(1.02)" : "scale(1)",
      }}
      onClick={toggleExpanded}>
        
        <img 
          src={item.image} 
          alt={item.name} 
          style={{ 
            width: "100%", 
            borderRadius: "8px", 
            marginBottom: "8px",
            cursor: "pointer"
          }}
          onClick={(e) => {
            e.stopPropagation();
            handleImageClick(item.image);
          }}
        />
        
        {/* Additional images if available */}
        {item.additionalImages && (
          <div style={{ display: "flex", gap: "4px", marginBottom: "12px" }}>
            {item.additionalImages.map((img, idx) => (
              <img 
                key={idx} 
                src={img} 
                alt={`${item.name} ${idx + 2}`} 
                style={{ 
                  width: "30%", 
                  borderRadius: "4px", 
                  cursor: "pointer",
                  transition: "opacity 0.2s"
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  handleImageClick(img);
                }}
                onMouseEnter={(e) => e.target.style.opacity = "0.8"}
                onMouseLeave={(e) => e.target.style.opacity = "1"}
              />
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
        
        <p style={{ 
          fontSize: "0.85em", 
          color: "#bbb", 
          lineHeight: "1.4", 
          marginBottom: "12px",
          maxHeight: isExpanded ? "none" : "60px",
          overflow: isExpanded ? "visible" : "hidden"
        }}>
          {isExpanded ? item.description : (item.description.length > 150 ? item.description.substring(0, 150) + "..." : item.description)}
        </p>

        {/* Measurements if expanded */}
        {isExpanded && item.measurements && (
          <div style={{ 
            fontSize: "0.8em", 
            color: "#aaa", 
            marginBottom: "12px",
            background: "#222",
            padding: "8px",
            borderRadius: "4px"
          }}>
            <strong>Measurements:</strong><br />
            {Object.entries(item.measurements).map(([key, value]) => (
              <span key={key}>{key.charAt(0).toUpperCase() + key.slice(1)}: {value} | </span>
            ))}
          </div>
        )}
        
        {showPrice && item.price && (
          <div style={{ marginTop: "8px", fontWeight: "bold", fontSize: "1.2em", color: "#fff" }}>
            ${item.price}
          </div>
        )}

        <div style={{ 
          fontSize: "0.8em", 
          color: "#888", 
          marginTop: "8px",
          textAlign: "center"
        }}>
          {isExpanded ? "Click to collapse" : "Click for details"}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div 
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.9)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 1000,
            cursor: "pointer"
          }}
          onClick={closeImageModal}
        >
          <div style={{ position: "relative", maxWidth: "90%", maxHeight: "90%" }}>
            <img 
              src={selectedImage} 
              alt={item.name}
              style={{ 
                maxWidth: "100%", 
                maxHeight: "100%", 
                borderRadius: "8px",
                boxShadow: "0 4px 20px rgba(0,0,0,0.5)"
              }}
            />
            <button
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                background: "#fff",
                color: "#000",
                border: "none",
                borderRadius: "50%",
                width: "30px",
                height: "30px",
                cursor: "pointer",
                fontSize: "18px",
                fontWeight: "bold"
              }}
              onClick={closeImageModal}
            >
              ×
            </button>
            
            {/* Image navigation if multiple images */}
            {allImages.length > 1 && (
              <div style={{
                position: "absolute",
                bottom: "10px",
                left: "50%",
                transform: "translateX(-50%)",
                display: "flex",
                gap: "8px"
              }}>
                {allImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`${item.name} ${idx + 1}`}
                    style={{
                      width: "50px",
                      height: "50px",
                      objectFit: "cover",
                      borderRadius: "4px",
                      cursor: "pointer",
                      border: img === selectedImage ? "2px solid #fff" : "2px solid transparent",
                      opacity: img === selectedImage ? 1 : 0.7
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(img);
                    }}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
