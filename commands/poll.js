module.exports = {
    name: 'poll',
    description: 'simple poll',
    execute(message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#F3CD98')
        .setTitle('Initiate Poll')
        .setDescription("!poll to initiate a simple yes or no poll")
        if(!args[1]){
            message.channel.send(newEmbed)
        } else {
            let msgArgs = args.join(" ");
            message.channel.send("📋" + "**" + msgArgs + "**").then(messageReaction => {
                messageReaction.react("👍");
                messageReaction.react("👎");
            });
        }


        
        
    }
}