const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '!';
const fs = require('fs');
const memberCounter = require('./counters/memberCounter.js');

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for(const file of commandFiles){
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('ready', () => {
    console.log('Macam Paham Bot is online!');
    client.user.setActivity('for !help', {type: 'WATCHING'}).catch(console.error);
    memberCounter(client);
})

client.on('guildMemberAdd', guildMember =>{
    const ruleChannel = guildMember.guild.channels.cache.get("746664625373839371");
    let welcomeRole = guildMember.guild.roles.cache.get("749581395088900156");
    guildMember.roles.add(welcomeRole);
    guildMember.guild.channels.cache.get('748116650997579898').send(`Yo <@${guildMember.user.id}>, welcome to **Macam Paham!** Please read ${ruleChannel} GLHF`);
    client.commands.get('joinMessage').execute(message, Discord);
})

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if (command === 'help'){
        client.commands.get('help').execute(message, args, Discord);
    } else if (command == 'rules'){
        client.commands.get('rules').execute(message, args, Discord);
    } else if (command == 'roles'){
        client.commands.get('roles').execute(message, args, Discord);
    } else if (command == 'poll') {
        client.commands.get('poll').execute(message, args, Discord);
    }

});

client.login(process.env.token);





