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
# Passing Custom Data

On version 0.1.3 or higher, you can pass your own custom data with the `execute()` function  
We will go back to our example again to learn how to pass custom data!

```js
const { FileExecute } = require('@retro_ig/file-execute')
const fileExecute = new FileExecute('path/to/your/folder') //path to your folder with all your js files
async function exampleFunction() {
    await fileExecute.execute('testFile', {
        foo: "bar"
    })
}
exampleFunction()
```
In testFile.js
```js
module.exports = {
    name: 'testFile', //we will use the name to call the execute function in the main file
    async execute(customData/** We can pass in custom data value here to read all the values **/) {
        try {
            const data = customData.foo
            console.log(data) //expected output: Bar
        } catch (error) {
            console.log(error)
        }
    }
}
```

# Found an issue?

Open an issue at our [github page!](https://github.com/retrouser955/file-execute)