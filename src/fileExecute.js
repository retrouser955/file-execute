const fs = require('fs')
const db = require('quick.db');
class FileExecute {
    /**
     * 
     * @param {string} path your file path
     */
    constructor(path) {
        if(!path) throw new Error('FileExecute Error: Path must be a non-empty string')
        let executeFiles;
        const allDB = db.all()
        for(const value of allDB) {
            db.delete(value.ID)
        }
        try {
            executeFiles = fs.readdirSync(path).filter(file => file.endsWith('.js') || file.endsWith('.ts'))
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
    /**
     * 
     * @param {string} fileName The name of the file in module.exports
     * @param {object} customData custom data that you want in this file
     */
    async execute(fileName, customData) {
        if(!fileName) throw new Error('FileExecute Error: File Name must be a non-empty string')
        if(!db.has(fileName)) throw new Error('FileExecute Error: File Name must a valid file name. (the one that you included in module.exports)')
        if(customData) {
            if(typeof customData != 'object') throw new Error('FileExecute Error: Custom data must be an object')
            const file = require(`${this.path}/${fileName}`)
            file.execute(customData)
        } else {
            const file = require(`${this.path}/${fileName}`)
            file.execute()
        }
    }
}
module.exports = {
    FileExecute: FileExecute,
}
global.db = db