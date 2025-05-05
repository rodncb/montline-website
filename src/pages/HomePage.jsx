import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="banner-container">
        <div className="banner-content">
          <h2>Engenharia e Montagens Industriais com Qualidade e Excelência</h2>
          <p>
            A MONTLINE é uma empresa nova mas com um corpo técnico qualificado e
            com mais de 30 anos de experiência nas área de engenharia e
            montagens industriais, com foco sempre na qualidade, atendimento e
            na satisfação total do cliente.
          </p>
          <Link to="/servicos" className="btn-learn-more">
            NOSSOS SERVIÇOS
          </Link>
        </div>
      </div>
      <main>
        <div className="container">
          <section>
            <h2>Quem Somos / Nossa Expertise</h2>
            <p>
              Nossa empresa conta com profissionais experientes nas várias
              disciplinas de engenharias como elétrica, mecânica, instrumentação
              e controle de processos, desenvolvendo projetos de expansão ou
              melhorias em empresas de diversos setores industriais como Química
              e Petroquímica, Papel e Celulose, Automotivas, Siderurgia e
              Mineração. Nosso foco prioriza o melhor custo benefício para os
              clientes sempre com forte visão de qualidade.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default HomePage;
