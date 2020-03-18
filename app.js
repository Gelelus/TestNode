const http = require("http");
const fs = require("fs");
  
http.createServer(function(request, response){
    
    if(request.method !== 'GET'){
        response.end("Bad Request!");
        return response.statusCode = 400;
    }
    const filePath = request.url.substr(1);
    
    fs.access(filePath, function(err) {
        if(err){
            response.statusCode = 404;
            response.end("Resourse not found!");
        }
        else{
            
            fs.readFile(filePath, (error, data) => response.end(data));
           // fs.createReadStream(filePath).pipe(response);
        }
      });
}).listen(3000);