const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/repository.json");

function getAllMaterials() {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
}

function addMaterial(material) {
    const requiredFields = ["titulo", "descricao", "autor", "ano", "categoria"];
    const missingFields = requiredFields.filter(field => !material[field]);

    if (missingFields.length > 0) {
        throw new Error(`Campos ausentes: ${missingFields.join(", ")}`);
    }

    const data = getAllMaterials();
    material.id = data.length + 1;
    data.push(material);
    fs.writeFileSync(dataPath, JSON.stringify(data, null, 2));
    return material;
}

module.exports = { getAllMaterials, addMaterial };
