const http = require('http');



const express = require("express");
const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log("Server running");
});

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Create server
const server = http.createServer((req, res) => {
    if (req.url.startsWith('/add')) {
        const url = new URL(req.url, `http://${req.headers.host}`);
        
        const a = parseInt(url.searchParams.get('a'));
        const b = parseInt(url.searchParams.get('b'));
        
        const result = add(a, b);

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ result }));
    } else {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end("Addition Service Running");
    }
});

// Start server
server.listen(3000, () => {
    console.log("Server running on port 3000");
});
