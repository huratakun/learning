import fetch from 'node-fetch'
import poke from 'nekos.life'
let neko = new poke()
let handler = async (m, { conn, args }) => {
    let poke = await neko.sfw.poke()
          conn.sendFile(m.chat, poke.url, 'poke.jpg', 'Nih Kak', m)
}
handler.help = ['poke']
handler.tags = ['anime']
handler.command = /^poke$/i
handler.limit = 1
handler.register = true
export default handler
