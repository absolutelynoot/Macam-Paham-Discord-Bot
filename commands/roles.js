module.exports = {
    name: 'roles',
    description: 'Embeds!',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F3CD98')
        .setTitle('Macam Paham Helper Bot')
        .setThumbnail('https://scontent.fsin9-1.fna.fbcdn.net/v/t1.0-9/132798110_101959391833061_3898216952922430083_n.jpg?_nc_cat=111&ccb=2&_nc_sid=730e14&_nc_ohc=eb8KfxrJ_wsAX-Hws_l&_nc_oc=AQmcmiJmmEK8UOBd3h6rZA-Ze77Er5rDtHjslq5160-e9E1ShVgTN4jVYg2H0lK8hqw&_nc_ht=scontent.fsin9-1.fna&oh=86dbc7d388a41a0ae65f471e48f50031&oe=6008F5D1')
        .addFields(
            {name: 'Server Roles and Rewards', value: "To honour the authenticity of this server, your ranking in this server will be based on the level of 'Paham' (understanding) but in a REVERSED ORDER - from Paham (understand) to Tak Paham (don't understand). Active members will be rewarded with special rank by simply chatting or talking while gaming. However, to achieve the rank of '**Tak Paham**', you need to be manually promoted by the admins."},
            {name: 'Paham (Tier 1) - Default Rank', value: '- Access to server text and voice chats' },
            {name: 'Kurang Paham (Tier 2) - Active Players', value: '- All the benefits of Paham +\n- Unlock access to #👑private-paham  chat room\n- Unlock access to private voice chat rooms\n- Unlock access to **Music Bot ** controlled through ** music **channel `type "$help" for help)`' },
            {name: "Tak Paham (Tier 3) - Frequent players", value: '- All the benefits from Kurang Paham+\n- Unlock the ability to mute and deafen other members\n- Unlock the ability to move other members'},
            {name: '\u200B', value: '\u200B' },
            {name: 'Moderator', value: `@Fariz-#3355`, inline: true},
            {name: 'Facebook', value: '[click here](https://www.facebook.com/Macam-Paham-101813258514341/?notif_id=1608820549422324&notif_t=page_invite_accept&ref=notif)', inline: true},
        )
        .setImage('https://scontent.fsin9-2.fna.fbcdn.net/v/t1.0-9/131988854_101813455180988_1377945845189929269_n.jpg?_nc_cat=100&ccb=2&_nc_sid=09cbfe&_nc_ohc=KErlbSq_yNwAX8m5yrk&_nc_ht=scontent.fsin9-2.fna&oh=346919d254584ac1105e2f76d98b2882&oe=600B2B55')
        .setTimestamp()
        .setFooter('Contact MacamPaham Owners or Moderators if there is any issue.')
        message.author.send(newEmbed)
    }
}