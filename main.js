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
    const guild = client.guilds.cache.get('735483140046323752');
    const newEmbed = new Discord.MessageEmbed()
        .setColor('#F3CD98')
        .setTitle('Welcome to 👑Macam Paham👑')
        .setDescription('Thank you for joining us! Good luck and have fun!')
        .setThumbnail('https://scontent.fsin9-1.fna.fbcdn.net/v/t1.0-9/132798110_101959391833061_3898216952922430083_n.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_ohc=eb8KfxrJ_wsAX-Hws_l&_nc_oc=AQmcmiJmmEK8UOBd3h6rZA-Ze77Er5rDtHjslq5160-e9E1ShVgTN4jVYg2H0lK8hqw&_nc_ht=scontent.fsin9-1.fna&oh=86dbc7d388a41a0ae65f471e48f50031&oe=6008F5D1')
        .addFields(
            {name: 'Introduction', value: "For those who didn't know, the word 'Macam Paham' is a Malay phrase and a common Singaporean Slang which directly translates to 'like you know it all'.\n"},
            {name: 'Channels', value: "💬chat - General chat, talk about anything\n🏆gg-wins - Brag your victory, clips and highlights\n📰news - Latest updates and patch notes on games\n"},
            {name: '\u200B', value: '\u200B' },
            {name: 'Server Rules', value: 'type `!rules` to see the server rules'},
            {name: 'Roles and Rewards', value: 'type `!roles` to see the server roles and rewards'},
            {name: 'Poll', value: 'type `!poll` to initiate a simple yes and no poll'},
            {name: 'Music', value: 'type `$help` in the "music" Channel to see list of commands'},
            {name: '\u200B', value: '\u200B' },
            {name: 'Moderator', value: '@Fariz-#3355', inline: true},
            {name: 'Facebook', value: '[click here](https://www.facebook.com/Macam-Paham-101813258514341/?notif_id=1608820549422324&notif_t=page_invite_accept&ref=notif)', inline: true},
        )
        .setImage('https://scontent.fsin9-2.fna.fbcdn.net/v/t1.0-9/131988854_101813455180988_1377945845189929269_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=KErlbSq_yNwAX8m5yrk&_nc_ht=scontent.fsin9-2.fna&oh=346919d254584ac1105e2f76d98b2882&oe=600B2B55')
        .setTimestamp()
        .setFooter('Contact MacamPaham Owners or Moderators if there is any issue.')
    guildMember.send(newEmbed)
    
});

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
