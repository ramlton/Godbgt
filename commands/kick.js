module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    execute(message, args){
        if(message.member.roles.cache.has('848509400565547018')){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send("User has been kicked");
        }else{
            message.channel.send(`You dont have perms`);
        }
        }
    }
}