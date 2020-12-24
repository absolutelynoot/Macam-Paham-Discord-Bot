module.exports = {
    name: 'help',
    description: 'Embeds!',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F3CD98')
        .setTitle('Welcome to Macam Paham!')
        .setThumbnail('https://scontent.fsin9-1.fna.fbcdn.net/v/t1.0-9/132798110_101959391833061_3898216952922430083_n.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_ohc=eb8KfxrJ_wsAX-Hws_l&_nc_oc=AQmcmiJmmEK8UOBd3h6rZA-Ze77Er5rDtHjslq5160-e9E1ShVgTN4jVYg2H0lK8hqw&_nc_ht=scontent.fsin9-1.fna&oh=86dbc7d388a41a0ae65f471e48f50031&oe=6008F5D1')
        .addFields(
            {name: 'Server Rules', value: '1. Respect the admins, moderator and everyone else.\n2. No offensive messages or nicknames - Anything that a reasonable person might find offensive.\n3. No spam - This includes but is not limited to loud/obnoxious noises in voice, @mention spam, character spam, image spam, and message spam.\n3. No spam - This includes but is not limited to loud/obnoxious noises in voice, @mention spam, character spam, image spam, and message spam.\n4. No harassment - Including sexual harassment or encouraging of harassment.\n5. Use the appropriate channels.\n6. Strictly no hacking/modding allowed in the server'},
            {name: '\u200B', value: '\u200B' },
            {name: 'Owners', value: `<@&740811019332354058>`, inline: true},
            {name: 'Moderators', value: `<@&791617466098384917>`, inline: true},
        )
        .setImage('https://scontent.fsin9-2.fna.fbcdn.net/v/t1.0-9/131988854_101813455180988_1377945845189929269_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=KErlbSq_yNwAX8m5yrk&_nc_ht=scontent.fsin9-2.fna&oh=346919d254584ac1105e2f76d98b2882&oe=600B2B55')
        .setTimestamp()
        .setFooter('Do feel free to Contact MacamPaham Owners or Moderators if there is any issue.')
        message.channel.send(newEmbed)
    }
}