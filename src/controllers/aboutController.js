const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        estudante: "João Pedro Acordi",
        projeto: "Math-System"
    });
});

module.exports = router;
