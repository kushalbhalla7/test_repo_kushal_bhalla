const express = require('express');
const http = require('http');

const app = express();
const server = http.createServer(app)

server.listen(3001, () => {
    console.log("server is running");
})