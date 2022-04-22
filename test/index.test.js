const { FileExecute, dataTransferer } = require('../index.js')
const fileExecute = new FileExecute(`${__dirname}/files`)
async function e() {
    await dataTransferer.setData({
        foo: 'bar'
    })
    await fileExecute.execute('a')
    await fileExecute.execute('b', {
        foo: "bar"
    })
    await fileExecute.execute('c')
}
e()