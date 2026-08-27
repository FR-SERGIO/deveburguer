export default function AboutPage() {
  return (
    <section className="about-panel">
      <div className="about-header">
        <span className="badge-text small">Sobre</span>
        <h2>Uma experiência de hambúrguer premium</h2>
      </div>

      <div className="about-grid">
        <article className="about-card">
          <h3>Ingredientes</h3>
          <p>Carne selecionada, pão artesanal e ingredientes frescos para sabor intenso.</p>
        </article>
        <article className="about-card">
          <h3>Processo</h3>
          <p>Preparação rápida, apertada no ponto e sempre com atenção ao detalhe.</p>
        </article>
        <article className="about-card">
          <h3>Atendimento</h3>
          <p>Equipe pronta para responder pedidos e entregar uma experiência memorável.</p>
        </article>
      </div>
    </section>
  );
}
