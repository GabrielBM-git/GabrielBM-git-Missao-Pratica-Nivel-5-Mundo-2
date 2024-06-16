// pages/LivroLista.tsx

import React, { useState, useEffect } from 'react';
import { NextPage } from 'next';

import Menu from '../componentes/Menu';
import LinhaLivro from '../componentes/LinhaLivro';

import { Livro } from '@/classes/modelo/Livro';
import { ControleLivro } from '@/classes/controle/ControleLivros';

const controleLivro = new ControleLivro();

const LivroLista: NextPage = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    const fetchLivros = async () => {
      const livrosObtidos = await controleLivro.obterLivros();
      setLivros(livrosObtidos);
      setCarregado(true);
    };

    fetchLivros();
  }, [carregado]);

  const handleExcluirLivro = async (codigo: string) => {    
    await controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <div>
      <Menu />
      <main className='container mt-4'>
        <h1>Catálogo de Livros</h1>
        <table className="table mt-4 table-striped">
          <thead>
            <tr>
                <th scope="col">Título</th>
                <th scope="col">Resumo</th>
                <th scope="col">Editora</th>
                <th scope="col">Autores</th>
            </tr>
          </thead>
          <tbody>
            {livros.map(livro => (
              <LinhaLivro key={livro._id} livro={livro} onExcluir={() => handleExcluirLivro(livro._id)} />
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
};

export default LivroLista;
