const http = require('http');
const ip = '127.0.0.1';
const port = 4000;
const fs = require('fs');

const send404 = (response)=>{
    response.WriteHead(404,{'Content-type': 'text/html'});
    response.write('Error 404: Resource not found!');
    response.end();
}

const server = http.createServer((req, res)=>{
    if(req.method == 'GET' && req.url=='/'){
        console.log('request starting...');
        res.writeHead(200,{'Content-type': 'text/html'});
        fs.createReadStream('./public/index.html').pipe(res);
    }else{
        send404(res);
    }
    //response
    // res.write('Hello Client');
    // res.end();
}).listen(port, ip,()=>{
    console.log(`Server running at http://${ip}:${port}`);
})