var dir = 'D:/Downloads/PROGRAMAS/DiscordBot/conabot10000'; //define working environment
const Discord = require('discord.js');
var Priests = require('./module.js')
var aggrPriests = Priests.aggrPriests;
var priestsarr = Priests.priestsarr;
const client = new Discord.Client();
var bonk = 0;
var amenCount=0;
client.on('message', msg => {
    var user = msg.author;
  	var str = msg.content.toLowerCase();
  	/*if(str.includes('teoria de numeros') || str.includes('teoria de números') || str.includes('tn')){
  		msg.react(msg.guild.emojis.cache.get('699074879005262001'));
  	}
  	if(str.includes('mecanica') || str.includes('mecânica') ){
    	msg.react(msg.guild.emojis.cache.get('707966711311237211'));
    }*/
    if(str.includes('!github') && !user.bot){
        const emb = new Discord.MessageEmbed()
                .setColor("DARK_PURPLE")
                .setTitle('*conabot10000 GitHub*')
                .setURL('https://github.com/rootHytx/conabot10000')
                .setAuthor('hytx', 'https://avatars1.githubusercontent.com/u/29551985?s=460&u=b1bc4c0a1ba93ecf926200b3e697b39f479a50bb&v=4', 'https://twitter.com/root_cs30')
                .setDescription('*mt cona oh filho*')
                .setThumbnail('https://avatars1.githubusercontent.com/u/29551985?s=460&u=b1bc4c0a1ba93ecf926200b3e697b39f479a50bb&v=4')
        msg.channel.send(emb);
    }
    if(str.includes('cona') && !user.bot){
        var tempString = str;
        while(tempString.includes('cona')){   
            amenCount++;
            tempString = tempString.replace('cona', '');
            if(amenCount%3===0 && amenCount!=0){
                const attachment = new Discord.MessageAttachment(aggrPriests[Math.floor(Math.random()*aggrPriests.length)]);
                msg.channel.send(`PARABÉNS SEUS INFIÉIS, COMETERAM ${amenCount} PECADOS, AGORA REZEM A NOSSO SENHOR JESUS CRISTO!` , attachment);
            }
        }
    }
    if(str.includes('pedofilo') && !user.bot){
        const attachment = new Discord.MessageAttachment(priestsarr[Math.floor(Math.random()*priestsarr.length)]);
        msg.channel.send(attachment);
    }
    if(str.includes('estudar')){
       msg.react(msg.guild.emojis.cache.get('718480017948147762'));
    }
    if(str.includes('!bruh')){
       const attachment = new Discord.MessageAttachment('9d5.png');
       msg.channel.send(attachment);
    }
    if(str.includes('!puta')){
       const attachment = new Discord.MessageAttachment('TFM.jpg');
       msg.channel.send(attachment);
    }
    if(str.includes('rita ribeiro')){
       const attachment = new Discord.MessageAttachment('245609.jpg');
       msg.channel.send(attachment);
    }
    if(str.includes('!bonk')){
       const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/757316096582746233/780825563005845565/BONK.png');
       msg.channel.send(attachment);
    }
    if(str.includes('!crack')){
       msg.reply('Debaixo da ponte tasse bem');
    }
    if(str.includes('!kekw')){
       msg.channel.send('https://tenor.com/view/lol-risitas-haha-laught-jaja-gif-14980367');
    }
    if(str.includes('!cona') && !user.bot){
       msg.reply('cona123 ya KKKKKKKKKKKKKKKKKKKKKKK');
    }
});
client.login('');
