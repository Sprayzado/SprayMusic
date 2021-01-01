const { MessageEmbed } = require("discord.js")

/**
 * 
 * @param {String} text 
 * @param {TextChannel} channel 
 */
module.exports = async (text, channel) => {
    let embed = new MessageEmbed()
    .setColor("RED")
    .setDescription(text)
    .setFooter("SprayMusic")
    await channel.send(embed)
}