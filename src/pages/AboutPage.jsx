import React from "react";

function AboutPage() {
  return (
    <main>
      <div className="container">
        <h1>Sobre Nós</h1>
        <section>
          <h2>Missão</h2>
          <p>
            A MONTLINE quer sempre oferecer aos seus clientes e parceiros de
            negócio, soluções completas em engenharia e montagens industriais
            com segurança, qualidade e inovação.
          </p>
        </section>
        <section>
          <h2>Visão</h2>
          <p>
            Queremos estar sempre entre as melhores opções de negócio no ramos
            de Engenharia e Montagens Industriais do Brasil.
          </p>
        </section>
        <section>
          <h2>Nossos Valores</h2>
          <ul>
            <li>Ética</li>
            <li>Compromisso</li>
            <li>Inovação</li>
            <li>Segurança</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

export default AboutPage;
