const db = require("../database");
const LivroSchema = new db.Schema({
    id: { type: Number, require: true },
    codEditora: { type: Number, require: true },
    titulo: { type: String, require: true },
    resumo: { type: String, require: true },
    autores: { type: [String], require: true }
});
const Livro = db.model("livros", LivroSchema);
module.exports = Livro;