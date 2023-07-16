const mineflayer = require('mineflayer')
const express =  require('express')
const app = express()
const port = 3000

app.get('/addbot', (req, res) => {
    try {
        const { ip, username, password, port, version, auth } = req.headers;
        const commonOptions = { host: ip, username, password, version };

        let botOptions;
        switch (auth) {
            case 'premium':
                if (req.header('auth') === 'ms') {
                    botOptions = { ...commonOptions, port, auth: 'microsoft' };
                } else if (req.header('auth') === 'mojang') {
                    botOptions = { ...commonOptions, port, auth: 'mojang' };
                }
                break;
            case 'cracked':
                botOptions = { ...commonOptions };
                break;
        }

        if (botOptions) {
            const bot = mineflayer.createBot(botOptions);
            bot.on('kicked', console.log);
            bot.on('error', console.log);
            res.send(`Logged in on ${ip} with username ${username}`);
        } else {
            throw new Error('Invalid authentication method');
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal server error');
    }
});

app.listen(port || 3000, () => {
    console.log(`🔥 Server online at 127.0.0.1:${port}`)
})
