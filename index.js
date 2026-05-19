const mineflayer = require('mineflayer');
const http = require('http');

// 1. Create a simple web server so Render has a port to monitor
http.createServer((req, res) => {
  res.write("Bot is running!");
  res.end();
}).listen(8080);

// 2. Initialize the Minecraft Bot
const bot = mineflayer.createBot({
  host: 'seller-answers.gl.joinmc.link', // e.g. 'my-server.aternos.me'
  port: 25565,             // Default port
  username: 'RenderBot',   // Bot's name
  version: '1.20.1'        // Match your server version
});

bot.on('login', () => console.log('Bot joined the server!'));
bot.on('kicked', (reason) => console.log('Kicked:', reason));
bot.on('error', (err) => console.error(err));

// Auto-reconnect logic
bot.on('end', () => {
  console.log('Disconnected. Reconnecting...');
  setTimeout(() => process.exit(1), 5000); // Let Render restart the process
});
