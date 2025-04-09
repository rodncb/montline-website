import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <p>Contato: tasso.btr@outlook.com | +55 24 999112822</p>
        <p>Horário de Atendimento: Segunda à sexta: 08h às 17h</p>
        <p>&copy; {currentYear} MONTLINE. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
