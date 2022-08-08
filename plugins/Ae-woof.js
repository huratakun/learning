import fetch from 'node-fetch'
import woof from 'nekos.life'
let neko = new woof()
let handler = async (m, { conn, args }) => {
    let woof = await neko.sfw.woof()
          conn.sendFile(m.chat, woof.url, 'woof.jpg', 'Nih Kak', m, false)
}
handler.help = ['woof']
handler.tags = ['anime']
handler.command = /^woof$/i
handler.limit = true
handler.register = true
export default handler