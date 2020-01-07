const http = require('http');
const ip = '127.0.0.1';
const port = 4000;
const fs = require('fs');

const send404 = (response)=>{
    response.writeHead(404,{'Content-type': 'text/html'});
    response.write('Error 404: Resource not found!');
    response.end();
}

const server = http.createServer((req, res)=>{
    if(req.method == 'GET' && req.url=='/'){
        console.log(req.method);
        console.log('request starting...');
        res.writeHead(200,{'Content-type': 'text/html'});
        // res.write('Hello Client<br>');
        fs.createReadStream('./public/index.html').pipe(res);
    }else{
        send404(res);
    }
});
server.listen(port, (req)=>{
    console.log(`Server running at http://${ip}:${port}`);
    
    
})