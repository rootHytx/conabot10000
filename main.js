var dir = 'D:/Downloads/PROGRAMAS/DiscordBot/conabot10000'; //define working environment

const ytdl = require('ytdl-core');
const { Player } = require('discord-player');
const Discord = require('discord.js');          //modules
var Module = require('./module.js')            //custom module file, includes locations for various pics

var hornydog = Module.hornydog;
var faculdade = Module.faculdade;
var priestsarr = Module.priestsarr;
var aggrPriests = Module.aggrPriests;
var nojentos = Module.nojentos;            //defining arrays for random pics


const client = new Discord.Client();        //discord bot client
const player = new Player(client);
client.player = player;

var msgsCommandArray = [];
var audioCommandArray = [];
var curMsg;
var voiceServer;
var bonk = 0;
var amenCount=0;                                    //neat variables

/*function checkQueue(){
    if(queue.length>0 && queue!=undefined){
        var link=queue[0];
        queue.shift();
        const cur = voiceServer.play(`${link}`);
        cur.addEventListener(!'speaking', checkQueue());
    }
    else isPlaying=false;
}*/
client.player.options.leaveOnEnd=false;
client.player
.on('trackStart', (message, track) => curMsg.channel.send(`BLASTIN ${track.url}...`))
 
// Send a message when something is added to the queue
.on('trackAdd', (message, track) => {
    var noice=curMsg.guild.emojis.cache.get('707966711311237211');
    curMsg.channel.send(`mais um bop ${noice}`);
})
.on('playlistAdd', (message, playlist) => curMsg.channel.send(`OLHA AI A MINHA MIXTAPE OH FILHO DROPPEI A SOUNDCLOUD ${playlist.title}, ${playlist.items.length} hits mm m m m mmm MM M M`))

.on('searchResults', (message, query, tracks) => {
 
    const embed = new Discord.MessageEmbed()
    .setAuthor(`toma la o que encontrei p ${query} oh morcao`)
    .setDescription(tracks.map((t, i) => `${i}. ${t.title}`))
    .setFooter('kek keres ke eu meta brou?')
    curMsg.channel.send(embed);
 
})
.on('searchInvalidResponse', (message, query, tracks, content, collector) => curMsg.channel.send(`You must send a valid number between 1 and ${tracks.length}!`))
.on('searchCancel', (message, query, tracks) => curMsg.channel.send('You did not provide a valid response... Please send the command again!'))
.on('noResults', (message, query) => curMsg.channel.send(`No results found on YouTube for ${query}!`))

// Send a message when the music is stopped
.on('queueEnd', (message, queue) => curMsg.channel.send('acabou-se o que era doce'))
.on('channelEmpty', (message, queue) => curMsg.channel.send('bro e eu que ia bafar uma e os dreds bazaram mm fds'))
.on('botDisconnect', (message, queue) => {
    if(voiceServer!=undefined){
        var sad = client.emojis.cache.get('752177402372817006');
        curMsg.channel.send(`XAU AI FIASPUTAS ${sad}`);
    }
})
.on('error', (error, message) => {
    switch(error){
        case 'NotPlaying':
            curMsg.channel.send('nem tamos a curtir nenhum som irmao')
            break;
        case 'NotConnected':
            curMsg.channel.send('tas na disney oh chavalo, entao nem estas em nenhum server fds')
            break;
        case 'UnableToJoin':
            curMsg.channel.send('bro ou meteram ai um pedofilo qualquer ou nao sei que n me consigo juntar pqp')
            break;
        default:
            curMsg.channel.send(`olha fodi-me, toma ai o que aconteceu: ${error}`)
    }
})
client.on('message', msg => {
    console.log(msg.content);
    client.player.options.leaveOnEnd=false;
    curMsg = msg;
    var user = msg.author;                                       //who dis
  	var str = msg.content.toLowerCase();             //get that bitch low

    //check out my mixtape y'all
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
    msgsCommandArray.push('!github');

    //SIN_COUNTER
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

    //so ya like fucking kids eh
    if(str.includes('pedofilo') && !user.bot){
        const attachment = new Discord.MessageAttachment(priestsarr[Math.floor(Math.random()*priestsarr.length)]);
        msg.channel.send(attachment);
    }
    //grega-te td no pc mm
    if(str.includes('!nojentos') && !user.bot){
        const attachment = new Discord.MessageAttachment(nojentos[Math.floor(Math.random()*nojentos.length)]);
        msg.channel.send(attachment);
    }
    msgsCommandArray.push('!nojentos');

    //REACTS
    if(str.includes('estudar')){
       msg.react(msg.guild.emojis.cache.get('718480017948147762'));
    }
    /*if(str.includes('teoria de numeros') || str.includes('teoria de números') || str.includes('tn')){
        msg.react(msg.guild.emojis.cache.get('699074879005262001'));
    }
    if(str.includes('mecanica') || str.includes('mecânica') ){
        msg.react(msg.guild.emojis.cache.get('707966711311237211'));
    }*/

    //SEND
    if(str.includes('!autista')){
       const attachment = new Discord.MessageAttachment('https://2018.e-tech.pt/wp-content/uploads/2018/04/rog%C3%A9rioreis-458x458.jpg');
       msg.channel.send(attachment);
    }
    msgsCommandArray.push('!autista');
    if(str.includes('!bruh')){
       const attachment = new Discord.MessageAttachment('9d5.png');
       msg.channel.send(attachment);
    }
    msgsCommandArray.push('!bruh');
    if(str.includes('!puta')){
       const attachment = new Discord.MessageAttachment('TFM.jpg');
       msg.channel.send(attachment);
    }
    msgsCommandArray.push('!puta');
    if(str.includes('rita ribeiro')){
       const attachment = new Discord.MessageAttachment('245609.jpg');
       msg.channel.send(attachment);
    }
    if(str.includes('!bonk')){
       const attachment = new Discord.MessageAttachment('https://cdn.discordapp.com/attachments/757316096582746233/780825563005845565/BONK.png');
       msg.channel.send(attachment);
    }
    msgsCommandArray.push('!bonk');
    if(str.includes('!cringe') && !user.bot){
        msg.channel.send('https://pbs.twimg.com/media/EF_SLiCXkAACM6n.jpg');
    }
    msgsCommandArray.push('!cringe');

    //FAC
    if(str.includes('!fac') && !user.bot){
        var sparkles = '✨';
        const emb = new Discord.MessageEmbed()
                .setColor("DARK_GOLD")
                .setTitle(`${sparkles} ***links para deprimir*** ${sparkles}\n`)
                .setDescription("```fix\n1º Ano\n\t1º Semestre - 1\n\t2º Semestre - 2\n2º Ano\n\t1º Semestre - 3\n\t2º Semestre - 4\n3º Ano\n\t1º Semestre - 5\n\t2º Semestre - 6```");
        msg.channel.send(emb);
        str='';
        const collector = msg.channel.createMessageCollector((m) => m.author.id === msg.author.id, {
            time: 60000,
            errors: ['time']
        });
        collector.on('collect', ({ content }) => {
            if(isNaN(content) || content<1 || content>6){
                collector.stop('badAnswer');
            }
            else{
                var map = faculdade[content-1];
                console.log(map.keys());
                const emb = new Discord.MessageEmbed()
                        .setColor("DARK_GOLD")
                        .setTitle('***Aqui vai oh morcoum:***')
                for(let [key, value] of map){
                    str = str.concat('```fix\n' + key + '```' + value + '\n\n');
                }
                emb.setDescription(str);
                msg.channel.send(emb);
                collector.stop();
            }
        });
        collector.on('end', (collected, reason) => {
            if (reason === 'time') {
                msg.reply('estás na Disney tu puto, um mano aqui à espera e tu deixas-me pendurado mm...');
            }
            if(reason === 'badAnswer'){
                msg.reply(`estás na Disney tu puto, eu pedi um número, não uma prova de TN caralho...`);
            }
        });
    }
    msgsCommandArray.push('!fac');

    //MENTIONS
    if(str.includes('!crack')){
       msg.reply('Debaixo da ponte tasse bem');
    }
    msgsCommandArray.push('!crack');
    if(str.includes('!hornydog') && !user.bot){
       const attachment = new Discord.MessageAttachment(hornydog);
       msg.reply(attachment);
    }
    msgsCommandArray.push('!hornydog');
    if(str.includes('!kekw')){
       msg.channel.send('https://tenor.com/view/lol-risitas-haha-laught-jaja-gif-14980367');
    }
    msgsCommandArray.push('!kekw');
    if(str.includes('!pog')){
       msg.channel.send('https://tenor.com/view/pogchamp-shocked-intensified-gif-17946611');
    }
    msgsCommandArray.push('!pog');
    msgsCommandArray.push('!conabot10000');
    if(str.includes('!conabot10000') || str.includes('!bot') || str.includes('!conabot')){
       msg.reply('hey there ; ) https://tenor.com/view/drinking-smile-funny-smile-juice-old-man-gif-3865079');
    }
    else if(str.includes('!cona') && !user.bot){
       msg.reply('cona123 ya KKKKKKKKKKKKKKKKKKKKKKK');
    }
    msgsCommandArray.push('!cona');

    //AUDIO
    if(str.includes('!join') && !user.bot){          //!join
       if(msg.member.voice.channel){   
            msg.member.voice.channel.join().then(connection => {
                voiceServer = connection;
            });
        }
        msg.channel.send('AYYYYYYYYYYYYY WHAT THE FUCK IS UP');
    }
    audioCommandArray.push('!join');
    if(str.includes('!exit') && !user.bot && voiceServer!=undefined){                     //!exit
        voiceServer.disconnect();
        var sad = client.emojis.cache.get('752177402372817006');
        msg.channel.send(`XAU AI FIASPUTAS ${sad}`);
        voiceServer=undefined;
    }
    audioCommandArray.push('!exit');
    if(str.includes('!play') && str.includes('youtube.com') && !user.bot && voiceServer!=undefined){           //play - links
        var arr = msg.content.split(' ');
        var link;
        for(var i=0;i<arr.length;i++){
            if(arr[i].includes('https://www.youtube.com')) link=arr[i];
            else if(arr[i].includes('youtube.com')){
                while(!arr[i].startsWith('youtube.com')){
                    arr[i] = arr[i].substring(1,arr[i].length);
                }
                link = 'https://www.'.concat(arr[i]);
            }
        }
        console.log(link);
        client.player.play(msg, `${link}`);
    }
    else if(str.includes('!play') && !user.bot){                                                                                                                  //play - searches
        if(voiceServer===undefined){
            if(msg.member.voice.channel){   
                msg.member.voice.channel.join().then(connection => {
                    voiceServer = connection;
                });
            }
            var link = msg.content.substr(6);
            client.player.play(msg, `${link}`);
            msg.channel.send('AYYYYYYYYYYYYY WHAT THE FUCK IS UP');
        }
        else{
            var link = msg.content.substr(6);
            client.player.play(msg, `${link}`);
        }
    }
    audioCommandArray.push('!play');
    if(str.includes('!stop') && !user.bot){                                             //!stop
        client.player.pause(msg);
    }
    audioCommandArray.push('!stop');
    if(str.includes('!skip') && !user.bot){                                              //!skip
        client.player.skip(msg);
    }
    audioCommandArray.push('!skip');
    if(str.includes('!resume') && !user.bot){                                             //!stop
        client.player.resume(msg);
    }
    audioCommandArray.push('!resume');
    if(str.includes('!queue') && !user.bot){                                            //queue
        var queue = client.player.getQueue(msg).tracks;
        var str = '***conabot10000 queue ya kkkkkkkkkkkkkkkkkkk***\n`';
        for(var i=0;i<queue.length;i++){
            str = str.concat(`${i+1}.  `).concat(`${queue[i].title}`);
            var num=60-queue[i].title.length-queue[i].duration.length;
            for(var k=0;k<num;k++){
                str = str.concat(' ');
            }
            str = str.concat(`${queue[i].duration}`).concat('\n');
        }
        str = str.concat('`');
        msg.channel.send(str);
    }
    audioCommandArray.push('!queue');
    audioCommandArray.push('!help');
    if(str.includes('!help') && !user.bot){
        var str = '***Mensagens***\n```\n';
        for(i in msgsCommandArray){
            str = str.concat(`\t${msgsCommandArray[i]}\n`);
        }
        str = str.concat('```\n***Audio***\n```\n');
        for(i in audioCommandArray){
            str = str.concat(`\t${audioCommandArray[i]}\n`);
        }
        str = str.concat('```');
        var emb = new Discord.MessageEmbed()
            .setColor("DARK_GOLD")
            .setDescription(str);
        msg.channel.send(emb);
    }
});
client.login('');
