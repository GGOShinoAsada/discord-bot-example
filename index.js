// Require the necessary discord.js classes
const { Client, Events, GatewayIntentBits } = require('discord.js');
const { token, prefix } = require('./config.json');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages] });


client.once(Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.on("messageCreate", (message) => {
    
    console.log(`A message has been sent in ${message.channel} as ${message.content}`);

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


client.login(token);