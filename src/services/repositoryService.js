const fs = require("fs");
const path = require("path");

const dataPath = path.join(__dirname, "../data/repository.json");

function getAllMaterials() {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
}

function addMaterial(material) {
    const data = getAllMaterials();
    material.id = data.length + 1;
    data.push(material);
    fs.writeFileSync(dataPath, JSON.stringify(data));
    return material;
}

module.exports = { getAllMaterials, addMaterial };
