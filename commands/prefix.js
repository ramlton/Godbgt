const dicord = require ('discord.js')
module.exports = {
    name:'prefix',
    description:'This show u the prefix',
   execute(message, args){
    const user = message.mentions.users.first() || message.author
       const prefixembed = new dicord.MessageEmbed()
       .setTitle(`prefix-!  ${user.username}`)
       .setDescription('For new guys in discord - type this at starting of every cmd or command to see all the commands type !commands to see all the cool cmds or commands')
       .setColor('#35fc03')
       .setFooter('!help type this if u want kinda help')
       message.channel.send(prefixembed)
   }
}