// pages/index.tsx

import type { NextPage } from 'next';
import React from 'react';
import Menu from '../componentes/Menu';

const Home: NextPage = () => {
  return (
    <div className="container">
      <Menu />
      <main className="mt-5">
        <h1 className="text-center">Página Inicial</h1>
      </main>
    </div>
  );
};

export default Home;
