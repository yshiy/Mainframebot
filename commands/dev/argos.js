const Discord = require("discord.js")

module.exports = {
    async run (bot, message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle("Argos O Deus do Sol!")
        .setDescription(
          `Você voou muito perto do Sol, só estou aqui para me certificar de que queime.`
        )
        .setFooter('Λ Argos V')
        .setImage('https://media.discordapp.net/attachments/724672063171985438/794730942991564811/apps.png?width=840&height=473')
        .setColor("RANDOM");
      message.channel.send(embed);
      message.channel.send("\u200B");
    
        
    },
    name: "argos",
    category: "dev",
    aliases: ['putadoshiy2'],
}