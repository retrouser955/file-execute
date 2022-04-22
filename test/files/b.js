module.exports = {
    name: 'b',
    async execute(customData) {
        console.log(`Custom B data: ${customData.foo}`)
        console.log('b')
    }
}