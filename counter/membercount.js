module.exports = async (client) =>{
    const guild = client.guilds.cache.get('843893728862011463');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('852172500853981255');
        channel.setName(`us: ${memberCount.toLocaleString()}`);
        console.log('Updating Member Count');
    }, 5000);
}
