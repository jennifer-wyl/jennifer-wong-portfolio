import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__name">Jennifer Wong</p>
        <div className="footer__links">
          <a href="mailto:jenniferWong.YL@propnex.com">
            jenniferWong.YL@propnex.com
          </a>
          <a
            href="https://instagram.com/ImJen.Wong"
            target="_blank"
            rel="noopener noreferrer"
          >
            @ImJen.Wong
          </a>
          <a
            href="https://wa.me/6580128779"
            target="_blank"
            rel="noopener noreferrer"
            className="footer__whatsapp"
          >
            WhatsApp
          </a>
        </div>
        <p className="footer__copy">
          © {new Date().getFullYear()} Jennifer Wong. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
