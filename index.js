const mineflayer = require('mineflayer')
const express =  require('express')
const app = express()
const port = 3000

app.get('/addbot', (req, res) => {
    if (req.header('type') == 'premium') {
        if (req.header('auth') == 'ms') {
            const bot = mineflayer.createBot({
                host: req.header('ip'), 
                username: req.header('username'), 
                password: req.header('password'), 
                port: req.header('port'),             
                version: req.header('version'),           
                auth: 'microsoft'             
            })
        } else if (req.header('auth') == 'mojang') {
            const bot = mineflayer.createBot({
                host: req.header('ip'), 
                username: req.header('username'), 
                password: req.header('password'), 
                port: req.header('port'),             
                version: req.header('version'),            
                auth: 'mojang'             
            })
        }
    }   else if (req.header('type') == 'cracked') {
        const bot = mineflayer.createBot({
            host: req.header('ip'), 
            username: req.header('username'), 
            password: req.header('password'),           
            version: req.header('version')

        
        })
        bot.on('kicked', console.log)
bot.on('error', console.log)
        res.send(`Logged in on ${req.headers.ip} with username ${req.header('username')}`)
    }
})



app.listen(port || 3000, () => {
    console.log(`🔥 Server online at 127.0.0.1:${port}`)
})