export default function ContactPage() {
  return (
    <section id="contato" className="contact-panel">
      <div className="contact-copy">
        <span className="badge-text small">Contato</span>
        <h3>Fale com a gente</h3>
        <p>Atendimento rápido pelo WhatsApp e pedidos personalizados.</p>
      </div>

      <div className="contact-actions">
        <a
          href="https://wa.me/5586981280809?text=Ol%C3%A1%2C%20quero%20fazer%20um%20pedido%20do%20DevBurger"
          className="contact-link primary"
          target="_blank"
          rel="noreferrer"
        >
          WhatsApp
        </a>
        <a href="tel:+5586981280809" className="contact-link secondary">
          Ligar
        </a>
      </div>
    </section>
  );
}
