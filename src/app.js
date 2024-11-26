const express = require("express");
const bodyParser = require("body-parser");

const repositoryController = require("./controllers/repositoryController");
const tutoriaController = require("./controllers/tutoriaController");
const publicDataController = require("./controllers/publicDataController");
const aboutController = require("./controllers/aboutController");

const app = express();
app.use(bodyParser.json());

// Rotas
app.use("/repositorio", repositoryController);
app.use("/tutoria", tutoriaController);
app.use("/dados", publicDataController);
app.use("/sobre", aboutController);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
