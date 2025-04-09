import React from "react";

function MapEmbed() {
  return (
    <div className="map-container">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58994.421232629885!2d-44.49071016161695!3d-22.468991066066615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9e83329d81f001%3A0xc6d14a5a75f8b82d!2sResende%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1681160807206!5m2!1spt-BR!2sbr"
        width="100%"
        height="300"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapEmbed;
