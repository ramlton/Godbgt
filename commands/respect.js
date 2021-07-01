module.exports = {
    name: "respect",
    description: "Return A respect GIF!",
    execute(message, args, Discord) {
      
      const user = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

      if(!user) return message.channel.send('Provide a user to give repect!')

      const gifs = [
        'https://media.giphy.com/media/U6kTpJ6GIEZ0jdBhNb/giphy.gif',
        'https://media.giphy.com/media/l4pT2ASyWWGw4NbDG/giphy.gif',
        'https://media.giphy.com/media/WO5Q7FsxJN2pjYc424/giphy.gif',
        'https://media.giphy.com/media/JlpjgShzDsrMIyFu5U/giphy.gif',
        'https://media.giphy.com/media/1WbNcJYD0ruf8nl3OJ/giphy.gif',
        'https://media.giphy.com/media/Qw7r3973Ni5152f0jW/giphy.gif',
      ];

      const result = Math.floor(Math.random() * gifs.length);
  
      return message.channel.send(`${gifs[result]}`).then(() => 
      message.channel.send(`${message.author.username} gave respect to ${user.user.username}`))
    }
  };




