import fetch from 'node-fetch'
import gasm from 'nekos.life'
let neko = new gasm()
let handler = async (m, { conn, args }) => {
    let gasm = await neko.nsfw.gasm()
          conn.sendFile(m.chat, gasm.url, 'gasm.jpg', 'Nih Kak', m, false)
}
handler.help = ['gasm']
handler.tags = ['nsfw']
handler.command = /^gasm$/i
handler.premium = true
//handler.premium = false
handler.group = false
handler.private = true
handler.register = true
//handler.limit = 100
export default handler
