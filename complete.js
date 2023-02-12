const noblox = require('noblox.js')

var username = "JeRepito";

async function GetID() {
    ID = await noblox.getIdFromUsername(username)

    console.log(ID)

    return await ID
}

damn = GetID()

async function Thumb() {
    avatar = await noblox.getPlayerThumbnail(await damn, 420, "png", false, "Headshot")
    
    return await avatar[0]["imageUrl"]
}

Thumbnail = Thumb()


var http = require('http');
var fs = require('fs');
var express = require('express');
var app = express();

async function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    fs.readFile('./index.html', null, async function(error, data) {
        if (error) {
            response.writeHead(404)
        } else {
            await response.write("<img src = "+await Thumbnail+">");
        }
        response.end();
    });
}

http.createServer(onRequest).listen(8000)
