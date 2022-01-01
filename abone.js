const Discord = require("discord.js"),
client = new Discord.Client();
const db = require("quick.db")

module.exports.run = async (client, message, args) => {
let kayitciuye = '' // abone yetkilisi rolünün idsi
let verilecekrol = message.guild.roles.cache.get('')//abone rolünün idsi



 if (!message.member.roles.cache.has(kayitciuye) && !message.member.hasPermission('ADMINISTRATOR')) return console.log(`${message.author.username} komutu kullanmaya çalıştı.`)
let semoizm1 = message.mentions.users.first() || client.users.cache.get(args.join(' ')) || message.guild.members.cache.find(c=> c.id === args[0])
  if (!semoizm1) return console.log(`${message.author.username} komutu yanlış kullandı!`);
   let semoizm = message.guild.member(semoizm1)
   let oncedenabone = db.fetch(`abonerolu_${semoizm.id}`)
   if (verilecekrol) return message.react(''); //x emoji idsi
     
if(oncedenabone == null){
 
  semoizm.roles.add(verilecekrol);
  
  const denemeh = semoizm.id

    
  db.add(`abonerolu_${denemeh}`, 1)
db.add(`abonerolusayisi.${message.author.id}`, 1);
	  db.set(`serverData.${message.guild.id}.userData.${denemeh}.owner`,  message.author.id)
message.react(''); // tik emoji idsi
   
    const embed1 = new Discord.MessageEmbed() 
    
} else {
message.react(''); // x emoji idsi
  message.author.send(`**${semoizm.user.username}** | \`${semoizm.id}\` daha önceden abone rolü alıp sunucudan ayrıldığı için abone rolü verilememiştir.`)
}
  
};
exports.config = {
  name: "abone",
  guildOnly: true,
  aliases: [],
};
