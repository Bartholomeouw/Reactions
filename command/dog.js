const superagent = require("snekfetch");
const Discord = require('discord.js')

module.exports = {
  name: "dog",
  category: "fun",
description: "Sends a random dog image",
usage: "[command]",
run: async (client, message, args) => {
//command
superagent.get('https://nekos.life/api/v2/img/woof')
    .end((err, response) => {
  const lewdembed = new Discord.RichEmbed()
  .setTitle("Random dog")
  .setImage(response.body.url)
  .setColor(`#ff8ff0`)
  .setFooter(`woof`)
  .setURL(response.body.url);
message.channel.send(lewdembed);
})
}
};