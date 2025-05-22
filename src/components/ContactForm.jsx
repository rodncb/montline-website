import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Enviando...");

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Substitua pelo seu Service ID do EmailJS
        "YOUR_TEMPLATE_ID", // Substitua pelo seu Template ID do EmailJS
        form.current,
        "YOUR_PUBLIC_KEY" // Substitua pela sua Public Key do EmailJS
      )
      .then(
        (result) => {
          console.log("Email enviado com sucesso!", result.text);
          setStatus("Mensagem enviada com sucesso!");
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setTimeout(() => {
            setStatus("");
          }, 5000);
        },
        (error) => {
          console.log("Erro ao enviar email:", error.text);
          setStatus("Erro ao enviar mensagem. Tente novamente.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Nome"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="E-mail"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type="tel"
        name="phone"
        placeholder="Telefone"
        value={formData.phone}
        onChange={handleChange}
      />
      <textarea
        name="message"
        placeholder="Mensagem"
        value={formData.message}
        onChange={handleChange}
        required
      />
      <button type="submit" disabled={status === "Enviando..."}>
        {status === "Enviando..." ? "Enviando..." : "Enviar"}
      </button>
      {status && (
        <p
          className={
            status.includes("sucesso") ? "success-message" : "error-message"
          }
        >
          {status}
        </p>
      )}
    </form>
  );
}

export default ContactForm;
