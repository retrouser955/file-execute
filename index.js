module.exports = {
    dataTransferer: require(`./src/dataTransfer.js`),
    FileExecute: require(`./src/fileExecute.js`).FileExecute,
    version: require(`./package.json`).version
}