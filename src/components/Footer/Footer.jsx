import "./Footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <p className="footer-title">Trastiesto</p>

          <p className="footer-text">
            Venta personal de objetos nuevos y usados.
          </p>

          <p className="footer-contact">
            📍 Buenos Aires · 📦 Envíos a coordinar
          </p>

          <p className="footer-contact">
            📲 WhatsApp:{" "}
            <a
              href="https://wa.me/5491162239296"
              target="_blank"
              rel="noopener noreferrer"
            >
              Escribime
            </a>
          </p>

          <p className="footer-copy">
            © {new Date().getFullYear()} Trastiesto
          </p>
        </div>
      </footer>

      {/* WHATSAPP FLOTANTE */}
      <a
        href="https://wa.me/5491162239296"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="Contactar por WhatsApp"
      >
        💬
      </a>
    </>
  );
};
