module.exports = async (client) => {
    const guild = client.guilds.cache.get('735483140046323752');
    setInterval(() => {
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('791700183574380586')
        channel.setName(`👥Total Members - ${memberCount.toLocaleString()}`)
        console.log('Updating Member Count');
    }, 300000);
}