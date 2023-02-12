const noblox = require('noblox.js')
const dotenv = require('dotenv').config()

const cookie = process.env.COOKIE

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

noblox.setCookie(cookie).then(function() { 
    console.log("Logged in successfully!")

    Thumb()
}).catch(function(err){
    console.log(`Error loggin in, full error: ${err}`)
})


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