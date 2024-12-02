const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        estudante: "João Pedro Acordi e Rafael Frasseto",
        projeto: "Math-System"
    });
});

module.exports = router;
