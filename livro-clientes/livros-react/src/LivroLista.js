// LivroLista.js
import React, { useState, useEffect } from "react";
import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro = ({ livro, excluir }) => {
    const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

    const handleExcluir = () => {
        excluir(livro._id);
    };

    return (
        <tr>
            <td className="td-titulo">
                <div className="row">
                    <div className="col">
                        {livro.titulo}
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <button className="btn btn-danger btn-sm" onClick={handleExcluir}>Excluir</button>
                    </div>
                </div>                
            </td>
            <td className="td-resumo">{livro.resumo}</td>
            <td>{nomeEditora}</td>
            <td>
                <ul>
                    {livro.autores.map((autor, index) => (
                        <li key={index}>{autor}</li>
                    ))}
                </ul>
            </td>
        </tr>
    );
};

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        const fetchLivros = async () => {
            const livrosObtidos = await controleLivro.obterLivros();
            setLivros(livrosObtidos);
            setCarregado(true);
        };

        fetchLivros();
    }, [carregado]);

    const excluir = async (id) => {
        await controleLivro.excluir(id);
        setCarregado(false);
    };

    return (
        <main>
            <h1>Catálogo de Livros</h1>
            <table className="table table-striped mt-4">
                <thead>
                    <tr>
                        <th scope="col">Título</th>
                        <th scope="col">Resumo</th>
                        <th scope="col">Editora</th>
                        <th scope="col">Autores</th>
                    </tr>  
                </thead>
                <tbody>
                    {livros.map((livro) => (
                        <LinhaLivro key={livro._id} livro={livro} excluir={excluir} />
                    ))}
                </tbody>
            </table>
        </main>
    );
};

export default LivroLista;
