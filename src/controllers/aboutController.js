const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    res.json({
        estudante: "João Pedro e Rafael",
        projeto: "Math-System"
    });
});

module.exports = router;
