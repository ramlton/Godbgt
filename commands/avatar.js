const discord  = require('discord.js')

module.exports = {
    name:'avatar',
    description:'Shows info about member',
    execute(message, args){
        const user = message.mentions.users.first() || message.author
        const avatarembed = new discord.MessageEmbed()
        .setImage(user.displayAvatarURL({dynamic: true}))
        .setTitle(`Name: ${user.username}`)
        .setColor('#fccf03')
        message.channel.send(avatarembed)
        const memberdate = user.join
    }
}