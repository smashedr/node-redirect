import express from 'express'

import redirects from './redirects.js'
console.log('Loaded redirects:', redirects)

console.log('process.env.REDIRECTS:', process.env.REDIRECTS)
if (process.env.REDIRECTS) {
    const fromEnv = process.env.REDIRECTS.toString().trim().split(/\r?\n/)
    console.log('fromEnv:', fromEnv)
    for (const line of fromEnv) {
        console.log('line:', line)
        const split = line.trim().split(/\s+/)
        if (split.length === 2 && split[0] && split[1]) redirects[split[0]] = split[1]
    }
}
console.log('Final redirects:', redirects)

const app = express()
const port = process.env.PORT || 3000

app.use(express.static('src/public'))

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
})

app.get('/app-health-check', (req, res) => {
    res.sendStatus(200)
})

app.get('/uptime', (req, res) => {
    const seconds = Math.floor(process.uptime())
    res.send(`Version: ${process.env.APP_VERSION} - Uptime: ${seconds} seconds`)
})

app.get('/{:key}', (req, res) => {
    console.log(req.originalUrl)
    const redirect = redirects[req.params.key ?? 'index']
    console.log(`key: ${req.params.key} - redirect: ${redirect}`)
    if (redirect) {
        res.redirect(301, redirect)
    } else {
        res.sendStatus(404)
    }
})
