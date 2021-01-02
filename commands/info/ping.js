const Discord = require("discord.js");
module.exports = {
  name: "ping",
  category: "info",
  timeout: 10000,
  run: async (bot, message, args) => {
    message.channel.send(`🏓 pingando...`).then((msg) => {
      const embed = new Discord.MessageEmbed()
        .setTitle("Pong!")
        .setDescription(
          `🏓 Pong!\n O ping do bot é${Math.floor(
            msg.createdTimestamp - message.createdTimestamp
          )}ms\no da ping API é ${Math.round(bot.ws.ping)}ms`
        )
        .setColor("RANDOM");
      msg.edit(embed);
      msg.edit("\u200B");
    });
  },
};