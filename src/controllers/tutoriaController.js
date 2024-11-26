const express = require("express");
const tutoriaService = require("../services/tutoriaService");

const router = express.Router();

router.get("/", (req, res) => {
    const sessoes = tutoriaService.getAllSessions();
    res.json(sessoes);
});

router.post("/", (req, res) => {
    const sessao = req.body;
    const novaSessao = tutoriaService.addSession(sessao);
    res.json({ message: "Sessão de tutoria agendada com sucesso", sessao: novaSessao });
});

module.exports = router;
