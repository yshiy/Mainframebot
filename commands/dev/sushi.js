const Discord = require("discord.js")

module.exports = {
    async run (bot, message, args){
        const embed = new Discord.MessageEmbed()
        .setTitle("Sushi o irmão do jefferson")
        .setDescription(
          `Du wirst die Wahrheit erkennen, und die Wahrheit wird dich befreien.`
        )
        .setFooter('∮⁵ 𝑺𝒖𝒔𝒉𝒊 憤🖤        ')
        .setImage('https://cdn.discordapp.com/attachments/724649718688252014/794734558091411456/sushi_man-1.gif')
        .setColor("RANDOM");
      message.channel.send(embed);
      message.channel.send("\u200B");
    
        
    },
    name: "sushi",
    category:"dev",
    aliases: ['putadoshiy1'],

}