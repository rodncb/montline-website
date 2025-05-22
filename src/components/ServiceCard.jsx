import React from "react";

function ServiceCard({ title, description, image }) {
  return (
    <div className="service-card">
      {image && (
        <div className="service-image">
          <img src={image} alt={title} className="service-img" />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

export default ServiceCard;
