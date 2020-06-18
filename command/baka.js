const superagent = require("snekfetch");
const Discord = require('discord.js')

exports.run = async (client, message, args, level) => {
    if (!message.channel.nsfw) return message.channel.send('You can use this command in an NSFW Channel!')
    superagent.get('https://nekos.life/api/v2/img/baka')
        .end((err, response) => {
      const lewdembed = new Discord.RichEmbed()
      .setTitle("BAKA!!!")
      .setImage(response.body.url)
      .setColor("#ff8ff0")
      .setFooter(`Baka! -w-`)
      .setURL(response.body.url);
  message.channel.send(lewdembed);
    })
	
}