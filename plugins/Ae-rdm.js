import { sticker } from '../lib/sticker.js'
import fetch from 'node-fetch'
let handler = async (m, { conn, command}) => {
    await m.reply(global.wait)
try {
let res = await fetch('https://api.waifu.pics/sfw/'+command)
let json = await res.json()
let { url } = json
let stiker = await sticker(null, url, command.charAt(0).toUpperCase() + command.slice(1), global.wm)
conn.sendFile(m.chat, stiker, null, { asSticker: true })
} catch (e) { }}
handler.tags = ['anime']
handler.help = ['bite', 'yeet', 'blush', 'cringe', 'bully', 'shinobu', 'glomp', 'happy', 'highfive', 'dance', 'bonk', 'kill', 'kiss', 'handhold', 'nom', 'smile', 'wave', 'cry']
handler.command = /^(bite|yeet|bully|blush|cringe|shinobu|glomp|happy|highfive|dance|kill|kiss|bonk|nom|handhold|poke|smile|wave|cry)$/i
handler.limit = true
handler.register = true
export default handler
