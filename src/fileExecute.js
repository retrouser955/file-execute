const fs = require('fs')
const Database = require('easy-json-database')
const db = new Database(`${__dirname}/files.json`)
class FileExecute {
    /**
     * 
     * @param {string} path your file path
     */
    constructor(path) {
        if(!path) throw new Error('FileExecute Error: Path must be a non-empty string')
        db.clear();
        let executeFiles;
        try {
            executeFiles = fs.readdirSync(path)
        } catch (error) {
            throw new Error('FileExecute Error: Path must be a file path')
        }
        for(const file of executeFiles) {
            const requireFile = require(`${path}/${file}`)
            if(!requireFile.name) throw new Error('FileExecute Error: File Name must be a included in module.exports. Consider reading the ReadMe.md')
            if(!requireFile.execute) throw new Error('FileExecute Error: File execute script must be a included in module.exports. Consider reading the ReadMe.md')
            db.set(requireFile.name, file)
        }
        this.path = path
    }
    async execute(fileName) {
        if(!fileName) throw new Error('FileExecute Error: File Name must be a non-empty string')
        if(!db.has(fileName)) throw new Error('FileExecute Error: File Name must a valid file name. (the one that you included in module.exports)')
        const file = require(`${this.path}/${fileName}`)
        file.execute()
    }
}
module.exports = {
    FileExecute: FileExecute,
}
global.db = db