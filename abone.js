const Discord = require('discord.js');
const db = require('quick.db')

exports.run = async (client, message, args) => {

let yetki = message.guild.roles.cache.get(``) //abone yetkili rolünüzün idsi
let abone = message.guild.roles.cache.get(``) //abone rolünüzün idsi


 if(![yetki].some(role => message.member.roles.cache.get(role)) && !message.member.hasPermission('ADMINISTRATOR')) return message.reply(`Bu Komut İçin Yetkiniz Bulunmamaktadır.`) 
   
 let kullanıcı = message.mentions.users.first()
  if (!kullanıcı) return message.channel.send('Kullanıcıyı etiketlemelisin.').then(msg => msg.delete(10000))
  let member = message.guild.member(kullanıcı)
  member.roles.add(abone)
// message.channel.send("Başarıyla abone rolü verildi!")
message.delete()
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['youtube','yt','a'],
  kategori: "",
  permLevel: 0
}

exports.help = {
  name: 'abone',
  description: "Abone rolü vermeye ne dersin?",
  usage: 'abone @etiket'
}
