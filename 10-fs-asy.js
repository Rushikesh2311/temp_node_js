const { error } = require('console');
const fs = require('fs');

let first;
let second;
fs.readFile('./content/first.txt','utf8',(err,result)=>
{
    if(err) 
    {
        console.log(err);
        return;
    }
    first = result;
    console.log(first);
})

fs.readFile('./content/second.txt','utf8',(err, result)=>
{
    if(err)
    {
        console.log(err);
        return;
    }
    second = result;
}
)

fs.writeFile('./content/result_async.txt',`Here is result by async method : ${first} , ${second}`,(err,result)=>
{
    if(err)
    {
        console.log(err);
        return;
    }
    console.log(result);
})