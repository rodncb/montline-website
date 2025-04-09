import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

function Header() {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

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
        <img src="/logo-monline.png" alt="MONTLINE Logo" />

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
                className={location.pathname === "/" ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                Início
              </Link>
            </li>
            <li>
              <Link
                to="/sobre"
                className={location.pathname === "/sobre" ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link
                to="/servicos"
                className={location.pathname === "/servicos" ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link
                to="/contato"
                className={location.pathname === "/contato" ? "active" : ""}
                onClick={() => setMenuOpen(false)}
              >
                Contato
              </Link>
            </li>
          </ul>
          <div className="cta-mobile">
            <Link to="/contato" className="btn-quote">
              Solicitar orçamento
            </Link>
          </div>
        </nav>
        <div className="cta-button">
          <Link to="/contato" className="btn-quote">
            Solicitar orçamento
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Header;
