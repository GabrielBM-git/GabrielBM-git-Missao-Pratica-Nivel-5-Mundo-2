// App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LivroLista from "./LivroLista";
import LivroDados from "./LivroDados";

function App() {
    return (
        <Router>
            <nav className="navbar navbar-expand bg-dark border-bottom border-body" data-bs-theme="dark">
              <div className="container-fluid">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link to="/" className="nav-link link">Catálogo</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/dados" className="nav-link link">Novo</Link> 
                    </li>
                </ul>
              </div>
            </nav>
            <div className="container">
              <Routes>
                  <Route path="/" element={<LivroLista />} />
                  <Route path="/dados" element={<LivroDados />} />
              </Routes>
            </div>
        </Router>
    );
}

export default App;