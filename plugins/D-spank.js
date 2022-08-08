import fetch from 'node-fetch'
import spank from 'nekos.life'
let neko = new spank()
let handler = async (m, { conn, args }) => {
    kk = await neko.nsfw.spank()
          conn.sendFile(m.chat, kk.url, 'spank.jpg', 'Nih Kak', m, false)
}
handler.help = ['spank']
handler.tags = ['nsfw']
handler.command = /^spank$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
