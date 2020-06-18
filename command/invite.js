const Discord = require("discord.js")
const fs = require("fs")
module.exports.run = async (client, message, args, prefix) => {
  const embed = new Discord.RichEmbed()
      .setTitle(`Adding ${client.user.username}`)
      .setDescription(
        `Yeay thank you for choosing ${client.user.username} [Click Here](https://discord.com/oauth2/authorize?client_id=722876666174767239&permissions=8&scope=bot) to add to your server.`)
       .setColor("#ff8ff0");
    return message.channel.send(embed);
  }

module.exports.config = {
  name: "invite",
  aliases: ["inv"]
}