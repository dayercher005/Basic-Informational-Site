import http from 'node:http'
import fs from 'node:fs'
import url from 'node:url'

const server = http.createServer((request, response) => {

    const currentURL = request.url

    switch(currentURL) {
        case "./":
            fs.readFile('index.html', 'utf-8', (error, data) => {
                if(error){

                }
            })

        case "./about":
            fs.readFile('about.html', 'utf-8', (error, data) => {
                if(error){

                }
            })

        case "./contact-me":
            fs.readFile('contact-me.html', 'utf-8', (error, data) => {
                if (error){

                }
            })

        default:
            fs.readFile('404.html', 'utf-8', (error, data) => {
                if (error){
                    
                }
            })
    }

    response.statusCode = 200;
    response.setHeader("Content-Type", "text/plain");
});

server.listen(8080)