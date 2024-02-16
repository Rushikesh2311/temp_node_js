const http = require('http');

const server = http.createServer((req,res)=>
{
   if(req.url === '/') 
   {
    res.end("Hello we are on home page");
    return;
   }
   if(req.url === '/about')
   {
    res.end("Hello we are on about page");
    return;
   }

   res.end(`
    <h1> Opps </h1>
    <a href="/">backhome </a>
    `
   )
})

server.listen(5000);