module.exports = {
    name: 'command',
    description: 'Embeds!',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F3CD98')
        .setTitle('Welcome to Macam Paham')
        .addFields(
            {name: 'Server Rules', value: '1. Respect the admins, moderator and everyone else.\n2. No offensive messages or nicknames - Anything that a reasonable person might find offensive.\n3. No spam - This includes but is not limited to loud/obnoxious noises in voice, @mention spam, character spam, image spam, and message spam.\n3. No spam - This includes but is not limited to loud/obnoxious noises in voice, @mention spam, character spam, image spam, and message spam.\n4. No harassment - Including sexual harassment or encouraging of harassment.\n5. Use the appropriate channels.\n6. Strictly no hacking/modding allowed in the server'}
        )
        .setImage('https://scontent.fsin9-2.fna.fbcdn.net/v/t1.0-9/131988854_101813455180988_1377945845189929269_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=KErlbSq_yNwAX8m5yrk&_nc_ht=scontent.fsin9-2.fna&oh=346919d254584ac1105e2f76d98b2882&oe=600B2B55')
        .setFooter('Contact MacamPaham Admins or Moderator if there is any issue')
        message.channel.send(newEmbed)
    }
}