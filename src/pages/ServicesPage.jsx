import React from "react";
import ServiceCard from "../components/ServiceCard";

function ServicesPage() {
  return (
    <main>
      <div className="container">
        <h1>Nossos Serviços</h1>
        <section>
          <h2>Projetos</h2>
          <ServiceCard
            title="Projetos Industriais"
            description="Elaborando desde projetos básicos até a implementação total do investimento, passando pelas fases de especificação, compras e gerenciamento de montagens."
          />
          <ServiceCard
            title="Consultoria em Projetos de Climatização"
            description="Consultoria em projetos de climatização e exaustão."
          />
          <ServiceCard
            title="Especificação Técnica"
            description="Especificação técnica de máquinas e equipamentos."
          />
          <ServiceCard
            title="Projetos de Instrumentação e SIS (Sistemas Instumendados de Segurança)"
            description="Desenvolvimento de projetos de instrumentação industrial, com a elaboração de malhas de controle, folhas de especificação e P&ID. 
            Projeto, especificação e montagem de malhas de segurança (SIS) com calculo do nível de intefridade da malha (SIL)."
          />
        </section>
        <section>
          <h2>Elétrica</h2>
          <ServiceCard
            title="Desenvolvimento de Projetos Elétricos"
            description="Montagem em campo de painéis elétricos (CCM, QGBT, Painéis de controle)."
          />
          <ServiceCard
            title="Montagem Elétrica"
            description="Montagem e ligação elétrica de máquinas e equipamentos, quadros de distribuição de energia, iluminação industrial, ar condicionado entre outros."
          />
        </section>
        <section>
          <h2>Mecânica</h2>
          <ServiceCard
            title="Instalação de Tubulações"
            description="Instalação de tubulações em aço carbono, aço inoxidável e CPVC."
          />
          <ServiceCard
            title="Montagem de Equipamentos"
            description="Instalação e montagem de máquinas e equipamentos industriais."
          />
          <ServiceCard
            title="Manutenção de Skids"
            description="Montagem, instalação e manutenção de skids para dosagem de produtos químicos."
          />
        </section>
        <section>
          <h2>Instrumentação</h2>
          <ServiceCard
            title="Instalação de Sistemas de Instrumentação"
            description="Instalação de sistemas instrumentação de processos e sistemas instrumentados de segurança (SIS)."
          />
          <ServiceCard
            title="Integração de Sistemas"
            description="Integração de sistemas instrumentados com o PLC e supervisórios."
          />
          <ServiceCard
            title="Comissionamento e Startup"
            description="Comissionamento, startup, treinamento e suporte técnico."
          />
        </section>
      </div>
    </main>
  );
}

export default ServicesPage;
