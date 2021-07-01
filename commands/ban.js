module.exports = {
    name: 'ban',
    description: "This command ban a member!",
    execute(message, args){
        if(message.member.roles.cache.has('848509400565547018')){
            const target = message.mentions.users.first();
            if(target){
                const memberTarget = message.guild.members.cache.get(target.id);
                memberTarget.ban();
                message.channel.send("User has been banned");
            }
            }else message.channel.send('you dont have the perms for that')
        }
       
    }
