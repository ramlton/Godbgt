module.exports = {
    name: "hug",
    description: "Return A hug GIF!",
    execute(message, args, Discord) {
      
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

      if(!user) return message.channel.send('Provide a user to hug!')

      const gifs = [
        'https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif',
        'https://media.giphy.com/media/wSY4wcrHnB0CA/giphy.gif',
        'https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif',
        'https://media.giphy.com/media/PHZ7v9tfQu0o0/giphy.gif',
        'https://media.giphy.com/media/od5H3PmEG5EVq/giphy.gif',
        'https://media.giphy.com/media/3bqtLDeiDtwhq/giphy.gif',
      ];

      const result = Math.floor(Math.random() * gifs.length);
  
      return message.channel.send(`${gifs[result]}`).then(() => 
      message.channel.send(`${message.author.username} hugged ${user.user.username}`))
    }
  };