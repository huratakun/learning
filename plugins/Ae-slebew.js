import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn}) => {
await m.reply(global.wait)
  try {
  let res = await fetch('https://api.waifu.pics/sfw/kick')
  let json = await res.json()
  let { 
url
} = json
let stiker = await sticker(null, url, 'Kick', 'Violet')
  conn.sendMessage(m.chat, stiker, null, { asSticker: true }), {
    quoted: m
  })
 } catch (e) {
  }
}
handler.help = ['slebew']
handler.tags = ['anime']
handler.command = /^slebew/i
handler.limit = true
handler.register = true
export default handler
