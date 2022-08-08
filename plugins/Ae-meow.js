import fetch from 'node-fetch'
import meow from 'nekos.life'
let neko = new meow()
let handler = async (m, { conn, args }) => {
    let meow = await neko.sfw.meow()
          conn.sendFile(m.chat, meow.url, 'meow.jpg', 'Nih Kak', m, false)
}
handler.help = ['meow']
handler.tags = ['anime']
handler.command = /^meow$/i
handler.limit = true
handler.register = true
export default handler