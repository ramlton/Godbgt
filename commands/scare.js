module.exports = {
    name: "scare",
    description: "Return A scary GIF!",
    execute(message, args, Discord) {
      
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

      if(!user) return message.channel.send('Provide a user to scare!')

      const gifs = [
        'https://media.giphy.com/media/28aGE5xerXkbK/giphy.gif',
        'https://media.giphy.com/media/9VhbMwQUgXliE/giphy.gif',
        'https://media.giphy.com/media/5fOiRnJOUnTMY/giphy.gif',
        'https://media.giphy.com/media/5oWpOD8Thsmo8/giphy.gif',
        'https://media.giphy.com/media/h5NLPVn3rg0Rq/giphy.gif',
      ];

      const result = Math.floor(Math.random() * gifs.length);
  
      return message.channel.send(`${gifs[result]}`).then(() => 
      message.channel.send(`${message.author.username} scared ${user.user.username}`))
    }
  };