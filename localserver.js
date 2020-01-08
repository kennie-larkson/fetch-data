const http = require('http');
const ip = '127.0.0.1';
const port = 4000;
const fs = require('fs');
const path = require('path');

const send404 = (response)=>{
    response.writeHead(404,{'Content-type': 'text/html'});
    response.write('Error 404: Resource not found!');
    response.end();
}

const mimeLookUp = {
    '.js': 'application/javascript',
    '.html': 'text/html'
};



const server = http.createServer((req, res)=>{
    if(req.method == 'GET'){

        //resolve filepath to file system path
        var fileurl;
        if(req.url == '/'){
            fileurl = '/index.html';
            
        }else{  fileurl = req.url;}
            var filepath = path.resolve('./public'+fileurl); 
        //look up mime type
        var fileExt = path.extname(filepath);
        var mimeType = mimeLookUp[fileExt];

        if(!mimeType){
            send404(res);
            return
        }
        //see if we have that file
        fs.exists(filepath, (exists)=>{
            //if not
            if(!exists){
                send404(res);
                return;
            };
            //finally stream the file
            res.writeHead(200,{'Content-type': mimeType});
            fs.createReadStream(filepath).pipe(res);

        });
        
    }else{
        send404(res);
    }
});
server.listen(port, (req)=>{
    console.log(`Server running at http://${ip}:${port}`);
    
    
})