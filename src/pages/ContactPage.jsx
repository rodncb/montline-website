import React from "react";
import ContactForm from "../components/ContactForm";
import MapEmbed from "../components/MapEmbed";

function ContactPage() {
  return (
    <main>
      <div className="container">
        <h1>Entre em Contato</h1>
        <p>
          Estamos localizados na cidade de Resende/RJ e contamos com equipe
          multifuncional para atender dentro e fora do Estado do Rio de Janeiro.
        </p>
        <div className="contact-container">
          <div className="contact-form">
            <ContactForm />
          </div>
          <div className="contact-info">
            <h2>Informações de Contato</h2>
            <p>
              <strong>Horário de Atendimento:</strong> Segunda à sexta: 08h às
              17h
            </p>
            <p>
              <strong>E-mail:</strong> tasso.btr@outlook.com
            </p>
            <p>
              <strong>Telefone:</strong> +55 24 999112822
            </p>
          </div>
        </div>
        <div className="map-section">
          <h2>Nossa Localização</h2>
          <MapEmbed />
        </div>
      </div>
    </main>
  );
}

export default ContactPage;
