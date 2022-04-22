# file-execute

Tired of using require? I got you! Use this package to easily read files and transfer data between them

# Installation

```console
npm i @retro_ig/file-execute
```

# Examples

```js
const { FileExecute } = require('@retro_ig/file-execute')
const fileExecute = new FileExecute('path/to/your/folder') //path to your folder with all your js files
async function exampleFunction() {
    await fileExecute.execute('testFile')
}
exampleFunction()
```
In testFile.js
```js
module.exports = {
    name: 'testFile', //we will use the name to call the execute function in the main file
    async execute() {
        try {
            console.log('Hello World!')
        } catch (error) {
            console.log(error)
        }
    }
}
```
# Data Transfer Module
Now file Execute package doesn't just run files. That's too borning. It has its own module for global data. We will go back to the first Example and add the module there!
```js
const { FileExecute, dataTransferer } = require('@retro_ig/file-execute')
const fileExecute = new FileExecute('path/to/your/folder') //path to your folder with all your js files
async function exampleFunction() {
    await dataTransferer.setData({
        foo: 'bar' // The data must be an object!
    })
    await fileExecute.execute('testFile')
}
exampleFunction()
```
In testFile.js
```js
const { dataTransferer } = require('@retro_ig/file-execute')
module.exports = {
    name: 'testFile', //we will use the name to call the execute function in the main file
    async execute() {
        try {
            const transferedData = await dataTransferer.getData()
            console.log(transferedData.foo) //expected output: "bar"
        } catch (error) {
            console.log(error)
        }
    }
}
```
# Found an issue?

Open an issue at our [github page!](https://github.com/retrouser955/file-execute)