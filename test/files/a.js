const { dataTransferer } = require('../../index.js')
module.exports = {
    name: 'a',
    async execute() {
        try {
            const transferedData = await dataTransferer.getData()
            console.log(transferedData.foo)
        } catch (error) {
            console.log(error)
        }
        console.log('a')
    }
}