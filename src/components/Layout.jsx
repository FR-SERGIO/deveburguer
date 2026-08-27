import { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { label: 'Home', to: '/' },
  { label: 'Menu', to: '/menu' },
  { label: 'Sobre', to: '/sobre' },
  { label: 'Contato', to: '/contato' },
];

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <div className="page-shell">
      <button
        type="button"
        className="mobile-menu-toggle"
        aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={mobileMenuOpen}
        onClick={() => setMobileMenuOpen((prev) => !prev)}
      >
        <span aria-hidden="true">{mobileMenuOpen ? '×' : '☰'}</span>
      </button>

      <aside className={`sidebar ${mobileMenuOpen ? 'open' : ''}`}>
        <div className="sidebar-inner">
          <div className="sidebar-title">
            <div className="logo-badge">DB</div>
            <div className="title-stack">
              <span className="title-mini">Dev</span>
              <span className="title-main">Burger</span>
            </div>
          </div>

          <nav className="sidebar-nav" aria-label="Navegação lateral">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
                onClick={closeMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="sidebar-panel">
            <span className="panel-label">Inputs</span>
            <div className="input-box"></div>
            <div className="input-box short"></div>
            <div className="input-box"></div>
            <div className="input-box short"></div>
          </div>

          <div className="sidebar-panel muted-panel">
            <span className="panel-label">Background</span>
            <div className="grid-pattern"></div>
          </div>
        </div>
      </aside>

      {mobileMenuOpen && (
        <button
          type="button"
          className="menu-backdrop"
          aria-label="Fechar menu"
          onClick={closeMenu}
        />
      )}

      <main className="main-stage">
        <Outlet />
      </main>
    </div>
  );
}
