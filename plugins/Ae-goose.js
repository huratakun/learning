import fetch from 'node-fetch'
import goose from 'nekos.life'
let neko = new goose()
let handler = async (m, { conn, args }) => {
    let goose = await neko.sfw.goose()
          conn.sendFile(m.chat, goose.url, 'goose.jpg', 'Nih Kak', m, false)
}
handler.help = ['goose']
handler.tags = ['anime']
handler.command = /^goose$/i
handler.limit = true
handler.register = true
export default handler