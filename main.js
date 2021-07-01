const Discord = require('discord.js');

const client = new Discord.Client({ partials: ["MESSAGE", "CHANNEL", "REACTION"] });

const prefix = '!'

const fs = require('fs');
const got = require('got')
const db = require('quick.db')
const disbut = require('discord-buttons')(client)
const membercount = require('./counter/membercount')
const math = require('mathjs')
const config = require('./config.json')
const { join } = require("path");
const path = require("path");
const image = require('images-scraper')


client.commands = new Discord.Collection
client.events = new Discord.Collection

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);
 
    client.commands.set(command.name, command);
}



client.on('ready', () => {
    console.log("godbot is registered in DISCORD");
     membercount(client) 
    });

    client.on('guildMemberAdd', guildMember =>{
        let welcomeRole = guildMember.guild.roles.cache.find(role => role.name === 'member');
     
        guildMember.roles.add(welcomeRole);
       const channel = guildMember.guild.channels.cache.get('849958209962639390')
        const welcomeembed = new Discord.MessageEmbed()
        .setTitle(`<a:4387galaxyheart:853553030037635103> Welcome ${guildMember.user.id}  `)
        
        .addFields(
            {name:'basic',value:'things'},
            {name:'<a:4387galaxyheart:853553030037635103> ',value:'See the rules channel'},
            {name:'<a:4387galaxyheart:853553030037635103> ',value:'Grab some selfroles'},
            {name:'<a:4387galaxyheart:853553030037635103> ',value:'Chat at lounge'},
            {name:'<a:4387galaxyheart:853553030037635103> ',value:'Help each other'}
        )
        .setThumbnail(guildMember.user.displayAvatarURL())
        .setImage('https://cdn.discordapp.com/attachments/850670845475291156/856383703504781362/welcome_banner.gif')
        .setFooter('Also sub to my channel')
        channel.send(welcomeembed)
        });


        client.on('guildMemberRemove', guildMember =>{      
    const channel = guildMember.guild.channels.cache.get('854243168432947210')
     const leaveembed = new Discord.MessageEmbed()
     .setTitle(`bye  <a:6ac8aab2643c45b89bda1b31a5a930cb:853541378020343848> `)
     .setDescription(`bye  <@${guildMember.user.tag}> come back again `)
     .setThumbnail(guildMember.user.displayAvatarURL())
     .setImage('https://media4.giphy.com/media/10tIjpzIu8fe0/giphy.gif')
     .setFooter('Bye!')
     channel.send(leaveembed)
    });



client.on('message', async message => {
    if (message.content === "!meme") {
        const embed = new Discord.MessageEmbed()
        got('https://www.reddit.com/r/memes/random/.json').then(response => {
            let content = JSON.parse(response.body);
            let permalink = content[0].data.children[0].data.permalink;
            let memeUrl = `https://reddit.com${permalink}`;
            let memeImage = content[0].data.children[0].data.url;
            let memeTitle = content[0].data.children[0].data.title;
            let memeUpvotes = content[0].data.children[0].data.ups;
            let memeDownvotes = content[0].data.children[0].data.downs;
            let memeNumComments = content[0].data.children[0].data.num_comments;
            embed.setTitle(`${memeTitle}`)
            embed.setURL(`${memeUrl}`)
            embed.setImage(memeImage)
            embed.setColor('RANDOM')
            embed.setFooter(`👍 ${memeUpvotes} 👎 ${memeDownvotes} 💬 ${memeNumComments}`)
            message.channel.send(embed);
        })
    }

if (!message.content.startsWith(prefix)) return;
  
    if (!message.content.startsWith(prefix) || message.author.bot) return;


    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    const user = message.mentions.users.first() || message.author
   
    if(command === 'ban'){
        client.commands.get('ban').execute(message, args)
    }if(command === 'kick'){
        client.commands.get('kick').execute(message, args)
    }if(command === 'slap'){
        client.commands.get('slap').execute(message, args)
    }if(command === 'hug'){
        client.commands.get('hug').execute(message, args)
    }if(command === 'mute'){
        client.commands.get('mute').execute(message, args)
    }if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args)
    }if(command === 'respect'){
        client.commands.get('respect').execute(message, args)
    }if(command === 'scare'){
        client.commands.get('scare').execute(message, args)
    }if(command === 'test'){
        client.commands.get('test').execute(message, args)
    }if(command === 'clear'){
        client.commands.get('clear').execute(message, args)
    }if(command === 'ticket'){
        client.commands.get('ticket').execute(message, args)
    }if(command === 'automeme'){
      client.commands.get('Automeme').execute(message, args)
  }if(command === 'test'){
      client.commands.get('test').execute(message, args)
  }if(command === 'help'){
    client.commands.get('help').execute(message, args)
}if(command === 'avatar'){
    client.commands.get('avatar').execute(message, args)
}if(command === 'prefix'){
    client.commands.get('prefix').execute(message, args)
}
  



module.exports.timedcheck = undefined;
module.exports.val = 1;


        
    })


  


client.login(config.token);
