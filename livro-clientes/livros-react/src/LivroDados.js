// LivroDados.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ControleLivro } from "./controle/ControleLivros";
import { ControleEditora } from "./controle/ControleEditora";

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LivroDados = () => {
    const [titulo, setTitulo] = useState("");
    const [resumo, setResumo] = useState("");
    const [autores, setAutores] = useState("");
    const [codEditora, setCodEditora] = useState(0);
    const navigate = useNavigate();

    const opcoes = controleEditora.getEditoras().map(editora => ({ value: editora.codEditora, text: editora.nome }));

    const tratarCombo = (e) => {
        setCodEditora(Number(e.target.value));
    };

    const incluir = async (e) => {
        e.preventDefault();
        const novoLivro = {
            titulo,
            resumo,
            autores: autores.split("\n").map(author => author.trim()),  
            codEditora
        };

        console.log("Enviando livro:", JSON.stringify(novoLivro));

        try {
            await controleLivro.incluir(novoLivro);
            navigate("/");
        } catch (error) {
            console.error("Erro ao incluir o livro:", error);
        }
    };

    return (
        <main className="container-lg">
            <h1>Dados do Livro</h1>
            <form onSubmit={incluir}>
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
    );
};

export default LivroDados;
