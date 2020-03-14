
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

// var http = require('http');

// var server = http.createServer((req,res)=>{
    
//     console.log('request was made: ' + req.url)

//     res.writeHead(200,{'Content-Type':'text/plain'});
//     res.end("Hey Dude!")
// });

// server.listen(3000,'127.0.0.1');
// console.log('Port number: 3000 is UP!')