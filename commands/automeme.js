const discord = require('discord.js')
const main = require('../main')

module.exports = {
    name: 'Automeme',
    description: "This command automeme",
    execute(message, args){
        if (!args[0]) return message.reply(`Please specify if you are turning the command on or off!`);
        if (args[1]) return message.reply(`Please specify if you are turning the command on or off! [Too many Arguments!]`);
        switch (args[0]) 
        {
          default: 
          {
            message.reply('invalid argument specified.')
            break;
          }
          case "on":
            {
              if (!main.timedCheck){
                main.timedCheck = setInterval(() =>{
                  message.channel.send('!meme')
                  console.log("Interval cycle run for " + (main.val++) + " times!");
                  valcheck();
                },500000);
                message.reply('command started!');
              } else {
                return message.reply(`command already running!`)
              }
              break;
            }
          case "off":
            {
              if (main.timedCheck){
              message.reply(`has turned off command!`);
              clearInterval(main.timedCheck);
              main.timedCheck = undefined;
              } else {
                return message.reply(`command already offline!`)
              }
              break;
            }
        }
       
      let valcheck = () => {
        if (main.val > 10000000){
          clearInterval(main.timedCheck);
          main.timedCheck = undefined;
          return message.channel.send(`command finished as scheduled!`);
        }
      };
        }
       
    }