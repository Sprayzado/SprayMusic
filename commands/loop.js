const { MessageEmbed } = require("discord.js");
const sendError = require("../util/error");

module.exports = {
  info: {
    name: "loop",
    description: "Colocar Loop na musica",
    usage: "",
    aliases: ["l"],
  },

  run: async function (client, message, args) {
    const serverQueue = message.client.queue.get(message.guild.id);
       if (serverQueue) {
            serverQueue.loop = !serverQueue.loop;
            return message.channel.send({
                embed: {
                    color: "GREEN",
                    description: `🔁  **|**  Loop está **\`${serverQueue.loop === true ? "Habilitado" : "Desabilitado"}\`**`
                }
            });
        };
    return sendError("Não esta tocando nesse servidor", message.channel);
  },
};

