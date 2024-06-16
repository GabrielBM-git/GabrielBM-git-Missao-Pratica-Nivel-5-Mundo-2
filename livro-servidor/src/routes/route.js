const express = require("express");

const router = express.Router();

const livroController = require("../controllers/livroController");

router.get('/api/livros', livroController.lista);
router.post('/api/livros', livroController.cadastrar);
router.delete('/api/livros/:id', livroController.excluir);

module.exports = router;