import http from 'node:http'
import fs from 'node:fs'
import url from 'node:url'

const server = http.createServer((request, response) => {

    const currentURL = request.url

    switch(currentURL) {
        case "/":
            fs.readFile('index.html', 'utf-8', (error, data) => {
                if(error){
                    response.write(404);
                    response.end("Error: File Not Found");
                } else {
                    response.write(data)
                }
            })
            break;

        case "./about":
            fs.readFile('about.html', 'utf-8', (error, data) => {
                if(error){
                    response.write(404);
                    response.end("Error: File Not Found");
                } else {
                    response.write(data)
                }
            })
            break;

        case "./contact-me":
            fs.readFile('contact-me.html', 'utf-8', (error, data) => {
                if (error){
                    response.write(404);
                    response.end("Error: File Not Found");
                } else {
                    response.write(data)
                }
            })
            break;

        default:
            fs.readFile('404.html', 'utf-8', (error, data) => {
                if (error){
                    response.write(404);
                    response.end("Error: File Not Found");
                } else {
                    response.write(data)
                }
            })
            break;
    }

    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
});

server.listen(8080, () => {
    console.log("Server running at http://localhost:8080/")
})