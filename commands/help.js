const Discord = require('discord.js')
module.exports = {
    name:"help",
    description:"This showcase the cmd",
    execute(messgae, args){
        const helpembed = new Discord.MessageEmbed()
        .setTitle('These are the cmds that might help you')
        .addFields(
            {name:'Some useful commands for mods', value:'These commands should be used to punish not fun'},
            {name:"!clear 100", value:"These command will help u to clear 100 message's"},
            {name:'!ban',value:'These command will ban a person by just tagging them'},
            {name:'!kick',value:'These command will kick a person by just tagging them'},
            {name:'!mute(timed and manual)',value:'These will mute a person note:These can be muted as your time or u can manually unmute them'},
            {name:'!unmute',value:'you can unmute a person by this cmd'},
            {name:'tempban'}
        )
    }
}