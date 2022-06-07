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

robots.on('guildMemberAdd', member => {
    let auth = member.user.user.username;
    member.guild.channels.get('welcome').send("Welcome, " + auth);
});

robots.on('guildMemberRemove', member => {
    let auth = member.user.user.username;
    member.guild.channels.get('welcome').send("Bye, " + auth);
});


robots.on('message', async message => {
    if (message.author.bot) {
        return;
    }
    if (!message.content.startsWith(prefix)) {
        return;
    }
    else {

        let cmdline = message.content.slice(prefix.length, message.content.length);

        let msg = "";
        let flag = false;
        let index = 0;
        let imgs = [];
        let path = "";
        let n = verify(cmdline);

        switch (verify(cmdline)) {
            case 0:
                switch (cmdline) {
                    case "haru-info":
                        msg = getInfo("haru");
                        flag = true;
                        break;
                    case "iris-info":
                        msg = getInfo("iris");
                        flag = true;
                        break;
                    case "stella-info":
                        msg = getInfo("stella");
                        flag = true;
                        break;
                    case "lilly-info":
                        msg = getInfo("lilly");
                        flag = true;
                        break;
                    case "jin-info":
                        flag = true;
                        msg = getInfo("jin");
                        break;
                    case "ervin-info":
                        msg = getInfo("ervin");
                        flag = true;
                        break;
                    case "help":
                        msg = "support commands:\ninfo: haru-info, iris-info, lilly-info, stella-info, jin-info, ervin-info";
                        flag = true;
                        break;
                    case "iris-art":
                        index = Math.floor(Math.random() * (25));
                        imgs = (JSON.parse(fs.readFileSync('./resources.json'))['iris']);
                        path = imgs[index.toString()];
                        message.channel.send(path);
                        break;
                    case "haru-art":
                        index = Math.floor(Math.random() * (16));
                        imgs = (JSON.parse(fs.readFileSync('./resources.json'))['haru']);
                        path = imgs[index.toString()];
                        message.channel.send(path);
                        break;
                    case "lilly-art":
                        index = Math.floor(Math.random() * (12));
                        imgs = (JSON.parse(fs.readFileSync('./resources.json'))['lilly']);
                        path = imgs[index.toString()];
                        message.channel.send(path);
                        break;
                    case "stella-art":
                        index = Math.floor(Math.random() * (17));
                        imgs = (JSON.parse(fs.readFileSync('./resources.json'))['stella']);
                        path = imgs[index.toString()];
                        message.channel.send(path);
                        break;
                    case "jin-art":
                        index = Math.floor(Math.random() * (19));
                        imgs = (JSON.parse(fs.readFileSync('./resources.json'))['jin']);
                        path = imgs[index.toString()];
                        message.channel.send(path);
                        break;
                    case "ervin-art":
                        index = Math.floor(Math.random() * (12));
                        imgs = (JSON.parse(fs.readFileSync('./resources.json'))['ervin']);
                        path = imgs[index.toString()];
                        message.channel.send(path);
                        break;
                    default:
                        break;

                }

                if (flag)
                    message.channel.send(msg);
                break;
            case -1:
                message.channel.send("i'm sorry, i dont know this command. Use help for get all commands");
                break;
            case 1:


                let cmd = cmdline.slice(0, cmdline.indexOf(' '));

                switch (cmd) {
                    case "say":
                        message.channel.send(args);
                        break;
                    case "description":

                        if (args != null) {
                            let historymsg = getHistory(args);

                            message.channel.send(`:slight_smile: see ${historymsg}`);
                        }
                        else {
                            message.channel.send("please enter character name");
                        }

                        break;
                    default:
                        break;
                }
                break;
            default:
                break;

        }
    }
});


/*
return link with offficial description about one of character
*/
function getHistory(name) {


    if (name != null) {
        switch (name) {
            case " haru":

                return "https://soulworkeronline.fandom.com/wiki/Haru_Estia";

            case " iris":
                return "https://soulworkeronline.fandom.com/wiki/Iris_Yuma";

            case " lilly":
                return "https://soulworkeronline.fandom.com/wiki/Lily_Bloommerchen";

            case " stella":
                return "https://soulworkeronline.fandom.com/wiki/Stella_Unibell";

            case "jin":
                return "https://soulworkeronline.fandom.com/wiki/Jin_Seipatsu";

            case " ervin":
                return message = "https://soulworkeronline.fandom.com/wiki/Erwin_Arclight";

            default:
                break;
        }
        return message;
    }
}


/*
if command include args, return 1 oherwice return 0;
if command isnt declared then return -1;
*/
function verify(message) {

    let n = -1;
    if (message != null) {
        let count = message.split(' ').length;
        switch (count) {
            case 2:
                let args = message.slice(message.indexOf(' '), message.length);
                let cmd = message.slice(0, message.indexOf(' '));
                if (args != "" || args != null) {
                    if (cmd.toLowerCase() == "say" || cmd.toLowerCase() == "description")
                        n = 1;
                }
                break;
            case 1:
                if (message.toLowerCase() == "haru-info" || message.toLowerCase() == "lilly-info" || message.toLowerCase() == "iris-info" ||
                    message.toLowerCase() == "stella-info" || message.toLowerCase() == "ervin-info" || message.toLowerCase() == "jin-info" ||
                    message.toLowerCase() == "haru-art" || message.toLowerCase() == "iris-art" || message.toLowerCase() == "lilly-art" ||
                    message.toLowerCase() == "stella-art" || message.toLowerCase() == "jin-art" || message.toLowerCase() == "ervin-art" || message.toLowerCase() == "help"
                ) {
                    n = 0;
                }
                break;
            default:
                //n = -1;
                break;
        }

    }
    return n;
}





function getInfo(name) {
    let info = "";
    switch (name) {
        case 'haru':
            info = "Charcacter: Haru Estia;\nAge: 17;\nBirthday: September, 17;\nHeigth: 165 cm;\nWeigth: 52 kg";
            break;
        case "iris":
            info = "Character: Iris Youma;\nAge: 18;\nBirthDay: November, 4;\nHeigth: 169 cm;\nWeight: 49 kg";
            break;
        case 'lilly':
            info = "Character: Lily Bloommerchen;\nAge: 15;\nBirthday: Febriary, 27;\nHeight: 155 cm\nWeight: 47 kg";
            break;
        case "stella":
            info = "Character: Stella Unibell;\nAge: 14;\nBirthday: June, 25;\nHeight: 148 cm;\nWeight: 39 kg";
            break;
        case "jin":
            info = "Character: Jin Seipatsu;\nAge: 17;\nBirthday: July, 28;\nHeight: 178 cm;\nWeight: 75 kg";
            break;
        case "ervin":
            info = "Character: Erwin Arclight;\nAge: 18;\nBirthday: May, 29;\nHeight: 175 cm;\nWeight: 64 kg";
            break;
        default:
            break;
    }
    return info;
}

robots.login(token);