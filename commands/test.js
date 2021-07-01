module.exports = {
    name:'test',
    description:'This is a test cmd',
    execute(message, args, discord){
        message.channel.send('hell!')
    }
}