import fetch from 'node-fetch'
import { sticker } from '../lib/sticker'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler = async (m, { conn}) => {
await m.reply(global.wait)
  try {
  let res = await fetch('https://api.waifu.pics/sfw/awoo')
  let json = await res.json()
  let { 
url
} = json
let stiker = await sticker(null, url, 'Awoooo', 'Violet')
  conn.sendMessage(m.chat, stiker, null, { asSticker: true }){
    quoted: m
  })
 } catch (e) {
  }
}
handler.help = ['awoo']
handler.tags = ['anime']
handler.command = /^awoo/i
handler.limit = true
handler.register = true
export default handler
