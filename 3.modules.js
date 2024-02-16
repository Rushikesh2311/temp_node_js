// Modules Encaspulated code only sharing minimimu
// Every file in node is by default a module

const names = require('./4.names')
const sayHi = require('./5.util')
require('./7.mind')
//when you export model then it invoke the code and if there is some fucntion it will get executed thats what is happening when we are exporting './r.mind')
console.log(names)

sayHi(names.john)
sayHi(names.peter)
