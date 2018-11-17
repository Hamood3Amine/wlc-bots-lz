const Discord = require('discord.js');
const client = new Discord.Client();
const user = new Discord.Client();
const mem = new Discord.Client();


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
user.on('ready', () => {
  console.log(`Logged in as ${user.user.tag}!`);
});
mem.on('ready', () => {
  console.log(`Logged in as ${mem.user.tag}!`);
});



client.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","dalida");
      if(!welcomer) return;
      if(welcomer) {
     welcomer.send(`**Welcome To __Dalida__ Server ..**`);          
      }
});
mem.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","dalida");
      if(!welcomer) return;
      if(welcomer) {
     welcomer.send(`**Welcome To __Dalida__ Server ..**`);          
      }
});
 user.on("guildMemberAdd", member => {
let welcomer = member.guild.channels.find("name","dalida");
      if(!welcomer) return;
      if(welcomer) {
     welcomer.send(`**Welcome To __Dalida__ Server ..**`);          
      }
});


client.login(process.env.client);
user.login(process.env.user);
mem.login(process.env.mem);
