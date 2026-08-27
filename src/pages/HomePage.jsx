import { Link } from 'react-router-dom';

const highlights = [
  { title: 'Escolha seu combo', items: ['Frango', 'Cheddar', 'Batata'] },
  { title: 'Promoções', items: ['Combo + bebida', '15% off'] },
  { title: 'Entrega em 20 min', items: ['Atendimento', 'Rápido'] },
];

export default function HomePage() {
  return (
    <>
      <section id="inicio" className="hero-panel">
        <div className="hero-copy">
          <span className="badge-text">Burger artesanal</span>
          <h1>O melhor hambúrguer está aqui.</h1>
          <p>
            Carne premium, pão artesanal e ingredientes selecionados para você
            sentir o sabor que merece em cada mordida.
          </p>
          <div className="hero-actions">
            <a
              href="https://wa.me/5586981280809?text=Ol%C3%A1%2C%20quero%20fazer%20um%20pedido%20do%20DevBurger"
              className="button primary"
              target="_blank"
              rel="noreferrer"
            >
              Peça agora
            </a>
            <Link to="/menu" className="button ghost">Ver cardápio</Link>
          </div>
        </div>

        <div className="hero-visual">
          <div className="promo-tag">🔥 Mais pedido</div>
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=80"
            alt="Hambúrguer artesanal"
          />
          <div className="price-pill">
            <span>Combo Dev</span>
            <strong>R$ 39,90</strong>
          </div>
        </div>
      </section>

      <section className="board-row">
        {highlights.map((item) => (
          <div key={item.title} className={`mini-board ${item.title === 'Entrega em 20 min' ? 'dark' : item.title === 'Promoções' ? 'light' : 'accent'}`}>
            <div className="mini-inner">
              <h3>{item.title}</h3>
              <div className="mini-product-list">
                {item.items.map((name) => (
                  <span key={name}>{name}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
