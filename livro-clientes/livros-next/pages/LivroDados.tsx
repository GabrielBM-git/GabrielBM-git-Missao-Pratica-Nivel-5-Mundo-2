// pages/LivroDados.tsx

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import Menu from '../componentes/Menu';
import { ControleLivro } from '@/classes/controle/ControleLivros';
import { ControleEditora } from '@/classes/controle/ControleEditora';
import { Livro } from '@/classes/modelo/Livro';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LivroDados: NextPage = () => {
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const [codEditora, setCodEditora] = useState<number | string>(0);
  const router = useRouter();

  const opcoes = controleEditora.getEditoras().map(editora => ({ value: editora.codEditora, text: editora.nome }));

  const tratarCombo = (e: ChangeEvent<HTMLSelectElement>) => {
      setCodEditora(Number(e.target.value));
  };

  const handleIncluirLivro = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const novoLivro: Livro = {
      _id: '',
      codEditora: codEditora as number,
      titulo: titulo,
      resumo: resumo,
      autores: autores.split("\n").map(author => author.trim())
    };
    try {
      await controleLivro.incluir(novoLivro);
      router.push('/LivroLista');
    } catch (error) {
      console.error("Erro ao incluir o livro:", error);
    }
  };

  return (
    <div>
      <Menu />
      <main className="container mt-4">
        <h1>Dados do Livro</h1>
        <form onSubmit={handleIncluirLivro}>
            <div className="mt-4 mb-2">
                <label htmlFor="titulo" className="form-label">Título</label>
                <input id="titulo" type="text" className="form-control" value={titulo} onChange={(e) => setTitulo(e.target.value)} />
            </div>
            <div className="mb-2">
                <label htmlFor="resumo" className="form-label">Resumo</label>
                <textarea id="resumo" className="form-control" value={resumo} onChange={(e) => setResumo(e.target.value)} />
            </div>
            <div className="mb-2">
                <label htmlFor="editoras" className="form-label">Editora</label>
                <select id="editoras" className="form-control" value={codEditora} onChange={tratarCombo}>
                    {opcoes.map(opcao => (
                        <option key={opcao.value} value={opcao.value}>
                            {opcao.text}
                        </option>
                    ))}
                </select>
            </div>
            <div className="mb-2">
                <label htmlFor="autores" className="form-label">Autores (um por linha)</label>
                <textarea id="autores" className="form-control" value={autores} onChange={(e) => setAutores(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary mt-2">Salvar Dados</button>
        </form>
      </main>
    </div>
  );
};

export default LivroDados;
