const express = require("express");
const repositoryService = require("../services/repositoryService");

const router = express.Router();

router.get("/", (req, res) => {
    const materiais = repositoryService.getAllMaterials();
    res.json(materiais);
});

router.post("/", (req, res) => {
    try {
        const material = req.body;
        const novoMaterial = repositoryService.addMaterial(material);
        res.status(201).json({ message: "Material adicionado com sucesso - " + req.body, material: novoMaterial });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
