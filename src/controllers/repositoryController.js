const express = require("express");
const RepositoryService = require("../services/repositoryService");

const router = express.Router();
const repositoryService = new RepositoryService("repository");

router.get("/", (req, res) => {
    res.json(repositoryService.getAll());
});

router.post("/", (req, res) => {
    try {
        const newItem = repositoryService.add(req.body);
        res.status(201).json({
            message: "Repositório educacional adicionado com sucesso!",
            item: newItem,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.put("/:id", (req, res) => {
    try {
        const updatedItem = repositoryService.update(parseInt(req.params.id), req.body);
        res.json({
            message: "Repositório educacional atualizado com sucesso!",
            item: updatedItem,
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.delete("/:id", (req, res) => {
    try {
        repositoryService.delete(parseInt(req.params.id));
        res.status(204).send();
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
