const { MessageEmbed } = require("discord.js");

module.exports = {
  info: {
    name: "invite",
    description: "Para adicionar/convidar o bot para o seu servidor",
    usage: "",
    aliases: ["inv"],
  },

  run: async function (client, message, args) {
    
    //set the permissions id here (https://discordapi.com/permissions.html)
    var permissions = 37080128;
    
    let invite = new MessageEmbed()
    .setTitle(`Invite ${client.user.username}`)
    .setDescription(`Quer-me no seu servidor? Me convide hoje!   \n\n [Invite Link](https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot)`)
    .setURL(`https://discord.com/oauth2/authorize?client_id=${client.user.id}&permissions=${permissions}&scope=bot`)
    .setColor("BLUE")
    return message.channel.send(invite);
  },
};
