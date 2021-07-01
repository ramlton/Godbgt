module.exports = {
    name: "slap",
    description: "Return A Slap GIF!",
    execute(message, args, Discord) {
      
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

      if(!user) return message.channel.send('Provide a user to slap!')

      const gifs = [
        'https://tenor.com/view/batman-slap-robin-slap-gif-10206784',
        'https://tenor.com/view/pikachu-slap-fight-mad-no-gif-16415016',
        'https://tenor.com/view/family-guy-smack-slap-angry-mad-gif-17672480',
        'https://tenor.com/view/face-punch-punch-minions-fine-happy-gif-4902917',
        'https://tenor.com/view/baka-slap-huh-angry-gif-15696850',
        'https://tenor.com/view/slap-gif-19326818',
      ];

      const result = Math.floor(Math.random() * gifs.length);
  
      return message.channel.send(`${gifs[result]}`).then(() => 
      message.channel.send(`${message.author.username} slapped ${user.user.username}`))
    }
  };