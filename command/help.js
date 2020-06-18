const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {
  
  let command = new Discord.RichEmbed()
  .setAuthor(`Minako`, client.user.avatarURL)
  .setDescription(`**Minako** Comes from Indonesia, he is a high school student who is very smart and admired by everyone, of course, do not forget to invite and have fun.`)
  .setColor("#ff8ff0")
  .addField(`**➡️ Music**`, `\`a!play\` \`a!stop\` \`a!pause\`, (COMINGSOON)`)
  .addField(`**➡️ Moderation**`, `\`Ban\`, \`Kick\`, \`Mute\`, \`UnMute\``)
  .addField(`**➡️ Fun**`, `\`Neko\`, \`Hug\`, \`Cat\`, \`Baka\`, \`Cuddle\`, \`Dog\`, \`Flip\`, \`Kemonomimi\`, \`Kiss\`, \`Pat\`, \`Poke\`, \`RateWaifu\`, \`Slap\`, \`Smug\`, \`Waifu\`, \`Ship\` \`Fact\`, \`Spank\``)
  .addField(`**➡️ NSFW**`, `\(COMINGSOON)`)
  .addField(`**➡️ General**`, `\`Invite Bot\``)
  .addField(`**➡️ Support Server**`, `[\KLIK DISINI\](https://discord.gg/zCetBAK)`)
  .setThumbnail(client.user.displayAvatarURL)
  .setFooter("© ItsNeko", "https://cdn.discordapp.com/attachments/697750878131847183/721973064098906172/307500367041201.jpg");
  
  message.channel.send(command)
  
}