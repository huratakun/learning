import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let { MessageType } = (await import('@adiwajshing/baileys')).default
let handler = async(m, { conn }) => {
  let res = await fetch(global.API('https://some-random-api.ml', '/img/pikachu'))
  let json = await res.json()
  let stiker = await stiker(null, json.link, global.packname, global.author)
  if (stiker) return conn.sendMessage(m.chat, stiker, MessageType.sticker, {
    quoted: m
  })
  throw stiker.toString()
}
handler.help = ['pikachu']
handler.tags = ['anime']
handler.command = /^pikachu$/i
handler.limit = true
handler.register = true
export default handler
