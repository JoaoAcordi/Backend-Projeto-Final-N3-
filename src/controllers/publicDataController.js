const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        taxa_alfabetizacao: 95.2,
        media_estudo: 8.4,
        fonte: "https://dados.gov.br/educacao"
    });
});

module.exports = router;
