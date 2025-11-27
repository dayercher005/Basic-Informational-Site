import http from 'node:http'
import fs from 'node:fs'
import url from 'node:url'

const server = http.createServer((request, response) => {

    const currentURL = request.url

    switch(currentURL) {
        case "/":
            fs.readFile('./index.html', 'utf-8', (error, data) => {
                if(error){
                    response.writeHead(404);
                    response.end("Error: File Not Found");
                } else {
                    response.end(data)
                }
            })
            break;

        case "/about":
            fs.readFile('./about.html', 'utf-8', (error, data) => {
                if(error){
                    response.writeHead(404);
                    response.end("Error: File Not Found");
                } else {
                    response.end(data)
                }
            })
            break;

        case "/contact-me":
            fs.readFile('./contact-me.html', 'utf-8', (error, data) => {
                if (error){
                    response.writeHead(404);
                    response.end("Error: File Not Found");
                } else {
                    response.end(data)
                }
            })
            break;

        default:
            fs.readFile('404.html', 'utf-8', (error, data) => {
                if (error){
                    response.writeHead(404);
                    response.end("Error: File Not Found");
                } else {
                    response.end(data)
                }
            })
            break;
    }

    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");
}).listen(8080, () => {
    console.log("Server is running on http://localhost:8080")
});

