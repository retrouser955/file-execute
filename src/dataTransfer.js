const dataTransferer = {
    async setData(data) {
        if(!data) throw new Error('FileExecute Error: Data must be a non-empty object')
        if(typeof data != 'object') throw new Error('FileExecute Error: Data must be an object')
        return global.db.set('dataTransfer', data)
    },
    async getData() {
        const returnData = global.db.get('dataTransfer')
        return returnData
    }
}
module.exports = dataTransferer