import { useMemo, useState } from 'react';

const products = [
  {
    id: 1,
    name: 'Classic',
    price: 29.9,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=900&q=80',
    description: 'Hambúrguer de 180g com queijo e molho especial.',
  },
  {
    id: 2,
    name: 'Double',
    price: 34.9,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?auto=format&fit=crop&w=900&q=80',
    description: 'Dupla carne, cheddar e bacon crocante.',
  },
  {
    id: 3,
    name: 'Chicken',
    price: 31.9,
    category: 'burger',
    image: 'https://images.unsplash.com/photo-1561758033-d89a9ad46330?auto=format&fit=crop&w=900&q=80',
    description: 'Frango crocante, maionese e alface.',
  },
  {
    id: 4,
    name: 'Batata Frita',
    price: 14.9,
    category: 'acompanhamento',
    image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?auto=format&fit=crop&w=900&q=80',
    description: 'Porção crocante e sequinha.',
  },
  {
    id: 5,
    name: 'Onion Rings',
    price: 16.9,
    category: 'acompanhamento',
    image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?auto=format&fit=crop&w=900&q=80',
    description: 'Anéis de cebola empanados.',
  },
  {
    id: 6,
    name: 'Refrigerante',
    price: 9.9,
    category: 'bebida',
    image: 'https://images.unsplash.com/photo-1622483767028-3f66f2b7420f?auto=format&fit=crop&w=900&q=80',
    description: 'Geladinho para acompanhar o lanche.',
  },
];

const filters = [
  { label: 'Todos', value: 'all' },
  { label: 'Burguers', value: 'burger' },
  { label: 'Acompanhamentos', value: 'acompanhamento' },
  { label: 'Bebidas', value: 'bebida' },
];

const formatPrice = (value) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

export default function MenuPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProducts = useMemo(() => {
    if (activeFilter === 'all') return products;
    return products.filter((product) => product.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="menu" className="catalog-panel">
      <div className="catalog-header">
        <div className="catalog-title-wrap">
          <span className="badge-text small">Menu</span>
          <h2>Os favoritos da casa</h2>
        </div>

        <div className="category-filters" aria-label="Filtros do menu">
          {filters.map((filter) => (
            <button
              key={filter.value}
              type="button"
              className={`filter-btn ${activeFilter === filter.value ? 'active' : ''}`}
              onClick={() => setActiveFilter(filter.value)}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      <div className="catalog-grid" aria-live="polite">
        {filteredProducts.map((product) => {
          const message = encodeURIComponent(
            `Olá, quero pedir ${product.name} do DevBurger.`
          );

          return (
            <article key={product.id} className="menu-card">
              <div className="menu-photo">
                <img src={product.image} alt={product.name} />
              </div>
              <div className="menu-info">
                <div className="menu-meta">
                  <h3>{product.name}</h3>
                  <span>{formatPrice(product.price)}</span>
                </div>
                <p>{product.description}</p>
                <a
                  href={`https://wa.me/5586981280809?text=${message}`}
                  className="menu-button"
                  target="_blank"
                  rel="noreferrer"
                >
                  Peça
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
