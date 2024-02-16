const path = require('path')
console.log(path.sep)

const filepath = path.join(__dirname,'content','subfold','test.txt')

console.log(filepath)

const base = path.basename(filepath)
console.log(base)
//This is useful as we have different paths in different systems