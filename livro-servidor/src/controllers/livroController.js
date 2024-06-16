// livroController.js

const Livro = require("../models/livro");

exports.lista = (req, res) => {
    Livro.find()
        .then((livros) => { res.send(livros); })
        .catch((err) => {
            res.status(500).send({ message: err.message || "Ocorreu um erro ao recuperar..." });
        });
};

// Cadastro de novo livro
exports.cadastrar = async (req, res) => {
    const { id, titulo, resumo, autores, codEditora } = req.body;
    try {
        if(await Livro.findOne({ titulo }))
            return res.status(400).send({ error: "Livro já existe..." });

        const livro = await Livro.create({ id, titulo, resumo, autores, codEditora });
        return res.send({ livro });
    }
    catch(error) {
        return res.status(400).send({ error: "Erro ao cadastrar livro..."});
    }
};

// Exclusão de livro
exports.excluir = async (req, res) => {
    try {
        const livro = await Livro.findByIdAndDelete(req.params.id);
        if (!livro) return res.status(404).send({ error: "Livro não encontrado..." });
        return res.send({ message: "Livro excluído com sucesso!" });
    } catch (error) {
        return res.status(400).send({ error: "Erro ao excluir livro..." });
    }
};
