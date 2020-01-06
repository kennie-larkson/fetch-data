const http = require('http');
const ip = '127.0.0.1';
const port = 5000;

const server = http.createServer((req, res)=>{
    res.statusCode = 200;
    res.setHeader('Content-type','text/html');
    res.end(`${res.statusCode}`);
    res.end(`We're live on ${port} : ${ip} !`);
    // console.log(`We're live on ${port} : ${ip} !`);
    
});

server.listen(port, ip,()=>{
    console.log(`Server running at http://${ip}:${port}`);
})