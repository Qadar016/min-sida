import "./Footer.css";

function Footer() {
  const år = new Date().getFullYear(); // Årtalet just nu

  return (
    <footer className="footer" id="kontakt">
      <p>Kontakt: anna@exempel.se</p>
      <p>© {år}  Abdi Svensson</p>
    </footer>
  );
}

export default Footer;
