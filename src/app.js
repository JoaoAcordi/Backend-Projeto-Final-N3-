const express = require("express");
const repositoryController = require("./controllers/repositoryController");
const tutoriaController = require("./controllers/tutoriaController");
const publicDataController = require("./controllers/publicDataController");
const aboutController = require("./controllers/aboutController");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());

// Rotas
app.use("/repository", repositoryController);
app.use("/tutoria", tutoriaController);
app.use("/public-data", publicDataController);
app.use("/about", aboutController);

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
