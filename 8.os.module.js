const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)
// methods return system uodatetime in seconds
console.log(`The System update time is : ${os.uptime()}`)


const currentOs ={
    name:os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOs)