const Discord = require('discord.js');
const { Client } = require("discord.js");
const { Intents } = require('discord.js');
const robots = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });

const fs = require('fs');
let { prefix, token } = require('./config.json');


const quenue = new Map();
robots.on("ready", () => {
    console.log('bot started');
});



//event call after each sending message
robots.on('message', async message => {
    if (message.author.bot) {
        return;
    }
    if (!message.content.startsWith(prefix)) {
        return;
    }
    else {
        //get message string
        let cmdline = message.content.slice(prefix.length, message.content.length);
        
        let msg = "";
        let flag = false;
        let index = 0;
        let imgs = [];
        let path = "";
        //get command
        let cmd = cmdline.slice(1, cmdline.length );
     
        if (cmd == "hello")
        {
            //get sender username
            var username = message.author.username;
            //send message on channel
            message.channel.send("hi, "+username+"!");
        }
        else
        {
            message.channel.send("unknown command");
        }
    }
       
});







robots.login(token);