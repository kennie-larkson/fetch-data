const http = require('http');
const ip = '127.0.0.1';
const port = 4000;

const server = http.createServer((request, response)=>{
    console.log('request starting...');

    //response
    response.write('Hello Client');
    response.end();
});

server.listen(port, ip,()=>{
    console.log(`Server running at http://${ip}:${port}`);
})