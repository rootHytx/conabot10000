const Discord = require('discord.js');
const client = new Discord.Client();
var dir = 'D:/Downloads/PROGRAMAS/DiscordBot/conabot10000'; //define working environment
var amenCount = 0;
var bonk = 0;
client.on('message', msg => {
 	//var b = msg.includes('cona');
  //if(msg.content.includes('cona')){
  	var priestsArr = [dir.concat('/priests/priest1.jpg'), dir.concat('/priests/priest2.jpg'), dir.concat('/priests/priest3.jpg'), dir.concat('/priests/priest4.jpg'), dir.concat('/priests/priest5.jpg')];
  	var arr = [1,2,3,4,5];
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
     amenCount++;
     const attachment = new Discord.MessageAttachment(priestsArr[Math.random()*priestsArr.length]);
     if(amenCount%3===0 && amenCount!=0){
        var file = priestsArr[Math.floor(Math.random()*priestsArr.length)];
        const attachment = new Discord.MessageAttachment(file);
        msg.channel.send(`PARABÉNS SEUS INFIÉIS, COMETERAM ${amenCount} PECADOS, AGORA REZEM A NOSSO SENHOR JESUS CRISTO!` , attachment);
    }
}
if(str.includes('estudar')){
   msg.react(msg.guild.emojis.cache.get('718480017948147762'));
}
if(str.includes('!bruh')){
   const attachment = new Discord.MessageAttachment('9d5.png');
   msg.channel.send(attachment);
}
if(str.includes('rita ribeiro')){
   const attachment = new Discord.MessageAttachment('245609.jpg');
   msg.channel.send(attachment);
}
if(str.includes('!bonk')){
   const attachment = new Discord.MessageAttachment('https://i.kym-cdn.com/entries/icons/mobile/000/033/758/Screen_Shot_2020-04-28_at_12.21.48_PM.jpg');
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