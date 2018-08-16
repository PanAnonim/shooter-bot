const Discord = require('discord.js');
const Token = "NDE1MjM0OTcxMjU1NzAxNTA0.DXG29g.hWvdl2mpdGW70RzIBImHU4GRaVI";
const Prefix = "=";
var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Gotowy");
});

bot.on(`guildMemberAdd`, member => {
    console.log(`User`+ member.user.name + `has joined the serwer`)

    var role = member.guild.roles.find("name", `Osz kurwa wyjebało poza skale`)
    member.addRole(role)
})


bot.on('message', function(message) {
    if (message.author.equals(bot.user)) return;
    
    if (message.content.startsWith(Prefix)); 

    var args = message.content.substring(Prefix.length).split(" ");

    switch (args[0].toLowerCase()) {
    case "ping":
        message.channel.sendMessage("Nie działa");
        break;
    case "info":
        message.channel.sendMessage("Jestem botem który po prostu utrudnia wam życie, używasz mnie za pomocą komend =loot oraz =shoot");
        break;
    case "shoot":
        message.delete()
        var strzal = Math.floor(Math.random() * 6) + 1;
        if (strzal >= 5)
        message.channel.sendMessage("Nie trafiłeś");
        else
        message.channel.sendMessage("Trafiłeś");
        break;
    case "loot":
        message.delete()
        var loot = Math.floor(Math.random() * 6) + 1;
        if (loot >= 4)
        message.channel.sendMessage("Nie Znalazłeś");
        else
        message.channel.sendMessage("Znalazłeś");
        break;

    }
});

bot.login(Token);
