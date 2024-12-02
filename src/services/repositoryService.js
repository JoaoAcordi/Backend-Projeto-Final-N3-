const fs = require("fs");
const path = require("path");

class RepositoryService {
    constructor(resource) {
        this.resource = resource;
        this.dataPath = path.join(__dirname, `../data/${resource}.json`);
    }

    getAll() {
        return JSON.parse(fs.readFileSync(this.dataPath, "utf-8"));
    }

    add(item) {
        const items = this.getAll();
        item.id = items.length ? items[items.length - 1].id + 1 : 1;
        items.push(item);
        fs.writeFileSync(this.dataPath, JSON.stringify(items, null, 2));
        return item;
    }

    update(id, updatedItem) {
        const items = this.getAll();
        const index = items.findIndex(item => item.id === id);
        if (index === -1) {
            throw new Error("Item não encontrado.");
        }
        items[index] = { ...items[index], ...updatedItem };
        fs.writeFileSync(this.dataPath, JSON.stringify(items, null, 2));
        return items[index];
    }

    delete(id) {
        const items = this.getAll();
        const filteredItems = items.filter(item => item.id !== id);
        fs.writeFileSync(this.dataPath, JSON.stringify(filteredItems, null, 2));
    }
}

module.exports = RepositoryService;
