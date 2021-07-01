module.exports = {
    name:'clear',
    description:'This is a clear command',
    async execute(message, args){
        if(message.member.roles.cache.has('848509400565547018')){
            if(!args[0]) return message.reply('Pls eneter a aommount of messages you want to delete')
            if(isNaN(args[0])) return message.channel.send('pls enter a real number')
    
            if(args[0] > 100) return message.channel.send('100 is the Limit')
            if(args[0] < 1) return message.channel.send('You have to delete atleast 1 message')
    
            await message.channel.messages.fetch({Limit: args[0]}).then(messages =>{
                message.channel.bulkDelete(messages)
            
        })
        }
       
     }
    }