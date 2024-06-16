// componentes/Menu.tsx

import React from 'react';
import Link from 'next/link';

const Menu: React.FC = () => {
  return (    
    <nav className="navbar navbar-expand navbar-light bg-dark" data-bs-theme="dark">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href="/LivroLista" className="nav-link active">Catálogo</Link>
            </li>
            <li className="nav-item">
              <Link href="/LivroDados" className="nav-link">Novo</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Menu;
