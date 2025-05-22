import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  // Função para verificar a rota ativa
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Fechar o menu quando mudar de rota
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Controlar o overflow do body quando o menu está aberto
  useEffect(() => {
    if (menuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }

    // Cleanup ao desmontar o componente
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [menuOpen]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container">
        <Link to="/">
          <img src="logo-monline.png" alt="MONTLINE Logo" />
        </Link>

        <div
          className={`mobile-menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={menuOpen ? "active" : ""}>
          <ul>
            <li>
              <Link
                to="/"
                className={isActive("/") ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className={isActive("/sobre") ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/servicos"
                className={isActive("/servicos") ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className={isActive("/contato") ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                Contato
              </Link>
            </li>
          </ul>
          <div className="cta-mobile">
            <a 
              href={`https://wa.me/5524999112822?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`}
              className="btn-quote"
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicitar orçamento
            </a>
          </div>
        </nav>
        <div className="cta-button">
          <a 
            href={`https://wa.me/5524999112822?text=${encodeURIComponent("Olá! Gostaria de solicitar um orçamento.")}`}
            className="btn-quote"
            target="_blank"
            rel="noopener noreferrer"
          >
            Solicitar orçamento
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
