const express = require("express");
const repositoryService = require("../services/repositoryService");

const router = express.Router();

router.get("/", (req, res) => {
    const materiais = repositoryService.getAllMaterials();
    res.json(materiais);
});

router.post("/", (req, res) => {
    const material = req.body;
    const novoMaterial = repositoryService.addMaterial(material);
    res.json({ message: "Material adicionado com sucesso", material: novoMaterial });
});

module.exports = router;
